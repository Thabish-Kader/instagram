import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Story } from "./Story";

export const Status = () => {
	const [dummyUser, setdummyUser] = useState<UserData[]>([]);
	useEffect(() => {
		const dummyUser = [...Array(20)].map((_, i) => ({
			userId: faker.datatype.uuid(),
			username: faker.internet.userName(),
			email: faker.internet.email(),
			avatar: faker.image.avatar(),
			password: faker.internet.password(),
			birthdate: faker.date.birthdate(),
			registeredAt: faker.date.past(),
		}));
		setdummyUser(dummyUser);
	}, []);
	const { data: session } = useSession();
	return (
		<div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
			{session && (
				<Story
					img={session?.user?.image}
					username={session?.user?.username}
				/>
			)}
			{dummyUser.map((avatar) => (
				<Story
					key={avatar.userId}
					img={avatar.avatar}
					username={avatar.username}
				/>
			))}
			{/* Story */}
			{/* Story */}
			{/* Story */}
			{/* Story */}
			{/* Story */}
		</div>
	);
};
