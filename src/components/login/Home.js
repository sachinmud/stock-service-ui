import React from 'react';
import {Nav} from './Nav';
import { USER_NAME_SESSION_ATTRIBUTE_NAME } from "../../actions/types";
import Header from '../common/Header';


class Home extends React.Component {

  constructor() {
    super();
  }

  render() {

    return(
      <div>
        <div className="starter-template">
          <Header />
          <h1>Welcome to Stock Application</h1>
        </div>
      </div>
    );
  }

}

export default Home;