import React from 'react';
import {AbsoluteFill} from 'remotion';

export const TextScene: React.FC<{message: string}> = (props) => {
	return (
		<AbsoluteFill className="bg-darkGrey z-50">
			<div className="w-full h-full flex flex-col relative">
				<div className="flex-auto w-full" />
				<div className="w-full h-12 bg-primary bottom-text-radius" />
				<div className="absolute flex flex-row justify-center items-center w-full h-full px-32">
					<span
						className="text-7xl leading-tight text-center"
						dangerouslySetInnerHTML={{__html: props.message}}
					/>
				</div>
			</div>
		</AbsoluteFill>
	);
};
