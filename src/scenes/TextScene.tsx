import React from 'react';
import {AbsoluteFill} from 'remotion';

export const TextScene: React.FC<{message: string}> = (props) => {
	return (
		<AbsoluteFill className="bg-primary">
			<div className="w-full h-full px-20 flex flex-row justify-center items-center">
				<span className="text-7xl leading-tight text-center">
					{props.message}
				</span>
			</div>
		</AbsoluteFill>
	);
};
