import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useSession } from "next-auth/react";
import { db, storage } from "../firebase";

export const uploadToFirebase = async (
	name: string,
	userImg: string,
	caption: string,
	preview: string
) => {
	const docRef = await addDoc(collection(db, "posts"), {
		name: name,
		userImg: userImg,
		caption: caption,
		timestamp: serverTimestamp(),
	});
	// console.log(`Doc with id: ${docRef.id} -----> added`);
	const imageRef = ref(storage, `posts/${docRef.id}/images`);
	uploadString(imageRef, preview as string, "data_url").then((snapshot) => {
		getDownloadURL(imageRef).then(async (url) => {
			await updateDoc(doc(db, "posts", docRef.id), {
				image: url,
			});
		});
	});
};
