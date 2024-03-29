import React, { useState } from 'react';
import clsx from 'clsx';

import { Container, Typography, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';

import AppNavbar from '../AppNavbar';
import NestedList from '../NestedList';
import ThemeMenu from '../ThemeMenu/ThemeMenu';

import { useStyles } from './PersistentDrawerLeft.styles';

const PersistentDrawerLeft: React.FC = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={clsx({
        [classes.root]: true,
        'HolyGrail-content': true,
      })}
    >
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Container maxWidth="lg">
          <Toolbar style={{ padding: 0 }}>
            {!!isMobile && (
              <IconButton
                // color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            )}
            {/* brand name */}
            <Typography className={classes.title} variant="h6" noWrap>
              Portfolio
            </Typography>
            <div className={classes.grow} />
            {/* icons right */}
            {!isMobile && <AppNavbar />}
            <ThemeMenu />
          </Toolbar>
        </Container>
      </AppBar>
      {/* Drawer */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <NestedList handleDrawerClose={handleDrawerClose} />
      </Drawer>
      {/* Main */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

export default PersistentDrawerLeft;
