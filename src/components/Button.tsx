import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { Icon, type IconProps } from "./Icon";
import { Text } from "./Text";

export const ButtonVariants = cva(
	"flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
	{
		variants: {
			variant: {
				primary: "bg-gray-200 hover:bg-pink-light",
			},
			size: {
				md: "h-14 py-4 px-5",
			},
			disabled: {
				true: "opacity-50 pointer-events-none",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

export const ButtonIconVariants = cva("transition", {
	variants: {
		variant: {
			primary: "fill-pink-base",
		},
		size: {
			md: "w-5 h-5",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});

export type ButtonProps = React.ComponentProps<"button"> &
	VariantProps<typeof ButtonVariants> &  {
		icon?: IconProps["svg"];
	};

export function Button({
	variant,
	size,
	children,
	disabled,
	className,
	icon: IconComponent,
	...props
}: ButtonProps) {
	return (
		<button className={ButtonVariants({variant, size, disabled, className})} {...props}>
			{IconComponent && (
				<Icon
					svg={IconComponent}
					className={ButtonIconVariants({ variant, size })}
				></Icon>
			)}
			<Text
				variant={"body-sm-bold"}
				className={ButtonVariants({ variant, size })}
			>
				{children}
			</Text>
		</button>
	);
}
