import Head from 'next/head'
import Navbar from './Navbar'

function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href = "/favicon.ico" />
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
            </Head>

            <Navbar />

            <main>
                {children}
            </main>
        </div>

    )
}

Layout.defaultProps = {
    title : "Hackslash",
    keywords : "hackslash, nitp, patna, institute",
    description : "Official website of Hackslash"
}

export default Layout