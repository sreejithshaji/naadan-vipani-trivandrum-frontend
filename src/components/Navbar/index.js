import React, {useState, useEffect, useContext } from 'react'

import { useHistory } from "react-router-dom";


import { Nav, NavbarContainer, NavLogo, MenuIcon, BagIconWrapper, BagIcon, ItemCount, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, ExpandToggle} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'

import {signOut} from '../../Auth/AuthenticationHandler'


import {ContextConsumer} from '../../utils/Context'

const Navbar = ({ toggle }) => {

    const contextValues = useContext(ContextConsumer);



    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    let history = useHistory();
    const handleSignout =() =>{
        history.push("/login")
    }




    const [cartCount, setCartCount] = useState("")

    
    // const [cartFetched , setCartFetched ] = (false)


    // const fetchCart = async() =>{
    //     await contextValues.InitCart()
    //     setCartFetched(true)
    // }

    // useEffect(()=>{
    //     fetchCart()

    //     setCartCount(contextValues.cart.length)
    // })




    // const setCartCoountFn = () =>{
    //     setCartCount(contextValues.cart.length)
    // }
    // useEffect(() =>{
    //     if(cartFetched)
    //     {
    //         console.log("HERE")
    //         console.log("HERE : " , contextValues.cart)
    //         setCartCoountFn()
    //     }
    // },[cartFetched] )
    
    





    return (
        
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo 
                    onClick={()=>{
                        history.push("/")
                    }} > 
                    <h5>horticorpOnline</h5>
                </NavLogo>  
            
                <MenuIcon onClick={toggle} >
                    <ExpandToggle />
                </MenuIcon>

            </NavbarContainer> 

            

            <NavMenu>
                {/* <NavItem>
                    <NavLinks onClick={()=>{
                                        history.push("/")
                                    }} smooth={true} duration={500} spy={true} offset={-80} exact='true'  >Home</NavLinks>
                </NavItem> */}
                
                {/* <NavItem>
                    <NavLinks onClick={()=>{
                                        history.push("/")
                                    }} smooth={true} duration={500} spy={true} offset={-120} exact='true' >Products</NavLinks>
                </NavItem> */}

                {/* <NavItem>
                    <NavLinks to='Orders' smooth={true} duration={500} spy={true} offset={-80} exact='true' >Orders</NavLinks>
                </NavItem> */}
                
                {/* ggggggggggggggggggggggggggggggggggggggggggg */}


                {/* <NavItem>
                    <NavLinks to='/login' onClick={()=>{ console.log("signout")
                                                        signOut();
                                                        handleSignout();
                                                        }} smooth={true} duration={500} spy={true} offset={-80} exact='true' >signout</NavLinks>
                </NavItem> */}
                
                {/* <NavMenu>
                <BagIconWrapper>
                <BagIcon />
                <ItemCount>123</ItemCount>
            </BagIconWrapper> 
            
                </NavMenu> */}
            
            </NavMenu>


            
            <NavBtn>
                {/* <NavBtnLink to="/cartlist" onClick={toggle} >cart</NavBtnLink> */}
                 <NavBtnLink to='/login' onClick={()=>{ console.log("signout")
                                                        contextValues.setblock(0)
                                                        contextValues.setdistrict(0)
                                                        signOut();
                                                        handleSignout();
                                                        }} smooth={true} duration={500} spy={true} offset={-80} exact='true'  >Logout</NavBtnLink>
            </NavBtn>
                <BagIconWrapper  to="/cartlist" onClick={()=>{ 
                                                                    history.push("/cartlist")
                                                             }}>
                    <BagIcon />
                    <ItemCount>{cartCount}</ItemCount>
                </BagIconWrapper> 
                
        </Nav>       
        </>
        
    )
} 

export default Navbar