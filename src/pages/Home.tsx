import { Container } from "../components/Container";
import { TasksSummary } from "../components/core-components/TasksSummary";
export function Home() {
	return (
		<Container as="article" className="space-y-3">
			<header className="flex items-center justify-between">
				<TasksSummary />
			</header>
		</Container>
	);
}
