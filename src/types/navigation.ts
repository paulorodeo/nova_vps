export interface NavItem {
  label: string;
  href: string;
}

export interface LinkItem extends NavItem {
  external?: boolean;
}
