import { BrowserRouter, Route, Routes } from "react-router";
import { Suspense, lazy } from "react";

// Lazy imports
const Page1 = lazy(() => import("./views/Page1/Page1"));
const Page2 = lazy(() => import("./views/Page2/Page2"));
const NotFound = lazy(() => import("./views/NotFound/NotFound"));
const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));

const PageRoutes = () => (
	<BrowserRouter>
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route index element={<Page1 />} />
					<Route path="/page2" element={<Page2 />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	</BrowserRouter>
);

export default PageRoutes;
