import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { BsCamera } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectpopUp, show } from "../redux/slices/popUpSlice";

export const UploadImageInput = () => {
	const open = useSelector(selectpopUp);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	return (
		<>
			<Transition.Root appear show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed z-10 inset-0 overflow-y-auto"
					onClose={() => dispatch(show(!open))}
				>
					<div className="flex items-center justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-10">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 "
							enterTo="opacity-100 "
							leave="ease-in duration-200"
							leaveFrom="opacity-100 "
							leaveTo="opacity-0 "
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						<span
							className="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:Scale-95"
						>
							<div
								className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left
                            overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full
                            sm:p-6"
							>
								<div>
									{/* {selectedFile ? (
										<img
											className="w-full object-contain cursor-pointer"
											onClick={() =>
												setSelectedFile(null)
											}
											src={selectedFile as string}
											alt=""
										/>
									) : ( */}
									<div
										className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
										// onClick={() =>
										// 	filePickerRef?.current?.click()
										// }
									>
										<BsCamera
											aria-hidden="true"
											className="h-6 w-6 text-red-600"
										/>
									</div>
									{/* )} */}
									<div>
										<div className="mt-3 text-center sm:mt-5">
											<Dialog.Title
												as="h3"
												className="text-lg leading-6 font-medium text-gray-600"
											>
												Upload a photo
											</Dialog.Title>

											<div>
												<input
													// ref={filePickerRef}
													type="file"
													hidden
													// onChange={addImageToPost}
												/>
											</div>
										</div>
										<div>
											<input
												type="text"
												className="border-none focus:ring-0 w-full text-center"
												placeholder="Please enter a caption"
												// ref={captionRef}
											/>
										</div>
									</div>
									<div className="mt-5 sm:mt-6">
										<button
											type="button"
											// disabled={!selectedFile}
											// onClick={uploadPost}
											className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4
                                        py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                                        sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed  hover:disabled:bg-gray-300"
										>
											{loading
												? "Uploading..."
												: "Upload Post"}
										</button>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
};
