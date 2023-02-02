import React from 'react';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {WebsiteContent} from '../components/WebsiteContent';
import {WebsiteSceneEnum} from '../models/WebsiteSceneEnum';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {RANDOM_LEARN_URL} from '../constants/constant';
import {PopupWindow} from '../components/PopupWindow';

export const WordHighlightScene: React.FC = () => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const startDecreasingFrame = 0.3 * fps;

	const offsetTop = `${interpolate(
		currentFrame,
		[
			0,
			0.2 * fps,
			startDecreasingFrame,
			startDecreasingFrame + 0.5 * fps,
			11.5 * fps,
			12 * fps,
		],
		[200, 200, 200, 0, 0, 380],
		{
			easing: Easing.bezier(0.4, 1, 1, 1),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	)}px`;

	const offsetLeft = `${interpolate(
		currentFrame,
		[
			0,
			0.2 * fps,
			startDecreasingFrame,
			startDecreasingFrame + 0.5 * fps,
			11.5 * fps,
			12 * fps,
		],
		[250, 250, 250, 0, 0, -578],
		{
			easing: Easing.bezier(0.4, 1, 1, 1),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	)}px`;
	const scaleContent = interpolate(
		currentFrame,
		[
			0,
			0.2 * fps,
			startDecreasingFrame,
			startDecreasingFrame + 0.5 * fps,
			11.5 * fps,
			12 * fps,
		],
		[1.5, 1.5, 1.5, 1, 1, 1.6],
		{
			easing: Easing.bezier(0.4, 1, 1, 1),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	return (
		<div className="w-full h-full relative">
			<div
				style={{
					transform: `scale(${scaleContent})`,
					top: offsetTop,
					left: offsetLeft,
					position: "relative"
				}}
			>
				<WebsiteContainer
					url={RANDOM_LEARN_URL}
					multiTab={false}
					tabTransition={false}
				>
					<WebsiteContent websiteScene={WebsiteSceneEnum.WordHighlight} />
				</WebsiteContainer>
			</div>
			<div className="absolute" style={{top: '230px', left: '925px'}}>
				<PopupWindow
					startFrame={3.5 * fps}
					endFrame={11 * fps}
					firstMessage="Avec <strong>FlipWord</strong> traduisez et ajoutez des mots à votre liste"
					secondMessage="<strong>Révisez</strong> les ensuite au sein de l’application"
				/>
			</div>
		</div>
	);
};
