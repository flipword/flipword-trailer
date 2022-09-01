import React, {useEffect, useState} from 'react';
import {useVideoConfig, useCurrentFrame} from 'remotion';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {WebsiteContent} from '../components/WebsiteContent';

export const UnkownWordScene: React.FC = () => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const startScrolling = 2 * fps;
	const intervalBetweenScroll = 1.5 * fps;
	const readingStartFrame = startScrolling + intervalBetweenScroll + fps;
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		if (currentFrame === startScrolling) {
			setScrollPosition(60);
		} else if (currentFrame === startScrolling + intervalBetweenScroll) {
			setScrollPosition(140);
		}
	}, [currentFrame]);

	return (
		<WebsiteContainer>
			<WebsiteContent
				scrollY={scrollPosition}
				readingStartFrame={readingStartFrame}
			/>
		</WebsiteContainer>
	);
};
