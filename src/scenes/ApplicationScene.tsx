import React, {useEffect, useState} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {WebsiteContent} from '../components/WebsiteContent';
import {ApplicationLayout} from '../components/ApplicationLayout';
import {ApplicationListContent} from '../components/ApplicationListContent';

export const ApplicationScene: React.FC<{usageIndex: number}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();

	return (
		<WebsiteContainer url="https://app.flipword.io">
			<ApplicationLayout>
				<ApplicationListContent />
			</ApplicationLayout>
		</WebsiteContainer>
	);
};
