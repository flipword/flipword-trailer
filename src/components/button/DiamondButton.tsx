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
			} flex flex-row justify-center items-center h-16 w-16 rounded-md mb-12 transform rotate-45 filter drop-shadow-md`}
		>
			<Img
				className="w-6 h-auto transform -rotate-45"
				src={staticFile(props.iconPath)}
			/>
		</div>
	);
};
