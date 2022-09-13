import React from 'react';

import ContactsSection from './ContactsSection/ContactsSection';
import AboutSection from './AboutSection';
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
