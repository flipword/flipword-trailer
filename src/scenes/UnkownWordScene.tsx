import React, {useEffect, useRef, useState} from 'react';
import {
	AbsoluteFill,
	Sequence,
	useVideoConfig,
	Img,
	staticFile,
} from 'remotion';
import {WebsiteHeader} from '../components/WebsiteHeader';
import {WebsiteContent} from '../components/WebsiteContent';

export const UnkownWordScene: React.FC = () => {
	const {fps} = useVideoConfig();

	return (
		<WebsiteHeader>
			<WebsiteContent />
		</WebsiteHeader>
	);
};
