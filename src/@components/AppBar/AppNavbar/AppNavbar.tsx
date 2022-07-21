import {
  Link as MUILink,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  link: {
    color: theme.palette.common.white,
  },
}));

const AppNavbar = () => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.root}>
      <ListItem component="div">
        <ListItemText inset>
          <MUILink href="#home" variant="h6" className={classes.link}>
            Home
          </MUILink>
        </ListItemText>

        <ListItemText inset>
          <MUILink href="#about" variant="h6" className={classes.link}>
            About
          </MUILink>
        </ListItemText>

        <ListItemText inset>
          <MUILink href="#skills" variant="h6" className={classes.link}>
            Skills
          </MUILink>
        </ListItemText>

        <ListItemText inset>
          <MUILink href="#experience" variant="h6" className={classes.link}>
            Experience
          </MUILink>
        </ListItemText>

        <ListItemText inset>
          <MUILink href="#projects" variant="h6" className={classes.link}>
            Projects
          </MUILink>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default AppNavbar;
