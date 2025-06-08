import { GitHub } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
    return 
    <Nav>
        <NavContainer>
            <NavLogo>Logo</NavLogo>
            <MobileIcon></MobileIcon>
            <NavItems>
                <NavLink>Home</NavLink>
            </NavItems>
            <ButtonContainer>
                <GithubButton></GithubButton>
            </ButtonContainer>
        </NavContainer>
    </Nav>
}

export default Navbar;