import React from 'react';
import {
	Img,
	interpolate,
	Sequence,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {ExtensionPopup} from './ExtensionPopup';
import {WebsiteSceneEnum} from '../models/WebsiteSceneEnum';
import {Cursor} from './Cursor';
import {ScalingInteractiveText} from './intercativeText/ScalingInteractiveText';
import {SelectInteractiveText} from './intercativeText/SelectInteractiveText';
import {ClassicText} from './intercativeText/ClassicText';
import {ClickEffect} from './ClickEffect';
import useI18n from '../plugins/i18n.plugin';

export const WebsiteContent: React.FC<{
	websiteScene: number;
}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const {foreignTranslate: t} = useI18n();
	const imgPart1 = staticFile('img/brain.png');
	const imgPart2 = staticFile('img/spell.png');
	const imgPart3 = staticFile('img/eyes.png');

	const FirstParagraphDisplay = () => {
		if (props.websiteScene === WebsiteSceneEnum.ArticleReading) {
			return <ScalingInteractiveText startAfter={4.5 * fps} />;
		}
		if (props.websiteScene === WebsiteSceneEnum.WordHighlight) {
			return <SelectInteractiveText />;
		}
		return <ClassicText />;
	};

	const ExtensionPopupDisplay = () => {
		if (
			props.websiteScene === WebsiteSceneEnum.WordHighlight &&
			currentFrame >= 12.6 * fps
		) {
			return (
				<div
					className="z-40 absolute w-60 filter drop-shadow-md extension-popup-position"
					style={{top: '98px', left: '1678px'}}
				>
					<ExtensionPopup />
				</div>
			);
		}
	};

	const CursorDisplay = () => {
		if (props.websiteScene === WebsiteSceneEnum.ArticleReading) {
			return (
				<>
					{/* Start reading */}
					<Sequence durationInFrames={1.5 * fps}>
						<Cursor
							startPosition={{top: 150, left: 470}}
							endPosition={{top: 150, left: 470}}
							animationDuration={1}
						/>
					</Sequence>
					{/* Go to first title */}
					<Sequence from={1.5 * fps} durationInFrames={0.7 * fps}>
						<Cursor
							startPosition={{top: 150, left: 470}}
							endPosition={{top: 240, left: 450}}
							animationDuration={0.7 * fps}
						/>
					</Sequence>
					{/* Go to start first line text */}
					<Sequence from={2.2 * fps} durationInFrames={0.7 * fps}>
						<Cursor
							startPosition={{top: 240, left: 450}}
							endPosition={{top: 340, left: 440}}
							animationDuration={0.7 * fps}
						/>
					</Sequence>
					{/* Go to end first line text */}
					<Sequence from={2.9 * fps} durationInFrames={0.8 * fps}>
						<Cursor
							startPosition={{top: 340, left: 500}}
							endPosition={{top: 340, left: 850}}
							animationDuration={0.8 * fps}
						/>
					</Sequence>
					{/* Go to unknown word */}
					<Sequence from={3.7 * fps} durationInFrames={0.8 * fps}>
						<Cursor
							startPosition={{top: 335, left: 850}}
							endPosition={{top: 375, left: 430}}
							animationDuration={0.8 * fps}
						/>
					</Sequence>
					{/* Idle cursor on last word */}
					<Sequence from={4.5 * fps} durationInFrames={3 * fps}>
						<Cursor
							startPosition={{top: 375, left: 430}}
							endPosition={{top: 375, left: 430}}
							animationDuration={1}
						/>
					</Sequence>
				</>
			);
		}
		if (props.websiteScene === WebsiteSceneEnum.WordHighlight) {
			return (
				<>
					{/* Start highlight text */}
					<Sequence durationInFrames={Number(fps)}>
						<Cursor
							startPosition={{top: 385, left: 395}}
							endPosition={{top: 385, left: 395}}
							animationDuration={1}
						/>
					</Sequence>
					{/* End highlight text */}
					<Sequence from={Number(fps)} durationInFrames={1.2 * fps}>
						<Cursor
							startPosition={{top: 385, left: 395}}
							endPosition={{top: 385, left: 475}}
							animationDuration={fps}
						/>
					</Sequence>
					{/* Go to icon button to open popup */}
					<Sequence from={2.2 * fps} durationInFrames={4.3 * fps}>
						<Cursor
							startPosition={{top: 385, left: 475}}
							endPosition={{top: 395, left: 490}}
							animationDuration={0.5 * fps}
						/>
					</Sequence>
					{/* ClickEffect on icon button to open popup */}
					<Sequence from={2.8 * fps} durationInFrames={2 * fps}>
						<ClickEffect position={{top: 395, left: 490}} />
					</Sequence>
					{/* Go to submit button in popup */}
					<Sequence from={6.5 * fps} durationInFrames={4.5 * fps}>
						<Cursor
							startPosition={{top: 395, left: 490}}
							endPosition={{top: 520, left: 580}}
							animationDuration={fps}
						/>
					</Sequence>
					{/* ClickEffect on submit button of popup */}
					<Sequence from={7.7 * fps} durationInFrames={2 * fps}>
						<ClickEffect position={{top: 520, left: 580}} />
					</Sequence>
					{/* Go to extension button in navbar */}
					<Sequence from={11 * fps} durationInFrames={2.5 * fps}>
						<Cursor
							startPosition={{top: 490, left: 650}}
							endPosition={{top: 60, left: 1880}}
							animationDuration={0.8 * fps}
						/>
					</Sequence>
					{/* ClickEffect on extension button in navbar */}
					<Sequence from={12.5 * fps} durationInFrames={2 * fps}>
						<ClickEffect position={{top: 60, left: 1880}} />
					</Sequence>
					{/* Go to train button */}
					<Sequence from={13.5 * fps} durationInFrames={2 * fps}>
						<Cursor
							startPosition={{top: 65, left: 1880}}
							endPosition={{top: 110, left: 1860}}
							animationDuration={0.5 * fps}
						/>
					</Sequence>
					{/* ClickEffect on train button */}
					<Sequence from={14.2 * fps} durationInFrames={2 * fps}>
						<ClickEffect position={{top: 110, left: 1860}} />
					</Sequence>
				</>
			);
		}
	};

	return (
		<>
			<div className="w-full overflow-auto text-browser-family">
				<div className="bg-darkGrey flex flex-row justify-center relative">
					<div className="bg-white py-6 px-12" style={{width: '65%'}}>
						<h1 className="text-4xl">{t('website_title')}</h1>
						{/* Part 1 */}
						<div className="px-5 mt-10 flex flex-row justify-start">
							<h2 className="text-3xl">{t('website_subtitle1')}</h2>
						</div>
						<div className="mt-6 w-full flex flex-row">
							{FirstParagraphDisplay()}
							<div className="flex flex-row flex-1 justify-center">
								<Img className="w-6/12 h-auto" src={imgPart2} />
							</div>
						</div>
						{/* Part 2 */}
						<div className="px-5 mt-6 flex flex-row justify-end">
							<h2 className="text-3xl">{t('website_subtitle2')}</h2>
						</div>
						<div className="mt-6 w-full flex flex-row">
							<div className="flex-1">
								<Img className="w-11/12 h-auto" src={imgPart1} />
							</div>
							<div className="text-xl flex flex-col flex-1 px-5 justify-center">
								<span>{t('website_text2')}</span>
							</div>
						</div>
						{/* Part 3 */}
						<div className="px-5 mt-6 flex flex-row justify-start">
							<h2 className="text-3xl">{t('website_subtitle3')}</h2>
						</div>
						<div className="mt-6 w-full flex flex-row">
							<div className="text-xl flex flex-col flex-1 px-5 justify-center">
								<span>{t('website_text3')}</span>
							</div>
							<div className="flex-1">
								<Img className="w-11/12 h-auto" src={imgPart3} />
							</div>
						</div>
					</div>
				</div>
			</div>
			{CursorDisplay()}
			{ExtensionPopupDisplay()}
		</>
	);
};
