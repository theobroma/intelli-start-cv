import React from 'react';

import type { MenuProps, Theme } from '@material-ui/core';
import { makeStyles, Menu, MenuItem, withStyles } from '@material-ui/core';

export const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    PaperProps={{
      style: {
        width: 240,
      },
    }}
    {...props}
  />
));

export const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export const useStyles = makeStyles((theme: Theme) => ({
  iconBtn: {
    color: theme.palette.common.white,
  },
}));
