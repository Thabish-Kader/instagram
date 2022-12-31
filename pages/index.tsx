import type { NextPage } from "next";
import Head from "next/head";
import { Feed } from "../components/Feed";
import { Header } from "../components/Header";
import { UploadImageInput } from "../components/UploadImageInput";

const Home: NextPage = () => {
	return (
		<div className="bg-gray-50">
			<Head>
				<title>Instagram</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<Feed />

			<UploadImageInput />
		</div>
	);
};

export default Home;

{
}
