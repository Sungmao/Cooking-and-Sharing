import React from 'react'
import { connect } from "react-redux"

import { changeInputName, changeInputTitle, submitName, submitTitle } from '../actions/userActions'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

@connect((store) => {
  return {
    user: store.user.user,
    inputName: store.user.inputName,
    newtitle: store.user.newtitle,
    inputTitle: store.user.inputTitle
  };
})
export default class Welcome extends React.Component {


  constructor() {
    super()
   // this.handleChange = this.handleChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.submitName = this.submitName.bind(this)
   // this.submitTitle = this.submitTitle.bind(this)

  }

  
  handleTitleChange(event) {
    this.props.dispatch(changeInputTitle(event.target.value))
  }

  handleNameChange(event) {
    this.props.dispatch(changeInputName(event.target.value))
  }

  submitName() {
    this.props.dispatch(submitTitle())
    this.props.dispatch(submitName())
  }

  // submitTitle() {
  //   this.props.dispatch(submitTitle())
  // //  this.props.dispatch(submitName())
  // }




  render() {
    return (
      <div>
        <Row>
          <Col md={8} offset={{ md: 2 }}>
            <Card>
              <CardTitle
                title={`${this.props.user}`}
                subtitle={`The Count is ${this.props.newtitle}`}
              />
              
            </Card>
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
                <TextField
                  type='text'
                  fullWidth={true}
                  hintText='Contents'
                  multiLine={true}
                  rows={5}
                  onChange={this.handleNameChange}
                  value={this.props.inputName}
                />
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
    );
  }
}
