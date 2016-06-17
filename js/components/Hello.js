import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, { Component, PropTypes } from 'react'
import { Button } from 'react-bootstrap'

class Hello extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      toggle: true
    }
  }

  handleClick() {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    const { say } = this.props
    let show
    if(this.state.toggle){
      show = say
    }else{
      show = "clicked"
    }
    return (
      <Button onClick={this.handleClick.bind(this)}>
        {show}
      </Button>
    )
  }
}

Hello.propTypes = {
  say: PropTypes.string.isRequired
}

export default Hello
