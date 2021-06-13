import React from 'react';
import Header from '../common/Header';
import * as actions from '../../actions';

function PermissionSearch() {

    const [inputs, setInputs] = React.useState({authority : ""});
    const [permissions, setPermissions] = React.useState([]);
    const [errors, setErrors] = React.useState([]);

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setInputs({
            ...inputs,
            [name]: value
          })
      }

      const getPermissions = event => {
          /*
          actions.getPermissions(authorityValue).then(
                permissionsList => setPermissions(permissionsList),
                errorsList => setErrors(errorsList)
          );
          */
         const permissionsList = actions.getPermissions(inputs.authority);
         setPermissions(permissionsList);
         event.preventDefault();
      }

    return (
    <div>
        <div className="container">
            <Header />
        </div>
        <div className="starter-template">
            <h1>Search</h1>
        </div>
        <form id="searchForm" className="form-inline" onSubmit={getPermissions}>
            <div className="form-group row mx-auto">
                    <span class="input-group-text" for="authority">Authority</span>
                    <input type="text" id="authority" name="authority" value={inputs.authority} class="form-control" onChange={handleInputChange}/>
                    <button type="submit" className="btn btn-success">Search</button>
            </div>
        </form>
        <div>
            <table class="table table-striped table-hover">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Authority</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        permissions.map(permission => (
                            <tr>
                                <th scope="row">{permission.id}</th>
                                <td>{permission.authority}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default PermissionSearch;