import React,  {useState, useEffect, useContext }  from 'react'
import { useHistory } from "react-router-dom";

import {signOut} from '../../Auth/AuthenticationHandler'


import "./Navbarstyle.css"

import {ContextConsumer} from '../../utils/Context'

import { BsFillHandbagFill } from 'react-icons/bs';
const Navbar = () => {

    const contextValues = useContext(ContextConsumer);

    const OpenCart = () => {
        console.log("go")
        history.push("/cartlist")
     }

     let history = useHistory();
     const handleSignout =() =>{
         history.push("/login")
     }

    const [cartCount, setCartCount] = useState("")

 


    return (
        <div className="nav-container">
            
            <div className="logo-container" onClick={()=>{history.push("/")}} >
                <h2 className="">horticorpOnline</h2>
            </div>

            <div className="menu-container">
                <div className="element">
                {/* <button className="btn-success ">Logout</button> */}
                <BsFillHandbagFill color="white" fontSize="1.5em" onClick={OpenCart}/>

                </div>
                <div className="element">
                <button className="btn-success "  onClick={()=>{ console.log("signout")
                                                        contextValues.setblock(0)
                                                        contextValues.setdistrict(0)
                                                        signOut();
                                                        handleSignout();
                                                        }}  >Logout</button>
                </div>
            </div>


        </div>
    )
}

export default Navbar;