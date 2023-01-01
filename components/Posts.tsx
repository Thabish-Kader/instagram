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

export const Posts = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
		const unsub = onSnapshot(q, (snapshot) => {
			setPosts(
				snapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				})) as Post[]
			);
		});
		return () => unsub();
	}, [db]);
	// console.log(posts);
	return (
		<div className="bg-gray-50">
			{posts.map((post) => (
				<SinglePost
					key={post.id}
					id={post.id}
					username={post.name}
					img={post.image}
					caption={post.caption}
					userImg={post.userImg}
				/>
			))}
		</div>
	);
};
