import type { NextPage } from 'next';
import { MenuConfig } from 'helper/menu-bar.config';
import React, { useState } from 'react';

import {
    Container,
    FullDiv,
    IconButton,
    MenuContainer,
    Menu,
    MenuItem,
    MenuDivider,
} from './styled';

import { useDetectClickOutside } from 'react-detect-click-outside';

import { menuBarKeys } from 'types';

const MenuBar: NextPage = () => {
    const [activeMenu, setActiveMenu] = useState<menuBarKeys | ''>('');
    const innerRef = useDetectClickOutside({
        onTriggered: () => setActiveMenu(''),
    });

    return (
        <Container ref={innerRef}>
            {Object.entries(MenuConfig).map(([key, value]) => (
                <FullDiv key={key}>
                    <FullDiv>
                        <IconButton
                            onClick={() => setActiveMenu(key as menuBarKeys)}
                            onMouseOver={() => {
                                activeMenu && setActiveMenu(key as menuBarKeys);
                            }}
                            IconType={
                                key === 'apple'
                                    ? 'apple'
                                    : key === 'finder'
                                    ? 'Finder'
                                    : 'text'
                            }
                        >
                            {key === 'apple' ? (
                                <svg
                                    viewBox="0 0 24 24"
                                    width="1.2em"
                                    height="1.2em"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11Z"
                                    ></path>
                                </svg>
                            ) : (
                                value.title
                            )}
                        </IconButton>
                    </FullDiv>

                    {activeMenu === key && (
                        <MenuContainer menuType={key}>
                            <Menu key={key}>
                                {Object.entries(value.menu).map(
                                    ([key, value]) => (
                                        <React.Fragment key={key}>
                                            <MenuItem>{value.title}</MenuItem>
                                            {value.break && <MenuDivider />}
                                        </React.Fragment>
                                    ),
                                )}
                            </Menu>
                        </MenuContainer>
                    )}
                </FullDiv>
            ))}
        </Container>
    );
};

export default MenuBar;
