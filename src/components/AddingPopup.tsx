import React from 'react';
import {Img, staticFile} from 'remotion';
import {DiamondButton} from './button/DiamondButton';

export const AddingPopup: React.FC = () => {
	return (
		<div className="w-full flex flex-col bg-base filter drop-shadow-md rounded-b-2xl px-4 gap-3 items-center pb-2">
			<div className="flex flex-col w-full ">
				<div className="flex flex-row justify-center w-full bg-primary rounded-b-2xl py-2 text-xl gap-1">
					<Img
						className="w-6 h-auto"
						src={staticFile('icons/google-translate.svg')}
					/>
					<span className="font-bold">Google</span>
					<span>Translate</span>
				</div>
				<div className="flex flex-row justify-center bg-primary rounded-b-2xl gap-2 self-center px-4 py-1 text-sm">
					<span>English</span>
					<Img className="w-3 h-auto" src={staticFile('icons/swap.svg')} />
					<span>French</span>
				</div>
			</div>
			<div className="flex flex-col w-full">
				<div className="self-start bg-white px-1 pb-1 ml-2 -mb-1 rounded-md font-bold text-xs z-10">
					English:
				</div>
				<div className="bg-white h-10 w-full rounded-md" />
			</div>
			<div className="bg-primary flex flex-row justify-center items-center h-10 w-10 rounded-md mb-12 transform rotate-45 filter drop-shadow-md">
				<Img
					className="w-5 h-auto transform -rotate-45"
					src={staticFile('icons/translate.svg')}
				/>
			</div>
			<div className="flex flex-col w-full -mt-12">
				<div className="self-start bg-white px-1 pb-1 ml-2 -mb-1 rounded-md font-bold text-xs z-10">
					French:
				</div>
				<div className="bg-white h-10 w-full rounded-md" />
			</div>
			<button
				type="button"
				className="flex flex-row items-center gap-1 py-1 px-3 bg-primary rounded-md font-bold text-sm filter drop-shadow-md"
			>
				<Img className="w-4 h-auto" src={staticFile('icons/save.svg')} />
				Save
			</button>
		</div>
	);
};
