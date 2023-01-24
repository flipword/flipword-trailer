import {staticFile, Audio, Img} from 'remotion';
import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const SaveWordToast: React.FC = () => {
	const currentFrame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = interpolate(
		currentFrame,
		[0, 0.5 * fps, 1.2 * fps, 1.7 * fps],
		[0, 1, 1, 0],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);
	return (
		<div
			className="flex flex-row gap-3 px-6 py-3 bg-positive rounded-lg filter drop-shadow-md"
			style={{opacity}}
		>
			<span className="whitespace-nowrap">Mot enregistré</span>
			<Img className="w-5 h-auto" src={staticFile('icons/done.svg')} />
		</div>
	);
};
