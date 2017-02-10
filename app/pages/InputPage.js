import React from 'react'
import axios from 'axios';

import { connect } from "react-redux"

import { changeInputName, changeInputTitle, changeInputContent, changeInputImage, changeInputCity, changeInputPrice, submitName, submitTitle, submitContent, submitImage, submitCity, submitPrice } from '../actions/userActions'

import { Row, Col } from 'react-grid-system'

import { Link, withRouter } from 'react-router'


import { Card, CardTitle, CardText, CardActions, CardHeader } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import AppBar from 'material-ui/AppBar';

var FileInput = require('react-file-input');



@withRouter
@connect((store) => {
  return {
    //user: store.user.user,
    //inputName: store.user.inputName,
    newtitle: store.user.newtitle,
    inputTitle: store.user.inputTitle,
    newContent: store.user.newContent,
    inputContent: store.user.inputContent,
    newImage: store.user.image,
    inputImage: store.user.inputImage,
    newCity: store.user.city,
    inputCity: store.user.inputCity,
    newPrice: store.user.price,
    inputPrice: store.user.inputPrice
  };
})
export default class InputPage extends React.Component {


  constructor(props) {
    super(props)

    this.handleTitleChange = this.handleTitleChange.bind(this)
 //   this.handleNameChange = this.handleNameChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)

    this.submitName = this.submitName.bind(this)
 //   this.submitImage = this.submitImage.bind(this)

    console.log(this.props)

    this.state = {
            title:[],
            content:[],
            comments: [],
            image: [],
            city:[],
            price:[],
            posts: []
            // date: []
        }
  }


  componentDidMount(historyDb) {
    axios.get('/dataGet/dataGets').then((res) => {
 
        console.log(res.data.posts)
        this.setState({posts: res.data.posts})
        
    });
  }
    
  handleTitleChange(event) {
    this.props.dispatch(changeInputTitle(event.target.value))
  }

  handleContentChange(event) {
    this.props.dispatch(changeInputContent(event.target.value))
  }

  handleImageChange(event) {
    this.props.dispatch(changeInputImage(event.target.value))
  }

  handleCityChange(event) {
    this.props.dispatch(changeInputCity(event.target.value))
  }

  handlePriceChange(event) {
    this.props.dispatch(changeInputPrice(event.target.value))
  }

  // handleNameChange(event) {
  //   this.props.dispatch(changeInputName(event.target.value))
  // }

  submitName(e) {
    this.props.dispatch(submitTitle())
    this.props.dispatch(submitContent())
    this.props.dispatch(submitImage())
    this.props.dispatch(submitCity())
    this.props.dispatch(submitPrice())
   
        e.preventDefault();

        let currentState = {
          title: this.props.inputTitle,
          content: this.props.inputContent,
          image: this.props.inputImage,
          city: this.props.inputCity,
          price: this.props.inputPrice
        }
        axios.post('/dataPost/dataPosts', currentState)
        .then(res => {
           if(res.data.success) {
               
               return console.log("posted succcessfully")
           }
           
        })

        axios.get('/dataGet/dataGets').then((res) => {
 
        console.log(res.data.posts)
        this.setState({posts: res.data.posts})

        this.props.router.push('/Browse')


        
        });
  }


  render() {
    // state.postIndex
    //let posts = posts but only 6 

    const cardcontainerStyle = {
      background: "rgb(250,250,250)"

    }

    const titleStyle = {

      marginTop: "20px",
      marginBottom: "20px"
     
    };

    const titleStyleText = {
      fontSize: "50px",
      textAlign: "center"
    }

    const subtitleStyleText = {

      fontSize: "30px",
      textAlign: "center"
     
    };

    const postStyle = {
      marginTop: "20px",
      marginBottom: "20px"
    }

    const textFieldStyle = {
      fontSize: "20px"
    }

    let styles = {
      exampleImageInput: {
      cursor: 'pointer',
      position: 'absolute',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
      width: '100%',
      opacity: '0'
      }
    }
        

    return (

      <div>

        <div>

          <Row>
            <Col md={6} offset={{ md: 3 }}>
          
                
           

              <Card style= {titleStyle} containerStyle= {cardcontainerStyle}>
                <CardHeader
                  title="Be a Host"
                  titleStyle= {titleStyleText}
                  subtitle="Let's get started by creating a meal"
                  subtitleStyle= {subtitleStyleText}
                  
                />
                <CardText>

                  <SelectField
                    style= {textFieldStyle}
                    floatingLabelText="Meal type"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <MenuItem value={1} primaryText="Deliver" />
                    <MenuItem value={2} primaryText="Pick-Up" />
                    <MenuItem value={3} primaryText="Brunch" />
                    <MenuItem value={4} primaryText="Lunch" />
                    <MenuItem value={5} primaryText="Dinner" />
                  </SelectField>
                  
                  <br />

                  <TextField
                    style= {textFieldStyle}
                    type='text'
                    hintText='Meal Title'
                    onChange={this.handleTitleChange}
                    value={this.props.inputTitle}
                    
                  />

                  <br />
                  
                  <TextField
                    style= {textFieldStyle}
                    type='text'
                    hintText='City'
                    onChange={this.handleCityChange}
                    value={this.props.inputCity}
                  />

                  <br />

                  <TextField
                    style= {textFieldStyle}
                    type='text'
                    hintText='Price'
                    onChange={this.handlePriceChange}
                    value={this.props.inputPrice}
                  />

                  <br />

                  <TextField
                    style= {textFieldStyle}
                    type='text'
                   // fullWidth={true}
                    hintText='Description'
                    // multiLine={true}
                    // rows={5}
                    onChange={this.handleContentChange}
                    value={this.props.inputContent}
                  />

                  <br />

                  <TextField
                    style= {textFieldStyle}
                    type='text'
                    hintText='Image'
                    onChange={this.handleImageChange}
                    value={this.props.inputImage}
                  />


                  <br />

         


                </CardText>

              

                <CardActions>
                
                  <RaisedButton
                    label="Submit"
                    primary={true}                
                    onClick={this.submitName}
                  />

                </CardActions>
              </Card>

              
            </Col>
          </Row>
        </div>

        

      </div>
    );
  }
}
