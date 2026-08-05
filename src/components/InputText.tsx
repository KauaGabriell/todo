import { cva, cx, type VariantProps } from "class-variance-authority";
import type React from "react";
import { textVariants } from "./Text";

export const InputTextVariants = cva(
	"border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none",
	{
		variants: {
			size: {
				md: "px-2 py-2",
			},
			disabled: {
				true: "pointer-events-none",
			},
		},
		defaultVariants: { size: "md", disabled: false },
	},
);

type InputTextProps = React.ComponentProps<"input"> &
	VariantProps<typeof InputTextVariants>;

export function InputText({
	size,
	disabled,
	className,
	...props
}: InputTextProps) {
	return (
		<input
			className={cx(
				InputTextVariants({ size, disabled }),
				textVariants(),
				className,
			)}
			{...props}
		></input>
	);
}
