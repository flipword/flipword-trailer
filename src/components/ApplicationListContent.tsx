import React, {useEffect, useRef, useState} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {WordCard} from './WordCard';
import {Word} from '../helpers/Word';

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
	const newCardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (newCardRef.current) {
			if (currentFrame === fps) {
				newCardRef.current.style.opacity = '1';
			}
		}
	}, [currentFrame]);

	return (
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
					<div ref={newCardRef} className="opacity-0 word-card-transition">
						<WordCard
							nativeWord={wordList[5].nativeWord}
							foreignWord={wordList[5].foreignWord}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
