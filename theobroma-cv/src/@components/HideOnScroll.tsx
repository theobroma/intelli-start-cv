import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide, { SlideProps } from '@mui/material/Slide';

const HideOnScroll = ({ children }: { children: SlideProps['children'] }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
