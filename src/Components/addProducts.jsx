import  React, {useState} from 'react';
import './styles/signUpForm.css'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import PhotoUploader from './photoUploader'
import {Image} from 'cloudinary-react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



const AddProducts = (props)=> {

    
           const [photoId, setPhotoId]  = useState("")
            const [Name, setName]  = useState("")
            const [Price , setPrice]  = useState("")
           const [ Quantity, setQuantity]  = useState("")
           const [User , setUser]  = useState("")
           const [Brand , setBrand] = useState("")
           const [Category,  setCategory ] = useState("")

           const currentUser = useSelector(state => state.currentUser)
           const history = useHistory()
        
    

  const savePhotoInfo = (assetId) => {
       setPhotoId (assetId)
   } 

   const  handleNameChange = (event) => {
         setName(event.target.value)
     }

     const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

   const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }
     
   const handleBrandChange = (event) => {
        setBrand(event.target.value)
    }
  
   const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }
  

  const handleClick = () => {
     
        axios({
            method : 'post',
            url : '/addProduct',
            data : {
                photoId : photoId,
                Name : Name,
                Price : Price,
                Quantity : Quantity,
                Seller : currentUser,
                Brand : Brand,
                Category : Category
            }
          }).then((response) => {
                if(currentUser.Type == "Admin"){
                    history.push("/AdminPage")
                }
                else {
                    history.push("/VendorPage")
                }
           
          })
        }
    
    
    





        return (
            <div id="form">
                <div style={{margin : "10px"}}>
                <br></br>
                {
                (props.heading) ? 
                <h3 style={{marginLeft : "200px"}}>{props.heading}</h3> : <h3 style={{marginLeft : "200px"}}>Add a product</h3>
                }
                
        
                <TextField label="Name" variant="outlined" onChange={handleNameChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextField id="Email" label="Price" variant="outlined" onChange={handlePriceChange} />
                <hr></hr>
                <br></br><br></br>
                <TextField id="Password" label="Quantity" variant="outlined" onChange={handleQuantityChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextField id="Password" label="Brand" variant="outlined" onChange={handleBrandChange} />
                
                <hr></hr>
                <br></br><br></br>
                <div style= {{display : "grid", gridTemplateColumns : "auto auto"}}>

                {(photoId == "")
                 ? 
                 <PhotoUploader photoInfo = {savePhotoInfo}/>
                 :

                 <Image publicId={photoId} cloudName="prakhar-parashar" width="150" height="150"/> } 
                
                <TextField id="Password" label="Category" variant="outlined" onChange={handleCategoryChange} />
                
                </div>
                <div style ={{marginLeft : "200px"}}>
                < Button color="primary" variant="contained" onClick={handleClick}>Submit</Button>
                </div>

            </div>
            </div>

        )
    
}

 

export default AddProducts