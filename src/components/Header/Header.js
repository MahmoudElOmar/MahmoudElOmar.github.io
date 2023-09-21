import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <a href="/" style={{ display: "flex", alignItems: "center", color: "white", marginBottom: 20}}>
          <DiCssdeck size="3rem"/>
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
