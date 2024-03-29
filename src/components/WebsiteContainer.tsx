import React from 'react';
import {
	AbsoluteFill,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const WebsiteContainer: React.FC<{
	url: string;
	multiTab: boolean;
	tabTransition: boolean;
	children: React.ReactNode;
}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();

	const marginLeft = props.tabTransition
		? `${interpolate(currentFrame, [0, 0.2 * fps], [-300, 0], {
				extrapolateRight: 'clamp',
				extrapolateLeft: 'clamp',
		  })}px`
		: '0';

	const tab1 = props.multiTab ? (
		<div className="bg-base rounded-tr-xl w-80 z-10">
			<div className="w-full h-full flex flex-row py-1.5 px-2 justify-between items-center gap-5">
				<div className="flex flex-row items-center gap-2">
					<Img
						className="w-7 h-auto"
						src={staticFile('icons/random-logo.svg')}
					/>
					<span className="text-sm">Learn vocabulary</span>
				</div>
			</div>
		</div>
	) : (
		<div className="bg-lightGrey rounded-tr-xl w-80 z-10">
			<div className="w-full h-full flex flex-row py-1.5 px-2 justify-between items-center gap-5">
				<div className="flex flex-row items-center gap-2">
					<Img
						className="w-7 h-auto"
						src={staticFile('icons/random-logo.svg')}
					/>
					<span className="text-sm">Learn vocabulary</span>
				</div>
				<Img className="w-3 h-auto" src={staticFile('icons/clear.svg')} />
			</div>
		</div>
	);
	const tab2 = props.multiTab ? (
		<div className="bg-lightGrey rounded-t-xl w-72" style={{marginLeft}}>
			<div className="w-full h-full flex flex-row py-1.5 px-2 justify-between items-center gap-5">
				<div className="flex flex-row items-center gap-2">
					<Img className="w-7 h-auto" src={staticFile('icons/logo.svg')} />
					<span className="text-sm">Flipword</span>
				</div>
				<Img className="w-3 h-auto" src={staticFile('icons/clear.svg')} />
			</div>
		</div>
	) : (
		<></>
	);
	return (
		<div className="w-full h-full flex flex-col bg-darkGrey z-0 relative">
			{/* Header */}
			<div className="w-full h-24 flex flex-col drop-shadow-md z-50 text-browser-family">
				<div className="w-full flex flex-1 flex-row">
					{tab1}
					{tab2}
					<div className="flex-auto bg-base" />
				</div>
				<div className="w-full flex-1 bg-lightGrey -mt-0.5">
					<div className="w-full h-full flex flex-row py-1.5 px-2">
						<div className="w-1/5 flex flex-row gap-4">
							<Img
								className="w-3 h-auto"
								src={staticFile('icons/chevron_left.svg')}
							/>
							<Img
								className="w-3 h-auto"
								src={staticFile('icons/chevron_right.svg')}
							/>
							<Img
								className="w-4 h-auto"
								src={staticFile('icons/replay.svg')}
							/>
						</div>
						{/* Url bar */}
						<div className="flex flex-row items-center px-3 gap-1 flex-auto bg-white rounded-md">
							<Img
								className="w-4 h-auto mr-1"
								src={staticFile('icons/lock.svg')}
							/>
							<span className="tracking-wide text-md">{props.url}</span>
						</div>
						<div className="w-1/12 flex fle-row justify-end">
							<Img
								className="w-7 h-auto mr-1"
								src={staticFile('icons/logo.svg')}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Content */}
			{props.children}
		</div>
	);
};
