import { useState } from 'react';

import {
  HouseIcon,
  PeopleIcon,
  MessageIcon,
  CameraIcon,
  GearIcon
} from 'assets/icons';

import * as s from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NavigationProps = any;

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
          <s.ItemLink href="#">
            <HouseIcon />
            <s.ItemContent>Home</s.ItemContent>
          </s.ItemLink>
        </s.Item>
        <s.Item
          active={activeLink === 'profile'}
          onClick={() => handleActive('profile')}
        >
          <s.ItemLink href="#">
            <PeopleIcon />
            <s.ItemContent>Profile</s.ItemContent>
          </s.ItemLink>
        </s.Item>
        <s.Item
          active={activeLink === 'message'}
          onClick={() => handleActive('message')}
        >
          <s.ItemLink href="#">
            <MessageIcon />
            <s.ItemContent>Message</s.ItemContent>
          </s.ItemLink>
        </s.Item>
        <s.Item
          active={activeLink === 'photos'}
          onClick={() => handleActive('photos')}
        >
          <s.ItemLink href="#">
            <CameraIcon />
            <s.ItemContent>Photos</s.ItemContent>
          </s.ItemLink>
        </s.Item>
        <s.Item
          active={activeLink === 'settings'}
          onClick={() => handleActive('settings')}
        >
          <s.ItemLink href="#">
            <GearIcon />
            <s.ItemContent>Settings</s.ItemContent>
          </s.ItemLink>
        </s.Item>
        <s.Indicator></s.Indicator>
      </s.List>
    </s.Wrapper>
  );
};

export default Navigation;
