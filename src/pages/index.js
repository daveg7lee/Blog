import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Ki hyun lee" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["blog"]}
        />
        <ContactSection sectionId="contact" heading="Any questions?" />
      </Page>
    </>
  );
}
