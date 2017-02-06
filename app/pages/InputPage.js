import React from 'react'
import axios from 'axios';

import { connect } from "react-redux"

import { changeInputName, changeInputTitle, changeInputContent, submitName, submitTitle, submitContent } from '../actions/userActions'

import { Row, Col } from 'react-grid-system'

import { Link } from 'react-router'

import { Card, CardTitle, CardText, CardActions, CardHeader } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import AppBar from 'material-ui/AppBar'

@connect((store) => {
  return {
    user: store.user.user,
    inputName: store.user.inputName,
    newtitle: store.user.newtitle,
    inputTitle: store.user.inputTitle,
    newContent: store.user.newContent,
    inputContent: store.user.inputContent
  };
})
export default class InputPage extends React.Component {


  constructor() {
    super()

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.submitName = this.submitName.bind(this)

    this.state = {
            title:[],
            content:[],
            comments: [],
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

  handleNameChange(event) {
    this.props.dispatch(changeInputName(event.target.value))
  }

  submitName(e) {
    this.props.dispatch(submitTitle())
    this.props.dispatch(submitContent())
   // this.props.dispatch(submitName())
    e.preventDefault();
        let currentState = {
          title: this.props.inputTitle,
          content: this.props.inputContent,
          comment: "not good."
        }
        axios.post('/dataPost/dataPosts', currentState)
        .then(res => {
           if(res.data.success) {
               //return alert('posted successfully');
               return console.log("posted succcessfully")
           }
           
        })

        axios.get('/dataGet/dataGets').then((res) => {
 
        console.log(res.data.posts)
        this.setState({posts: res.data.posts})
        
    });
  }


  render() {

    const titleStyle = {

      marginTop: "20px",
      marginBottom: "20px"
     
    };

    const titleStyleText = {
      fontSize: "50px",
      textAlign: "center"
    }
        

    return (

      <div>

        <div>

          <Row>
            <Col md={8} offset={{ md: 2 }}>
          
                
           

              <Card style= {titleStyle}>
                <CardHeader
                  title="Be a Host"
                  titleStyle= {titleStyleText}
                  subtitle="Let's get started by creating a meal"
                  
                />
                <CardText>
                  <TextField
                    type='text'
                    hintText='Title'
                    onChange={this.handleTitleChange}
                    value={this.props.inputTitle}
                    
                  />

                  <br />

                  <SelectField
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
                    type='text'
                  
                    hintText='City'
                    // onChange={this.handleTitleChange}
                    // value={this.props.inputTitle}
                  />

                   <br />



                  <TextField
                    type='text'
                   // fullWidth={true}
                    hintText='Description'
                    // multiLine={true}
                    // rows={5}
                    onChange={this.handleContentChange}
                    value={this.props.inputContent}
                  />
                </CardText>
                <CardActions>
                
                <Link to={'Display'}>
                  <RaisedButton
                    // href="Display"
                    label="Submit"
                    primary={true}
                    
                   onClick={this.submitName}


                  />

                </Link>

                

                  <Link to={'Display'}>
                    <p>Display Page</p>
                  </Link>
                </CardActions>
              </Card>
            </Col>
          </Row>
        </div>

        <div>

          <Row>
            <Col md={8} offset={{ md: 2 }}>


              {this.state.posts.map((post) => 
              <Card>
                <CardTitle
                  title={post.title}
                  subtitle={`This is content ${post.content}`}

                />
                
              </Card>            

              )}


            </Col>
          </Row>
        </div>

      </div>
    );
  }
}
