import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
	return (
		<ThemeProvider enableSystem={"true"} defaultTheme={"dark"} attribute="class">
			<SessionProvider session={session}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</ThemeProvider>
	)
}

export default MyApp;