import React, {useState} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {Word} from '../helpers/Word';
import {DiamondButton} from './button/DiamondButton';

export const ApplicationLearningContent: React.FC = () => {
	const word: Word = {
		nativeWord: 'Merveilleux',
		foreignWord: 'Wonderful',
	};
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const [isReverse, setIsReverse] = useState(false);

	const title = isReverse ? (
		<span className="text-2xl">Essaie de deviner:</span>
	) : (
		<span className="text-2xl">Est-ce que c'est bon ?</span>
	);
	const wordSpanContent = isReverse ? (
		<span className="text-2xl">{word.nativeWord}</span>
	) : (
		<span className="text-2xl">{word.foreignWord}</span>
	);
	const bottomButtons = isReverse ? (
		<div className="flex flex-row gap-12">
			<DiamondButton iconPath="icons/add.svg" />
			<DiamondButton iconPath="icons/add.svg" />
			<DiamondButton iconPath="icons/add.svg" />
		</div>
	) : (
		<DiamondButton iconPath="icons/add.svg" />
	);

	return (
		<div className="flex flex-col justify-center mt-6 items-center gap-8">
			{title}
			<div className="flex flex-row w-64 h-80 bg-white justify-center items-center rounded-xl filter drop-shadow-md">
				{wordSpanContent}
			</div>
			{bottomButtons}
		</div>
	);
};
