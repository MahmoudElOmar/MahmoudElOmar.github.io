import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection } from "../../components/Hero/HeroStyles";
import { Container } from "../../layout/LayoutStyles";
import { Layout } from "../../layout/Layout";

const Restaurant = () =>  {
    return (
        <Layout>
            <Container>
                <Section>
                    <LeftSection>
                    <SectionTitle main center>
                        Restaurant Wesbite Project
                    </SectionTitle>
                    </LeftSection>
                    <SectionText>
                        This is a page detailing my restaurant website project.
                    </SectionText>
                </Section>
            </Container>
        </Layout>
    );
}

export default Restaurant;