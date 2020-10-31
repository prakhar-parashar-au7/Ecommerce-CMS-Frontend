import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import './styles/productStyles.css'
import { Image } from 'cloudinary-react';
import {useSelector} from 'react-redux'
import ProductModal from './ProductModal'







const Products = (props) =>  {
  
    
         const [offset, setOffset] = React.useState(0)
          const [data, setData]=  React.useState([])
          const [perPage, setPerPage ]= React.useState(9)
          const [currentPage, setCurrentPage] =  React.useState(0)
         const [pageCount, setPageCount] = React.useState(0)
        const [postData, setPostData] = React.useState([])
        const [modalShow, setModalShow] = React.useState(false);
        const [currentProduct, setCurrentProduct] = React.useState({})
        const Products = useSelector ( state => state.products)


   

  const recievedData = () => {
    
       if (Products) {
        console.log("hey")
    const slice = Products.slice(offset, offset + perPage)
    const postData = slice.map(product => <div key = {product._id} onClick={() => {handleProductClicked(product._id)}} style={{ cursor : "pointer"}}>
        <Image publicId={product.photoId} cloudName="prakhar-parashar" width="150" height="150"/>
        <p>{product.Name}</p>



    </div>)

setPageCount(Math.ceil(Products.length / perPage))
setPostData(postData)
}
  } 



  const  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;

  setCurrentPage(selectedPage)
   setOffset(offset)
    recievedData()
   

};


   const handleProductClicked = (product) => {
     setModalShow(true)
     console.log(product)
     console.log(Products)
     const currentProduct = Products.filter(pro => pro._id == product)
     console.log(currentProduct)
     setCurrentProduct(currentProduct[0])
   }

 React.useEffect(() => {
     recievedData()
 }, [Products])
   

    

     
  
      return (
          <div style={{display : "grid"}}>
            


      <ProductModal currentProduct = {currentProduct}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
              {(postData) ? <div  style={{display : "grid", gridTemplateColumns : "auto auto auto"}}> {postData}  </div>: null}
              <br></br>
              <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
                  
          </div>

      )
  }



export default Products