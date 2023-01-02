type UserData = {
	userId: string;
	username: string;
	email: string;
	avatar: string;
	birthdate: Date;
	password: string;
	registeredAt: Date;
};

type Post = {
	id: string;
	caption: string;
	image: string;
	name: string;
	timeStamp: Date;
	userImg: string;
};

type PostComment = {
	id: string;
	comment: string;
	timestamp: int;
	userImg: string;
	username: string;
};

type Like = {
	id: string;
	username: string;
};
