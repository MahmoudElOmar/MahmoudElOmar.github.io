import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        This is my Portfolio section.
      </SectionText>
      <Button onClick={() => window.location = "http://github.com/quis-ut-deus"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;