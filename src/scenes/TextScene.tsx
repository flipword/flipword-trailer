import React from 'react';
import {
	Audio,
	Easing,
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
} from 'remotion';
import {noise3D} from '@remotion/noise';
import useI18n from '../plugins/i18n.plugin';

export const TextScene: React.FC<{
	transitionIn?: boolean;
	durationInFrames: number;
	messageKey: string;
}> = ({transitionIn = true, durationInFrames, messageKey}) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const {t} = useI18n();

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
			<Audio src={staticFile('song/transition.wav')} volume={0.5} />
			<Sequence from={durationInFrames - 0.5 * fps}>
				<Audio src={staticFile('song/transition.wav')} volume={0.5} />
			</Sequence>
			<div className="flex-auto w-full" />
			<div className="w-full h-12 bg-primary bottom-text-radius filter blur-sm -mb-2" />
			<div className="absolute flex flex-row justify-center items-center w-full h-full px-48">
				<span
					dangerouslySetInnerHTML={{__html: t(messageKey)}}
					className="text-7xl leading-tight text-center"
					style={{transform: `scale(${scale})`}}
				/>
			</div>
			<div
				className="w-16 h-16 bg-primary absolute rounded-xl filter blur-sm transform rotate-45"
				style={{
					top: `${100 + noise3D('y', 100, 100, currentFrame * 0.01) * 10}px`,
					left: `${100 + noise3D('x', 100, 100, currentFrame * 0.01) * 10}px`,
				}}
			/>
			<div
				className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform rotate-45"
				style={{
					top: `${140 + noise3D('y', 100, 100, currentFrame * 0.01) * 10}px`,
					left: `${120 + noise3D('x', 100, 100, currentFrame * 0.01) * 10}px`,
				}}
			/>
			<div
				className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform rotate-25"
				style={{
					top: `${320 + noise3D('y', 200, 200, currentFrame * 0.01) * 10}px`,
					left: `${1700 + noise3D('x', 200, 200, currentFrame * 0.01) * 10}px`,
				}}
			/>
			<div
				className="w-16 h-16 bg-primary absolute rounded-xl filter blur-sm transform -rotate-25"
				style={{
					top: `${650 + noise3D('y', 300, 300, currentFrame * 0.01) * 10}px`,
					left: `${1600 + noise3D('x', 300, 300, currentFrame * 0.01) * 10}px`,
				}}
			/>
			<div
				className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform -rotate-25"
				style={{
					top: `${250 + noise3D('y', 400, 400, currentFrame * 0.01) * 10}px`,
					left: `${650 + noise3D('x', 400, 400, currentFrame * 0.01) * 10}px`,
				}}
			/>
			<div
				className="w-16 h-16 bg-primary absolute rounded-xl filter blur-sm transform rotate-25"
				style={{
					top: `${750 + noise3D('y', 500, 500, currentFrame * 0.01) * 10}px`,
					left: `${350 + noise3D('x', 500, 500, currentFrame * 0.01) * 10}px`,
				}}
			/>
			<div
				className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform rotate-25"
				style={{
					top: `${900 + noise3D('y', 600, 600, currentFrame * 0.01) * 10}px`,
					left: `${1000 + noise3D('x', 600, 600, currentFrame * 0.01) * 10}px`,
				}}
			/>
		</div>
	);
};
