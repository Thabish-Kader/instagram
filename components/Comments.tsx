import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import TimeAgo from "react-timeago";

type Props = {
	id: string;
};

export const Comments = ({ id }: Props) => {
	const [comments, setComments] = useState<PostComment[]>();
	useEffect(() => {
		const q = query(
			collection(db, "posts", id, "comments"),
			orderBy("timestamp", "asc")
		);
		const unsub = onSnapshot(q, (snapshot) => {
			setComments(
				snapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				})) as PostComment[]
			);
		});
		return () => unsub();
	}, [db, id]);
	return (
		<>
			{comments?.length!! > 0 && (
				<div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
					{comments?.map((comment) => (
						<div
							key={comment.id}
							className="flex items-center space-x-2 mb-3"
						>
							<img
								className="h-7 rounded-full"
								src={comment.userImg}
								alt=""
							/>
							<p className="text-sm ">
								<span className="font-bold">
									{comment.username}{" "}
								</span>
								{comment.comment}
							</p>
							<TimeAgo
								className="text-sm text-gray-500"
								date={comment.timestamp?.toDate()}
							/>
						</div>
					))}
				</div>
			)}
		</>
	);
};
