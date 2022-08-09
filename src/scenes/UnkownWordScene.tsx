import React, {useEffect, useRef, useState} from 'react';
import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';

export const UnkownWordScene: React.FC = () => {
	const {fps} = useVideoConfig();

	return (
		<AbsoluteFill className="bg-darkGrey">
			<div className="w-full h-full flex flex-col">
				{/* Header*/ }
				<div className="w-full h-20 flex flex-col drop-shadow-md">
					<div className="w-full flex flex-1 flex-row">
						<div className="w-1/5 bg-white rounded-tr-xl"/>
						<div className="flex-auto"/>
					</div>
					<div className="w-full flex-1 bg-white"/>
				</div>
				{/*Content*/}
				<div className="w-full flex-1" />
			</div>
		</AbsoluteFill>
	);
};
