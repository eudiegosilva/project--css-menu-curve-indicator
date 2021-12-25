import {
  /* PLOP_INJECT_ICON_IMPORT */
  MessageIcon as message,
  CameraIcon as camera,
  GearIcon as gear,
  HouseIcon as house,
  PeopleIcon as people
} from 'assets/icons';

import { ColorStyleProps } from 'core/types/globals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const icons: any = {
  /* PLOP_INJECT_ICON_OBJECT */
  message,
  camera,
  gear,
  house,
  people
};

export type IconNameTypes =
  /* PLOP_INJECT_ICON_TYPES */
  'message' | 'camera' | 'gear' | 'house' | 'people';
export type IconProps = { name: IconNameTypes; color: ColorStyleProps };
const Icon = ({ name, color }: IconProps) => {
  const Element = icons[name];
  return <Element color={color} area-label="Icon component" />;
};
export default Icon;
