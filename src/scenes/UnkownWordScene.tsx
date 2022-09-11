import React, {useEffect, useState} from 'react';
import {useVideoConfig} from 'remotion';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {WebsiteContent} from '../components/WebsiteContent';

export const UnkownWordScene: React.FC<{currentFrame: number}> = (props) => {
	const {fps} = useVideoConfig();
	const startScrolling = 4 * fps;
	const intervalBetweenScroll = 1.5 * fps;
	const readingStartFrame = startScrolling + intervalBetweenScroll + fps;
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		if (props.currentFrame === startScrolling) {
			setScrollPosition(60);
		} else if (props.currentFrame >= startScrolling + intervalBetweenScroll) {
			setScrollPosition(140);
		}
	}, [props.currentFrame]);

	return (
		<WebsiteContainer>
			<WebsiteContent
				scrollY={scrollPosition}
				currentFrame={props.currentFrame}
				readingStartFrame={readingStartFrame}
			/>
		</WebsiteContainer>
	);
};
