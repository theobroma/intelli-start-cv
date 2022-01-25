import React from 'react';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';

const MainView: React.FC = () => {
  return (
    <>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
};

export default MainView;
