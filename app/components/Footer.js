import React from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class Footer extends React.Component {



  render() {

    const barStyle = {

      // backgroundColor: "#575c61"
      // backgroundColor: "#a3a81f"
      //backgroundColor: "#405b74"
      backgroundColor: "#3a3838",
      paddingTop: "50px"

    }

    const barTitleStyle = {
      fontSize: "15px",
      color: "rgba(255, 255, 255, 0.541176)",
      textAlign: "center"
     
      
      
    }

    const MenuItemStyle = {
      fontSize: "10px"
    }


    return (
      <div>
        <AppBar
          title="Copyright 2017 Sung | All Rights Reserved  |  Privacy Policy | Terms of Use"
          style={barStyle}
          titleStyle={barTitleStyle}
          showMenuIconButton={false}
        />
     
        
      </div>
    );
  }
}