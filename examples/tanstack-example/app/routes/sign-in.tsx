import { SignInCard } from "@/components/sign-in-card";
import { SignUpCard } from "@/components/sign-up-card";
import { Tabs } from "@/components/tabs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-in")({
	component: SignIn,
});

export function SignIn() {
	return (
		<div className="w-full">
			<div className="flex items-center flex-col justify-center w-full md:py-10">
				<div className="md:w-[400px]">
					<Tabs
						tabs={[
							{
								title: "Sign In",
								value: "sign-in",
								content: <SignInCard />,
							},
							{
								title: "Sign Up",
								value: "sign-up",
								content: <SignUpCard />,
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
}
