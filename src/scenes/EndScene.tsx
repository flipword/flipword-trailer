import React from 'react';
import {
	AbsoluteFill,
	Easing,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {PlatformCard} from '../components/PlatformCard';

export const EndScene: React.FC = () => {
	const availableOn = 'Disponible sur:';
	const visitSite = 'Visitez notre site:';
	const siteUrl = 'flipword.io';

	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();

	const opacity =
		currentFrame <= fps
			? 0
			: interpolate(currentFrame, [fps, 1.5 * fps], [0, 1], {
					extrapolateRight: 'clamp',
					extrapolateLeft: 'clamp',
			  });

	const offsetTop = `${interpolate(
		currentFrame,
		[0.2 * fps, 0.7 * fps],
		[-920, -70],
		{
			easing: Easing.bezier(0.24, 0.92, 0.63, 1.09),
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	)}px`;

	return (
		<AbsoluteFill className="bg-primary">
			<div className="w-full h-full flex flex-row">
				<div className="flex-1 relative">
					<div
						className="end-card bg-white absolute rounded-b-6xl z-10 px-20 pb-20 pt-36"
						style={{marginTop: offsetTop}}
					>
						<div className="bg-primary h-full w-full rounded-b-5xl flex flex-col justify-center items-center pb-12 gap-1">
							<div className="w-full flex flex-row justify-center gap-5">
								<Img
									className="w-1/4 h-auto"
									src={staticFile('icons/logo-clear.svg')}
								/>
								<div className="flex flex-col justify-center">
									<span className="text-8xl text-black font-bold">
										FlipWord
									</span>
								</div>
							</div>
							<div className="w-full flex justify-center">
								<span className="text-3xl text-center">
									Outils d'apprentissage de vocabulaire
								</span>
							</div>
						</div>
					</div>
					<div
						className="end-card-shadow bg-whiteShadow absolute top-0 right-0 rounded-b-6xl"
						style={{marginTop: offsetTop}}
					/>
				</div>
				<div
					className="flex-1 flex flex-col justify-center items-center gap-12"
					style={{opacity}}
				>
					<span className="text-6xl text-black font-bold">{availableOn}</span>
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
						<span className="text-black text-5xl underline">{visitSite}</span>
						<span className="text-black text-5xl font-bold self-center">
							{siteUrl}
						</span>
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};
