import React, {useEffect, useState} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {WebsiteContent} from '../components/WebsiteContent';

export const UnknownWordScene: React.FC<{
	currentFrame: number;
	usageIndex: number;
}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const startScrolling = 2 * fps;
	const intervalBetweenScroll = 1.5 * fps;
	const readingStartFrame = startScrolling + intervalBetweenScroll + fps;
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		if (props.usageIndex === 1) {
			if (currentFrame === startScrolling) {
				setScrollPosition(60);
			} else if (currentFrame >= startScrolling + intervalBetweenScroll) {
				setScrollPosition(140);
			}
		} else if (props.usageIndex === 2) {
			setScrollPosition(140);
		}
	}, [currentFrame]);

	return (
		<WebsiteContainer>
			<WebsiteContent
				scrollY={scrollPosition}
				currentFrame={props.currentFrame}
				readingStartFrame={readingStartFrame}
				usageIndex={props.usageIndex}
			/>
		</WebsiteContainer>
	);
};
