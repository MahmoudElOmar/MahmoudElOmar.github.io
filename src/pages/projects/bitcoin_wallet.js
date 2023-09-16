import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection } from "../../components/Hero/HeroStyles";
import { Container } from "../../layout/LayoutStyles";
import { Layout } from "../../layout/Layout";

const BitcoinWallet = () =>  {
    return (
        <Layout>
            <Container>
                <Section>
                    <LeftSection>
                    <SectionTitle main center>
                        Bitcoin Wallet Project
                    </SectionTitle>
                    </LeftSection>
                    <SectionText>
                        This is a page detailing my Bitcoin wallet§ website project.
                    </SectionText>
                </Section>
            </Container>
        </Layout>
    );
}

export default BitcoinWallet;