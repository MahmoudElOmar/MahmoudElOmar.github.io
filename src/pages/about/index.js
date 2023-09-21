import { Layout } from '../../layout/Layout';
import { List, ListItem, ListTitle, ListParagraph, ListContainer } from '../../components/Technologies/TechnologiesStyles';
import { LinkItem } from '../../components/Footer/FooterStyles';
import { Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import { project_list } from "../../constants/constants";

const AboutMe
 = () => {
  return (
    <Layout>
        <Section>
            <SectionTitle>
                About Me
            </SectionTitle>
            <SectionDivider/>
            <br/>
            <List>
            {project_list.map(({title, paragraph, link}) => (
                <ListItem>
                    <ListContainer>
                        <LinkItem href={link}>
                            <ListTitle>{title}</ListTitle>
                        </LinkItem> 
                        <ListParagraph>{paragraph}</ListParagraph>
                    </ListContainer>
                </ListItem>
            ))}
            </List>
        </Section>
    </Layout>
  );
};

export default AboutMe;