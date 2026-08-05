import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const IconVariants = cva("", {
	variants: {
		animate: {
			false: "",
			true: "animate-spin",
		},
	},
	defaultVariants: {
		animate: false,
	},
});

export type IconProps = React.ComponentProps<"svg"> &
	VariantProps<typeof IconVariants> & {
		svg: React.FC<React.ComponentProps<"svg">>;
	};

export function Icon({
	svg: SvgComponent,
	animate,
	className,
	...props
}: IconProps) {
	return (
		<SvgComponent className={IconVariants({ animate, className })} {...props} />
	);
}
