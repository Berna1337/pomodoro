import { useState } from "react";
import { Dialog } from "@headlessui/react";

interface IProps {
	text: string;
}

export default function Alert(props: IProps) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className="relative z-50"
		>
			<div className="fixed inset-0 flex items-center justify-center p-4">
				<Dialog.Panel className="w-full max-w-sm rounded bg-white">
					<Dialog.Title>Good Job!</Dialog.Title>
					<Dialog.Description>{props.text}</Dialog.Description>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
}
