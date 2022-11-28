import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate, Sequence} from 'remotion';
import {Word} from '../helpers/Word';
import {DiamondButton} from './button/DiamondButton';
import {AddingPopup} from './AddingPopup';
import {Cursor} from './Cursor';
import {WebsiteSceneEnum} from '../helpers/WebsiteSceneEnum';
import {ClickEffect} from "./ClickEffect";

export const ApplicationLearningContent: React.FC<{
	websiteScene: number;
	isMobile?: boolean;
	word: Word;
}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();

	const timeToReverse = 2 * fps;
	const isReverse =
		props.websiteScene === WebsiteSceneEnum.ApplicationLearning
			? currentFrame >= timeToReverse
			: true;

	const addingPopupTopOffset = `${
		props.websiteScene === WebsiteSceneEnum.ApplicationAdding
			? interpolate(currentFrame, [0.5 * fps, fps], [-320, 90], {
					extrapolateRight: 'clamp',
					extrapolateLeft: 'clamp',
			  })
			: -320
	}px`;

	const cartRotateDeg = `${
		props.websiteScene === WebsiteSceneEnum.ApplicationAdding
			? 180
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
				<div
					className="absolute z-30 flex flex-row justify-center w-full"
					style={{top: addingPopupTopOffset}}
				>
					<div className="w-96">
						<AddingPopup
							startWritingFrame={3 * fps}
							foreignWordFrame={6.3 * fps}
						/>
					</div>
				</div>
			);
		}
		return <></>;
	};
	const CursorDisplay = () => {
		if (props.websiteScene === WebsiteSceneEnum.ApplicationLearning) {
			return (
				<>
					<Sequence  durationInFrames={0.5 * fps}>
						<Cursor
							startPosition={{top: 110, left: 1860}}
							endPosition={{top: 110, left: 1860}}
							animationDuration={1}
						/>
					</Sequence>
					<Sequence from={1.7 * fps} durationInFrames={2* fps}>
						<ClickEffect position={{top: 800, left: 950}}/>
					</Sequence>
					<Sequence from={0.5 * fps} durationInFrames={2 * fps}>
						<Cursor
							startPosition={{top: 110, left: 1860}}
							endPosition={{top: 800, left: 950}}
							animationDuration={fps}
						/>
					</Sequence>
					<Sequence from={3.2 * fps} durationInFrames={2* fps}>
						<ClickEffect position={{top: 800, left: 1060}}/>
					</Sequence>
					<Sequence from={2.5 * fps} durationInFrames={2 * fps}>
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
				<Sequence  durationInFrames={2 * fps}>
					<Cursor
						startPosition={{top: 800, left: 1060}}
						endPosition={{top: 800, left: 1060}}
						animationDuration={1}
					/>
				</Sequence>
				<Sequence from={2.7 * fps} durationInFrames={2* fps}>
					<ClickEffect position={{top: 240, left: 900}}/>
				</Sequence>
				<Sequence from={1.5 * fps} durationInFrames={4 * fps}>
					<Cursor
						startPosition={{top: 800, left: 1060}}
						endPosition={{top: 240, left: 900}}
						animationDuration={fps}
					/>
				</Sequence>
				<Sequence from={6.2 * fps} durationInFrames={2* fps}>
					<ClickEffect position={{top: 300, left: 950}}/>
				</Sequence>
				<Sequence from={5.5 * fps} durationInFrames={2 * fps}>
					<Cursor
						startPosition={{top: 240, left: 900}}
						endPosition={{top: 300, left: 950}}
						animationDuration={0.5 * fps}
					/>
				</Sequence>
				<Sequence from={8.1 * fps} durationInFrames={2* fps}>
					<ClickEffect position={{top: 470, left: 950}}/>
				</Sequence>
				<Sequence from={7.5 * fps} durationInFrames={Number(fps)}>
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
							<span>{props.word.foreignWord}</span>
						</div>
						<div />
						<div className="flip-card-back flex flex-row mb-7 justify-center items-center">
							<span>{props.word.nativeWord}</span>
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
