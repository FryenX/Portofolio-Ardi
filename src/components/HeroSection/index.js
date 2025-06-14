import React from 'react'
import styled from "styled-components";
import { Bio } from "../../data/constants";
import TypeWriter from "typewriter-effect";
import HeroImage from "../../images/HeroImage.jpg";
import HeroBgAnimation from "../HeroBgAnimation";

const HeroContainer = styled.div`
    background: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;

    @media screen and (max-width: 960px) {
        padding: 66px 16px;
    }

    @media screen and (max-width: 480px) {
        padding: 32px 16px;
    }

    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const Herobg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
    overflow: hidden;
    width: 72%;
    height: 100%;
    padding: 0 30px;
    -webkit-transform: translateX(-50%)  translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    z-index: -1;

    @media screen and (max-width: 960px) {
        padding: 0 0;
        justify-content: center;
    }
`;

const HeroContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }

`;

const HeroLeftContent = styled.div`
    width: 100%;
    order: 1;
    @media screen and (max-width: 960px) {
        order: 2;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    @media screen and (max-width: 640px) {
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

const HeroRightContent = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    gap: 12px;
    @media screen and (max-width: 960px) {
        order: 1;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
    }

    @media screen and (max-width: 640px) {
        order: 1;
        margin-bottom: 30px;
    }
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media screen and (max-width: 960px) {
        text-align: center;
    }

    @media screen and (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    } 
`;

const TextLoop = styled.div`
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 68px;
    gap: 12px;
    display: flex;

    @media screen and (max-width: 960px) {
        text-align: center;
    }

    @media screen and (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

const Span = styled.span`
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
`;

const SubTitle = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 95};
    line-height: 32px;
    margin-bottom: 32px;

    @media screen and (max-width: 960px) {
        text-align: center;
    }

    @media screen and (max-width: 640px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    }
`;

const Image = styled.img`
    width: 100%;
    position: relative;
    border-radius: 50%;
    max-height: 400px;
    max-width: 400px;
    object-fit: cover;
    object-position: center;
    border: 2px solid ${({ theme }) => theme.primary};

    @media screen and (max-width: 768px) {
        max-width: 400px;
        max-height: 400px;
    }

    @media screen and (max-width: 640px) {
        max-height: 280px;
        max-width: 280px;
    }
`;

const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
                <Herobg>
                    <HeroBgAnimation />
                </Herobg>
                <HeroContentContainer>
                    <HeroLeftContent>
                        <Title>
                            Hi, I'am <br />
                            {Bio.name}
                        </Title>
                        <TextLoop>
                            I'am a
                            <Span>
                                <TypeWriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target="display">
                            Download CV
                        </ResumeButton>
                    </HeroLeftContent>
                    <HeroRightContent>
                        <Image src={HeroImage} alt="Hero" />
                    </HeroRightContent>
                </HeroContentContainer>
            </HeroContainer>
        </div>
    )
}

export default Hero;