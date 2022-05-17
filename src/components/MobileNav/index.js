import React, { useState } from 'react'
import { MobileNavContainer, Icon, CloseIcon, MobileNavWrapper, MobileNavMenu, MobileNavLink, MobileNavBtn, MobileNavRoute ,BagIconWrapper, BagIcon, ItemCount} from './MobileNavElements';

const MobileNav = ({ isOpen, toggle }) => {
    
    return (
        <MobileNavContainer>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            
            <MobileNavWrapper>
                <MobileNavMenu>
                    <MobileNavLink to="/" onClick={toggle}>Home</MobileNavLink> 
                    <MobileNavLink to="products" smooth={true} duration={500} spy={true} offset={-120} exact='true' onClick={toggle}>Products</MobileNavLink> 
                    <MobileNavLink to="/orders" onClick={toggle}>Orders</MobileNavLink> 
                </MobileNavMenu>

                <MobileNavBtn>
                    <MobileNavRoute to="/signin" onClick={toggle}>Logout</MobileNavRoute>
                </MobileNavBtn>
 
            </MobileNavWrapper>
        </MobileNavContainer>
    );
};

export default MobileNav