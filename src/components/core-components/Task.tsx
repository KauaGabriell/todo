import { useState } from "react";
import checkIcon from "../../assets/icons/Check-Regular.svg?react";
import pencil from "../../assets/icons/PencilSimple-Regular.svg?react";
import trashIcon from "../../assets/icons/Trash-Regular.svg?react";
import xIcon from "../../assets/icons/X-Regular.svg?react";
import { Card } from "../Card";
import { IconButton } from "../IconButton";
import InputCheckbox from "../InputCheckbox";
import { InputText } from "../InputText";
import { Text } from "../Text";

export function Task() {
	const [isEditing, setIsEditing] = useState(true);

	function handleEditTask() {
		setIsEditing(true);
	}

	function handleExitEditTask() {
		setIsEditing(false);
	}

	return (
		<Card className="flex items-center gap-3">
			{!isEditing ? (
				<>
					<InputCheckbox />
					<Text className="flex-1 gap-2">Exemplo de Task</Text>
					<div>
						<IconButton variant={"terciary"} icon={trashIcon} />
						<IconButton
							variant={"terciary"}
							icon={pencil}
							onClick={handleEditTask}
						/>
					</div>
				</>
			) : (
				<>
					<InputText className="flex-1" />
					<div className="flex gap-1">
						<IconButton
							variant={"secondary"}
							icon={xIcon}
							onClick={handleExitEditTask}
						/>
						<IconButton
							variant={"primary"}
							icon={checkIcon}
							onClick={handleExitEditTask}
						/>
					</div>
				</>
			)}
		</Card>
	);
}
