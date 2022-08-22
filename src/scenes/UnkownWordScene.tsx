import React, {useEffect, useRef, useState} from 'react';
import {
	AbsoluteFill,
	Sequence,
	useVideoConfig,
	Img,
	staticFile,
} from 'remotion';
import {WebsiteHeader} from '../components/WebsiteHeader';

export const UnkownWordScene: React.FC = () => {
	const {fps} = useVideoConfig();

	return (
		<WebsiteHeader>
			<span>TEST</span>
		</WebsiteHeader>
	);
};
