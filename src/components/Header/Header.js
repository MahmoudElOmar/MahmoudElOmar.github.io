import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, HeaderLogo } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <a href="/" style={{ display: "flex", alignItems: "center", color: "white", marginBottom: 20}}>
          <HeaderLogo src="/images/noun-phoenix-85574.svg"/>
          <Span>Portfolio</Span>
        </a>
    </Div1>
    <Div2>
      <li><NavLink href="/projects">Projects</NavLink></li>
      <li><NavLink href="/technologies">Technologies</NavLink></li>
      <li><NavLink href="/about">About</NavLink></li>
      <li><NavLink href="">Blog</NavLink></li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://youtube.com">
        <AiFillYoutube size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
