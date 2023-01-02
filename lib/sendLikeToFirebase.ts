import { setDoc, collection, serverTimestamp, doc } from "firebase/firestore";
import { db } from "../firebase";

export const sendLikeToFirebase = async (
	id: string,
	userid: string,
	userImage: string,
	username: string
) => {
	await setDoc(doc(db, "posts", id, "likes", userid), {
		userid: userid,
		userImg: userImage,
		username: username,
	});
};
