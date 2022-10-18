import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalView(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Partner with Business Leaders
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At varius
          vel pharetra vel turpis nunc eget lorem dolor. Facilisi nullam
          vehicula ipsum a. Id leo in vitae turpis massa sed elementum tempus
          egestas. Id aliquet risus feugiat in ante metus dictum at. Leo a diam
          sollicitudin tempor id eu nisl nunc. Pellentesque nec nam aliquam sem
          et tortor consequat id porta. Mattis aliquam faucibus purus in massa
          tempor nec feugiat nisl. At auctor urna nunc id cursus metus aliquam.
          Facilisis gravida neque convallis a cras semper auctor. Id velit ut
          tortor pretium viverra suspendisse. Sapien pellentesque habitant morbi
          tristique senectus et netus. Erat pellentesque adipiscing commodo elit
          at imperdiet. Sit amet luctus venenatis lectus magna. Turpis tincidunt
          id aliquet risus feugiat in ante metus dictum. Vitae aliquet nec
          ullamcorper sit. Enim sit amet venenatis urna cursus eget nunc
          scelerisque viverra. Duis ultricies lacus sed turpis tincidunt id
          aliquet risus feugiat.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ backgroundColor: "#0bcce4", border: "none" }}
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
