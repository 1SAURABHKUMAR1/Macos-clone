import type { NextPage } from 'next';
import { MenuBar, ActionCenter, TopBarTime } from '@components/index';

import { Header, GroupTimeAction, IconImage, IconButton } from './styled';

const TopBarArea: NextPage = () => {
    return (
        <Header>
            <MenuBar />

            <GroupTimeAction>
                <IconButton>
                    <IconImage
                        src="/app-icons/apple-search/icon.png"
                        alt="apple-search"
                    />
                </IconButton>

                <IconButton>
                    <IconImage
                        src="/app-icons/apple-account/icon.png"
                        alt="apple-account"
                    />
                </IconButton>

                <IconButton>
                    <IconImage
                        src="/app-icons/apple-cast/icon.png"
                        alt="apple-search"
                    />
                </IconButton>

                <ActionCenter />

                <TopBarTime />
            </GroupTimeAction>
        </Header>
    );
};

export default TopBarArea;
