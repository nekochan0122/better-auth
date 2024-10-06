import { auth } from "@/auth";
import { Button } from "../components/ui/button";
import {
	createFileRoute,
	Link,
	useLoaderData,
	useRouter,
} from "@tanstack/react-router";
import { getHeaders } from "vinxi/http";

export const Route = createFileRoute("/")({
	component: Home,
	async loader(ctx) {
		const h = new Headers(getHeaders() as any);
		const res = await auth.api.getSession({
			headers: h,
		});
		return res;
	},
});

function Home() {
	const router = useRouter();
	const state = Route.useLoaderData();
	const features = [
		"Email & Password",
		"Organization | Teams",
		"Passkeys",
		"Multi Factor",
		"Password Reset",
		"Email Verification",
		"Roles & Permissions",
		"Rate Limiting",
		"Session Management",
	];
	const session = useLoaderData({
		from: Route.id,
	});
	console.log({ session });
	return (
		<div className="min-h-[80vh] flex items-center justify-center overflow-hidden no-visible-scrollbar px-6 md:px-0">
			<main className="flex flex-col gap-4 row-start-2 items-center justify-center">
				<div className="flex flex-col gap-1">
					<h3 className="font-bold text-4xl text-black dark:text-white text-center">
						Better Auth.
					</h3>
					<p className="text-center break-words text-sm md:text-base">
						Tanstack Start demo to showcase{" "}
						<a
							href="https://better-auth.com"
							target="_blank"
							className="italic underline"
						>
							better-auth.
						</a>{" "}
						features and capabilities. <br />
					</p>
				</div>
				<div className="md:w-10/12 w-full flex flex-col gap-4">
					<div className="flex flex-col gap-3 pt-2 flex-wrap">
						<div className="border-y py-2 border-dotted bg-secondary/60 opacity-80">
							<div className="text-xs flex items-center gap-2 justify-center text-muted-foreground ">
								<span className="text-center">
									All features on this demo are Implemented with better auth
									without any custom backend code
								</span>
							</div>
						</div>
						<div className="flex gap-2 justify-center flex-wrap">
							{features.map((feature) => (
								<span
									className="border-b pb-1 text-muted-foreground text-xs cursor-pointer hover:text-foreground duration-150 ease-in-out transition-all hover:border-foreground flex items-center gap-1"
									key={feature}
								>
									{feature}.
								</span>
							))}
						</div>
					</div>
					<div className="flex items-center justify-center">
						<Link to="/sign-in">
							<Button className="gap-2">
								{!session?.session ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1.2em"
										height="1.2em"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M5 3H3v4h2V5h14v14H5v-2H3v4h18V3zm12 8h-2V9h-2V7h-2v2h2v2H3v2h10v2h-2v2h2v-2h2v-2h2z"
										></path>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1.2em"
										height="1.2em"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M2 3h20v18H2zm18 16V7H4v12z"
										></path>
									</svg>
								)}
								{!session?.session
									? "Sign In"
									: `Welcome, ${session?.user.name}`}
							</Button>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
