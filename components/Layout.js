import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {
	return (
		<div>
			<Head>
				<meta charset="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Todo list By k8pai</title>
			</Head>
			<div className='min-h-screen flex flex-col transition duration-150 ease-linear bg-pritxt text-pribg dark:text-pritxt dark:bg-pribg'>
				<Header />
				{children}
				<Footer />
			</div>
		</div>
	)
}
export default Layout;