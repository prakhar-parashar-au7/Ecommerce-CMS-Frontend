import * as React from 'react';
import './styles/signUpForm.css'
import TextField from '@material-ui/core/TextField'
import PhotoUploader from './photoUploader'
import {Image} from 'cloudinary-react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {connect} from 'react-redux'
import {saveUserInfo} from '../Redux/Actions/actions.js'
import { withRouter } from 'react-router-dom';



class SignUpForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            photoId : "",
            Name : "",
            Email : "",
            Type : "",
            Password : ""

        }
    }

    savePhotoInfo = (assetId) => {
       this.setState({photoId : assetId})
   } 

     handleNameChange = (event) => {
         this.setState({Name : event.target.value})
     }

     handleEmailChange = (event) => {
        this.setState({Email : event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({Password : event.target.value})
    }
    
    handleTypeChange = (event) => {
        this.setState({Type : event.target.value})
    }
    
    handleBioChange = (event) => {
        this.setState({Bio : event.target.value})
    }


    handleClick = () => {
        axios({
            method : 'post',
            url : '/signUpUser',
            data : {
              Name : this.state.Name,
              Email : this.state.Email,
              Password : this.state.Password,
              photoId : this.state.photoId,
              Bio : this.state.Bio
            }
          }).then((response) => {
            if(response.data.user) {
                this.props.saveUserInfo(response.data.user)
                const history = this.props.history
                if(history) {
                    history.push('/userHomePage')
                }
            }
          })
        }
    
    
    


    render() {


        return (
            <div id="form">
                <div style={{margin : "10px"}}>
                <br></br>
                {
                (this.props.heading) ? 
                <h3 style={{marginLeft : "200px"}}>{this.props.heading}</h3> : <h3 style={{marginLeft : "200px"}}>Sign Up</h3>
                }
                
        
                <TextField label="Name" variant="outlined" onChange={this.handleNameChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextField id="Email" label="Email" variant="outlined" onChange={this.handleEmailChange} />
                <hr></hr>
                <br></br><br></br>
                <TextField id="Password" label="Password" variant="outlined" onChange={this.handlePasswordChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <hr></hr>
                <br></br><br></br>


                <div style= {{display : "grid", gridTemplateColumns : "auto auto"}}>

                {(this.state.photoId == "")
                 ? 
                 <PhotoUploader photoInfo = {this.savePhotoInfo}/>
                 :

                 <Image publicId={this.state.photoId} cloudName="prakhar-parashar" width="150" height="150"/> } 
                
                <TextField id="Bio" label="Bio" variant="outlined" onChange={this.handleBioChange} multiline
          rows={3}/>
                </div>
                <div style={{marginLeft : "200px", marginTop : "60px"}}>
                < Button color="primary" variant="contained" onClick={this.handleClick}>Submit</Button>
                </div>
              

            </div>
            </div>

        )
    }
}

const mapDispatch = {
    saveUserInfo : saveUserInfo
}  


export default   connect(null, mapDispatch) (SignUpForm)