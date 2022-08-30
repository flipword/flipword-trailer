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
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();

	return (
		<WebsiteContainer scrollY={currentFrame}>
			<WebsiteContent />
		</WebsiteContainer>
	);
};
