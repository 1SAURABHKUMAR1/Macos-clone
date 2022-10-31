import type { NextPage } from 'next';
import { MenuBar, ActionCenter, TopBarTime } from '@components/index';
import {
    Header,
    GroupTimeAction,
    IconImage,
    IconButton,
    IconText,
} from './styled';
import { Wifi } from 'react-feather';

const TopBarArea: NextPage = () => {
    return (
        <Header>
            <MenuBar />

            <GroupTimeAction>
                <IconButton>
                    <IconText>100%</IconText>
                    <IconImage
                        height={70}
                        src="/app-icons/apple-battery/icon.png"
                        alt="apple-search"
                    />
                </IconButton>

                <IconButton>
                    <Wifi size="1.05em" />
                </IconButton>

                <IconButton>
                    <IconImage
                        height={55}
                        src="/app-icons/apple-search/icon.png"
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
