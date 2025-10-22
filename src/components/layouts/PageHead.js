import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Reland - Real Estate Group HTML Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead