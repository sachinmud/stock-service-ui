
const permissions = [{id: "1", authority: "read"}, {id: "2", authority: "write"},{id: "3", authority: "delete"}];

export const getPermissions = (authority) => {
/*    
    return axios.post('/api/v1/users/register', userData).then(
      res => res.data,
      err => Promise.reject(err.response.data.errors)
    )
*/
        return permissions;
  }