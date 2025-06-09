import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;

    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
    margin-top: 12px;
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;

    ${({ active, theme }) =>
        active &&
        `
            background-color: ${theme.primary + 20};
        `
    };

    &:hover {
        background-color: ${({ theme }) => theme.primary + 8}
    }

    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background-color: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;

const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState("all");
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. From web apps to android apps.
                    Here are some of my projects.
                </Desc>
                <ToggleGroup>
                    {toggle === "all" ? (
                        <ToggleButton active onClick={() => setToggle("all")} value="all">ALL</ToggleButton>
                    ) : (
                        <ToggleButton onClick={() => setToggle("all")} value="all">ALL</ToggleButton>
                    )}
                    <Divider />
                    {toggle === "web app" ? (
                        <ToggleButton active onClick={() => setToggle("web app")}>
                            WEB APP
                        </ToggleButton>
                    ) : (
                        <ToggleButton onClick={() => setToggle("web app")}>
                            WEB APP
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === "android app" ? (
                        <ToggleButton active onClick={() => setToggle("android app")}>
                            ANDROID APP
                        </ToggleButton>
                    ) : (
                        <ToggleButton onClick={() => setToggle("android app")}>
                            ANDROID APP
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === "other app" ? (
                        <ToggleButton active onClick={() => setToggle("other app")}>
                            OTHER APP
                        </ToggleButton>
                    ) : (
                        <ToggleButton onClick={() => setToggle("other app")}>
                            OTHER APP
                        </ToggleButton>
                    )}
                </ToggleGroup>

                <CardContainer>
                    {toggle === 'all' &&
                        projects.map((project, index) => (
                            <ProjectCard
                                key={project.id || project.name || index}
                                project={project}
                                openModal={openModal}
                                setOpenModal={setOpenModal}
                            />
                        ))}
                    {toggle !== 'all' &&
                        projects
                            .filter((item) => item.category === toggle)
                            .map((project, index) => (
                                <ProjectCard
                                    key={project.id || project.name || index}
                                    project={project}
                                    openModal={openModal}
                                    setOpenModal={setOpenModal}
                                />
                            ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects;