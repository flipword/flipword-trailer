import {AbsoluteFill} from 'remotion'
import React from 'react';
import {Sequence, useVideoConfig} from 'remotion';

import {TextScene} from './scenes/TextScene';
import {WebsiteScene} from './scenes/WebsiteScene';
import {Transition} from './components/transition/Transition';
import {WebsiteSceneEnum} from './helpers/WebsiteSceneEnum';
import {PhoneScene} from './scenes/PhoneScene';
import {EndScene} from './scenes/EndScene';
import {ZoomInComputerScene} from "./scenes/ZoomInComputerScence";
import {LittleTextScene} from "./scenes/LittleTextScene";

export const Scene: React.FC = () => {
	const {fps} = useVideoConfig();
	const transitionTime = 8;
	const firstTextSceneDuration = 2 * fps;
	const textSceneDuration = 3 * fps;
	const firstWebsiteSceneDuration = 6 * fps;
	const secondWebsiteSceneDuration = 11 * fps;
	const applicationListDuration = 2.1 * fps;
	const fourthWebsiteSceneDuration = 3.5 * fps;
	const applicationAddingDuration = 7.5 * fps;
	const phoneSceneDuration = 4 * fps;
	const endSceneDuration = 4 * fps;
	return (
		<AbsoluteFill className="bg-darkGrey">
			<Sequence
				durationInFrames={firstTextSceneDuration + transitionTime}
				name="FirstTextSceneDuration"
			>
				<Transition type="out">
					<TextScene message="Avez vous régulièrement besoin de <strong>traduire</strong> des mots lors de votre navigation ?" />
				</Transition>
			</Sequence>
			<Sequence
				from={firstTextSceneDuration}
				durationInFrames={firstWebsiteSceneDuration}
				name="firstWebsiteSceneDuration"
			>
				<Transition type="in">
					<ZoomInComputerScene />
				</Transition>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration + firstWebsiteSceneDuration - transitionTime
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
					firstWebsiteSceneDuration +
					textSceneDuration -
					transitionTime
				}
				durationInFrames={secondWebsiteSceneDuration + transitionTime}
				name="FirstScene"
			>
				<div className="w-full h-full flex flex-row">
					<LittleTextScene
						startFrame={3.5 * fps}
						firstMessage="Grace à l’<strong>extension navigateur</strong> ajouter des mots à votre liste"
						secondMessage="<strong>Révisez</strong> les ensuite au sein de l’application"
					/>
					<div className="flex-auto">
						 <WebsiteScene websiteScene={WebsiteSceneEnum.WordHighlight} />
					</div>
				</div>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstWebsiteSceneDuration +
					textSceneDuration +
					secondWebsiteSceneDuration
				}
				durationInFrames={applicationListDuration + transitionTime}
				name="FirstScene"
			>
				<WebsiteScene websiteScene={WebsiteSceneEnum.ApplicationWordList} />
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstWebsiteSceneDuration +
					textSceneDuration +
					secondWebsiteSceneDuration +
					applicationListDuration
				}
				durationInFrames={fourthWebsiteSceneDuration + transitionTime}
				name="FirstScene"
			>
				<WebsiteScene websiteScene={WebsiteSceneEnum.ApplicationLearning} />
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstWebsiteSceneDuration +
					textSceneDuration +
					secondWebsiteSceneDuration +
					applicationListDuration +
					fourthWebsiteSceneDuration
				}
				durationInFrames={textSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="in">
					<TextScene message="Vous pouvez également ajouter des mots directement depuis <strong>l’application</strong>" />
				</Transition>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstWebsiteSceneDuration +
					textSceneDuration +
					secondWebsiteSceneDuration +
					applicationListDuration +
					fourthWebsiteSceneDuration +
					textSceneDuration
				}
				durationInFrames={applicationAddingDuration + transitionTime}
				name="FirstScene"
			>
				<WebsiteScene websiteScene={WebsiteSceneEnum.ApplicationAdding} />
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstWebsiteSceneDuration +
					textSceneDuration +
					secondWebsiteSceneDuration +
					applicationListDuration +
					fourthWebsiteSceneDuration +
					textSceneDuration +
					applicationAddingDuration
				}
				durationInFrames={textSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="in">
					<TextScene message="<strong>Flipword</strong> est également disponible sur mobile pour réviser partout" />
				</Transition>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstWebsiteSceneDuration +
					textSceneDuration +
					secondWebsiteSceneDuration +
					applicationListDuration +
					fourthWebsiteSceneDuration +
					textSceneDuration +
					applicationAddingDuration +
					textSceneDuration
				}
				durationInFrames={phoneSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="in">
					<PhoneScene />
				</Transition>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstWebsiteSceneDuration +
					textSceneDuration +
					secondWebsiteSceneDuration +
					applicationListDuration +
					fourthWebsiteSceneDuration +
					textSceneDuration +
					applicationAddingDuration +
					textSceneDuration +
					phoneSceneDuration
				}
				durationInFrames={endSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="in">
					<EndScene />
				</Transition>
			</Sequence>
		</AbsoluteFill>
	);
};
