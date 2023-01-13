import React, {useEffect, useState} from 'react';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {WebsiteContent} from '../components/WebsiteContent';
import {ApplicationListContent} from '../components/ApplicationListContent';
import {ApplicationLayout} from '../components/ApplicationLayout';
import {WebsiteSceneEnum} from '../models/WebsiteSceneEnum';
import {ApplicationLearningContent} from '../components/ApplicationLearningContent';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const WebsiteScene: React.FC<{
	websiteScene: WebsiteSceneEnum;
}> = (props) => {
	const [url, setUrl] = useState('');
	const [multiTab, setMultiTab] = useState(false);
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();

	const startDecreasingFrame = 0.3 * fps;

	const offsetTop =
		props.websiteScene === WebsiteSceneEnum.WordHighlight
			? `${interpolate(
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
			  )}px`
			: '0px';
	const offsetLeft =
		props.websiteScene === WebsiteSceneEnum.WordHighlight
			? `${interpolate(
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
			  )}px`
			: '0px';
	const scaleContent =
		props.websiteScene === WebsiteSceneEnum.WordHighlight
			? interpolate(
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
			  )
			: 1;
	const containerPosition =
		currentFrame <= startDecreasingFrame ? 'absolute' : 'relative';

	useEffect(() => {
		if (
			props.websiteScene === WebsiteSceneEnum.ApplicationWordList ||
			props.websiteScene === WebsiteSceneEnum.ApplicationLearning ||
			props.websiteScene === WebsiteSceneEnum.ApplicationAdding
		) {
			setMultiTab(true);
			setUrl('https://app.flipword.io');
		} else {
			setUrl('https://random-learn-voc.com');
		}
	}, [props.websiteScene]);

	const websiteContent =
		props.websiteScene === WebsiteSceneEnum.ApplicationWordList ||
		props.websiteScene === WebsiteSceneEnum.ApplicationLearning ||
		props.websiteScene === WebsiteSceneEnum.ApplicationAdding ? (
			<ApplicationLayout websiteScene={props.websiteScene}>
				{props.websiteScene === WebsiteSceneEnum.ApplicationWordList ? (
					<ApplicationListContent />
				) : (
					<ApplicationLearningContent
						words={[
							{
								nativeWord: 'Merveilleux',
								foreignWord: 'Wonderful',
							},
							{
								nativeWord: 'Alarmiste',
								foreignWord: 'Fearmongering',
							},
						]}
						websiteScene={props.websiteScene}
					/>
				)}
			</ApplicationLayout>
		) : (
			<WebsiteContent websiteScene={props.websiteScene} />
		);
	return (
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
				url={url}
				multiTab={multiTab}
				tabTransition={
					props.websiteScene === WebsiteSceneEnum.ApplicationWordList
				}
			>
				{websiteContent}
			</WebsiteContainer>
		</div>
	);
};
