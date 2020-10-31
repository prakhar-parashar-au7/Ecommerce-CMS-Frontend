import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SignUpForm from './Components/signUpForm.jsx'
import LoginForm from './Components/LoginForm.jsx';
import AdminPage from './Components/AdminPage.jsx'
import addUser from './Components/addUser.jsx'
import AddVendor from './Components/addVendor.jsx'
import AddBrand from './Components/addBrand.jsx'
import AddCategory from './Components/addCategory.jsx'
import AddProduct from './Components/addProducts.jsx'
import VendorPage from './Components/VendorPage.jsx';
import userHomePage from './Components/userHomePage.jsx'
import { useDispatch } from 'react-redux';
import jwt from 'jsonwebtoken'
import { saveUserInfo } from './Redux/Actions/actions';



function App() {

  const dispatch = useDispatch()
  if(localStorage.getItem("token")){ 
  const token = localStorage.getItem("token")
  const user = jwt.verify(token, 'secret')
  console.log(user)
  dispatch(saveUserInfo(user))
  }
  


  return (
    <Router>
      

        <Route exact path="/" component={LoginForm} /> 
        <Route exact path="/signUp" component={SignUpForm}/>
         <Route exact path="/AdminPage" component={AdminPage} />
        <Route exact path="/addUser" component = {addUser}/>
        <Route exact path="/addVendor" component = {AddVendor} />
        <Route exact path="/addBrand" component = {AddBrand} />
        <Route exact path="/addCategory" component = {AddCategory} />
        <Route exact path="/addProduct" component = {AddProduct} />
        <Route exact path="/VendorPage" component = {VendorPage}/>
        <Route exact path="/userHomePage" component = {userHomePage}/>
        
    
    </Router>

  );
}

export default App;
