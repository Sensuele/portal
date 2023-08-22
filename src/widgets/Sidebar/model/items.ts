import { RoutePaths, RouteNames } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: RoutePaths;
  text: string;
  iconName: string;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePaths.MAIN,
    iconName: 'MainIcon',
    text: RouteNames.MAIN
  },
  {
    path: RoutePaths.ABOUT,
    iconName: 'AboutIcon',
    text: RouteNames.ABOUT
  },
  {
    path: RoutePaths.PROFILE,
    iconName: 'ProfileIcon',
    text: RouteNames.PROFILE
  }
];
