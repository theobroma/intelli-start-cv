import React from 'react';

import type { Theme } from '@material-ui/core';
import {
  createStyles,
  Divider,
  Link as MUILink,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.main,
      fontSize: '20px',
      '&:hover': {
        textDecoration: 'none',
        color: theme.palette.secondary.main,
      },
    },
  }),
);

const NestedList = ({
  handleDrawerClose,
}: {
  handleDrawerClose: () => void;
}) => {
  const classes = useStyles();
  return (
    <List>
      <ListItem onClick={() => handleDrawerClose()}>
        <ListItemText>
          <MUILink href="#" variant="h6" className={classes.link}>
            Home
          </MUILink>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem onClick={() => handleDrawerClose()}>
        <ListItemText>
          <MUILink href="#contacts" variant="h6" className={classes.link}>
            Contacts
          </MUILink>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem onClick={() => handleDrawerClose()}>
        <ListItemText>
          <MUILink href="#skills" variant="h6" className={classes.link}>
            Skills
          </MUILink>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem onClick={() => handleDrawerClose()}>
        <ListItemText>
          <MUILink href="#experience" variant="h6" className={classes.link}>
            Experience
          </MUILink>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem onClick={() => handleDrawerClose()}>
        <ListItemText>
          <MUILink href="#projects" variant="h6" className={classes.link}>
            Projects
          </MUILink>
        </ListItemText>
      </ListItem>
      <Divider />
    </List>
  );
};
export default NestedList;
