import { SVGProps, VFC } from 'react';

export interface ISidebarItem {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGAElement>>,
    authOnly?: boolean
}
