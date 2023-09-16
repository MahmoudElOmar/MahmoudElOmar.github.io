import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection } from "../../components/Hero/HeroStyles";
import { Container } from "../../layout/LayoutStyles";
import { Layout } from "../../layout/Layout";

const NostrClient = () =>  {
    return (
        <Layout>
            <Container>
                <Section>
                    <LeftSection>
                    <SectionTitle main center>
                        Nostr Client Project
                    </SectionTitle>
                    </LeftSection>
                    <SectionText>
                        This is a page detailing my Nostr Client project.
                    </SectionText>
                </Section>
            </Container>
        </Layout>
    );
}

export default NostrClient;