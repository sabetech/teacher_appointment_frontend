import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
} from './SidebarStyles';

import { SideBarMenuItems } from '..';

const SidebarItems = ({ displaySidebar }) => {
  const [activeItem, setActiveItem] = useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveItem(1);
        break;
      case '/reservations':
        setActiveItem(2);
        break;
      case '/reserve':
        setActiveItem(3);
        break;
      case '/addteacher':
        setActiveItem(4);
        break;
      case 'remove-teacher':
        setActiveItem(5);
        break;
      default:
        setActiveItem(1);
        break;
    }
  });

  return (
    <ItemsList>
      {SideBarMenuItems.map((itemData, index) => (
        <ItemContainer
          key={index}
          onClick={() => setActiveItem(itemData.id)}
          className={itemData.id === activeItem ? 'active' : ''}
        >
          <Link to={itemData.path} style={{ textDecoration: 'none' }}>
            <ItemWrapper>
              {itemData.icon}
              <ItemName
                displaySidebar={displaySidebar}
                className={itemData.id === activeItem ? 'active' : ''}
              >
                {itemData.name}
              </ItemName>
            </ItemWrapper>
          </Link>
        </ItemContainer>
      ))}
    </ItemsList>
  );
};

export default SidebarItems;
