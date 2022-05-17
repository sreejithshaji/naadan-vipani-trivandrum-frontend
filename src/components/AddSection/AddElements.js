import styled from "styled-components";


/*================= Addition Info Section Container  ==================*/

export const AddContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? 'f9f9f9' : '010606')};
    

    @media screen and (max-width: 768px){
        padding: 100px 0;

    }
`

/*================= Addition Info Section Container -> Additional Info Wrapper ==================*/

export const AddWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
` 

/*================= Addition Info Section Container -> Additional Info Wrapper -> Add Info Row==================*/

export const AddInfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax( auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

/*================= Addition Info Section Container -> Additional Info Wrapper -> Add Info Row -> Column 1 ==================*/

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`


/*================= Addition Info Section Container -> Additional Info Wrapper -> Add Info Row -> Column 1 -> Text Wrapper ==================*/

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

`
/*================= Addition Info Section Container -> Additional Info Wrapper -> Add Info Row -> Column 1 -> Text Wrapper -> Section Name ==================*/

export const SectionName = styled.p`
     color: #01bf71;
     font-size: 16px;
     line-height: 16px;
     font-weight: 700;
     letter-spacing: 1.4px;
     text-transform: uppercase;
     margin-bottom: 16px;

`

/*================= Addition Info Section Container -> Additional Info Wrapper -> Add Info Row -> Column 1 -> Text Wrapper -> Heading ==================*/

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1 ;
    font-weight: 600;
    color: ${({lightTextHeading}) => (lightTextHeading ? '#f7f8fa' : '010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;

    }
`

/*================= Addition Info Section Container -> Additional Info Wrapper -> Add Info Row -> Column 1 -> Text Wrapper -> Sub Text ==================*/

export const SubText = styled.p`
    max-width: 440px;
    margin-bottom: 45px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightSubText}) => (lightSubText  ? '#010606' : '#fff ')};

`   

/*================= Addition Info Section Container -> Additional Info Wrapper -> Add Info Row -> Column 1 -> Text Wrapper -> Button Wrapper ==================*/

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`

/*================= Addition Info Section Container -> Additional Info Wrapper -> Add Info Row -> Column 2 ==================*/

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

/*================= Addition Info Section Container -> Additional Info Wrapper -> Add Info Row -> Column 2 -> Text Wrapper -> Image Wrapper ==================*/

export const ImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
    z-index: 1;
`

/*================= Addition Info Section Container -> Additional Info Wrapper -> Add Info Row -> Column 2 -> Text Wrapper -> Image Wrapper -> Image ==================*/

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

`
  