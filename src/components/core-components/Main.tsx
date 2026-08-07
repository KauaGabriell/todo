import { cx } from "class-variance-authority";
import type React from "react";
import { Container } from "../Container";

type MainContentProps = React.ComponentProps<"main">;

export function MainContent({
	children,
	className,
	...props
}: MainContentProps) {
	return (
		<main className={cx("mt-4 md:mt-8", className)} {...props}>
			<Container>{children}</Container>
		</main>
	);
}
