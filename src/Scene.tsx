import {AbsoluteFill} from 'remotion';
import React from 'react';
import {Sequence, useVideoConfig} from 'remotion';

import {TextScene} from './scenes/TextScene';
import {WebsiteScene} from './scenes/WebsiteScene';
import {WebsiteSceneEnum} from './models/WebsiteSceneEnum';
import {PhoneScene} from './scenes/PhoneScene';
import {EndScene} from './scenes/EndScene';
import {ZoomInComputerScene} from './scenes/ZoomInComputerScene';
import {WordHighlightScene} from './scenes/WordHighlightScene';

export const Scene: React.FC = () => {
	const {fps} = useVideoConfig();

	const transitionTime = 8;
	const offsetFrame = (indexScene: number) => transitionTime * indexScene;

	const textSceneDuration = 3 * fps;
	const firstWebsiteSceneDuration = 6.5 * fps;
	const secondWebsiteSceneDuration = 14.2 * fps;
	const applicationListDuration = 2.1 * fps;
	const fourthWebsiteSceneDuration = 4.8 * fps;
	const applicationAddingDuration = 8 * fps;
	const phoneSceneDuration = 4.5 * fps;
	const endSceneDuration = 4 * fps;
	return (
		<AbsoluteFill className="bg-darkGrey">
			<Sequence
				durationInFrames={firstWebsiteSceneDuration + transitionTime}
				name="firstWebsiteSceneDuration"
			>
				<ZoomInComputerScene />
			</Sequence>
			<Sequence
				from={firstWebsiteSceneDuration - offsetFrame(2)}
				durationInFrames={textSceneDuration + transitionTime}
				name="FirstScene"
			>
				<TextScene
					durationInFrames={textSceneDuration + transitionTime}
					message="Lors de votre <strong>navigation</strong>, vous êtes vous déjà retrouvé bloqué par un mot ? "
				/>
			</Sequence>
			<Sequence
				from={firstWebsiteSceneDuration + textSceneDuration - offsetFrame(3)}
				durationInFrames={secondWebsiteSceneDuration + transitionTime}
				name="FirstScene"
			>
				<WordHighlightScene />
			</Sequence>
			<Sequence
				from={
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
					message="Vous pouvez également <strong>ajoutez</strong> des mots directement depuis l’application"
				/>
			</Sequence>
			<Sequence
				from={
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
					message="Disponible sur <strong>mobile</strong>  pour réviser partout"
				/>
			</Sequence>
			<Sequence
				from={
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
