import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import {Image} from 'cloudinary-react'

function MyVerticallyCenteredModal(props) {

  console.log(props)
  return (
    
      (props.currentProduct) ?  
    
      <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h4>{props.currentProduct.Name}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div style = {{display : 'grid', gridTemplateColumns : "auto auto"}}>
       <Image publicId={props.currentProduct.photoId} cloudName="prakhar-parashar" width="200" height="300"/>
       <div>
       <h5>{props.currentProduct.Brand}</h5>
  <p>{props.currentProduct.Name}</p>
        <p>Rs. {props.currentProduct.Price}</p>
  <p>{props.currentProduct.Category}</p>
  <p>Items Available : { props.currentProduct.Quantity}</p>
  <p>Sold By : { (props.currentProduct.Seller) ?   props.currentProduct.Seller.Name : "Admin"}</p>
       </div>
       </div>
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>  : null 
  );

}


  export default MyVerticallyCenteredModal