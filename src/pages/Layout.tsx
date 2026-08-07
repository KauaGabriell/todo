import { Outlet } from "react-router";
import { Footer } from "../components/core-components/Footer";
import { Header } from "../components/core-components/Header";
import { MainContent } from "../components/core-components/Main";

export function Layout() {
	return (
		<>
			<Header />
			<MainContent>
				<Outlet />
			</MainContent>
			<Footer />
		</>
	);
}
