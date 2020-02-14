import React, { Component } from 'react'
import Layout from '../components/Layout';
import { servicesApp } from "../api/services";
import ReactModal from "react-modal"
import FormService from "../components/FormService";
import { FiX, FiPlus, FiMinusCircle } from "react-icons/fi";
import { Button } from "reactstrap";

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }



  render() {
    return (
      <Layout>
        <div className="container-fluid app">
          <section className="newService mb-5">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h2 className="title">Services</h2>
              </div>
              <div className="col-lg-6 col-md-6 text-right">
                <Button outline color="primary" onClick={this.handleOpenModal}>
                  <FiPlus /> New Service
                </Button>
              </div>
            </div>

            <ReactModal
              className="modalApp"
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
              ariaHideApp={false}
            >
              <button className="close" onClick={this.handleCloseModal}>
                <FiX />
              </button>

              <FormService />
            </ReactModal>

            <hr />
          </section>
          <section className="listServices">
            <div className="row">
              {servicesApp.map((item, index) => (
                <div className=" col-md-4 col-lg-3 col-xl-2" key={index}>
                  <div className="card">
                    <div className="item-img">
                      <img src={`${item.url}`} alt={`${item.titlel}`} />
                      <h5 className="item-title">{`${item.title}`} </h5>
                    </div>
                    <button className="remove" title="Remove">
                      <FiMinusCircle />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Profile;

