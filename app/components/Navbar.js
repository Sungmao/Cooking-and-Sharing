import React from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <Link to={'/'}>
            <MenuItem onClick={this.handleToggle}>Welcome</MenuItem>
          </Link>
          <Link to={'/'}>
            <MenuItem onClick={this.handleToggle}>Second Page</MenuItem>
          </Link>
        </Drawer>
        <AppBar
          title="Welcome Students!!!"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
      </div>
    );
  }
}