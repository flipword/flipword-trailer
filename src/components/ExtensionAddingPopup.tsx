import React, {createRef, useEffect} from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';

export const ExtensionAddingPopup: React.FC = () => {
	const foreignLanguageLabel = 'English:';
	const nativeLanguageLabel = 'French:';
	const foreignWord = 'Wonderful';
	const nativeWord = 'Merveilleux';
	return (
		<div className="h-full w-full bg-base rounded-md text-sm py-2 ">
			<div className="w-full h-full flex flex-col items-center justify-center gap-3">
				<div className="w-4/5">
					<span className="ml-2 px-2 font-bold bg-white rounded-t-sm">
						{foreignLanguageLabel}
					</span>
					<div className="-mt-1 pl-3 h-8 bg-white rounded-sm flex flex-col justify-center">
						<span className="text-black">{foreignWord}</span>
					</div>
				</div>
				<div className="w-4/5">
					<span className="ml-2 px-2 font-bold bg-white rounded-t-sm">
						{nativeLanguageLabel}
					</span>
					<div className="-mt-1 pl-3 h-8 bg-white rounded-sm flex flex-col justify-center">
						<span className="text-black">{nativeWord}</span>
					</div>
				</div>

				<div className="w-1/3 py-1 bg-primary filter drop-shadow-sm flex flex-row justify-center items-center rounded-lg">
					<span className="text-black font-bold">Submit</span>
				</div>
			</div>
		</div>
	);
};