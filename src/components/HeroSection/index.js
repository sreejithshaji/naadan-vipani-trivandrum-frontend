import React, { useState }from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, Span } from './HeroElements'
// import Video from '../../Videos/video.mp4'
import { Button } from '../ButtonElements'


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                {/* <VideoBg webkit-playsinline playsinline autoplay="autoplay" autoPlay loop muted src={Video} type='video/mp4' /> */}
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
