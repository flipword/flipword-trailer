import React, {createRef, useEffect, useRef, useState} from 'react';
import {Img, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {ExtensionAddingPopup} from './ExtensionAddingPopup';

export const ApplicationListContent: React.FC = () => {
	return (
		<div className="w-32 h-20 filter drop-shadow-md text-md">
			<div className="w-full h-1/2 bg-primary flex flex-row justify-center items-center rounded-t-lg">
				<span className="font-sans text-md leading-normal text-white">
					Foreign
				</span>
			</div>
			<div className="w-full h-1/2 bg-white items-center flex flex-row justify-center items-center rounded-b-lg border-primary border-2">
				<span className="text-black">Native</span>
			</div>
		</div>
	);
};
