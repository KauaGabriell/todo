import Plus from "../src/assets/icons/Plus-Regular.svg?react";
import TrashIcon from "../src/assets/icons/Trash-Regular.svg?react";
import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import { Icon } from "./components/Icon";
import { IconButton } from "./components/IconButton";
import { InputText } from "./components/InputText";
import { Text } from "./components/Text";
export default function App() {
	return (
		<div>
			<Text variant="body-md-semibold">Hello World</Text>
			<Icon svg={TrashIcon} />
			<Badge variant={"primary"}>Testando</Badge>
			<Badge variant={"secondary"}>Testando</Badge>
			<Button icon={Plus}> Nova Tarefa</Button>
			<IconButton icon={TrashIcon} variant={"primary"} />
			<IconButton icon={TrashIcon} variant={"secondary"} />
			<IconButton icon={TrashIcon} variant={"terciary"} />
			<InputText />
		</div>
	);
}
