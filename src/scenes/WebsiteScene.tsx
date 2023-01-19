import React, {useEffect, useState} from 'react';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {ApplicationListContent} from '../components/ApplicationListContent';
import {ApplicationLayout} from '../components/ApplicationLayout';
import {WebsiteSceneEnum} from '../models/WebsiteSceneEnum';
import {ApplicationLearningContent} from '../components/ApplicationLearningContent';

export const WebsiteScene: React.FC<{
	websiteScene: WebsiteSceneEnum;
}> = (props) => {
	const [url, setUrl] = useState('');
	const [multiTab, setMultiTab] = useState(false);

	useEffect(() => {
		setMultiTab(true);
		setUrl('https://app.flipword.io');
	}, [])

	return (
		<div
			className="w-full h-full"
		>
			<WebsiteContainer
				url={url}
				multiTab={multiTab}
				tabTransition={
					props.websiteScene === WebsiteSceneEnum.ApplicationWordList
				}
			>
				<ApplicationLayout websiteScene={props.websiteScene}>
					{props.websiteScene === WebsiteSceneEnum.ApplicationWordList ? (
						<ApplicationListContent />
					) : (
						<ApplicationLearningContent
							words={[
								{
									nativeWord: 'Merveilleux',
									foreignWord: 'Wonderful',
								},
								{
									nativeWord: 'Alarmiste',
									foreignWord: 'Fearmongering',
								},
							]}
							websiteScene={props.websiteScene}
						/>
					)}
				</ApplicationLayout>
			</WebsiteContainer>
		</div>
	);
};
