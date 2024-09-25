import React from "react";
import Footer from './Components/Footer';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Legal Section</Footer.Title>
                    <Footer.Link href="#">Privacy & Ploicy</Footer.Link>
                    <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Resources</Footer.Title>
                    <Footer.Link href="#">Mental Health Resources</Footer.Link>
                    <Footer.Link href="#">Help</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social Media</Footer.Title>
                    <Footer.Link href="#">Feedback</Footer.Link>
                    <Footer.Link href="#">Newsletter Subscription</Footer.Link>
                    <Footer.Link href="#">Language Selection</Footer.Link>
                </Footer.Column>
            </Footer.Wrapper>
        </Footer>
    )
}
