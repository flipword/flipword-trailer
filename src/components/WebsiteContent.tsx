import React, {createRef, useEffect, useRef, useState} from 'react';
import {
	Img,
	Sequence,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
} from 'remotion';
import {ExtensionPopup} from './ExtensionPopup';
import {WebsiteSceneEnum} from '../helpers/WebsiteSceneEnum';
import {Cursor} from './Cursor';
import {ScalingInteractiveText} from './intercativeText/ScalingInteractiveText';
import {SelectInteractiveText} from './intercativeText/SelectInteractiveText';
import {ClassicText} from './intercativeText/ClassicText';

export const WebsiteContent: React.FC<{
	websiteScene: number;
}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const title = 'How to help our brain learn new languages ?';
	const titlePart1 = 'Temporal and frontal lobe';
	const textPart1 =
		'According to a study done in 2017, it was shown that the temporal lobe and parts of the frontal lobe are activated when we are learning a new language.';
	const imgPart1 = staticFile('img/brain.png');
	const titlePart2 = 'Spell it out';
	const imgPart2 = staticFile('img/spell.png');
	const titlePart3 = 'Visualize';
	const textPart3 =
		'Once written, the brain is now able to visualize the word which will now be associated with the meaning of the word. "It has been found that meaning is first attached to the visual form followed by sound in second language written word learning".';
	const imgPart3 = staticFile('img/eyes.png');

	const FirstParagraphDisplay = () => {
		if (props.websiteScene === WebsiteSceneEnum.ArticleReading) {
			return <ScalingInteractiveText startAfter={5 * fps} />;
		}
		if (props.websiteScene === WebsiteSceneEnum.WordHighlight) {
			return <SelectInteractiveText />;
		}
		return <ClassicText />;
	};

	const ExtensionPopupDisplay = () => {
		if (
			props.websiteScene === WebsiteSceneEnum.ExtensionClick &&
			currentFrame >= 2.7 * fps
		) {
			return (
				<div
					className="z-40 absolute w-60 filter drop-shadow-md extension-popup-position"
					style={{top: '96px', left: '1678px'}}
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
					<Sequence from={0} durationInFrames={fps}>
						<Cursor
							startPosition={{top: 170, left: 470}}
							endPosition={{top: 170, left: 470}}
							animationDuration={1}
						/>
					</Sequence>
					<Sequence from={fps} durationInFrames={fps}>
						<Cursor
							startPosition={{top: 170, left: 470}}
							endPosition={{top: 240, left: 470}}
							animationDuration={fps}
						/>
					</Sequence>
					<Sequence from={2 * fps} durationInFrames={fps}>
						<Cursor
							startPosition={{top: 240, left: 470}}
							endPosition={{top: 335, left: 500}}
							animationDuration={fps}
						/>
					</Sequence>
					<Sequence from={3 * fps} durationInFrames={fps}>
						<Cursor
							startPosition={{top: 335, left: 500}}
							endPosition={{top: 335, left: 900}}
							animationDuration={fps}
						/>
					</Sequence>
					<Sequence from={4 * fps} durationInFrames={fps}>
						<Cursor
							startPosition={{top: 335, left: 900}}
							endPosition={{top: 365, left: 500}}
							animationDuration={fps}
						/>
					</Sequence>
					<Sequence from={5 * fps} durationInFrames={3 * fps}>
						<Cursor
							startPosition={{top: 365, left: 500}}
							endPosition={{top: 365, left: 500}}
							animationDuration={1}
						/>
					</Sequence>
				</>
			);
		}
		if (props.websiteScene === WebsiteSceneEnum.WordHighlight) {
			return (
				<>
					<Sequence from={0} durationInFrames={Number(fps)}>
						<Cursor
							startPosition={{top: 356, left: 460}}
							endPosition={{top: 356, left: 460}}
							animationDuration={1}
						/>
					</Sequence>
					<Sequence from={Number(fps)} durationInFrames={Number(fps)}>
						<Cursor
							startPosition={{top: 356, left: 460}}
							endPosition={{top: 356, left: 540}}
							animationDuration={fps}
						/>
					</Sequence>
					<Sequence from={2 * fps} durationInFrames={0.5 * fps}>
						<Cursor
							startPosition={{top: 356, left: 540}}
							endPosition={{top: 356, left: 540}}
							animationDuration={1}
						/>
					</Sequence>
					<Sequence from={2.5 * fps} durationInFrames={0.5 * fps}>
						<Cursor
							startPosition={{top: 356, left: 540}}
							endPosition={{top: 370, left: 555}}
							animationDuration={0.5 * fps}
						/>
					</Sequence>
					<Sequence from={3 * fps} durationInFrames={0.5 * fps}>
						<Cursor
							startPosition={{top: 370, left: 555}}
							endPosition={{top: 495, left: 645}}
							animationDuration={0.5 * fps}
						/>
					</Sequence>
					<Sequence from={3.5 * fps} durationInFrames={3 * fps}>
						<Cursor
							startPosition={{top: 495, left: 645}}
							endPosition={{top: 495, left: 645}}
							animationDuration={1}
						/>
					</Sequence>
				</>
			);
		}
		return (
			<>
				<Sequence from={0} durationInFrames={fps}>
					<Cursor
						startPosition={{top: 495, left: 645}}
						endPosition={{top: 495, left: 645}}
						animationDuration={1}
					/>
				</Sequence>
				<Sequence from={fps} durationInFrames={1.5 * fps}>
					<Cursor
						startPosition={{top: 495, left: 645}}
						endPosition={{top: 70, left: 1880}}
						animationDuration={1.5 * fps}
					/>
				</Sequence>
				<Sequence from={2.5 * fps} durationInFrames={0.5 * fps}>
					<Cursor
						startPosition={{top: 70, left: 1880}}
						endPosition={{top: 70, left: 1880}}
						animationDuration={1}
					/>
				</Sequence>
				<Sequence from={3 * fps} durationInFrames={Number(fps)}>
					<Cursor
						startPosition={{top: 70, left: 1880}}
						endPosition={{top: 110, left: 1860}}
						animationDuration={0.5 * fps}
					/>
				</Sequence>
			</>
		);
	};

	return (
		<>
			<div className="w-full flex-1 overflow-auto">
				<div className="bg-darkGrey flex flex-row justify-center relative">
					<div className="w-7/12 bg-white py-6 px-12">
						<h1 className="text-4xl">{title}</h1>
						{/* Part 1 */}
						<div className="px-5 mt-10 flex flex-row justify-start">
							<h2 className="text-3xl">{titlePart2}</h2>
						</div>
						<div className="mt-6 w-full flex flex-row">
							{FirstParagraphDisplay()}
							<div className="flex flex-row flex-1 justify-center">
								<Img className="w-6/12 h-auto" src={imgPart2} />
							</div>
						</div>
						{/* Part 2 */}
						<div className="px-5 mt-6 flex flex-row justify-end">
							<h2 className="text-3xl">{titlePart1}</h2>
						</div>
						<div className="mt-6 w-full flex flex-row">
							<div className="flex-1">
								<Img className="w-11/12 h-auto" src={imgPart1} />
							</div>
							<div className="text-xl flex flex-col flex-1 px-5 justify-center">
								<span>{textPart1}</span>
							</div>
						</div>
						{/* Part 3 */}
						<div className="px-5 mt-6 flex flex-row justify-start">
							<h2 className="text-3xl">{titlePart3}</h2>
						</div>
						<div className="mt-6 w-full flex flex-row">
							<div className="text-xl flex flex-col flex-1 px-5 justify-center">
								<span>{textPart3}</span>
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
