import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const CardVariants = cva(
	"rounded-lg bg-white shadow-sm border border-gray-200 border-solid",
	{
		variants: {
			size: {
				none: "",
				md: "p-5",
			},
		},
		defaultVariants: { size: "md" },
	},
);

type CardProps = React.ComponentProps<"div"> &
	VariantProps<typeof CardVariants> & {
		as?: keyof React.JSX.IntrinsicElements;
	};

export function Card({
	as = "div",
	size,
	children,
	className,
	...props
}: CardProps) {
	return React.createElement(
		as,
		{ className: CardVariants({ size, className }), ...props },
		children,
	);
}
