import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMediaContainer, SocialMediaWrap, NaadanvipaniLogo, WebsiteRights, SocialMediaIcons, SocialMediaIconLink  } from './FooterElements'
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'


const toggleHome = () => {
    scroll.scrollToTop();
}

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    {/* <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Join Us</FooterLinkTitle>
                            <FooterLink to='/signin'>About Us adsfasdfa</FooterLink>
                            <FooterLink to='/signin'>About Usasdf</FooterLink>
                            <FooterLink to='/signin'>About Us asdfasd</FooterLink>
                            <FooterLink to='/signin'>About Usff</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Join Us</FooterLinkTitle>
                            <FooterLink to='/signin'>About Us</FooterLink>
                            <FooterLink to='/signin'>About Us</FooterLink>
                            <FooterLink to='/signin'>About Us</FooterLink>
                            <FooterLink to='/signin'>About Us</FooterLink>
                        </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Join Us</FooterLinkTitle>
                            <FooterLink to='/signin'>About Us</FooterLink>
                            <FooterLink to='/signin'>About Us</FooterLink>
                            <FooterLink to='/signin'>About Us</FooterLink>
                            <FooterLink to='/signin'>About Us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Join Us</FooterLinkTitle>
                            <FooterLink to='/signin'>About Us</FooterLink>
                            <FooterLink to='/signin'>About Us</FooterLink>
                            <FooterLink to='/signin'>About Us</FooterLink>
                            <FooterLink to='/signin'>About Us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> */}
                </FooterLinksContainer>
                <SocialMediaContainer>
                    <SocialMediaWrap>
                        <NaadanvipaniLogo to='/' onClick={toggleHome}>naadanvipani</NaadanvipaniLogo>
                        <WebsiteRights>naadanvipani © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialMediaIcons>
                            <SocialMediaIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialMediaIconLink>
                            <SocialMediaIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialMediaIconLink>
                            <SocialMediaIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialMediaIconLink>
                            <SocialMediaIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialMediaIconLink>
                        </SocialMediaIcons>
                    </SocialMediaWrap>
                </SocialMediaContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
