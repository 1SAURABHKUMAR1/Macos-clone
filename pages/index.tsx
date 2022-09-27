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

            <main> Main Page</main>
        </div>
    );
};

export default Home;
