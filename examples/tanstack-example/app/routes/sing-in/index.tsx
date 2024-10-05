import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sing-in/")({
	component: SignIn,
});

export function SignIn() {
	return <div></div>;
}
