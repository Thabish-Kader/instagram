import Image from "next/image";
import {
	BsHeart,
	BsMenuUp,
	BsPaperclip,
	BsPlus,
	BsSearch,
} from "react-icons/bs";
import { AiFillHome, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiHome, FiSend } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectpopUp, show } from "../redux/slices/popUpSlice";

export const Header = () => {
	const { data: session } = useSession();
	const router = useRouter();
	const popUp = useSelector(selectpopUp);
	const dispatch = useDispatch();
	return (
		<header className="shadow-sm border-b bg-white sticky top-0 z-50 md:px-2">
			<div className="flex justify-between items-center bg-white max-w-6xl mx-5 lg:mx-auto">
				{/* left */}
				<div
					onClick={() => router.push("/")}
					className="relative hidden lg:inline-grid  w-24 h-24 cursor-pointer"
				>
					<Image
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
						fill
						alt="/img"
						className="object-contain"
					/>
				</div>

				<div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
					<Image
						src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
						fill
						alt="/img"
						className="object-contain"
					/>
				</div>
				{/* middle */}
				<div className="max-w-sm ">
					<div className="mt-1 relative p-3 rounded-md ">
						<div className="absolute top-4 pl-3 flex items-center pointer-events-none">
							<BsSearch size={25} className="text-gray-500" />
						</div>
						<input
							type="text"
							placeholder="Search"
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
						/>
					</div>
				</div>
				{/* right */}
				{session ? (
					<>
						<div className="flex items-center justify-end space-x-4">
							<FiHome size={25} className="navBtn" />
							<BsMenuUp
								size={25}
								className="inline-flex md:hidden"
							/>
							<div className="relative navBtn">
								<div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
									3
								</div>
								<BsPaperclip size={25} className="navBtn" />
							</div>
							<BsPlus
								onClick={() => dispatch(show(!popUp))}
								size={25}
								className="navBtn"
							/>
							<AiOutlineUsergroupAdd
								size={25}
								className="navBtn"
							/>
							<BsHeart size={25} className="navBtn" />

							<Image
								onClick={() => signOut()}
								src={session?.user?.image!}
								alt="/img"
								height={35}
								width={35}
								className="rounded-full cursor-pointer"
							/>
						</div>
					</>
				) : (
					<button
						onClick={() => signIn()}
						className="bg-blue-500 p-2 rounded-lg text-white font-bold "
					>
						Sign In
					</button>
				)}
			</div>
		</header>
	);
};
