import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import useI18n from '../../plugins/i18n.plugin';

export const ScalingInteractiveText: React.FC<{
	startAfter: number;
}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const {foreignTranslate: t} = useI18n();

	const scale = interpolate(
		currentFrame,
		[props.startAfter, props.startAfter + 0.5 * fps],
		[1, 2],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	const opacity = interpolate(
		currentFrame,
		[props.startAfter + 0.25 * fps, props.startAfter + 0.5 * fps],
		[0, 1],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	return (
		<div className="text-xl z-30 flex flex-col flex-1 px-5 justify-center ">
			<p className="whitespace-nowrap">{t('website_text1_part1')}</p>
			<div className="flex flex-row items-center gap-1">
				<div
					className="relative"
					style={{
						transform: `scale(${scale})`,
					}}
				>
					<span className="z-30">{t('wonderful')}</span>
					<div
						className="bg-white w-12 h-5 absolute z-10 filter blur-xs rounded-xl"
						style={{
							top: '5px',
							left: '30px',
							transform: `scale(${scale})`,
							zIndex: -10,
							opacity,
						}}
					/>
					<div
						className="flex flex-row flex-auto w-full justify-center items-end text-white text-stroke-effect text-3xl gap-4 absolute"
						style={{
							top: '-30px',
							opacity,
						}}
					>
						<span className="transform -rotate-25">?</span>
						<span className="mb-2">?</span>
						<span className="transform rotate-25">?</span>
					</div>
				</div>
				<p>{t('website_text1_part2')}</p>
			</div>
			<p className="whitespace-nowrap">{t('website_text1_part3')}</p>
			<p>{t('website_text1_part4')}</p>
		</div>
	);
};
