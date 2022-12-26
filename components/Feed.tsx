import { Posts } from "./Posts";
import { Status } from "./Status";

export const Feed = () => {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
			<section className="col-span-2">
				<Status />
				<Posts />
			</section>

			{/* Profile /Suggestions */}
			<section></section>
		</main>
	);
};