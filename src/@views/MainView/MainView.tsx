import { Box, Divider } from '@material-ui/core';
import React from 'react';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';

const MainView: React.FC = () => {
  return (
    <>
      <Box py={3}>
        <AboutSection />
      </Box>
      <Divider />
      <Box py={3}>
        <SkillsSection />
      </Box>
      <Divider />
      <Box py={3}>
        <ExperienceSection />
      </Box>
      <Divider />
      <Box py={3}>
        <ProjectsSection />
      </Box>
    </>
  );
};

export default MainView;
