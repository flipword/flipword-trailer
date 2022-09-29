import React from 'react';
import {Img, staticFile} from 'remotion';

export const DiamondButton: React.FC<{
	iconPath: string;
}> = (props) => {
	return (
		<div className="flex flex-row justify-center items-center h-14 w-14 bg-primary rounded-md mb-12 transform rotate-45 filter drop-shadow-md">
			<Img
				className="w-4 h-auto transform -rotate-45"
				src={staticFile(props.iconPath)}
			/>
		</div>
	);
};
