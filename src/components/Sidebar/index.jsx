import React, { useContext, useState, useEffect } from 'react';
import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
} from './SidebarStyles';
import { Button } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import { logoutUser } from '../../features/usersSlice';
import { clearStore } from '../../features/reservationsSlice';

import { SidebarItems } from '..';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MOBILE_VIEW = window.innerWidth < 468;

export default function Sidebar({ children }) {
  const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    navigate('/');
  }, [user]);

  const handleSidebarDisplay = (e) => {
    e.preventDefault();
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };

  const logout = () => {
    dispatch(clearStore());
    localStorage.clear();
    setUser(null);
    dispatch(logoutUser(user?.authorization));
  };

  return (
    <>
      <SidebarContainer displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            {/* Logo wrapper starts */}
            <SidebarLogo href="#" style={{ textDecoration: 'none' }}>
              <span className="app-brand-logo demo">
                {/* <img src={BrandLogo} alt="Brand logo" /> */}
              </span>
              <SidebarBrand
                displaySidebar={displaySidebar}
                className="app__brand__text"
              >
                Appoint
                <br />
                Teacher
              </SidebarBrand>
            </SidebarLogo>
            {/* Logo wrapper ends */}
            {/* Toggle button */}
            <SidebarToggler
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            />
          </SidebarLogoWrapper>
          {/* Render the SidebarItems component */}
          <SidebarItems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
      {/* Render the children */}
      <Children displaySidebar={displaySidebar}>{children}</Children>

      <div>
        <Button
          variant="outlined"
          onClick={() => logout()}
          className="my-2 mx-2"
        >
          Logout
        </Button>
      </div>
    </>
  );
}
