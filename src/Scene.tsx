import React from 'react';
import {Sequence, useVideoConfig} from 'remotion';

import {TextScene} from './scenes/TextScene';
import {WebsiteScene} from './scenes/WebsiteScene';
import {Transition} from './Transition';
import {WebsiteSceneEnum} from './helpers/WebsiteSceneEnum';

export const Scene: React.FC = () => {
	const {fps} = useVideoConfig();
	const transitionTime = 15;
	const firstTextSceneDuration = 2 * fps;
	const textSceneDuration = 3 * fps;
	const firstWebsiteSceneDuration = 10 * fps;
	const secondWebsiteSceneDuration = 5 * fps;
	const applicationListDuration = 2 * fps;
	const thirdWebsiteSceneDuration = 5 * fps;
	const fourthWebsiteSceneDuration = 3.5 * fps;
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
				durationInFrames={firstWebsiteSceneDuration}
				name="firstWebsiteSceneDuration"
			>
				<Transition type="in">
					<WebsiteScene websiteScene={WebsiteSceneEnum.ArticleReading} />
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
				<Transition type="in">
					<WebsiteScene websiteScene={WebsiteSceneEnum.WordHighlight} />
				</Transition>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstWebsiteSceneDuration +
					textSceneDuration +
					secondWebsiteSceneDuration -
					transitionTime
				}
				durationInFrames={applicationListDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="in">
					<WebsiteScene websiteScene={WebsiteSceneEnum.ApplicationWordList} />
				</Transition>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstWebsiteSceneDuration +
					textSceneDuration +
					secondWebsiteSceneDuration +
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
					firstWebsiteSceneDuration +
					textSceneDuration +
					secondWebsiteSceneDuration +
					applicationListDuration +
					textSceneDuration -
					transitionTime
				}
				durationInFrames={thirdWebsiteSceneDuration + transitionTime}
				name="FirstScene"
			>
				<Transition type="in">
					<WebsiteScene websiteScene={WebsiteSceneEnum.ExtensionClick} />
				</Transition>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstWebsiteSceneDuration +
					textSceneDuration +
					secondWebsiteSceneDuration +
					applicationListDuration +
					textSceneDuration +
					thirdWebsiteSceneDuration
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
					textSceneDuration +
					thirdWebsiteSceneDuration +
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
					textSceneDuration +
					thirdWebsiteSceneDuration +
					fourthWebsiteSceneDuration +
					textSceneDuration
				}
				durationInFrames={fourthWebsiteSceneDuration + transitionTime}
				name="FirstScene"
			>
				<WebsiteScene websiteScene={WebsiteSceneEnum.ApplicationAdding} />
			</Sequence>
		</>
	);
};
