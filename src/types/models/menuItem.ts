export interface MenuItem {
    icon?: React.ReactNode;
    label?: string;
    route?: string;
    children?: MenuItem[];
}

export interface MenuGroup {
    name: string;
    menuItems: MenuItem[];
}