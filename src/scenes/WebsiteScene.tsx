import React, {useEffect, useState} from 'react';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {ApplicationListContent} from '../components/ApplicationListContent';
import {ApplicationLayout} from '../components/ApplicationLayout';
import {WebsiteSceneEnum} from '../models/WebsiteSceneEnum';
import {ApplicationLearningContent} from '../components/ApplicationLearningContent';
import {wordList} from '../data/words';
import useI18n from '../plugins/i18n.plugin';

export const WebsiteScene: React.FC<{
	websiteScene: WebsiteSceneEnum;
}> = (props) => {
	const [url, setUrl] = useState('');
	const [multiTab, setMultiTab] = useState(false);
	const {currentNativeLang, currentForeignLang} = useI18n();

	useEffect(() => {
		setMultiTab(true);
		setUrl('https://app.flipword.io');
	}, []);

	return (
		<div className="w-full h-full">
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
									nativeWord: wordList[currentNativeLang][0],
									foreignWord: wordList[currentForeignLang][0],
								},
								{
									nativeWord: wordList[currentNativeLang][2],
									foreignWord: wordList[currentForeignLang][2],
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
