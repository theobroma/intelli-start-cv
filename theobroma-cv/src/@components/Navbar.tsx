import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import MUILink from '@mui/material/Link';
import { LinksType } from '@types';

const Navbar = ({ navLinks }: { navLinks: LinksType[] }) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        {navLinks.map(({ title, path }, i) => (
          <MUILink
            key={`${title}${i}`}
            href={path}
            variant="button"
            sx={{ color: `#fff`, opacity: 0.7 }}
          >
            {title}
          </MUILink>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
