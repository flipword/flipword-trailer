import React, {useEffect, useRef, useState} from 'react';
import {
	Easing,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {WordCard} from './WordCard';
import {Word} from '../models/Word';
import {Cursor} from './Cursor';
import {ClickEffect} from './ClickEffect';

export const ApplicationListContent: React.FC = () => {
	const wordList: Word[] = [
		{
			nativeWord: 'Lourd',
			foreignWord: 'Cumbersome',
		},
		{
			nativeWord: 'Recherche',
			foreignWord: 'Seeking',
		},
		{
			nativeWord: 'Dépense',
			foreignWord: 'Expenses',
		},
		{
			nativeWord: 'Racheter',
			foreignWord: 'Redeem',
		},
		{
			nativeWord: 'Maladroit',
			foreignWord: 'Clunky',
		},
		{
			nativeWord: 'Merveilleux',
			foreignWord: 'Wonderful',
		},
	];

	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const scale = interpolate(currentFrame, [0.3 * fps, fps], [0.1, 1], {
		easing: Easing.bezier(0.3, 1.8, 1, 1),
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const CursorDisplay = () => {
		return (
			<>
				<Sequence durationInFrames={fps}>
					<Cursor
						startPosition={{top: 110, left: 1860}}
						endPosition={{top: 110, left: 1860}}
						animationDuration={1}
					/>
				</Sequence>
				<Sequence from={fps} durationInFrames={3 * fps}>
					<Cursor
						startPosition={{top: 110, left: 1860}}
						endPosition={{top: 1030, left: 800}}
						animationDuration={fps}
					/>
				</Sequence>
				<Sequence from={2.2 * fps} durationInFrames={2 * fps}>
					<ClickEffect position={{top: 1030, left: 800}} />
				</Sequence>
			</>
		);
	};

	return (
		<>
			<div className="flex flex-row justify-center mt-5">
				<div className="flex flex-col gap-5">
					<div className="flex flex-row gap-8">
						<WordCard
							nativeWord={wordList[0].nativeWord}
							foreignWord={wordList[0].foreignWord}
						/>
						<WordCard
							nativeWord={wordList[1].nativeWord}
							foreignWord={wordList[1].foreignWord}
						/>
					</div>
					<div className="flex flex-row gap-8">
						<WordCard
							nativeWord={wordList[2].nativeWord}
							foreignWord={wordList[2].foreignWord}
						/>
						<WordCard
							nativeWord={wordList[3].nativeWord}
							foreignWord={wordList[3].foreignWord}
						/>
					</div>
					<div className="flex flex-row gap-8">
						<WordCard
							nativeWord={wordList[4].nativeWord}
							foreignWord={wordList[4].foreignWord}
						/>
						<div style={{transform: `scale(${scale})`}}>
							<WordCard
								nativeWord={wordList[5].nativeWord}
								foreignWord={wordList[5].foreignWord}
							/>
						</div>
					</div>
				</div>
			</div>
			{CursorDisplay()}
		</>
	);
};
