import React from 'react';
import {Img, staticFile} from 'remotion';

export const PlatformCard: React.FC<{
	logoUrl: string;
	name: string;
	device: string;
}> = (props) => {
	return (
		<div className="w-80 h-24 flex bg-white flex-row border-2 border-darkGrey rounded-xl px-6 gap-3">
			<Img className="w-12 h-auto" src={staticFile(props.logoUrl)} />
			<div className="flex flex-col justify-center">
				<span className="text-2xl font-bold">{props.name}</span>
				<span className="-mt-1 text-lg">{props.device}</span>
			</div>
		</div>
	);
};
