import styled from "styled-components";
import { MdClose } from "react-icons/md"
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { FiShoppingBag } from 'react-icons/fi'

/*================= Mobile Side Navbar Container  ==================*/

export const MobileNavContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
   
`;

/*================= Mobile Side Navbar Close Icon ==================*/

export const CloseIcon = styled(MdClose)`
    color: #fff;

`;

/*================= Close Icon container  ==================*/

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

/*================= Mobile Side Navbar Menu Container  ==================*/

export const MobileNavWrapper = styled.div`
    color: #fff;
`;

/*================= Mobile Side Navbar Menu  ==================*/

export const MobileNavMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);

    }
`;


/*================= Mobile Side Navbar Links  ==================*/

export const MobileNavLink = styled(LinkScroll)`    
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer; 
    font-weight: 600;


    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;

/*================= Mobile Side Navbar Button  ==================*/

export const MobileNavBtn = styled.div`
    display: flex;
    justify-content: center ;
`;
 
/*================= Mobile Side Navbar Button Route  ==================*/

export const MobileNavRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px ;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

/*================= Navbar Bag Icon ==================*/


export const BagIconWrapper = styled.div`
    display: none;
    

    @media screen and (max-width: 668px){
        display: block;
        position: absolute;
        top: -12px;
        right: 2rem;
        transform: translate(-100%, 55%);
        font-size: 1.8rem;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 5px 12px;
    }
    

    &:hover{
        transition: all 0.3s ease-in-out;
    }

`;

export const BagIcon = styled(FiShoppingBag)`
    color: #fff;
    margin-top: 5px;
    font-size: 24px;

`

export const ItemCount = styled.div`
    position: absolute;
    background: #01bf71;
    color: #010606;
    font-size: 14px;
    font-weight: 800;
    padding: 2px 8px;
    top: 0;
    left: 1.7rem;
    border-radius: 1rem;

`