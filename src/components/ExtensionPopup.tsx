import React from 'react';
import {Img, staticFile} from 'remotion';

export const ExtensionPopup: React.FC = () => {
	return (
		<div className="flex flex-col h-full w-full bg-base border border-darkGrey">
			<div className="flex flex-row w-full justify-between items-center px-2 py-1">
				<div className="flex flex-row gap-1">
					<Img className="w-6 h-auto" src={staticFile('icons/logo.svg')} />
					<h1 className="font-bold">FlipWord</h1>
				</div>
				<div className="flex flex-row gap-1 rounded-md bg-primary text-sm font-bold py-1 px-2 filter drop-shadow-md">
					<span>Train</span>
					<Img className="w-4 h-auto" src={staticFile('icons/train.svg')} />
				</div>
			</div>
			<div className="w-full h-px bg-darkGrey" />
			<div className="flex flex-row w-full h-full">
				<div className="flex flex-col flex-auto py-2 px-4 items-center gap-2">
					<div className="flex flex-col w-full">
						<div className="self-start bg-white px-1 pb-1 ml-2 -mb-1 rounded-sm font-bold text-xs">
							French:
						</div>
						<div className="bg-white h-7 w-full rounded-sm" />
					</div>
					<button
						type="button"
						className="flex flex-row items-center gap-1 py-1 px-3 bg-primary rounded-md font-bold text-sm filter drop-shadow-md"
					>
						<Img
							className="w-4 h-auto"
							src={staticFile('icons/translate.svg')}
						/>
						Translate
					</button>
					<div className="flex flex-col w-full">
						<div className="self-start bg-white px-1 pb-1 ml-2 -mb-1 rounded-sm font-bold text-xs z-10">
							English:
						</div>
						<div className="bg-white h-7 w-full rounded-sm" />
					</div>
					<button
						type="button"
						className="flex flex-row items-center gap-1 py-1 px-3 bg-primary rounded-md font-bold text-sm filter drop-shadow-md"
					>
						<Img className="w-4 h-auto" src={staticFile('icons/save.svg')} />
						Save
					</button>
				</div>
				<div className="flex flex-col gap-2 justify-center self-auto pr-1 pb-4">
					<Img className="w-4 h-auto" src={staticFile('icons/arrow-top.svg')} />
					<button
						type="button"
						className="bg-primary p-2 rounded-sm filter drop-shadow-md"
					>
						<Img className="w-4 h-auto" src={staticFile('icons/swap.svg')} />
					</button>
					<Img
						className="w-4 h-auto"
						src={staticFile('icons/arrow-bottom.svg')}
					/>
				</div>
			</div>
			<div className="w-full h-px bg-darkGrey" />
			<div className="flex flex-row justify-center gap-1 w-full text-xs ">
				<span>Flipword -</span>
				<span className="text-blue">Extension options</span>
			</div>
		</div>
	);
};
