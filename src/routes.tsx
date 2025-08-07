import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";

const PageRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route index element={<Home />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);

export default PageRoutes;
