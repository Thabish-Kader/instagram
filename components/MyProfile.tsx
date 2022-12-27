import Image from "next/image";
import React from "react";

export const MyProfile = () => {
	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<div className="relative w-16 h-16">
				<Image
					className="rounded-full border p-[2px] "
					src="https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg"
					alt=""
					fill
				/>
			</div>

			<div className="flex-1 mx-4">
				<h2 className="font-bold ">byte</h2>
				<h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
			</div>

			<button className="text-blue-400 text-sm font-semibold">
				Sign Out
			</button>
		</div>
	);
};
