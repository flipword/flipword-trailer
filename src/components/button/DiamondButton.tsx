import React from 'react';
import {Img, staticFile} from 'remotion';

export const DiamondButton: React.FC<{
	iconPath: string;
	borderColor?: string;
}> = (props) => {
	return (
		<div
			className={`${
				props.borderColor
					? `border-2 border-${props.borderColor} bg-white`
					: 'bg-primary'
			} flex flex-row justify-center items-center h-14 w-14 rounded-md mb-12 transform rotate-45 filter drop-shadow-md`}
		>
			<Img className="transform -rotate-45" src={staticFile(props.iconPath)} />
		</div>
	);
};
