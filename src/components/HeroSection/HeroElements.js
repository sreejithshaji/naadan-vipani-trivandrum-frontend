import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';



/*================= Hero Section Container  ==================*/

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    

    ::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(45deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(45deg, rgba(0,0,0,0.2) 0%, transparent 0%) ;
        z-index: 10;
        mix-blend-mode: darken;
    }
`

/*================= Hero Section -> Background  ==================*/

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

/*================= Hero Section -> Video Background  ==================*/

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    
`

/*================= Hero Section -> Content  ==================*/

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`


/*================= Hero Section -> Content -> H1  ==================*/

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;       
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }


`
export const Span = styled.span`
    color: #fccd04;
`

/*================= Hero Section -> Content -> Subhead (P)  ==================*/

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;


    @media screen and (max-width: 768px){
        font-size: 18px;       
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }

`


/*================= Hero Section -> Content -> ButtonWrapper  ==================*/

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
/*================= Hero Section -> Content -> ButtonWrapper -> ArrowForward  ==================*/

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

`

/*================= Hero Section -> Content -> ButtonWrapper -> ArrowRight  ==================*/


export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;

`
    
/*================= Hero Section -> Content -> Button  ==================*/

