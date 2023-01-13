import React from 'react';
import {
	Img,
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
			currentFrame >= 11.1 * fps
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
					<Sequence durationInFrames={1.5 * fps}>
						<Cursor
							startPosition={{top: 170, left: 470}}
							endPosition={{top: 170, left: 470}}
							animationDuration={1}
						/>
					</Sequence>
					<Sequence from={1.5 * fps} durationInFrames={0.7 * fps}>
						<Cursor
							startPosition={{top: 170, left: 470}}
							endPosition={{top: 240, left: 470}}
							animationDuration={0.7 * fps}
						/>
					</Sequence>
					<Sequence from={2.2 * fps} durationInFrames={0.7 * fps}>
						<Cursor
							startPosition={{top: 240, left: 470}}
							endPosition={{top: 335, left: 500}}
							animationDuration={0.7 * fps}
						/>
					</Sequence>
					<Sequence from={2.9 * fps} durationInFrames={0.8 * fps}>
						<Cursor
							startPosition={{top: 335, left: 500}}
							endPosition={{top: 335, left: 900}}
							animationDuration={0.8 * fps}
						/>
					</Sequence>
					<Sequence from={3.7 * fps} durationInFrames={0.8 * fps}>
						<Cursor
							startPosition={{top: 335, left: 900}}
							endPosition={{top: 365, left: 500}}
							animationDuration={0.8 * fps}
						/>
					</Sequence>
					<Sequence from={4.5 * fps} durationInFrames={3 * fps}>
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
					{/* Start highlight text */}
					<Sequence durationInFrames={Number(fps)}>
						<Cursor
							startPosition={{top: 356, left: 475}}
							endPosition={{top: 356, left: 475}}
							animationDuration={1}
						/>
					</Sequence>
					{/* End highlight text */}
					<Sequence from={Number(fps)} durationInFrames={1.2 * fps}>
						<Cursor
							startPosition={{top: 356, left: 475}}
							endPosition={{top: 356, left: 555}}
							animationDuration={fps}
						/>
					</Sequence>
					{/* Go to icon button to open popup */}
					<Sequence from={2.2 * fps} durationInFrames={4.3 * fps}>
						<Cursor
							startPosition={{top: 356, left: 555}}
							endPosition={{top: 370, left: 565}}
							animationDuration={0.5 * fps}
						/>
					</Sequence>
					{/* ClickEffect on icon button to open popup */}
					<Sequence from={2.8 * fps} durationInFrames={2 * fps}>
						<ClickEffect position={{top: 370, left: 565}} />
					</Sequence>
					{/* Go to submit button in popup */}
					<Sequence from={6.5 * fps} durationInFrames={3.5 * fps}>
						<Cursor
							startPosition={{top: 370, left: 565}}
							endPosition={{top: 490, left: 425}}
							animationDuration={fps}
						/>
					</Sequence>
					{/* ClickEffect on submit button of popup */}
					<Sequence from={7.7 * fps} durationInFrames={2 * fps}>
						<ClickEffect position={{top: 490, left: 425}} />
					</Sequence>
					{/* Go to extension button in navbar */}
					<Sequence from={10 * fps} durationInFrames={2 * fps}>
						<Cursor
							startPosition={{top: 490, left: 445}}
							endPosition={{top: 65, left: 1880}}
							animationDuration={0.8 * fps}
						/>
					</Sequence>
					{/* ClickEffect on extension button in navbar */}
					<Sequence from={11 * fps} durationInFrames={2 * fps}>
						<ClickEffect position={{top: 65, left: 1880}} />
					</Sequence>
					{/* Go to train button */}
					<Sequence from={12 * fps} durationInFrames={2 * fps}>
						<Cursor
							startPosition={{top: 65, left: 1880}}
							endPosition={{top: 110, left: 1860}}
							animationDuration={0.5 * fps}
						/>
					</Sequence>
					{/* ClickEffect on train button */}
					<Sequence from={12.7 * fps} durationInFrames={2 * fps}>
						<ClickEffect position={{top: 110, left: 1860}} />
					</Sequence>
				</>
			);
		}
	};

	return (
		<>
			<div className="web-content-container w-full flex-1 overflow-auto text-browser-family">
				<div className="bg-darkGrey flex flex-row justify-center relative">
					<div className="web-content-size bg-white py-6 px-12">
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
