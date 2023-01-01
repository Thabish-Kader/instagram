import {
	collection,
	doc,
	onSnapshot,
	orderBy,
	query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { SinglePost } from "./SinglePost";
type Post = {
	id: string;
	caption: string;
	image: string;
	name: string;
	timeStamp: Date;
	userImg: string;
};
export const Posts = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const dummyPosts = [
		{
			id: "123",
			username: "byteBattalion",
			img: "https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg",
			caption: "Join me on cartton Newtwoek",
		},
	];

	useEffect(() => {
		const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
		const unsub = onSnapshot(q, (snapshot) => {
			setPosts(snapshot.docs.map((doc) => doc.data()) as Post[]);
		});
		return () => unsub();
	}, [db]);
	console.log(posts);
	return (
		<div className="bg-gray-50">
			{posts.map((post) => (
				<SinglePost
					key={post.id}
					id={post.id}
					username={post.name}
					img={post.image}
					caption={post.caption}
				/>
			))}
		</div>
	);
};
