import React, {useEffect, useRef, useState} from 'react';
import {Img, useCurrentFrame, useVideoConfig, staticFile} from 'remotion';
import {Word} from '../helpers/Word';
import {DiamondButton} from './button/DiamondButton';
import {AddingPopup} from './AddingPopup';

export const ApplicationLearningContent: React.FC<{
	displayAddingPopup: boolean;
}> = (props) => {
	const word: Word = {
		nativeWord: 'Merveilleux',
		foreignWord: 'Wonderful',
	};
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const [isReverse, setIsReverse] = useState(false);
	const flipCardRef = useRef<HTMLDivElement>(null);
	const cursorRef = useRef<HTMLImageElement>(null);
	const addingPopupRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (cursorRef.current !== null) {
			if (props.displayAddingPopup && addingPopupRef.current !== null) {
				if (currentFrame === 1) {
					cursorRef.current.style.left = '730px';
					cursorRef.current.style.top = '540px';
				}
				if (currentFrame === Number(fps)) {
					addingPopupRef.current.style.top = '80px';
				}
			} else {
				if (currentFrame === 1) {
					cursorRef.current.style.left = '1215px';
					cursorRef.current.style.top = '90px';
				}
				if (currentFrame === 0.5 * fps) {
					cursorRef.current.style.left = '635px';
					cursorRef.current.style.top = '540px';
				}
				if (currentFrame === 1.5 * fps) {
					setIsReverse(true);
				}
				if (currentFrame === 2 * fps) {
					cursorRef.current.style.left = '730px';
				}
			}
		}
	}, [currentFrame]);

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

	return (
		<>
			<div className="flex flex-col justify-center mt-6 items-center gap-8 relative">
				<span className="text-2xl">{title}</span>
				<div className="flip-card">
					<div
						ref={flipCardRef}
						className={`flip-card-inner font-sans text-black text-2xl ${
							isReverse ? 'reverse-card' : ''
						}`}
					>
						<div className="flip-card-front flex flex-row mb-7 justify-center items-center">
							<span>{word.foreignWord}</span>
						</div>
						<div />
						<div className="flip-card-back flex flex-row mb-7 justify-center items-center">
							<span>{word.nativeWord}</span>
						</div>
					</div>
				</div>
				{bottomButtons}
			</div>
			<Img
				ref={cursorRef}
				className="cursor-transition w-5 h-auto absolute z-40"
				src={staticFile('icons/cursor.svg')}
			/>
			{!props.displayAddingPopup ? (
				<></>
			) : (
				<div
					ref={addingPopupRef}
					className="absolute z-30 flex flex-row justify-center w-full adding-popup"
				>
					<div className="w-72">
						<AddingPopup />
					</div>
				</div>
			)}
		</>
	);
};
