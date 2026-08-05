import TrashIcon from "../src/assets/icons/Trash-Regular.svg?react";
import { Badge } from "./components/Badge";
import { Icon } from "./components/Icon";
import { Text } from "./components/Text";
export default function App() {
	return (
		<div>
			<Text variant="body-md-semibold">Hello World</Text>
			<Icon svg={TrashIcon}/>
			<Badge variant={"primary"}>Testando</Badge>
			<Badge variant={"secondary"} >Testando</Badge>
		</div>
	);
}
