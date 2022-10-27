import React, {useEffect, useState} from 'react';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {WebsiteContent} from '../components/WebsiteContent';
import {ApplicationListContent} from '../components/ApplicationListContent';
import {ApplicationLayout} from '../components/ApplicationLayout';
import {WebsiteSceneEnum} from '../helpers/WebsiteSceneEnum';
import {ApplicationLearningContent} from '../components/ApplicationLearningContent';

export const WebsiteScene: React.FC<{
	websiteScene: WebsiteSceneEnum;
}> = (props) => {
	const [url, setUrl] = useState('');
	const [multiTab, setMultiTab] = useState(false);

	useEffect(() => {
		if (
			props.websiteScene === WebsiteSceneEnum.ApplicationWordList ||
			props.websiteScene === WebsiteSceneEnum.ApplicationLearning
		) {
			setUrl('https://app.flipword.io');
		}
		if (props.websiteScene === WebsiteSceneEnum.ApplicationLearning) {
			setMultiTab(true);
		} else {
			setUrl('https://flipword.io');
		}
	}, [props.websiteScene]);

	const websiteContent =
		props.websiteScene === WebsiteSceneEnum.ApplicationWordList ||
		props.websiteScene === WebsiteSceneEnum.ApplicationLearning ||
		props.websiteScene === WebsiteSceneEnum.ApplicationAdding ? (
			<ApplicationLayout>
				{props.websiteScene === WebsiteSceneEnum.ApplicationWordList ? (
					<ApplicationListContent />
				) : (
					<ApplicationLearningContent
						word={{
							nativeWord: 'Merveilleux',
							foreignWord: 'Wonderful',
						}}
						websiteScene={props.websiteScene}
					/>
				)}
			</ApplicationLayout>
		) : (
			<WebsiteContent websiteScene={props.websiteScene} />
		);
	return (
		<WebsiteContainer url={url} multiTab={multiTab}>
			{websiteContent}
		</WebsiteContainer>
	);
};
