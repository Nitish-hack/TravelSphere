import React from "react";
import logo from "../assets/images/Travel Story.png";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  SocialContainer
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <SocialContainer>
        <img src={logo} height="80px" width="80px" alt="logo" />
        <div>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </SocialContainer>
      <Container>
        <Row>
          <Column>
            <Heading>Project</Heading>
            <FooterLink href="#">Changelog</FooterLink>
            <FooterLink href="#">Status</FooterLink>
            <FooterLink href="#">All Versions</FooterLink>
          </Column>
          <Column>
            <Heading>Help</Heading>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Troubleshooting</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
          <Column>
            <Heading>Others</Heading>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licence</FooterLink>
          </Column>
          <Column>
            <Heading>Source Code</Heading>
            <FooterLink href="#">
              <i className="fa-brands fa-github"></i> Github
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
