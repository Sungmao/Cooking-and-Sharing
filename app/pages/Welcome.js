import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-grid-system'


// import axios from 'axios';

// import { connect } from "react-redux"

// import { Row, Col } from 'react-grid-system'

// import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
// import RaisedButton from 'material-ui/RaisedButton'
// import TextField from 'material-ui/TextField'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


 export default class Welcome extends React.Component {


  render() {

    const style = {
          // height: 300,
           // width: 2000,
          //maxWidth: 2000,
          // float: "auto",
          // marginLeft: 1,
          // marginTop: 50,
          //color: 'red'
    };

    const imgStyle = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "60",
        textAlign: "center"


    };

    const overlayTitleStyle = {

      fontSize: "80px",
      textAlign: "center"

    }

    const overlaySubTitleStyle = {

      fontSize: "50px",
      textAlign: "center",
      paddingTop: "50px"

    }

    const buttonTitle = {
      color: "black",
      textAlign: "center",
      fontSize: "44px",
      paddingTop: "50px"
    }

    const buttonP = {
      color: "#818a92",
      textAlign: "center",
      fontSize: "25px"

    }

    return (

      <div>
          <Card>
            <CardMedia
               overlay={<CardTitle titleStyle={overlayTitleStyle} title="Let's eat" subtitleStyle={overlaySubTitleStyle} subtitle="Discover home cooking near your area"/>}
               
               //overlayContainerStyle={imgStyle}
               // overlayContentStyle={imgStyle}
               // overlayStyle= {overlayStyle}
            >
              <img src="./img/eating.jpg"/>
            </CardMedia>
          </Card>

         
          <div>

            <h2 style={buttonTitle}>Your cooking and sharing App</h2>
            <br />
            <p style={buttonP}>Find a home cook making gourmet to simple meals near you.</p>
            <p style={buttonP}>Find a day and time that works for you and pay via Meal Sharing.</p>
            <p style={buttonP}>Join the cook in their home and meet new people.</p>
            <br />
            <br />
            

            <Card>
            <CardMedia>
              <img src="./img/mealSharing.jpg"/>
            </CardMedia>
          </Card>







          

          </div>
          



       


      </div>



      )
    

    // return (
    //   <div>
    //     <Jumbotron>
    //       <img src="./img/eating.jpg" /> 
    //       <h1>Hello, world!</h1>
    //       <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    //       <p><Button bsStyle="primary">Learn more</Button></p>
    //     </Jumbotron>
    //   </div>
    // )
  }
}

