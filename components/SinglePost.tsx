import Image from "next/image";
import {
	BsBookmark,
	BsChat,
	BsChatDots,
	BsHeart,
	BsPaperclip,
} from "react-icons/bs";

type Props = {
	id: string;
	username: string;
	img: string;
	caption: string;
	userImg: string;
};

export const SinglePost = ({ id, username, img, caption, userImg }: Props) => {
	console.log(id);
	return (
		<div className="bg-white my-7 border rounded-sm">
			{/* header */}
			<div className="flex items-center p-5">
				<img
					src={userImg}
					alt=""
					className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
				/>
				<p className="flex-1 font-bold">{username}</p>
				<BsChatDots size={15} />
			</div>

			{/* img */}
			<picture>
				<img src={img} alt="/pic" className="object-cover w-full" />
			</picture>

			{/* button */}
			<div className="flex justify-between p-4">
				<div className="flex space-x-4">
					<BsHeart size={25} className="btn" />
					<BsChat size={25} className="btn" />
					<BsPaperclip size={25} className="btn" />
				</div>
				<BsBookmark size={25} className="btn" />
			</div>

			{/* caption */}
			<p className="p-5 truncate">
				<span className="font-bold mr-1">{username} </span>
				{caption}
			</p>

			{/* comments */}

			{/* input box */}
		</div>
	);
};
