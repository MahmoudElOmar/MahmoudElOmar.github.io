import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Link from 'next/link';


const Projects = () => (
  <Section id="projects">
    <SectionDivider/>
    <br/>
    <SectionTitle>Projects</SectionTitle>
    <SectionText>Here are my top 4 projects</SectionText>
    <GridContainer>
      {projects.map(({title, description, image, tags, source, visit, id}) => (
        <Link href={visit}>
          <BlogCard key={id}>
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
        </Link>
      ))}
    </GridContainer>
    <br/>
  </Section>
);


export default Projects;