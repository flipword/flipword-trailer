import {AbsoluteFill} from 'remotion';
import React from 'react';
import {Sequence, useVideoConfig} from 'remotion';

import {TextScene} from './scenes/TextScene';
import {WebsiteScene} from './scenes/WebsiteScene';
import {Transition} from './components/transition/Transition';
import {WebsiteSceneEnum} from './helpers/WebsiteSceneEnum';
import {PhoneScene} from './scenes/PhoneScene';
import {EndScene} from './scenes/EndScene';
import {ZoomInComputerScene} from './scenes/ZoomInComputerScence';
import {LittleTextScene} from './scenes/LittleTextScene';

export const Scene: React.FC = () => {
	const {fps} = useVideoConfig();

	const transitionTime = 8;
	const offsetFrame = (indexScene: number) => transitionTime * indexScene;

	const firstTextSceneDuration = 2 * fps;
	const textSceneDuration = 3 * fps;
	const firstWebsiteSceneDuration = 6 * fps;
	const secondWebsiteSceneDuration = 12.7 * fps;
	const applicationListDuration = 2.1 * fps;
	const fourthWebsiteSceneDuration = 4.8 * fps;
	const applicationAddingDuration = 7.5 * fps;
	const phoneSceneDuration = 4.5 * fps;
	const endSceneDuration = 4 * fps;
	return (
		<AbsoluteFill className="bg-darkGrey">
			<Sequence
				durationInFrames={firstTextSceneDuration + transitionTime}
				name="FirstTextSceneDuration"
			>
				<TextScene
					transitionIn={false}
					durationInFrames={firstTextSceneDuration + transitionTime}
					message="Avez vous régulièrement besoin de <strong>traduire</strong> des mots lors de votre navigation ?"
				/>
			</Sequence>
			<Sequence
				from={firstTextSceneDuration - offsetFrame(1)}
				durationInFrames={firstWebsiteSceneDuration + transitionTime}
				name="firstWebsiteSceneDuration"
			>
				<ZoomInComputerScene />
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration + firstWebsiteSceneDuration - offsetFrame(2)
				}
				durationInFrames={textSceneDuration + transitionTime}
				name="FirstScene"
			>
				<TextScene
					durationInFrames={textSceneDuration + transitionTime}
					message="<strong>Flipword</strong> peut vous permettre de créer facilement une liste de vocabulaire personnalisé"
				/>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstWebsiteSceneDuration +
					textSceneDuration -
					offsetFrame(3)
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
					secondWebsiteSceneDuration -
					offsetFrame(2)
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
					applicationListDuration -
					offsetFrame(1)
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
					fourthWebsiteSceneDuration -
					offsetFrame(2)
				}
				durationInFrames={textSceneDuration + transitionTime}
				name="FirstScene"
			>
				<TextScene
					durationInFrames={textSceneDuration + transitionTime}
					message="Vous pouvez également ajouter des mots directement depuis <strong>l’application</strong>"
				/>
			</Sequence>
			<Sequence
				from={
					firstTextSceneDuration +
					firstWebsiteSceneDuration +
					textSceneDuration +
					secondWebsiteSceneDuration +
					applicationListDuration +
					fourthWebsiteSceneDuration +
					textSceneDuration -
					offsetFrame(3)
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
					applicationAddingDuration -
					offsetFrame(3)
				}
				durationInFrames={textSceneDuration + transitionTime}
				name="FirstScene"
			>
				<TextScene
					durationInFrames={textSceneDuration + transitionTime}
					message="<strong>Flipword</strong> est également disponible sur mobile pour réviser partout"
				/>
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
					textSceneDuration -
					offsetFrame(4)
				}
				durationInFrames={phoneSceneDuration + transitionTime}
				name="FirstScene"
			>
				<PhoneScene durationInFrames={phoneSceneDuration + transitionTime} />
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
					phoneSceneDuration -
					offsetFrame(3)
				}
				durationInFrames={endSceneDuration + transitionTime}
				name="FirstScene"
			>
				<EndScene />
			</Sequence>
		</AbsoluteFill>
	);
};
