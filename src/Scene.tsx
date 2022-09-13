import React, {useEffect, useRef, useState} from 'react';
import {
	AbsoluteFill,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {TextScene} from './scenes/TextScene';
import {UnknownWordScene} from './scenes/UnknownWordScene';
import {Transition} from './Transition';

export const Scene: React.FC = () => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
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
					<TextScene message="Avez vous régulièrement besoin de <strong>traduire</strong> des mots lors de votre navigation ?" />
				</Transition>
			</Sequence>
			<Sequence
				from={firstTextSceneDuration}
				durationInFrames={unknownWordSceneDuration}
				name="FirstScene"
			>
				<Transition type="in">
					<UnknownWordScene currentFrame={currentFrame} usageIndex={1} />
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
					<TextScene message="<strong>Flipword</strong> peut vous permettre de créer facilement une liste de vocabulaire personnalisé" />
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
					<UnknownWordScene currentFrame={currentFrame} usageIndex={2} />
				</Transition>
			</Sequence>
		</>
	);
};
