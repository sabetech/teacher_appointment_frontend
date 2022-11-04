import './App.css';
import React, { useEffect, useState, useMemo } from 'react';
import {
  Routes, Route, Navigate, useLocation, Link,
} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { DynamicItem, Sidebar, SideBarMenuItems } from './components';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TeacherDetail from './components/Teacher/Teacher-Detail';
import {
  AppBar,
  CssBaseline,
  Box,
  Drawer,
  Toolbar,
  Divider,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 300;

function App(props) {
  const { window } = props;
  const [user, setUser] = useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const userVal = useMemo(() => ({ user, setUser }), [user, setUser]);
  const location = useLocation();
  const path = location.pathname;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  console.log('Path: ', path);
  const drawer = (
    <div>
      <Toolbar />
      <h3>Appoint Teacher</h3>
      <Divider />
      <div style={{ marginTop: '30%' }} />
      <List>
        {SideBarMenuItems.map((menuItem) => (
          <ListItem key={menuItem.id}>
            <Link to={menuItem.path} style={{ textDecoration: 'none', color: 'black' }}>
              <ListItemButton sx={{ backgroundColor: (menuItem.path === path) ? '#98BF10' : '' }}>
                <ListItemText
                  primary={(
                    <Typography sx={{
                      color: (menuItem.path === path) ? '#fff' : 'black', fontSize: 27, fontFamily: 'Helvetica', fontWeight: '700',
                    }}
                    >
                      {menuItem.name}
                    </Typography>
                )}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    const serializedUser = localStorage.getItem('user');
    if (serializedUser) {
      setUser(JSON.parse(serializedUser));
    } else {
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={userVal}>
      {!user ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Box
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Box>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
              open
            >
              {drawer}
            </Drawer>

          </Box>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            <div id="main">
              <Routes>
                {SideBarMenuItems
            && SideBarMenuItems.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={(
                  <DynamicItem
                    page={item.name}
                    component={item.component}
                  />
                )}
              />
            ))}
                <Route
                  path="/teachers/details/:id"
                  element={(
                    <DynamicItem
                      page="teacher details"
                      component={<TeacherDetail />}
                    />
            )}
                />
                <Route
                  path="*"
                  element={<Navigate to="/" replace />}
                />
              </Routes>
            </div>
          </Box>
        </Box>

      )}
    </AuthContext.Provider>
  );
}

export default App;
