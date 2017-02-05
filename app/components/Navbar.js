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

    const barStyle = {

      // backgroundColor: "#575c61"
      backgroundColor: "#a3a81f"

    }

    const barTitleStyle = {
      fontSize: "35px",
      color: "rgba(255, 255, 255, 0.541176)"
    }

    const MenuItemStyle = {
      fontSize: "20px"
    }


    return (
      <div>
        <Drawer open={this.state.open} width={180}>
          <Link to={'/'}>
            <MenuItem style={MenuItemStyle} onClick={this.handleToggle}>Welcome</MenuItem>
          </Link>
          <Link to={'inputPage'}>
            <MenuItem style={MenuItemStyle} onClick={this.handleToggle}>Create a Meal</MenuItem>
          </Link>
          <Link to={'Display'}>
            <MenuItem style={MenuItemStyle} onClick={this.handleToggle}>Browse Meals</MenuItem>
          </Link>
        </Drawer>
        <AppBar
          title="Manus"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
          style={barStyle}
          titleStyle={barTitleStyle}
        />
      </div>
    );
  }
}