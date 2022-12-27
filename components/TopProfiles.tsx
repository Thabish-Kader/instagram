import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { SingleProfile } from "./SingleProfile";

export const TopProfiles = () => {
	const [profiles, setProfiles] = useState<UserData[]>([]);

	useEffect(() => {
		const profiles = [...Array(5)].map((_, i) => ({
			userId: faker.datatype.uuid(),
			username: faker.internet.userName(),
			email: faker.internet.email(),
			avatar: faker.image.avatar(),
			password: faker.internet.password(),
			birthdate: faker.date.birthdate(),
			registeredAt: faker.date.past(),
		}));
		setProfiles(profiles);
	}, []);

	return (
		<div className="mt-4 ml-10">
			<div className="flex justify-between text-sm mb-5">
				<h3 className="text-sm font-bold text-gray-400">
					Suggestions for you
				</h3>
				<button className="text-gray-600 font-semibold">See All</button>
			</div>
			{profiles.map((profile) => (
				<SingleProfile key={profile.userId} profile={profile} />
			))}
		</div>
	);
};
