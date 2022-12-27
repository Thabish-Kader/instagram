import { GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import { Header } from "../../components/Header";
type Props = {
	providers: ReturnType<typeof getProviders>;
};
const SignInPage = ({ providers }: Props) => {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
				<Image
					height={500}
					width={500}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
					alt=""
				/>
				<div className="mt-40">
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								className="p-3 bg-blue-500 rounded-lg text-white"
								onClick={() =>
									signIn(provider.id, { callbackUrl: "/" })
								}
							>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders();
	return {
		props: {
			providers,
		},
	};
};

export default SignInPage;
