import { NavLink } from "react-router";
import { Container } from "../Container";
import { Text } from "../Text";

export function Footer(){
    return (
        <footer className="my-5 md:my-10">
            <Container>
                <nav>
                    <NavLink to={"/"}>
                        <Text variant={"body-sm-bold"} className="text-gray-300">
                            Tarefas
                        </Text>
                    </NavLink>
                    <NavLink to={"/componentes"}>
                        <Text variant={"body-sm-bold"} className="text-gray-300">
                            Tarefas
                        </Text>
                    </NavLink>
                </nav>
            </Container>
        </footer>
    )
}
