import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import '../layout/custom.css';

import React from 'react';
import Menu from "../layout/menu";
import Routes from "../main/routes"

export default props => (
  <div className='container'>
      <Menu/>
      <Routes/>
  </div>
);