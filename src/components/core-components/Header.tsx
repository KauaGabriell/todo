import Logo from "../../assets/images/logo.svg?react";
import { Container } from "../Container";

export function Header() {
	return (
		<Container as="header" className="mt-4 md:mt-10">
			<Logo className="h-9 md:h-12" />
		</Container>
	);
}
