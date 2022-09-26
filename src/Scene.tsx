import React from 'react';
import {Sequence, useVideoConfig} from 'remotion';

import {TextScene} from './scenes/TextScene';
import {UnknownWordScene} from './scenes/UnknownWordScene';
import {ApplicationScene} from './scenes/ApplicationScene';
import {Transition} from './Transition';

export const Scene: React.FC = () => {
	const {fps} = useVideoConfig();
	const transitionTime = 15;
	const firstTextSceneDuration = 2 * fps;
	const textSceneDuration = 3 * fps;
	const firstUnknownWordSceneDuration = 10 * fps;
	const secondUnknownWordSceneDuration = 5 * fps;
	const applicationListDuration = 2 * fps;
	const thirdUnknownWordSceneDuration = 5 * fps;
	return (
		<>
			<Sequence
				from={0}
				durationInFrames={firstTextSceneDuration + transitionTime}
				name="FirstTextSceneDuration"
			>
				<Transition type="out">
					<TextScene message="Avez vous régulièrement besoin de <strong>traduire</strong> des mots lors de votre navigation ?" />
				</Transition>
			</Sequence>
			<Sequence
				from={firstTextSceneDuration}
				durationInFrames={firstUnknownWordSceneDuration}
				name="firstUnknownWordSceneDuration"
			>
				<Transition type="in">
					<UnknownWordScene usageIndex={1} />
				</Transition>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstUnknownWordSceneDuration -
					transitionTime
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
					firstUnknownWordSceneDuration +
					textSceneDuration -
					transitionTime
				}
				durationInFrames={secondUnknownWordSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="in">
					<UnknownWordScene usageIndex={2} />
				</Transition>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstUnknownWordSceneDuration +
					textSceneDuration +
					secondUnknownWordSceneDuration -
					transitionTime
				}
				durationInFrames={applicationListDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="in">
					<ApplicationScene usageIndex={1} />
				</Transition>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstUnknownWordSceneDuration +
					textSceneDuration +
					secondUnknownWordSceneDuration +
					applicationListDuration -
					transitionTime
				}
				durationInFrames={textSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="in">
					<TextScene message="Grace à l’extension navigateur ajouter des mots à votre liste. <strong>Révisez</strong> les ensuite au sein de l’application" />
				</Transition>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstUnknownWordSceneDuration +
					textSceneDuration +
					secondUnknownWordSceneDuration +
					applicationListDuration +
					textSceneDuration -
					transitionTime
				}
				durationInFrames={thirdUnknownWordSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="in">
					<UnknownWordScene usageIndex={3} />
				</Transition>
			</Sequence>
		</>
	);
};
