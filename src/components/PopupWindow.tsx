import React from 'react';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const PopupWindow: React.FC<{
	firstMessage: string;
	secondMessage: string;
	startFrame: number;
	endFrame: number;
}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const firstTextEndFrame = props.startFrame + 5 * fps;
	const secondTextStartFrame = firstTextEndFrame + 0.2 * fps;
	const scale = interpolate(
		currentFrame,
		[
			props.startFrame,
			props.startFrame + 0.5 * fps,
			props.endFrame - 0.5 * fps,
			props.endFrame,
		],
		[0, 1, 1, 0],
		{
			easing: Easing.bezier(
				0.64,
				0.02,
				0.35,
				currentFrame < props.endFrame - 0.5 * fps ? 1.58 : 1
			),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	const textOpacity = interpolate(
		currentFrame,
		[
			firstTextEndFrame,
			firstTextEndFrame + 0.2 * fps,
			firstTextEndFrame + 0.4 * fps,
			firstTextEndFrame + 0.6 * fps,
		],
		[1, 0, 0, 1],
		{
			easing: Easing.bezier(0.4, 1, 1, 1),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	const displayedText =
		secondTextStartFrame >= currentFrame
			? props.firstMessage
			: props.secondMessage;

	return props.startFrame >= currentFrame ? (
		<></>
	) : (
		<div
			className="h-full flex flex-row z-50"
			style={{
				width: '800px',
				height: '600px',
				transform: `scale(${scale})`,
			}}
		>
			<div className="flex flex-col flex-auto relative flex-col bg-lightGrey rounded-xl filter drop-shadow-lg">
				<div className="flex flex-row bg-lightGrey w-full h-8 justify-end items-center gap-2 px-3 rounded-t-xl">
					<div className="w-3 h-3 rounded-full bg-negative" />
					<div className="w-3 h-3 rounded-full bg-primary" />
					<div className="w-3 h-3 rounded-full bg-positive" />
				</div>
				<div className="flex-auto w-full" />
				<div className="absolute flex flex-row justify-center items-center w-full h-full">
					<span
						dangerouslySetInnerHTML={{__html: displayedText}}
						className="text-7xl leading-tight text-center mr-5"
						style={{
							opacity: textOpacity,
						}}
					/>
				</div>
			</div>
		</div>
	);
};
