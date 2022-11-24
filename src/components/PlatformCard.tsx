import React from 'react';
import {Img, staticFile} from 'remotion';

export const PlatformCard: React.FC<{
	logoUrl: string;
	name: string;
	device: string;
}> = (props) => {
	return (
		<div className="w-96 h-28 flex bg-white flex-row border-2 border-darkGrey rounded-xl px-6 gap-3">
			<Img className="w-16 h-auto" src={staticFile(props.logoUrl)} />
			<div className="flex flex-col justify-center">
				<span className="text-3xl font-bold">{props.name}</span>
				<span className="text-xl">{props.device}</span>
			</div>
		</div>
	);
};
