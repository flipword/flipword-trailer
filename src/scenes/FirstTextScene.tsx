import React, {useEffect, useRef, useState} from 'react';
import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';

export const FirstTextScene: React.FC = () => {
	const {fps} = useVideoConfig();
	const displayedText =
		'Avez vous régulièrement besoin de traduire des mots lors de votre navigation ?';

	return (
		<AbsoluteFill className="bg-primary">
			<div className="w-full h-full px-20 flex flex-row justify-center items-center">
				<span className="text-7xl leading-tight text-center">
					{displayedText}
				</span>
			</div>
		</AbsoluteFill>
	);
};
