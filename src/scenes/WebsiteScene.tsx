import React, {useEffect, useState} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {WebsiteContent} from '../components/WebsiteContent';
import {ApplicationListContent} from '../components/ApplicationListContent';
import {ApplicationLayout} from '../components/ApplicationLayout';
import {WebsiteSceneEnum} from '../helpers/WebsiteSceneEnum';
import {ApplicationLearningContent} from '../components/ApplicationLearningContent';

export const WebsiteScene: React.FC<{
	websiteScene: WebsiteSceneEnum;
}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const startScrolling = 2 * fps;
	const intervalBetweenScroll = 1.5 * fps;
	const readingStartFrame = startScrolling + intervalBetweenScroll + fps;
	const [scrollPosition, setScrollPosition] = useState(0);
	const [url, setUrl] = useState('');
	const [multiTab, setMultiTab] = useState(false);

	useEffect(() => {
		if (props.websiteScene === WebsiteSceneEnum.ArticleReading) {
			if (currentFrame === startScrolling) {
				setScrollPosition(60);
			} else if (currentFrame >= startScrolling + intervalBetweenScroll) {
				setScrollPosition(140);
			}
		} else if (props.websiteScene === WebsiteSceneEnum.WordHighlight) {
			setScrollPosition(140);
		}
	}, [currentFrame]);

	useEffect(() => {
		if (
			props.websiteScene === WebsiteSceneEnum.ApplicationWordList ||
			props.websiteScene === WebsiteSceneEnum.ApplicationLearning
		) {
			setUrl('https://app.flipword.io');
		}
		if (props.websiteScene === WebsiteSceneEnum.ApplicationLearning) {
			setMultiTab(true);
		} else {
			setUrl('https://flipword.io');
		}
	}, [props.websiteScene]);

	const websiteContent =
		props.websiteScene === WebsiteSceneEnum.ApplicationWordList ||
		props.websiteScene === WebsiteSceneEnum.ApplicationLearning ||
		props.websiteScene === WebsiteSceneEnum.ApplicationAdding ? (
			<ApplicationLayout>
				{props.websiteScene === WebsiteSceneEnum.ApplicationWordList ? (
					<ApplicationListContent />
				) : (
					<ApplicationLearningContent
						displayAddingPopup={
							props.websiteScene === WebsiteSceneEnum.ApplicationAdding
						}
					/>
				)}
			</ApplicationLayout>
		) : (
			<WebsiteContent
				scrollY={scrollPosition}
				readingStartFrame={readingStartFrame}
				websiteScene={props.websiteScene}
			/>
		);
	return (
		<WebsiteContainer url={url} multiTab={multiTab}>
			{websiteContent}
		</WebsiteContainer>
	);
};
