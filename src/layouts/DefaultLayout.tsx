import { Outlet } from "react-router";

const DefaultLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-gray-800 text-white p-4">
				<h1 className="text-xl font-semibold">My App</h1>
			</header>

			<main className="flex-grow p-4">
				<Outlet />
			</main>

			<footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
				© {new Date().getFullYear()} My App. All rights reserved.
			</footer>
		</div>
	);
};

export default DefaultLayout;
