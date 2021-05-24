import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';

import classes from './Layout.css';

const Layout = ({ children }) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Layout}>{children}</main>
  </Auxiliary>
);

export default Layout;