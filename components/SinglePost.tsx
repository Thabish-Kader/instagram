import {
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
	BsBookmark,
	BsChat,
	BsChatDots,
	BsHeart,
	BsHeartFill,
	BsPaperclip,
} from "react-icons/bs";
import { db } from "../firebase";

import { sendCommentToFirebase } from "../lib/sendCommentToFirebase";

import { Comments } from "./Comments";
import { Like } from "./Like";
type Props = {
	id: string;
	username: string;
	img: string;
	caption: string;
	userImg: string;
};

export const SinglePost = ({ id, username, img, caption, userImg }: Props) => {
	const { data: session } = useSession();
	const [comment, setComment] = useState<string>("");
	const [like, setLike] = useState(false);
	const [likes, setLikes] = useState<Like[]>([]);

	const handleComment = async (e: React.FormEvent) => {
		e.preventDefault();
		const commentToSend = comment;
		setComment("");
		sendCommentToFirebase(
			id,
			commentToSend,
			session?.user.image!,
			session?.user.username!
		);
		// console.log(`${comment} ----> Success`);
	};

	return (
		<div className="bg-white my-7 border rounded-sm">
			{/* header */}
			<div className="flex items-center p-5">
				<Image
					src={userImg}
					height={50}
					width={50}
					alt=""
					className="rounded-full object-contain border p-1 mr-3"
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
					<Like id={id} />
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

			<Comments id={id} />
			{/* input box */}
			<form onSubmit={handleComment} className="flex items-center p-5">
				<input
					type="text"
					disabled={!session}
					onChange={(e) => setComment(e.target.value)}
					value={comment}
					placeholder={`${
						session ? "Comment here..." : "Sign in to Comment"
					}`}
					className="border-none flex-1 p-2 outline-none focus:ring-0"
				/>
				<button
					disabled={!session}
					className="text-blue-500 disabled:text-gray-500"
				>
					Post
				</button>
			</form>
		</div>
	);
};
