import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FormRoom = props => {
  return (
    <Form>
      <div className="row">
        <div className="col-lg-12">
          <h5 className="title">Add new room</h5>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <FormGroup>
            <Label for="serviceName">Room name</Label>
            <Input
              type="text"
              name="serviceName"
              id="serviceName"
              placeholder="New service name"
            />
          </FormGroup>
        </div>
        <div className="col-lg-4">
          <FormGroup>
            <Label for="examplePassword">Price</Label>
            <Input
              type="number"
              name="servicePrice"
              id="servicePrice"
              placeholder="Add price"
            />
          </FormGroup>
        </div>
        <div className="col-lg-4">
          <FormGroup>
            <Label for="serviceDiscount">Quantity</Label>
            <Input
              type="number"
              name="serviceDiscount"
              id="serviceDiscount"
              placeholder="Percentaje discount"
            />
          </FormGroup>
        </div>

        <div className="col-lg-6">
          <FormGroup>
            <Label for="serviceType">Type of room</Label>
            <Input type="select" name="serviceType" id="serviceType">
              <option>Single</option>
              <option>Double</option>
              <option>Triple</option>
              <option>Quad</option>
              <option>Queen</option>
              <option>King</option>
            </Input>
          </FormGroup>
        </div>
        <div className="col-lg-6">
          <FormGroup>
            <Label for="serviceType">Number of beds</Label>
            <Input type="select" name="serviceType" id="serviceType">
              <option>1 bed</option>
              <option>2 beds</option>
              <option>3 beds</option>
            </Input>
          </FormGroup>
        </div>
        <div className="col-lg-6">
          <FormGroup>
            <Label for="serviceFile">Add image</Label>
            <Input type="file" name="file" id="serviceFile" />
            <FormText color="muted">
              * One image are allowed per service
            </FormText>
          </FormGroup>
        </div>
        <div className="col-12 text-center">
          <hr />
          <Button color="primary">Submit</Button>
        </div>
      </div>
    </Form>
  );
};

export default FormRoom;