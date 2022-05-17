import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { HiMenuAlt4 } from 'react-icons/hi';
import { FiShoppingBag } from 'react-icons/fi'


/*================= Navbar items ==================*/

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#010606' : '#010606')};
    height: 80px;
    margin-top : -80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    font-size: 1rem;
    top: 0;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    z-index: 10;
    

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
    @media screen and (max-width: 480px){
        margin-top: -120px;
    }
    @media screen and (max-width: 320px){
        margin-top: -180px;
    }

`;

/*================= Navbar Container ==================*/

export const NavbarContainer = styled.div`
    display: flex ;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 400px;
    
`;

/*================= Navbar Logo ==================*/

// export const NavLogo = styled(LinkRouter)`
export const NavLogo = styled.div`

    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 8%;
    font-weight: bold;
    text-decoration: none;
    border: none;
    height: 100%;
    transition: all 0.2s ease-in-out;
    /* max-height: 70px;
    width: auto; */
    &:active{
        color: #01bf71;
    }
    &:hover{
        font-size: 1.6rem;
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 480px){
        margin-left:10px;
    }

`;



/*================= Navbar Menu Icon ==================*/


export const MenuIcon = styled.div`
    display: none;
    

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 55%);
        font-size: 1.8rem;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }

`;

export const ExpandToggle = styled(HiMenuAlt4)`
    color: #fff;
`


/*================= Navbar Bag Icon ==================*/


export const BagIconWrapper = styled.div`
    // display: none;
    display: block;
    position: absolute;
    transform: translate(-100%, 55%);
    font-size: 1.8rem;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    padding: 5px 12px;    
    top: -12px;
    right: 1rem;

    @media screen and (max-width: 600px){
        display: block;
        position: absolute;
        transform: translate(-100%, 55%);
        font-size: 1.8rem;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 5px 12px;    
        top: -12px;
        right: 2rem;
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

/*================= Navbar -> Navigation Menu ==================*/

export const NavMenu = styled.ul`
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
        margin-right: auto; 

        @media screen and (max-width: 768px){
            display: none;
        }

`;

/*================= Navbar -> Navigation Menu -> NavItem ==================*/

export const NavItem = styled.li`
    height: 80px;
`;

/*================= Navbar -> Navigation Menu -> NavItem -> NavLinks  ==================*/

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height:  100% ;
    cursor: pointer;
    font-weight: 500;

    &.active {
        border-bottom: 3px solid #01bf71 ;
    }
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #01bf71;
    }
`;

/*================= Navbar -> Navigation Menu -> NavItem -> NavBtn (SignIn Button)  ==================*/

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: auto;
    padding-right: 22px;
    padding-left: 18px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`;

/*================= Navbar -> Navigation Menu -> NavItem -> NavBtn -> NavBtnLink ==================*/

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;