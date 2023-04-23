import React, { useState, Fragment } from 'react';
import { IconContext } from 'react-icons';
import { MdDeleteForever } from 'react-icons/md';
import { Dialog, Transition } from '@headlessui/react';

const TodoHeader = ({ item, renameList, deleteList }) => {
	const [state, setState] = useState(item.name);
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<div className="flex justify-start select-none">
			<input
				type="text"
				id={item.id}
				value={state}
				onChange={(e) => {
					setState(e.target.value);
					renameList(item.id, e.target.value);
				}}
				className="tracking-widest text-pribg dark:text-cyan-200 capitalize font-semibold rounded-md px-3 py-2 my-2 outline-none w-full bg-transparent"
				autoComplete="off"
			/>
			<button
				className="m-3 opacity-100 xl:opacity-0 transition duration-200 hover:opacity-100 hover:scale-125"
				onClick={(e) => {
					e.preventDefault();
					openModal();
					// deleteList(item.id);
				}}
			>
				<IconContext.Provider
					value={{
						color: 'red',
						size: '1.3em',
						className: 'global-class-name',
					}}
				>
					<MdDeleteForever />
				</IconContext.Provider>
			</button>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full pt-24 items-start justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl dark:bg-secbg bg-sectxt p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-pribg dark:text-cyan-200"
									>
										Delete card ?
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-pritxt">
											Are you sure you want to delete{' '}
											<span className="font-semibold font-mono tracking-wider px-1 rounded-md">
												{item.name}
											</span>{' '}
											?
										</p>
									</div>

									<div className="mt-4 space-x-3">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={() => {
												deleteList(item.id);
												closeModal;
											}}
										>
											Yes
										</button>
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											No
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
};

export default TodoHeader;
