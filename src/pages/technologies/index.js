import { Layout } from '../../layout/Layout';
import { List, ListItem, ListTitle, ListParagraph, ListContainer } from '../../components/Technologies/TechnologiesStyles';
import { LinkItem } from '../../components/Footer/FooterStyles';
import { Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import { technologies_list } from "../../constants/constants";
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

const TechnologiesPage = () => {
  return (
    <Layout>
        <Section>
            <SectionTitle>
                Technologies
            </SectionTitle>
            <SectionDivider/>
            <br/>
            <List>
            {technologies_list.map(({title, paragraph}) => (
                <ListItem>
                    <ListContainer>
                        <ListTitle>{title}</ListTitle>
                        <ListParagraph>{paragraph}</ListParagraph>
                    </ListContainer>
                </ListItem>
            ))}
            </List>
        </Section>
    </Layout>
  );
};

export default TechnologiesPage;