import React from 'react';
import {
	Easing,
	Img,
	interpolate,
	Sequence,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {ExtensionAddingPopup} from '../ExtensionAddingPopup';
import {SaveWordToast} from '../SaveWordToast';
import useI18n from '../../plugins/i18n.plugin';

export const SelectInteractiveText: React.FC = () => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const {foreignTranslate: t} = useI18n();

	const selectedDivWidth = `${
		currentFrame >= fps
			? interpolate(currentFrame, [fps, 2 * fps], [0, 87], {
					easing: Easing.bezier(0.58, 1.06, 1, 1),
					extrapolateRight: 'clamp',
					extrapolateLeft: 'clamp',
			  })
			: 0
	}px`;

	return (
		<div className="text-xl z-30 flex flex-col flex-1 px-5 justify-center">
			<p className="whitespace-nowrap">{t('website_text1_part1')}</p>
			<div className="flex flex-row items-center gap-1">
				<div className="relative">
					<div
						className="absolute h-6 bg-blue"
						style={{top: '3px', zIndex: -1, width: selectedDivWidth}}
					/>
					<span>{t('wonderful')}</span>
					<Sequence from={2.3 * fps} durationInFrames={1.7 * fps}>
						<Img
							className="z-40 absolute w-8 h-auto"
							style={{top: '20px', right: '-30px'}}
							src={staticFile('icons/logo.svg')}
						/>
					</Sequence>
					<Sequence from={3 * fps} durationInFrames={5 * fps}>
						<div
							className="z-40 absolute w-52 h-40 filter drop-shadow-md"
							style={{top: '20px', right: '-205px'}}
						>
							<ExtensionAddingPopup />
						</div>
					</Sequence>
					<Sequence from={8 * fps}>
						<div
							className="z-40 absolute"
							style={{top: '90px', right: '-205px'}}
						>
							<SaveWordToast />
						</div>
					</Sequence>
				</div>
				<p>{t('website_text1_part2')}</p>
			</div>
			<p className="whitespace-nowrap">{t('website_text1_part3')}</p>
			<p>{t('website_text1_part4')}</p>
		</div>
	);
};
