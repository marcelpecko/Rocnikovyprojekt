import React, {Component} from 'react'
import {Button, Form, FormGroup, ButtonGroup, Label, Input, Col} from 'reactstrap'
import axios from 'axios'
import Pouzivatelfotka from 'react-icons/lib/fa/user'
import './Nastavenie_profilu_stravnik.css'

export default class ProfilStravnik extends React.Component {
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
                <Input type="name" name="surname" id="surname" placeholder="Priezvisko" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="text" sm={2}>
                Trieda:
              </Label>
              <Col sm={3}>
                <Input type="text" name="trieda" id="trieda" placeholder="Trieda" />
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
