import { useState } from 'react';

import {
  HouseIcon,
  PeopleIcon,
  MessageIcon,
  CameraIcon,
  GearIcon
} from 'assets/icons';

import * as s from './styles';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleActive = (link: string) => {
    setActiveLink(link);
  };

  return (
    <s.Wrapper aria-label="Navigation component">
      <s.List>
        <s.Item
          active={activeLink === 'home'}
          onClick={() => handleActive('home')}
        >
          <s.ItemLink>
            <HouseIcon />
            <s.ItemContent>home</s.ItemContent>
          </s.ItemLink>
        </s.Item>
        <s.Item
          active={activeLink === 'profile'}
          onClick={() => handleActive('profile')}
        >
          <s.ItemLink>
            <PeopleIcon />
            <s.ItemContent>profile</s.ItemContent>
          </s.ItemLink>
        </s.Item>
        <s.Item
          active={activeLink === 'message'}
          onClick={() => handleActive('message')}
        >
          <s.ItemLink>
            <MessageIcon />
            <s.ItemContent>message</s.ItemContent>
          </s.ItemLink>
        </s.Item>
        <s.Item
          active={activeLink === 'photos'}
          onClick={() => handleActive('photos')}
        >
          <s.ItemLink>
            <CameraIcon />
            <s.ItemContent>photos</s.ItemContent>
          </s.ItemLink>
        </s.Item>
        <s.Item
          active={activeLink === 'settings'}
          onClick={() => handleActive('settings')}
        >
          <s.ItemLink>
            <GearIcon />
            <s.ItemContent>settings</s.ItemContent>
          </s.ItemLink>
        </s.Item>
        <s.Indicator></s.Indicator>
      </s.List>
    </s.Wrapper>
  );
};

export default Navigation;
