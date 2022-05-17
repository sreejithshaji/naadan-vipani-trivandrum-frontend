import React from 'react'
import { Button } from '../ButtonElements'
import { AddContainer, AddWrapper, AddInfoRow, Column1, TextWrapper, SectionName, Heading, SubText, BtnWrapper, Column2, ImgWrapper, Img } from './AddElements'

const AddSection = ({lightBg, id, imgStart, sectionName, lightTextHeading, heading, lightSubText, subText, buttonLabel, img, alt}) => {
    return (
        <>
            <AddContainer lightBg={lightBg} id={id}> 
                <AddWrapper>
                    <AddInfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <SectionName>{sectionName}</SectionName>
                                <Heading lightTextHeading={lightTextHeading}>{heading}</Heading>
                                <SubText lightSubText={lightSubText}>{subText}</SubText>
                                <BtnWrapper>
                                    <Button to='home'>{buttonLabel}</Button> 
                                </BtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </Column2>
                    </AddInfoRow>
                </AddWrapper>
            </AddContainer>  
        </>
    )
}

export default AddSection
