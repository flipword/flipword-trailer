import React from 'react';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const TextScene: React.FC<{
	transitionIn?: boolean;
	durationInFrames: number;
	message: string;
}> = ({transitionIn = true, durationInFrames, message}) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();

	const transitionDurationInFrame = 0.5 * fps;

	const scale = interpolate(currentFrame, [0.2 * fps, fps], [0.8, 1], {
		easing: Easing.bezier(0.64, 0.02, 0.35, 1.58),
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const percent = () => {
		if (transitionIn && currentFrame <= transitionDurationInFrame) {
			return interpolate(currentFrame, [0, 0.5 * fps], [-100, 0], {
				easing: Easing.bezier(0.22, 0.8, 0.3, 0.91),
				extrapolateRight: 'clamp',
				extrapolateLeft: 'clamp',
			});
		}
		if (currentFrame >= durationInFrames - transitionDurationInFrame) {
			return interpolate(
				currentFrame,
				[durationInFrames - transitionDurationInFrame, durationInFrames],
				[0, -100],
				{
					easing: Easing.bezier(0.22, 0.8, 0.3, 0.91),
					extrapolateRight: 'clamp',
					extrapolateLeft: 'clamp',
				}
			);
		}
		return 0;
	};

	return (
		<div
			className="w-full h-full flex flex-col relative bg-darkGrey z-50"
			style={{
				transform: `translateY(${percent()}%)`,
			}}
		>
			<div className="flex-auto w-full" />
			<div className="w-full h-12 bg-primary bottom-text-radius filter blur-sm -mb-2" />
			<div className="absolute flex flex-row justify-center items-center w-full h-full px-48">
				<span
					dangerouslySetInnerHTML={{__html: message}}
					className="text-7xl leading-tight text-center"
					style={{transform: `scale(${scale})`}}
				/>
			</div>
			<div
				className="w-16 h-16 bg-primary absolute rounded-xl filter blur-sm transform rotate-45"
				style={{top: '100px', left: '100px'}}
			/>
			<div
				className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform rotate-45"
				style={{top: '140px', left: '120px'}}
			/>
			<div
				className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform rotate-25"
				style={{top: '320px', left: '1700px'}}
			/>
			<div
				className="w-16 h-16 bg-primary absolute rounded-xl filter blur-sm transform -rotate-25"
				style={{top: '650px', left: '1600px'}}
			/>
			<div
				className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform -rotate-25"
				style={{top: '250px', left: '650px'}}
			/>
			<div
				className="w-16 h-16 bg-primary absolute rounded-xl filter blur-sm transform rotate-25"
				style={{top: '750px', left: '350px'}}
			/>
			<div
				className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform rotate-25"
				style={{top: '900px', left: '1000px'}}
			/>
		</div>
	);
};
