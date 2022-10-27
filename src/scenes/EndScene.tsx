import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {PlatformCard} from '../components/PlatformCard';

export const EndScene: React.FC = () => {
	const availableOn = 'Disponible sur:';
	const visitSite = 'Visitez notre site:';
	const siteUrl = 'flipword.io';
	return (
		<AbsoluteFill className="bg-primary">
			<div className="w-full h-full flex flex-row">
				<div className="flex-1" />
				<div className="flex-1 flex flex-col justify-center items-center gap-12">
					<span className="text-5xl font-bold">{availableOn}</span>
					<div className="flex flex-col gap-5">
						<PlatformCard
							name="App Store"
							logoUrl="icons/apple.svg"
							device="iPhone, iPad"
						/>
						<PlatformCard
							name="Google Play"
							logoUrl="icons/android.svg"
							device="Android"
						/>
						<PlatformCard
							name="Chrome Store"
							logoUrl="icons/chrome.svg"
							device="chrome.google.com"
						/>
					</div>
					<div className="flex flex-col justify-center gap-2">
						<span className="text-4xl underline">{visitSite}</span>
						<span className="text-4xl font-bold self-center">{siteUrl}</span>
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};
