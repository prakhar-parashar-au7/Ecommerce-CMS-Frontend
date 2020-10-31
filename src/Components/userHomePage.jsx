import React from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { getEverythingAction } from '../Redux/Actions/actions'
import { Link } from 'react-router-dom';
import Products from './Products'
import Navbar from './Navbar'



class VendorPage extends React.Component {



    componentDidMount() {
        this.props.getEverythingAction()
    }

    render() {



        return (
              <div>

                   <Navbar thisIs="Let's buy stuff" currentUser= {this.props.currentUser}/>



                    
                        <div id="Products" style={{ textAlign: "center" }}>
                            <h2>New Products</h2>
                            <br></br><br></br>
                            <Products />
                           
                          

                        </div>
                        </div>




                    

        )
    }
}

const mapState = (state) => {
    return {
      currentUser : state.currentUser
    }
}

const mapDispatch = {
    getEverythingAction: getEverythingAction
}

export default connect(mapState, mapDispatch)(VendorPage)