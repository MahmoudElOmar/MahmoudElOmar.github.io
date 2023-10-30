import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider/>
    <br/>
    <SectionTitle>Projects</SectionTitle>
    <SectionText>Here are my top 4 projects</SectionText>
    <GridContainer>
      {projects.map(({title, description, image, tags, source, visit, key}) => (
        <a href={visit} style={{ display: "flex", alignItems: "center", color: "white"}}>
          <BlogCard key={key}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>
                {title}
              </HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>
              {description}
            </CardInfo>
            <div>
              <br />
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i )=> (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
          </BlogCard>
        </a>
      ))}
    </GridContainer>
    <br/>
  </Section>
);

export default Projects;