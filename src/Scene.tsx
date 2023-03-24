import {continueRender, delayRender} from 'remotion';
import {AbsoluteFill, Audio, staticFile} from 'remotion';
import React, {useCallback, useEffect, useState} from 'react';
import {Sequence, useVideoConfig} from 'remotion';

import {TextScene} from './scenes/TextScene';
import {WebsiteScene} from './scenes/WebsiteScene';
import {WebsiteSceneEnum} from './models/WebsiteSceneEnum';
import {PhoneScene} from './scenes/PhoneScene';
import {EndScene} from './scenes/EndScene';
import {ZoomInComputerScene} from './scenes/ZoomInComputerScene';
import {WordHighlightScene} from './scenes/WordHighlightScene';
import useI18n, {
	NativeLangContext,
	ForeignLangContext,
} from './plugins/i18n.plugin';

export const Scene: React.FC<{
	nativeLang: string;
	foreignLang: string;
}> = ({nativeLang, foreignLang}) => {
	const {fps} = useVideoConfig();

	const transitionTime = 8;
	const offsetFrame = (indexScene: number) => transitionTime * indexScene;

	const textSceneDuration = 3 * fps;
	const firstWebsiteSceneDuration = 6.5 * fps;
	const firstTextSceneDuration = 3.5 * fps;
	const secondWebsiteSceneDuration = 14.2 * fps;
	const applicationListDuration = 2.1 * fps;
	const fourthWebsiteSceneDuration = 4.8 * fps;
	const applicationAddingDuration = 8 * fps;
	const phoneSceneDuration = 8 * fps;
	const endSceneDuration = 10 * fps;
	return (
		<NativeLangContext.Provider value={nativeLang}>
			<ForeignLangContext.Provider value={foreignLang}>
				<div>
					<AbsoluteFill className="bg-darkGrey">
						<Sequence
							durationInFrames={firstWebsiteSceneDuration + transitionTime}
							name="firstWebsiteSceneDuration"
						>
							<ZoomInComputerScene />
						</Sequence>
						<Sequence
							from={firstWebsiteSceneDuration - offsetFrame(2)}
							durationInFrames={firstTextSceneDuration + transitionTime}
							name="FirstScene"
						>
							<TextScene
								durationInFrames={firstTextSceneDuration + transitionTime}
								messageKey="blocked_on_word"
							/>
						</Sequence>
						<Sequence
							from={
								firstWebsiteSceneDuration +
								firstTextSceneDuration -
								offsetFrame(3)
							}
							durationInFrames={secondWebsiteSceneDuration + transitionTime}
							name="FirstScene"
						>
							<WordHighlightScene />
						</Sequence>
						<Sequence
							from={
								firstWebsiteSceneDuration +
								firstTextSceneDuration +
								secondWebsiteSceneDuration -
								offsetFrame(2)
							}
							durationInFrames={applicationListDuration + transitionTime}
							name="FirstScene"
						>
							<WebsiteScene
								websiteScene={WebsiteSceneEnum.ApplicationWordList}
							/>
						</Sequence>
						<Sequence
							from={
								firstWebsiteSceneDuration +
								firstTextSceneDuration +
								secondWebsiteSceneDuration +
								applicationListDuration -
								offsetFrame(1)
							}
							durationInFrames={fourthWebsiteSceneDuration + transitionTime}
							name="FirstScene"
						>
							<WebsiteScene
								websiteScene={WebsiteSceneEnum.ApplicationLearning}
							/>
						</Sequence>
						<Sequence
							from={
								firstWebsiteSceneDuration +
								firstTextSceneDuration +
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
								messageKey="add_in_app"
							/>
						</Sequence>
						<Sequence
							from={
								firstWebsiteSceneDuration +
								firstTextSceneDuration +
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
								firstTextSceneDuration +
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
								messageKey="available_mobile"
							/>
						</Sequence>
						<Sequence
							from={
								firstWebsiteSceneDuration +
								firstTextSceneDuration +
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
							<PhoneScene
								durationInFrames={phoneSceneDuration + transitionTime}
							/>
						</Sequence>
						<Sequence
							from={
								firstWebsiteSceneDuration +
								firstTextSceneDuration +
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
						<Audio src={staticFile('song/music.mp3')} volume={0.5} />
					</AbsoluteFill>
				</div>
			</ForeignLangContext.Provider>
		</NativeLangContext.Provider>
	);
};
