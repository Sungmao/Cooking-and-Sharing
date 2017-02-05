import React from 'react'
import axios from 'axios';

import { connect } from "react-redux"

import { changeInputName, changeInputTitle, changeInputContent, submitName, submitTitle, submitContent } from '../actions/userActions'

import { Row, Col } from 'react-grid-system'

import { Link } from 'react-router'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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

    const styles = {
      customWidth: {
        width: 150,
      },
    };
        

    return (
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
        <Row>
          <Col md={8} offset={{ md: 2 }}>
            <Card>
              <CardText>
                <TextField
                  type='text'
                  hintText='Title'
                  onChange={this.handleTitleChange}
                  value={this.props.inputTitle}
                />

                <br />

                <SelectField
                  floatingLabelText="Frequency"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <MenuItem value={1} primaryText="Never" />
                  <MenuItem value={2} primaryText="Every Night" />
                  <MenuItem value={3} primaryText="Weeknights" />
                  <MenuItem value={4} primaryText="Weekends" />
                  <MenuItem value={5} primaryText="Weekly" />
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
    );
  }
}
