import * as React from 'react';
import './styles/loginForm.css'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import PhotoUploader from './photoUploader'
import {Image} from 'cloudinary-react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {saveUserInfo} from '../Redux/Actions/actions.js'



const LoginForm = () => {

   const history = useHistory()
   const dispatch = useDispatch()

        
        const   [Name, setName]  = React.useState("")
        const  [Password, setPassword] = React.useState("")  
        const [Type, setType]  = React.useState("")
        

   

     const handleNameChange = (event) => {
         setName( event.target.value)
     }


    const handlePasswordChange = (event) => {
        setPassword( event.target.value)
    }

    const handleTypeChange = (event) => {
        setType(event.target.value)
    }

    

   const  handleClick = () => {
        
        axios({
            method : 'post',
            url : '/signInUser',
            data : {
              Name : Name,
              Password : Password,
              Type : Type        
            }
          }).then((response) => {
              console.log(response)
          if(response.data.status ===  404) {
            alert(response.data.message)
          }

          if(response.data.user) {
                  dispatch(saveUserInfo(response.data.user))
                  localStorage.setItem("token", response.data.token)
                  if(Type == "Admin") {
                      history.push('/adminPage')
                  }
                  else if(Type == "Vendor") {
                    history.push('/VendorPage')
                }
                else {
                    history.push('/userHomePage')
                }
          }
           
          })
        }
    
    
    



        return (
            <div style = {{display : "grid", gridTemplateColumns : "auto auto"}}>
            <div id="loginform">
                <div style={{ marginBottom : "50px"}}>
                <br></br>
                <h3 >Sign In </h3>
                <InputLabel id="demo-customized-select-label" style={{ display: "inline" }}>I am a </InputLabel>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={Type}
                    onChange={handleTypeChange}

                >
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Vendor">Vendor</MenuItem>
                    <MenuItem value="User">User</MenuItem>
                </Select>
                <br></br><br></br>
                <TextField label="Name" variant="outlined" onChange={handleNameChange} />
                
                <br></br><br></br>
                <TextField id="Password" label="Password" variant="outlined" onChange={handlePasswordChange} />
               <br></br><br></br>
                
                < Button color="primary" variant="contained" onClick={handleClick}>Submit</Button>
                      <br></br><br></br>
                <Link to = "/signUp">New User ? SignUp here</Link>
                </div>
              
          </div>
          <div style={{marginTop : "60px"}}>
              <h3>Only for demo purpose:</h3>
                 <h5>If you're a user:</h5> 
                   <p> Login using your Name and Password
                       <br></br>
                           or 
                        <br></br>
                Sign up as a new user
                     <br></br>
                           or 
                        <br></br>
                        Login using:
                        <br></br> 
                            Name : Raj
                            <br></br> 
                            Password: raj
                            </p>  

                   <h5> If you're a vendor:</h5>

                      <p> Login using your Name and Password
                            <br></br>
                             or
                             <br></br>
                       Ask admin to add your account 
                       <br></br>
                             or
                             <br></br>
                        Login using:
                        <br></br> 
                            Name : shubhra
                            <br></br> 
                            Password: shubhra
                            </p>     

                   <h5> If you're an admin:</h5>
                    <p>  Login using :
                        <br></br> 
                       Name : Shikhar
                       <br></br>
                       Password : admin    <p/>
                    </p>
           </div>
            </div>

        )
    }


 

export default LoginForm