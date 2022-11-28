import React from 'react';
import {AbsoluteFill, random, useCurrentFrame} from 'remotion';
import { noise3D } from "@remotion/noise";


export const TextScene: React.FC<{message: string}> = (props) => {
	const frame = useCurrentFrame();
	const {x1, y1} = {
		x1: `${noise3D("x", 100, 100, frame * 0.05) + 100}px`,
		y1: `${noise3D("x", 100, 100, frame* 0.05) + 100}px`,
	}
	console.log(x1);
	return (
		<AbsoluteFill className="bg-darkGrey z-50">
			<div className="w-full h-full flex flex-col relative">
				<div className="flex-auto w-full" />
				<div className="w-full h-12 bg-primary bottom-text-radius filter blur-sm" />
				<div className="absolute flex flex-row justify-center items-center w-full h-full px-48">
					<span
						className="text-7xl leading-tight text-center"
						dangerouslySetInnerHTML={{__html: props.message}}
					/>
				</div>
				<div className="w-16 h-16 bg-primary absolute rounded-xl filter blur-sm transform rotate-45" style={{top: x1, left: y1}} />
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
