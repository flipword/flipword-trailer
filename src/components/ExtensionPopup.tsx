import React, {createRef, useEffect} from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';

export const ExtensionPopup: React.FC = () => {
	return (
		<div className="flex flex-col h-full w-full bg-base border border-darkGrey">
			<div className="flex flex-row w-full justify-between items-center px-2 py-1">
				<div className="flex flex-row gap-1">
					<Img className="w-6 h-auto" src={staticFile('icons/logo.svg')} />
					<h1 className="font-bold">FlipWord</h1>
				</div>
				<div className="flex flex-row gap-1 rounded-sm bg-primary text-sm font-bold px-1 py-1">
					<span>Train</span>
					<Img className="w-4 h-auto" src={staticFile('icons/train.svg')} />
				</div>
			</div>
			<div className="w-full h-px bg-darkGrey" />
			<div className="flex flex-row w-full h-20" />
			<div className="w-full h-px bg-darkGrey" />
			<div className="flex flex-row justify-center gap-1 w-full text-xs ">
				<span>Flipword -</span>
				<span className="text-blue">Extension options</span>
			</div>
		</div>
	);
};
