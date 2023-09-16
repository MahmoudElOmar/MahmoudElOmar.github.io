import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection } from "../../components/Hero/HeroStyles";
import { Container } from "../../layout/LayoutStyles";
import { Layout } from "../../layout/Layout";

const PrivateChat = () =>  {
    return (
        <Layout>
            <Container>
                <Section>
                    <LeftSection>
                    <SectionTitle main center>
                        Private Chat Project
                    </SectionTitle>
                    </LeftSection>
                    <SectionText>
                        This is a page detailing my private chatting application.
                    </SectionText>
                </Section>
            </Container>
        </Layout>
    );
}

export default PrivateChat;