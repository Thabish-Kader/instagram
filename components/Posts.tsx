import { SinglePost } from "./SinglePost";

export const Posts = () => {
	const posts = [
		{
			id: "123",
			username: "byteBattalion",
			img: "https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg",
			caption: "Join me on cartton Newtwoek",
		},
	];
	return (
		<div className="bg-gray-50">
			{posts.map((post) => (
				<SinglePost
					key={post.id}
					id={post.id}
					username={post.username}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	);
};
