import React, { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useSession } from "next-auth/react";
import {
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	setDoc,
} from "firebase/firestore";
import { db } from "../firebase";

type Props = {
	id: string;
};
export const Like = ({ id }: Props) => {
	const [like, setLike] = useState(false);
	const [likes, setLikes] = useState<Like[]>([]);
	const { data: session } = useSession();

	const likedPost = async () => {
		if (!session) {
			alert("You must sign In first");
			return;
		}
		if (like) {
			await deleteDoc(doc(db, "posts", id, "likes", session?.user?.uid!));
		} else {
			await setDoc(doc(db, "posts", id, "likes", session?.user?.uid!), {
				username: session?.user.username!,
			});
		}
	};

	useEffect(() => {
		const unsub = onSnapshot(
			collection(db, "posts", id, "likes"),
			(snapshot) => {
				setLikes(
					snapshot.docs.map((doc) => ({
						...doc.data(),
						id: doc.id,
					})) as Like[]
				);
			}
		);
		return () => unsub();
	}, [db, id]);
	// console.log(likes);

	// for setting likes
	useEffect(() => {
		setLike(
			likes?.findIndex((like) => like.id === session?.user.uid) !== -1
		);
	}, [likes]);
	return (
		<div className="flex items-center space-x-2">
			{like ? (
				<BsHeartFill
					size={25}
					className="text-red-500 btn"
					onClick={likedPost}
				/>
			) : (
				<BsHeart onClick={likedPost} size={25} className="btn" />
			)}
			<p>{likes?.length} likes</p>
		</div>
	);
};
