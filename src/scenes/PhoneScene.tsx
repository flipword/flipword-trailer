import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {ApplicationLearningContent} from '../components/ApplicationLearningContent';
import {ApplicationLayout} from '../components/ApplicationLayout';
import {WebsiteSceneEnum} from '../helpers/WebsiteSceneEnum';

export const PhoneScene: React.FC = () => {
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
					</ApplicationLayout>
				</div>
				<Img className="absolute z-40" src={staticFile('img/phone-mock.png')} />
			</div>
		</AbsoluteFill>
	);
};
