import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { Icon, type IconProps } from "./Icon";
import Skeleton from "./Skeleton";

export const IconButtonVariants = cva(
	"inline-flex items-center justify-center transition cursor-pointer group",
	{
		variants: {
			variant: {
				none: "",
				primary: "bg-green-base hover:bg-green-dark",
				secondary: "bg-gray-200 hover:bg-pink-base",
				terciary: "bg-transparent hover:bg-gray-200",
			},
			size: {
				sm: "w-6 h-6 p-1 rounded",
			},
			disabled: {
				true: "opacity-50 pointer-events-none",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "sm",
			disabled: false,
		},
	},
);

export const IconIconButtonVariants = cva("", {
	variants: {
		variant: {
			none: "",
			primary: "fill-white",
			secondary: "fill-pink-base group-hover:fill-white",
			terciary: "fill-gray-300 group-hover:fill-gray-400",
		},
		size: {
			sm: "h-4 w-4",
		},
	},
	defaultVariants: { variant: "primary", size: "sm" },
});

export type IconButtonProps = React.ComponentProps<"button"> &
	VariantProps<typeof IconButtonVariants> & {
		icon: IconProps["svg"];
		loading?: boolean;
	};

export function IconButton({
	variant,
	size,
	disabled,
	className,
	icon,
	loading,
	...props
}: IconButtonProps) {
	if (loading) {
		return (
			<Skeleton rounded={"sm"} className={IconButtonVariants({ variant: "none", size, className })} />
		);
	}
	return (
		<button
			className={IconButtonVariants({ variant, size, disabled, className })}
			{...props}
		>
			<Icon svg={icon} className={IconIconButtonVariants({ variant, size })} />
		</button>
	);
}
