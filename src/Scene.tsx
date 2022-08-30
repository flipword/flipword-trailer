import React, {useEffect, useRef, useState} from 'react';
import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';

import {TextScene} from './scenes/TextScene';
import {UnkownWordScene} from './scenes/UnkownWordScene';
import {Transition} from './Transition';

export const Scene: React.FC = () => {
	const {fps} = useVideoConfig();
	const transitionTime = 15;
	const textSceneDuration = 2 * fps;
	const unknownWordSceneDuration = 5 * fps;
	return (
		<>
			<Sequence
				from={0}
				durationInFrames={textSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="out">
					<TextScene message="Avez vous régulièrement besoin de traduire des mots lors de votre navigation ?" />
				</Transition>
			</Sequence>
			<Sequence
				from={textSceneDuration}
				durationInFrames={unknownWordSceneDuration}
				name="FirstScene"
			>
				<Transition type="in">
					<UnkownWordScene />
				</Transition>
			</Sequence>
			<Sequence
				from={textSceneDuration + unknownWordSceneDuration}
				durationInFrames={textSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="in">
					<TextScene message="Avez vous régulièrement besoin de traduire des mots lors de votre navigation ?" />
				</Transition>
			</Sequence>
		</>
	);
};
