import React from "react";
import styled from "styled-components";

const Container = styled.section`
    overflow:hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 20px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/images/login-background.jpg');
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    
`
const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width:100%;
`
const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 0.11rem;
    font-size: 1.07rem;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 0 0 0.7rem #0063e5;
    transition: all 0.15s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #0483ee;
        transform: scale(1.03);
        border: 1px solid #f9f9f9;
        box-shadow: 0 0 0.7rem 0.3rem #0063e5;
    }
`
const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 0.7rem;
    margin: 0 0 24px;
    line-height: 1.2rem;
    letter-spacing: 0.06rem;
`
const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    max-width: 600px;
    min-height: 1px;
    display: inline-block;
    vertical-align: bottom;
    width:100%;
`

function Login(props){
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg' alt=''/>
                    <SignUp>GET ALL</SignUp>
                    <Description>Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a DisneyClone+ subscription. As of 04/06/2022, the price of 
                        DisneyClone+ and The DisneyClone Bundle will increase by 1$.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>        
    )
}

export default Login;