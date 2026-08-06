import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const containerVariants = cva("mx-auto", {
	variants: {
		size: {
			md: "max-w-126 px-2",
		},
	},
	defaultVariants: { size: "md" },
});

type ContainerProps = React.ComponentProps<"div"> &
	VariantProps<typeof containerVariants> & {
		as?: keyof React.JSX.IntrinsicElements;
	};

export function Container({
	as = "div",
	children,
	className,
	...props
}: ContainerProps) {
	return React.createElement(
		as,
		{ className: containerVariants({ size: "md", className }), ...props },
		children,
	);
}
