import React, {Component} from 'react'
import {Button, Form, FormGroup, ButtonGroup, Label, Input, Col} from 'reactstrap'
import axios from 'axios'
import Pouzivatelfotka from './Obrazky/Icon-user.png'

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
        <div className="nastavenie-informacii">
          <Form>
            Osobné údaje <br />
            <FormGroup row>
              <Label for="name" sm={2}>
                Meno:
              </Label>
              <Col sm={3}>
                <Input type="name" name="name" id="name" placeholder="Meno" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Priezvisko:
              </Label>
              <Col sm={3}>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Priezvisko"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Email:
              </Label>
              <Col sm={3}>
                <Input type="email" name="email" id="examplePassword" placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleNumber" sm={2}>
                Telefónne číslo:
              </Label>
              <Col sm={3}>
                <Input
                  type="number"
                  name="number"
                  id="exampleNumber"
                  placeholder="Telefónne číslo"
                />
              </Col>
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
            <Button color="success">Uložiť</Button>
            {'  '}
            <Button color="danger"> Zrušiť</Button>
            {'  '}
          </Form>
        </div>
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
      </div>
    )
  }
}
