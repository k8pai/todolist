import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<meta charset="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					name="description"
					content="Struggling to stay organized? Check out this to-do-list apps for free."
				/>
				<meta
					name="keywords"
					content="ToDo List, Task Management, Next.js, React, JavaScript, Web Development, Tailwind CSS, UI Design, Responsive Design, Auth0, Authentication, Security, User Management, K8pai, Productivity, Cloud Computing"
				/>
				<meta name="author" content="k8pai" />
				<title>Todo List By k8pai</title>
			</Head>
			<div className="min-h-screen flex flex-col transition duration-150 ease-in-out bg-pritxt text-pribg dark:text-pritxt dark:bg-pribg">
				<Header />
				{children}
				<Footer />
			</div>
		</div>
	);
};
export default Layout;
