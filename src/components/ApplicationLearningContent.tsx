import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate, Sequence} from 'remotion';
import {Word} from '../models/Word';
import {DiamondButton} from './button/DiamondButton';
import {AddingPopup} from './AddingPopup';
import {Cursor} from './Cursor';
import {WebsiteSceneEnum} from '../models/WebsiteSceneEnum';
import {ClickEffect} from './ClickEffect';
import {SaveWordToast} from './SaveWordToast';

export const ApplicationLearningContent: React.FC<{
	websiteScene: number;
	isMobile?: boolean;
	words: Word[];
}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();

	const timeToReverse = 2 * fps;
	const timeToChangeWord = 3.7 * fps;

	const currentWordIndex =
		props.websiteScene === WebsiteSceneEnum.ApplicationLearning
			? currentFrame >= timeToChangeWord
				? 1
				: 0
			: 1;

	const isReverse =
		props.websiteScene === WebsiteSceneEnum.ApplicationLearning
			? currentFrame >= timeToReverse && currentWordIndex !== 1
			: false;

	const addingPopupTopOffset = `${
		props.websiteScene === WebsiteSceneEnum.ApplicationAdding
			? interpolate(currentFrame, [1.5 * fps, 2 * fps], [-330, 90], {
					extrapolateRight: 'clamp',
					extrapolateLeft: 'clamp',
			  })
			: -320
	}px`;

	const cartRotateDeg = `${
		props.websiteScene === WebsiteSceneEnum.ApplicationAdding
			? 0
			: isReverse
			? interpolate(currentFrame, [timeToReverse, 2.5 * fps], [0, 180], {
					extrapolateRight: 'clamp',
					extrapolateLeft: 'clamp',
			  })
			: 0
	}deg`;

	const cardDimension = props.isMobile
		? {width: '300px', height: '420px'}
		: {width: '340px', height: '520px'};
	const title = isReverse ? "Est-ce que c'est bon ?" : 'Essaie de deviner:';
	const bottomButtons = isReverse ? (
		<div className="flex flex-row gap-12">
			<DiamondButton borderColor="negative" iconPath="icons/clear.svg" />
			<DiamondButton borderColor="primary" iconPath="icons/replay.svg" />
			<DiamondButton borderColor="positive" iconPath="icons/done.svg" />
		</div>
	) : (
		<DiamondButton borderColor="primary" iconPath="icons/visibility.svg" />
	);

	const AddingPopupDisplay = () => {
		if (props.websiteScene === WebsiteSceneEnum.ApplicationAdding) {
			return (
				<>
					<div
						className="absolute z-30 flex flex-row justify-center w-full"
						style={{top: addingPopupTopOffset}}
					>
						<div className="w-96 relative">
							<AddingPopup
								startWritingFrame={3 * fps}
								foreignWordFrame={5.8 * fps}
								saveWordFrame={6.5 * fps}
							/>
						</div>
					</div>
					<Sequence from={6.5 * fps}>
						<div
							className="absolute z-50"
							style={{bottom: '120px', left: '50%'}}
						>
							<div className="relative" style={{left: '-50%'}}>
								<SaveWordToast />
							</div>
						</div>
					</Sequence>
				</>
			);
		}
		return <></>;
	};
	const CursorDisplay = () => {
		if (props.websiteScene === WebsiteSceneEnum.ApplicationLearning) {
			return (
				<>
					<Sequence durationInFrames={0.5 * fps}>
						<Cursor
							startPosition={{top: 1030, left: 800}}
							endPosition={{top: 1030, left: 800}}
							animationDuration={1}
						/>
					</Sequence>
					<Sequence from={1.7 * fps} durationInFrames={2 * fps}>
						<ClickEffect position={{top: 800, left: 950}} />
					</Sequence>
					<Sequence from={0.5 * fps} durationInFrames={2.5 * fps}>
						<Cursor
							startPosition={{top: 1030, left: 800}}
							endPosition={{top: 800, left: 950}}
							animationDuration={fps}
						/>
					</Sequence>
					<Sequence from={3.5 * fps} durationInFrames={2 * fps}>
						<ClickEffect position={{top: 800, left: 1060}} />
					</Sequence>
					<Sequence from={3 * fps} durationInFrames={2 * fps}>
						<Cursor
							startPosition={{top: 800, left: 950}}
							endPosition={{top: 800, left: 1060}}
							animationDuration={0.5 * fps}
						/>
					</Sequence>
				</>
			);
		}
		return (
			<>
				<Sequence durationInFrames={0.5 * fps}>
					<Cursor
						startPosition={{top: 800, left: 1060}}
						endPosition={{top: 800, left: 1060}}
						animationDuration={1}
					/>
				</Sequence>
				<Sequence from={1.2 * fps} durationInFrames={2 * fps}>
					<ClickEffect position={{top: 1000, left: 950}} />
				</Sequence>
				<Sequence from={0.5 * fps} durationInFrames={fps}>
					<Cursor
						startPosition={{top: 800, left: 1060}}
						endPosition={{top: 1000, left: 950}}
						animationDuration={0.5 * fps}
					/>
				</Sequence>
				<Sequence from={2.7 * fps} durationInFrames={2 * fps}>
					<ClickEffect position={{top: 240, left: 900}} />
				</Sequence>
				<Sequence from={1.5 * fps} durationInFrames={3.5 * fps}>
					<Cursor
						startPosition={{top: 1000, left: 950}}
						endPosition={{top: 240, left: 900}}
						animationDuration={fps}
					/>
				</Sequence>
				<Sequence from={5.5 * fps} durationInFrames={2 * fps}>
					<ClickEffect position={{top: 300, left: 950}} />
				</Sequence>
				<Sequence from={5 * fps} durationInFrames={fps}>
					<Cursor
						startPosition={{top: 240, left: 900}}
						endPosition={{top: 300, left: 950}}
						animationDuration={0.5 * fps}
					/>
				</Sequence>
				<Sequence from={6.6 * fps} durationInFrames={2 * fps}>
					<ClickEffect position={{top: 470, left: 950}} />
				</Sequence>
				<Sequence from={6 * fps} durationInFrames={2 * fps}>
					<Cursor
						startPosition={{top: 300, left: 950}}
						endPosition={{top: 470, left: 950}}
						animationDuration={0.5 * fps}
					/>
				</Sequence>
			</>
		);
	};

	return (
		<>
			<div className="flex flex-col justify-center mt-12 items-center gap-8 relative">
				<span className="text-3xl">{title}</span>
				<div className="flip-card" style={cardDimension}>
					<div
						className="flip-card-inner font-sans text-black text-4xl"
						style={{
							transform: `rotateY(${cartRotateDeg})`,
						}}
					>
						<div className="flip-card-front flex flex-row mb-7 justify-center items-center">
							<span>{props.words[currentWordIndex].foreignWord}</span>
						</div>
						<div />
						<div className="flip-card-back flex flex-row mb-7 justify-center items-center">
							<span>{props.words[currentWordIndex].nativeWord}</span>
						</div>
					</div>
				</div>
				{bottomButtons}
			</div>
			{CursorDisplay()}
			{AddingPopupDisplay()}
		</>
	);
};
