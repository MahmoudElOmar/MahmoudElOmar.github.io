import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection } from "../../components/Hero/HeroStyles";
import { Container } from "../../layout/LayoutStyles";

const Ecommerce = () =>  {
    return (
        <Container>
            <Section>
                <LeftSection>
                <SectionTitle main center>
                    E-Commerce Project
                </SectionTitle>
                </LeftSection>
                <SectionText>
                    This is a page detailing my ecommerce website project.
                </SectionText>
            </Section>
        </Container>
    );
}

export default Ecommerce;