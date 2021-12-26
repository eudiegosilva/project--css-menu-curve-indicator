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

const Navigation = () => (
  <s.Wrapper aria-label="Navigation component">
    <s.List>
      <s.Item active>
        <s.ItemLink href="#">
          <HouseIcon />
          <s.ItemContent>Home</s.ItemContent>
        </s.ItemLink>
      </s.Item>
      <s.Item>
        <s.ItemLink href="#">
          <PeopleIcon />
          <s.ItemContent>Profile</s.ItemContent>
        </s.ItemLink>
      </s.Item>
      <s.Item>
        <s.ItemLink href="#">
          <MessageIcon />
          <s.ItemContent>Message</s.ItemContent>
        </s.ItemLink>
      </s.Item>
      <s.Item>
        <s.ItemLink href="#">
          <CameraIcon />
          <s.ItemContent>Photos</s.ItemContent>
        </s.ItemLink>
      </s.Item>
      <s.Item>
        <s.ItemLink href="#">
          <GearIcon />
          <s.ItemContent>Settings</s.ItemContent>
        </s.ItemLink>
      </s.Item>
      <s.Indicator></s.Indicator>
    </s.List>
  </s.Wrapper>
);

export default Navigation;
