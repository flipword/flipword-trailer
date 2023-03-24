import React from 'react';
import {
	Easing,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import useI18n from '../plugins/i18n.plugin';

export const AddingPopup: React.FC<{
	startWritingFrame: number;
	foreignWordFrame: number;
	saveWordFrame: number;
}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const {t} = useI18n();
	const isTypingBarVisible =
		currentFrame % fps >= fps / 2 ? 'visible' : 'hidden';
	const foreignWord = props.saveWordFrame >= currentFrame ? 'Advice' : '';
	const nativeWord = props.saveWordFrame >= currentFrame ? 'Conseil' : '';
	const typingText = foreignWord.substring(
		0,
		interpolate(
			currentFrame,
			[props.startWritingFrame, props.startWritingFrame + 1.5 * fps],
			[0, nativeWord.length],
			{
				easing: Easing.bezier(0.13, 0.75, 0.5, 1),
				extrapolateRight: 'clamp',
				extrapolateLeft: 'clamp',
			}
		)
	);
	return (
		<div className="w-full flex flex-col bg-base filter drop-shadow-md rounded-b-2xl px-4 gap-3 items-center pb-2 relative">
			<div className="flex flex-col w-full ">
				<div className="flex flex-row justify-center w-full bg-primary rounded-b-2xl py-2 text-3xl gap-2">
					<Img
						className="w-8 h-auto"
						src={staticFile('icons/google-translate.svg')}
					/>
					<span className="font-bold">Google</span>
					<span>{t('translate')}</span>
				</div>
				<div className="flex flex-row justify-center bg-primary rounded-b-2xl gap-2 self-center px-6 py-1 text-lg -mt-1">
					<span>English</span>
					<Img className="w-4 h-auto" src={staticFile('icons/swap.svg')} />
					<span>French</span>
				</div>
			</div>
			<div className="flex flex-col w-full">
				<div className="self-start bg-white px-2 pb-1 ml-2 -mb-1 rounded-md font-bold text-md z-10">
					English:
				</div>
				<div className="flex flex-row items-center justify-center bg-white h-16 w-full rounded-md text-lg gap-0.5">
					{props.startWritingFrame <= currentFrame &&
					props.saveWordFrame >= currentFrame ? (
						<>
							<span>{typingText}</span>
							<div
								className="h-5 w-0.5 bg-black"
								style={{visibility: isTypingBarVisible}}
							/>
						</>
					) : (
						<></>
					)}
				</div>
			</div>
			<div className="bg-primary flex flex-row justify-center items-center h-12 w-12 rounded-md mb-12 transform rotate-45 filter drop-shadow-md">
				<Img
					className="w-6 h-auto transform -rotate-45"
					src={staticFile('icons/translate.svg')}
				/>
			</div>
			<div className="flex flex-col w-full -mt-12">
				<div className="self-start bg-white px-2 pb-1 ml-2 -mb-1 rounded-md font-bold text-md z-10">
					French:
				</div>
				<div className="flex flex-row items-center justify-center bg-white h-16 w-full rounded-md text-lg">
					{props.foreignWordFrame <= currentFrame ? (
						<span>{nativeWord}</span>
					) : (
						<></>
					)}
				</div>
			</div>
			<button
				type="button"
				className="flex flex-row items-center gap-1 py-2 px-4 bg-primary rounded-md font-bold text-md filter drop-shadow-md gap-2"
			>
				<Img className="w-5 h-auto" src={staticFile('icons/save.svg')} />
				<span>{t('save')}</span>
			</button>
		</div>
	);
};
