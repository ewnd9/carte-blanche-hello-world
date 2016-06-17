import '../css/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import { render } from 'react-dom'
import Hello from './components/Hello'
import { Grid, Row, Col } from 'react-bootstrap'

render(
  <Grid>
    <Row className="show-grid">
      <Col xs={2} xsOffset={5}><Hello say="hello" /></Col>
    </Row>
  </Grid>,
  document.getElementById('root')
);
