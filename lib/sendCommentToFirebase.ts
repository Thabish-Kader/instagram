import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const sendCommentToFirebase = async (
	id: string,
	comment: string,
	userImage: string,
	username: string
) => {
	await addDoc(collection(db, "posts", id, "comments"), {
		comment: comment,
		userImg: userImage,
		username: username,
		timestamp: serverTimestamp(),
	});
};
