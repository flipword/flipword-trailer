import React from 'react';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {WebsiteContent} from '../components/WebsiteContent';
import {WebsiteSceneEnum} from '../models/WebsiteSceneEnum';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {RANDOM_LEARN_URL} from '../constants/constant';
import {LeftTextDrawer} from '../components/LeftTextDrawer';

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
		[200, 200, 200, 0, 0, 300],
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
			easing: Easing.bezier(0.35, 1, 1, 1),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	const containerPosition =
		currentFrame <= startDecreasingFrame ? 'absolute' : 'relative';

	return (
		<div className="w-full h-full flex flex-row">
			<LeftTextDrawer
				startFrame={3.5 * fps}
				endFrame={11 * fps}
				firstMessage="Grace à l’<strong>extension navigateur</strong> ajouter des mots à votre liste"
				secondMessage="<strong>Révisez</strong> les ensuite au sein de l’application"
			/>
			<div className="flex-1">
				<div
					className="w-full h-full"
					style={{
						transform: `scale(${scaleContent})`,
						top: offsetTop,
						left: offsetLeft,
						position: containerPosition,
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
			</div>
		</div>
	);
};
