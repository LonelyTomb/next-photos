import Head from 'next/head'
import CONFIG from "@/config";
import AppHeader from '@/components/Header'
const PublicLayout = ({children}) => {
    return (<>
            <Head htmlAttributes={{
                lang: 'en',
            }}>
                <title> {CONFIG.SITE_NAME}</title>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&display=swap"
                      rel="stylesheet"/>
            </Head>
            <AppHeader />
            <main className={''}>{children}</main>
        </>
    )
}

export default PublicLayout