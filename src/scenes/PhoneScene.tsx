import React from 'react';
import {
	AbsoluteFill,
	Easing,
	Img,
	interpolate,
	Sequence,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {ApplicationLearningContent} from '../components/ApplicationLearningContent';
import {ApplicationLayout} from '../components/ApplicationLayout';
import {WebsiteSceneEnum} from '../models/WebsiteSceneEnum';
import {ClickEffect} from '../components/ClickEffect';

export const PhoneScene: React.FC<{durationInFrames: number}> = ({
	durationInFrames,
}) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();

	const offsetTop =
		currentFrame >= durationInFrames
			? 1
			: `${interpolate(
					currentFrame,
					[durationInFrames - 0.5 * fps, durationInFrames],
					[0, 1200],
					{
						easing: Easing.bezier(1, 0.49, 0.92, 0.74),
						extrapolateRight: 'clamp',
						extrapolateLeft: 'clamp',
					}
			  )}px`;
	return (
		<AbsoluteFill className="bg-primary">
			<div
				className="w-full h-full flex flex-row justify-center items-center"
				style={{marginTop: offsetTop}}
			>
				<div
					className="bg-base relative overflow-hidden"
					style={{height: '780px', width: '582px'}}
				>
					<ApplicationLayout
						websiteScene={WebsiteSceneEnum.ApplicationLearning}
					>
						<ApplicationLearningContent
							isMobile
							words={[
								{
									nativeWord: 'Alarmiste',
									foreignWord: 'Fearmongering',
								},
								{
									nativeWord: 'Conseil',
									foreignWord: 'Advice',
								},
								{
									nativeWord: 'Sagesse',
									foreignWord: 'Wisdom',
								},
							]}
							websiteScene={WebsiteSceneEnum.ApplicationLearning}
						/>
						<Sequence from={1.8 * fps} durationInFrames={2 * fps}>
							<ClickEffect isPhoneClick position={{top: 590, left: 280}} />
						</Sequence>
						<Sequence from={3.3 * fps} durationInFrames={2 * fps}>
							<ClickEffect isPhoneClick position={{top: 590, left: 390}} />
						</Sequence>
						<Sequence from={5.2 * fps} durationInFrames={2 * fps}>
							<ClickEffect position={{top: 590, left: 280}} />
						</Sequence>
						<Sequence from={6.9 * fps} durationInFrames={2 * fps}>
							<ClickEffect position={{top: 590, left: 390}} />
						</Sequence>
					</ApplicationLayout>
				</div>
				<Img className="absolute z-40" src={staticFile('img/phone-mock.png')} />
			</div>
		</AbsoluteFill>
	);
};
