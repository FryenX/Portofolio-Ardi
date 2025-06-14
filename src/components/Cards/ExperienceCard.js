import React from 'react'
import styled from 'styled-components';

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }

    &:hover ${Document} {
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }

    @media (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    border: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0px 4px 24px rgba(23, 92, 239, 0.15);
`;

const Top = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
`;

const Logo = styled.img`
    height: 50px;
    background: #000;
    border-radius: 10px;
    margin-top: 4px;

    @media (max-width: 768px) {
        height: 40px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Company = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Duration = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const Skills = styled.div`
    widht: 100%;
    display: flex;
    gap: 12px;
    margin-top: 10px;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Logo src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Duration>{experience.date}</Duration>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill) => (
                                    <Skill key={skill}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard;