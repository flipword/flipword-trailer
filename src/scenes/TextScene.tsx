import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';


export const TextScene: React.FC<{message: string}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const scale = interpolate(
		currentFrame,
		[0.2 * fps, fps],
		[0.8, 1],
		{
			easing: Easing.bezier(.64,.02,.35,1.58),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);
	return (
		<AbsoluteFill className="bg-darkGrey z-50">
			<div className="w-full h-full flex flex-col relative">
				<div className="flex-auto w-full" />
				<div className="w-full h-12 bg-primary bottom-text-radius filter blur-sm" />
				<div className="absolute flex flex-row justify-center items-center w-full h-full px-48">
					<span
						className="text-7xl leading-tight text-center"
						style={{transform: `scale(${scale})`}}
						dangerouslySetInnerHTML={{__html: props.message}}
					/>
				</div>
				<div className="w-16 h-16 bg-primary absolute rounded-xl filter blur-sm transform rotate-45" style={{top: '100px', left: '100px'}} />
				<div className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform rotate-45" style={{top: '140px', left: '120px'}} />
				<div className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform rotate-25" style={{top: '320px', left: '1700px'}} />
				<div className="w-16 h-16 bg-primary absolute rounded-xl filter blur-sm transform -rotate-25" style={{top: '650px', left: '1600px'}} />
				<div className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform -rotate-25" style={{top: '250px', left: '650px'}} />
				<div className="w-16 h-16 bg-primary absolute rounded-xl filter blur-sm transform rotate-25" style={{top: '750px', left: '350px'}} />
				<div className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform rotate-25" style={{top: '900px', left: '1000px'}} />

			</div>
		</AbsoluteFill>
	);
};
