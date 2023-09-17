import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection } from "../../components/Hero/HeroStyles";
import { Container } from "../../layout/LayoutStyles";
import { Layout } from "../../layout/Layout";

const RoboticArm = () =>  {
    return (
        <Layout>
            <Container>
                <Section>
                    <LeftSection>
                    <SectionTitle main center>
                        Robotic Arm Simulation
                    </SectionTitle>
                    </LeftSection>
                    <SectionText>
                        This is a page detailing my robotic arm simulation.
                    </SectionText>
                </Section>
            </Container>
        </Layout>
    );
}

export default RoboticArm;