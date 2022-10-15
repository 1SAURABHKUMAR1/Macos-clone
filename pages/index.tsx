import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Macos clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="wrapper">
                {/* <StatusBar toggleAppleMenu={toggleAppleMenu} />
                    <div className="inner_wrapper" onClick={closeAppleMenu}>
                        <Folders openFolderContent={openFolderContent} />
                        <FolderContent
                            isFolderOpen={isFolderOpen}
                            closeFolderContent={closeFolderContent}
                        />
                        <AppleMenu isAppleMenuOpen={isAppleMenuOpen} />
                    </div>
                    <MenuBar /> */}
            </main>
        </div>
    );
};

export default Home;
