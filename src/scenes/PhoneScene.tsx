import React from 'react';
import {AbsoluteFill, Img, Sequence, staticFile, useVideoConfig} from 'remotion';
import {ApplicationLearningContent} from '../components/ApplicationLearningContent';
import {ApplicationLayout} from '../components/ApplicationLayout';
import {WebsiteSceneEnum} from '../helpers/WebsiteSceneEnum';
import {ClickEffect} from "../components/ClickEffect";

export const PhoneScene: React.FC = () => {
	const { fps } = useVideoConfig()
	return (
		<AbsoluteFill className="bg-primary">
			<div className="w-full h-full flex flex-row justify-center items-center">
				<div
					className="bg-base relative overflow-hidden"
					style={{height: '780px', width: '582px'}}
				>
					<ApplicationLayout>
						<ApplicationLearningContent
							isMobile
							word={{
								nativeWord: 'Alarmiste',
								foreignWord: 'Fearmongering',
							}}
							websiteScene={WebsiteSceneEnum.ApplicationLearning}
						/>
						<Sequence from={1.8 * fps} durationInFrames={2* fps}>
							<ClickEffect position={{top: 590, left: 280}}/>
						</Sequence>
						<Sequence from={3.5 * fps} durationInFrames={2* fps}>
							<ClickEffect position={{top: 590, left: 390}}/>
						</Sequence>
					</ApplicationLayout>
				</div>
				<Img className="absolute z-40" src={staticFile('img/phone-mock.png')} />
			</div>
		</AbsoluteFill>
	);
};
