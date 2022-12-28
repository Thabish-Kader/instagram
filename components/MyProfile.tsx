import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export const MyProfile = () => {
	const { data: session } = useSession();
	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			{/* <div className="relative w-16 h-16"> */}
			<Image
				className="rounded-full border p-[2px] object-cover"
				src={`${
					session?.user?.image ||
					"https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png"
				}`}
				alt="/user"
				height={60}
				width={60}
			/>
			{/* </div> */}

			<div className="flex-1 mx-4">
				<h2 className="font-bold ">{session?.user?.username}</h2>
				<h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
			</div>

			<button className="text-blue-400 text-sm font-semibold">
				Sign Out
			</button>
		</div>
	);
};
