import React, {useState} from 'react';
import PhotoUploader from './photoUploader'
import {Image} from 'cloudinary-react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const AddBrand = () => {
  
   const [photoId , setPhotoId] = useState("")
   const [ Name, setName] = useState("")


    const savePhotoInfo = (assetId) => {
        setPhotoId (assetId)
    } 
 
    const  handleNameChange = (event) => {
          setName ( event.target.value)
      }

    const handleSubmit = (event) => {
        axios({
            method : 'post',
            url : '/addBrand',
            data : {
                photoId :photoId,
                Name :Name,
               
            }
          }).then((response) => {
           
          })
    }  

  return(
      <>
      <div style={{boxShadow:"3px 3px 4px 2px rgba(0,0,0,0.2)", marginLeft: "100px", marginTop : "200px", width:"200px"}}>
     <h3>Add a brand</h3>  
     {(photoId == "")
    ? 
    <PhotoUploader photoInfo = {savePhotoInfo}/>
    :

    <Image publicId={photoId} cloudName="prakhar-parashar" width="150" height="150"/> } 

<br></br><br></br>
                <TextField id="Name" label="Name" variant="outlined" onChange={handleNameChange} />
                
  </div>
  <div style={{marginLeft : "400px", marginTop : "-100px"}}>
  <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
  </div>
  
  
  </>
    
  )

}
export default AddBrand