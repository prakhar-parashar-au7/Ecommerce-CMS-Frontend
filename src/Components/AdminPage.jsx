import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { connect } from 'react-redux'
import { getEverythingAction } from '../Redux/Actions/actions'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Card from './Card'
import UserCard from './userCard'
import Products from './Products'
import { Image } from 'cloudinary-react';
import Navbar from './Navbar'



class AdminPage extends React.Component {
    
     
     


    componentDidMount() {
        this.props.getEverythingAction()
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true
        }


        return (
            <div>
                <Navbar currentUser = {this.props.currentUser} thisIs = "Admin"/>
                <div id="brands" style={{ textAlign: "center", textDecoration: "none" }}>
                    <h3 >New Brands Launched</h3>
                    {this.props.brands ?
                        <Slider {...settings}>
                            {this.props.brands.map((brand, index) => <Card photoId={brand.photoId} Name={brand.Name} />)}

                        </Slider> : null}
                    <Link to='/addBrand' style={{ textDecoration: "none" }}><Button variant="contained" color="primary" style={{ marginTop: "30px" }}>Add More</Button></Link>

                </div>
                <br></br> <br></br> <br></br>


                <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gridGap: "70px" }}>
                    <div id="vendors" >
                        <h2 style={{ marginLeft: "20px" }}>Vendors</h2>
                        {
                            (this.props.vendors) ? this.props.vendors.map((vendor, index) =>
                                <UserCard user={vendor} />
                            ) : null
                        }

                        <Link to='/addVendor' style={{ textDecoration: "none" }}><Button variant="contained" color="primary" >Add More</Button></Link>

                    </div>



                    <div >
                        <div id="Products" style={{ textAlign: "center" }}>
                            <h2>New Products</h2>
                            <br></br><br></br>
                            <Products />
                            <br></br><br></br>
                            <Link to='/addProduct' style={{ textDecoration: "none" }}><Button variant="contained" color="primary" >Add More</Button></Link>

                        </div>




                    </div>

                    <div id="users" >
                        <h2 style={{ marginRight: "-100px" }}>Users</h2>
                        {
                            (this.props.users) ? this.props.users.map((user, index) =>
                                <UserCard user={user} />
                            ) : null
                        }

                        <Link to='/addUser' style={{ textDecoration: "none" }}><Button variant="contained" color="primary" >Add More</Button></Link>

                    </div>
                </div>

                
                <div id="category" style={{ textAlign: "center", textDecoration: "none" }}>
                            <h3 >Categories</h3>
                            {this.props.categories ?

                                <Slider {...settings}>

                                    {this.props.categories.map((category, index) => <div style={{ boxShadow: "3px 3px 4px 2px rgba(0,0,0,0.2)", textAlign: "center", width: "60px", height : "60px", marginBottom: "20px" }}>
                                         <div style={{marginLeft: "30px"}}>
                                         <Image publicId={category.photoId} cloudName="prakhar-parashar" width="60" height="60" /> 
                                         </div>
                                        <p>{category.Name}</p>
                                        
                                        
                                    </div>)}

                                </Slider> : null}
                            <Link to='/addCategory' style={{ textDecoration: "none" }}><Button variant="contained" color="primary" style={{ marginTop: "30px" }}>Add More</Button></Link>
          
        </div>







            </div>

        )
    }
}


const mapState = (state) => {
    return {
        brands: state.brands,
        vendors: state.vendors,
        users: state.users,
        categories: state.categories,
        currentUser : state.currentUser

    }
}

const mapDispatch = {
    getEverythingAction: getEverythingAction
}

export default connect(mapState, mapDispatch)(AdminPage)