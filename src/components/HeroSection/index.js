import React, { useState }from 'react'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, Span } from './HeroElements'
// import Video from '../../Videos/video.mp4'
import { Button } from '../ButtonElements'

import imageBg from '../../components/backimage.jpg';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg 
                    // webkit-playsinline playsinline autoplay="autoplay" autoPlay loop muted 
                    // ../../components/backimage.jpg
                    src={imageBg} 
                    type='image/jpg'
                 />
            </HeroBg>
            <HeroContent>
                <HeroH1>Farm Fresh Vegetables at your <Span>Doorstep</Span></HeroH1> 
                <HeroP>We provide best for the best.</HeroP>
                <HeroBtnWrapper>
                    <Button to='products' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} offset={-120} exact='true'>
                    Shop Now {  hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection 
