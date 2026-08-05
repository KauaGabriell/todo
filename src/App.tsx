import TrashIcon from "../src/assets/icons/Trash-Regular.svg?react";
import { Icon } from "./components/Icon";
import { Text } from "./components/Text";
export default function App() {
	return (
		<div>
			<Text variant="body-md-semibold">Hello World</Text>
			<Icon svg={TrashIcon}/>
		</div>
	);
}
