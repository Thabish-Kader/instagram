import Image from "next/image";

type Props = {
	img: string;
	username: string;
};

export const Story = ({ img, username }: Props) => {
	return (
		<div>
			<Image
				src={img}
				height={50}
				width={50}
				alt="/profilePic"
				className="rounded-full p-[1.5px] border-red-500 border-2 object-contain hover:scale-110 transition transform duration-200 ease-out"
			/>
			<p className="text-xs w-14 truncate text-center ">{username}</p>
		</div>
	);
};
