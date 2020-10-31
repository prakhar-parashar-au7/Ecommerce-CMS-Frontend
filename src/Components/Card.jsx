import  React  from 'react';
import {Image} from 'cloudinary-react'
const Card = (props) => {
return(
    <div style={{boxShadow:"3px 3px 4px 2px rgba(0,0,0,0.2)", textAlign : "center", width:"200px"}}>
      <Image publicId={props.photoId} cloudName="prakhar-parashar" width="150" height="150"/>
    <h6>{props.Name}</h6>
    </div>
)
}


export default Card