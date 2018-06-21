import React, {Component} from 'react'
import {Button, Form, FormGroup, ButtonGroup, Label, Input, Col} from 'reactstrap'
import axios from 'axios'
import {connect} from 'react-redux'
import Pouzivatelfotka from 'react-icons/lib/fa/user'
import {AvForm, AvField} from 'availity-reactstrap-validation'
import {passwordValidation} from '../Registracia/validations'
import './Nastavenie_profilu_pouzivatel.css'

export default class Prihlasovanie extends React.Component {
  state = {
    selectedFile: null,
  }

  fileChangedHandler = (event) => {
    const file = event.target.files[0]
  }

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData()
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    axios.post('www.google.com', fd, {
      onUploadProgress: (progressEvent) => {
        console.log(
          `Upload progress: ${Math.round((progressEvent.loaded / progressEvent.total) * 100)}%`
        )
      },
    })
  }

  render() {
    return (
      <div className="nastavenie-profilu">
        <div className="nastavenie-fotky">
          <input
            style={{display: 'none'}}
            type="file"
            onChange={this.fileSelectedHandler}
            ref={(fileInput) => (this.fileInput = fileInput)}
          />

          <img src={Pouzivatelfotka} className="pouzivatelfotka" />
          <ButtonGroup>
            <Button color="primary" onClick={() => this.fileInput.click()}>
              PickFile
            </Button>
            <Button color="success" onClick={this.fileUploadHandler}>
              Upload
            </Button>
          </ButtonGroup>
        </div>
        <div className="nastavenie-informacii">
          <Form>
            Osobné údaje <br />
            <FormGroup row>
              <Label for="name" sm={2}>
                Meno:
              </Label>
            </FormGroup>
            <FormGroup row>
              <Label for="surname" sm={2}>
                Priezvisko:
              </Label>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={2}>
                Email:
              </Label>
            </FormGroup>
            <br />Zmena hesla
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Staré heslo:
              </Label>
              <Col sm={3}>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Staré heslo"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Nové heslo:
              </Label>
              <Col sm={3}>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Nové heslo"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Zopakuj heslo:
              </Label>
              <Col sm={3}>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Zopakuj nové heslo"
                />
              </Col>
            </FormGroup>
            <ButtonGroup>
              <Button
                color="success"
                className="nastav"
                onClick={() => {
                  this.props.history.push('hlavna')
                }}
              >
                Uložiť
              </Button>
              <Button
                color="danger"
                onClick={() => {
                  this.props.history.push('hlavna')
                }}
              >
                Zrušiť
              </Button>
            </ButtonGroup>
          </Form>
        </div>
      </div>
    )
  }
}