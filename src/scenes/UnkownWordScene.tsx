import React, {useEffect, useRef, useState} from 'react';
import {
	AbsoluteFill,
	Sequence,
	useVideoConfig,
	Img,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {WebsiteContent} from '../components/WebsiteContent';

export const UnkownWordScene: React.FC = () => {
	const currentFrame = useCurrentFrame();
	const startScrollingFrame = 60;
	const [scrollPosition, setScrollPosition] = useState(0);
	useEffect(() => {
		if (
			currentFrame > startScrollingFrame &&
			currentFrame < startScrollingFrame + 30
		) {
			setScrollPosition(60);
		} else if (currentFrame > startScrollingFrame) {
			setScrollPosition(140);
		}
	}, [currentFrame]);

	return (
		<WebsiteContainer scrollY={scrollPosition}>
			<WebsiteContent />
		</WebsiteContainer>
	);
};
