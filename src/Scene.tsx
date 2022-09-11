import React, {useEffect, useRef, useState} from 'react';
import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';

import {TextScene} from './scenes/TextScene';
import {UnkownWordScene} from './scenes/UnkownWordScene';
import {Transition} from './Transition';

export const Scene: React.FC = () => {
	const {fps} = useVideoConfig();
	const transitionTime = 15;
	const firstTextSceneDuration = 2 * fps;
	const textSceneDuration = 3 * fps;
	const unknownWordSceneDuration = 10 * fps;
	return (
		<>
			<Sequence
				from={0}
				durationInFrames={firstTextSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="out">
					<TextScene message="Avez vous régulièrement besoin de traduire des mots lors de votre navigation ?" />
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
			<Sequence
				from={
					firstTextSceneDuration + unknownWordSceneDuration - transitionTime
				}
				durationInFrames={textSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="in">
					<TextScene message="Flipword peut vous permettre de créer facilement une liste de vocabulaire personnalisé" />
				</Transition>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					unknownWordSceneDuration +
					textSceneDuration -
					transitionTime
				}
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
