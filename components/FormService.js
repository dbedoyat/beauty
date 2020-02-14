import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FormService = props => {
  return (
    <Form>
      <div className="row">
        <div className="col-lg-12">
          <h5 className="title">Add new service</h5>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <FormGroup>
            <Label for="serviceName">Service name</Label>
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
            <Label for="serviceDiscount">Discount</Label>
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
            <Label for="serviceType">Type of service</Label>
            <Input type="select" name="serviceType" id="serviceType">
              <option>Type 1</option>
              <option>Type 2</option>
              <option>Type 3</option>
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

export default FormService;