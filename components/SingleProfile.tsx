import Image from "next/image";

type Props = {
	profile: UserData;
};

export const SingleProfile = ({ profile }: Props) => {
	return (
		<div className="flex items-center justify-between mt-3">
			<Image
				src={profile.avatar}
				alt="/"
				height={50}
				width={50}
				className="rounded-full border p-[2px]"
			/>

			<div className="flex-1 ml-4">
				<h2 className="font-semibold text-sm">{profile.username}</h2>
				<h3 className="text-xs text-gray-400">
					Created at{" "}
					{new Date(profile.birthdate).toLocaleString("US", {
						weekday: "long",
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</h3>
			</div>
			<button className="text-blue-500">Follow</button>
		</div>
	);
};
