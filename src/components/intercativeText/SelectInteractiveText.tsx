import React, {useEffect, useRef, useState} from 'react';
import {
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {ExtensionAddingPopup} from '../ExtensionAddingPopup';

export const SelectInteractiveText: React.FC<{
	startAfter: number;
}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const isLogoDisplayed = currentFrame >= 2.3 * fps;
	const isPopupDisplayed = currentFrame >= 3 * fps;

	return (
		<div className="text-xl z-30 flex flex-col flex-1 px-5 justify-center">
			<p>Taking a pen to paper is a bit outdated, however it has</p>
			<div className="flex flex-row items-center gap-1">
				<div className="relative">
					<span>wonderful</span>
					<Img
						className="z-40 absolute w-8 h-auto"
						style={{
							top: '20px',
							right: '-30px',
							visibility: isLogoDisplayed ? 'visible' : 'hidden',
						}}
						src={staticFile('icons/logo.svg')}
					/>
					<div
						className="z-40 absolute w-52 h-40 filter drop-shadow-md"
						style={{
							top: '20px',
							right: '-205px',
							visibility: isPopupDisplayed ? 'visible' : 'hidden',
						}}
					>
						<ExtensionAddingPopup />
					</div>
				</div>
				<p>affects on learning new languages.</p>
			</div>
			<p>
				It helps with written word learning, by connecting orthography spelling
				and phonology at the whole word level.
			</p>
		</div>
	);
};
