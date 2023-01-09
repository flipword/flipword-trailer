import React from 'react';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {WebsiteContent} from '../components/WebsiteContent';
import {WebsiteSceneEnum} from '../helpers/WebsiteSceneEnum';
import {
	AbsoluteFill,
	Easing,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const ZoomInComputerScene: React.FC = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const animationStartFps = 1.2 * fps;
	const animationEndFps = 1.8 * fps;
	const scaleContainer = interpolate(
		currentFrame,
		[animationStartFps, animationEndFps],
		[1, 1.7],
		{
			easing: Easing.bezier(0.4, 1, 1, 1),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);
	const scaleContent = interpolate(
		currentFrame,
		[
			animationStartFps,
			animationEndFps,
			animationEndFps + 2.5 * fps,
			animationEndFps + 3.5 * fps,
		],
		[0.6, 1, 1, 1.5],
		{
			easing: Easing.bezier(0.35, 1, 1, 1),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);
	const containerOffsetTop = `${interpolate(
		currentFrame,
		[animationStartFps, animationEndFps],
		[0, 220],
		{
			easing: Easing.bezier(0.4, 1, 1, 1),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	)}px`;
	const offsetTop = `${interpolate(
		currentFrame,
		[
			animationStartFps,
			animationEndFps,
			animationEndFps + 2.5 * fps,
			animationEndFps + 3.5 * fps,
		],
		[-125, 0, 0, 200],
		{
			easing: Easing.bezier(0.4, 1, 1, 1),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	)}px`;
	const offsetLeft = `${interpolate(
		currentFrame,
		[animationEndFps + 2.5 * fps, animationEndFps + 3.5 * fps],
		[0, 250],
		{
			easing: Easing.bezier(0.4, 1, 1, 1),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	)}px`;
	return (
		<AbsoluteFill>
			<Img
				src={staticFile('img/computer.png')}
				style={{
					marginTop: containerOffsetTop,
					transform: `scale(${scaleContainer})`,
				}}
			/>
			<div
				className="w-full h-full absolute"
				style={{
					transform: `scale(${scaleContent})`,
					top: offsetTop,
					left: offsetLeft,
				}}
			>
				<WebsiteContainer
					url="https://flipword.io"
					multiTab={false}
					tabTransition={false}
				>
					<WebsiteContent websiteScene={WebsiteSceneEnum.ArticleReading} />
				</WebsiteContainer>
			</div>
		</AbsoluteFill>
	);
};
