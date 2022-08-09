import React, {useEffect, useRef, useState} from 'react';
import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';

import {FirstTextScene} from './scenes/FirstTextScene';
import {UnkownWordScene} from "./scenes/UnkownWordScene";
import {Transition} from './Transition';

export const Scene: React.FC = () => {
	const {fps} = useVideoConfig();
	const transitionTime = 15;
	const firstTextSceneDuration = 5 * fps;
	const unknownWordSceneDuration = 5 * fps;
	return (
		<>
			<Sequence
				from={0}
				durationInFrames={firstTextSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="out">
					<FirstTextScene />
				</Transition>
			</Sequence>
			<Sequence
				from={firstTextSceneDuration}
				durationInFrames={unknownWordSceneDuration}
				name="FirstScene"
			>
				<Transition type="in">
					<UnkownWordScene />
				</Transition>
			</Sequence>
		</>
	);
};
