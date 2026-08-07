import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
