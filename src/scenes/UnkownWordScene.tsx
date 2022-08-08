import React, {useEffect, useRef, useState} from 'react';
import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';

export const UnkownWordScene: React.FC = () => {
	const {fps} = useVideoConfig();

	return (
		<AbsoluteFill className="bg-darkGrey">
			<div className="w-full h-full flex flex-col" />
		</AbsoluteFill>
	);
};
