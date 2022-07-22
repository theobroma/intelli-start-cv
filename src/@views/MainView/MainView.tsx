import React from 'react';
import AboutSection from './AboutSection';
import ContactsSection from './ContactsSection/ContactsSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';

const MainView = () => {
  return (
    <>
      <AboutSection />
      <ContactsSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
};

export default MainView;
