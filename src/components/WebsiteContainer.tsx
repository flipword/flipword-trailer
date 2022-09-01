import React, {createRef, useEffect} from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';

export const WebsiteContainer: React.FC<{
	children: React.ReactNode;
}> = (props) => {
	return (
		<AbsoluteFill className="bg-darkGrey">
			<div className="w-full h-full flex flex-col">
				{/* Header */}
				<div className="w-full h-20 flex flex-col drop-shadow-md">
					<div className="w-full flex flex-1 flex-row">
						<div className="bg-lightGrey rounded-tr-xl">
							<div className="w-full h-full flex flex-row py-1.5 px-2 justify-between items-center gap-5">
								<div className="flex flex-row items-center gap-2">
									<Img
										className="w-6 h-auto"
										src={staticFile('icons/logo.svg')}
									/>
									<span className="text-xs">
										Flipword - Vocabulary learning tool
									</span>
								</div>
								<Img
									className="w-3 h-auto"
									src={staticFile('icons/clear.svg')}
								/>
							</div>
						</div>
						<div className="flex-auto" />
					</div>
					<div className="w-full flex-1 bg-lightGrey -mt-0.5">
						<div className="w-full h-full flex flex-row py-1.5 px-2">
							<div className="w-1/5 flex flex-row gap-4">
								<Img
									className="w-2 h-auto"
									src={staticFile('icons/chevron_left.svg')}
								/>
								<Img
									className="w-2 h-auto"
									src={staticFile('icons/chevron_right.svg')}
								/>
								<Img
									className="w-3 h-auto"
									src={staticFile('icons/replay.svg')}
								/>
							</div>
							{/* Url bar */}
							<div className="flex flex-row items-center px-3 gap-1 flex-auto bg-white rounded-md">
								<Img
									className="w-3 h-auto mr-1"
									src={staticFile('icons/lock.svg')}
								/>
								<span className="text-xs">https://flipword.io</span>
							</div>
							<div className="w-1/12 flex fle-row justify-end">
								<Img
									className="w-6 h-auto mr-1"
									src={staticFile('icons/logo.svg')}
								/>
							</div>
						</div>
					</div>
				</div>
				{/* Content */}
				{props.children}
			</div>
		</AbsoluteFill>
	);
};
