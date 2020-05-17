import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';


const App = () => {
  return (


    <div className="app">

      <Row>
        <Col xs={4} sm={3} md={2} className="pr-0 colSidebar">
          <Sidebar />
        </Col>
        <Col xs={8} sm={9} md={10} className="pl-0">
          <Main />
        </Col>
      </Row>

    </div>

  );
}

export default App;
