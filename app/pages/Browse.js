import React from 'react'
import axios from 'axios';

import { connect } from "react-redux"

import { changeInputName, changeInputTitle, changeInputContent, submitName, submitTitle, submitContent } from '../actions/userActions'

import { Row, Col } from 'react-grid-system'

import { Link } from 'react-router'

import { Card, CardTitle, CardText, CardActions, CardHeader, CardMedia } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import AppBar from 'material-ui/AppBar'

// @connect((store) => {
//   return {
//     user: store.user.user,
//     inputName: store.user.inputName,
//     newtitle: store.user.newtitle,
//     inputTitle: store.user.inputTitle,
//     newContent: store.user.newContent,
//     inputContent: store.user.inputContent
//   };
// })
export default class InputPage extends React.Component {


  constructor() {
    super()

    // this.handleTitleChange = this.handleTitleChange.bind(this)
    // this.handleNameChange = this.handleNameChange.bind(this)
    // this.handleContentChange = this.handleContentChange.bind(this)
    // this.submitName = this.submitName.bind(this)

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
    
  // handleTitleChange(event) {
  //   this.props.dispatch(changeInputTitle(event.target.value))
  // }

  // handleContentChange(event) {
  //   this.props.dispatch(changeInputContent(event.target.value))
  // }

  // handleNameChange(event) {
  //   this.props.dispatch(changeInputName(event.target.value))
  // }

  // submitName(e) {
  //   this.props.dispatch(submitTitle())
  //   this.props.dispatch(submitContent())
  //  // this.props.dispatch(submitName())
  //   e.preventDefault();
  //       let currentState = {
  //         title: this.props.inputTitle,
  //         content: this.props.inputContent,
  //         comment: "not good."
  //       }
  //       axios.post('/dataPost/dataPosts', currentState)
  //       .then(res => {
  //          if(res.data.success) {
  //              //return alert('posted successfully');
  //              return console.log("posted succcessfully")
  //          }
           
  //       })

  //       axios.get('/dataGet/dataGets').then((res) => {
 
  //       console.log(res.data.posts)
  //       this.setState({posts: res.data.posts})
        
  //   });
  // }


  render() {
    // state.postIndex
    //let posts = posts but only 6 

    const titleStyle = {

      marginTop: "20px",
      marginBottom: "20px"
     
    };

    const titleStyleText = {
      fontSize: "50px",
      textAlign: "center"
    }

    const postStyle = {
      marginTop: "20px",
      marginBottom: "20px"
    }
        

    return (

      <div>

        <div>

          <Row>
            <Col md={8} offset={{ md: 2 }}>


              {this.state.posts.map((post) => 
              <Card style={postStyle}>
                <CardTitle
                  title={post.title}
                  subtitle={post.content}
                />
                <CardMedia
                  overlay={<CardTitle title={post.title} subtitle={post.content} />}
                >
                  <img src={post.image} />
                </CardMedia>
                
              </Card>            

              )}


            </Col>
          </Row>
        </div>

      </div>
    );
  }
}
