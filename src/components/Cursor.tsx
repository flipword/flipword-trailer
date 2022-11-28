import React from 'react';
import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export interface Coordinate {
	top: number;
	left: number;
}

export const Cursor: React.FC<{
	startPosition: Coordinate;
	endPosition: Coordinate;
	animationDuration: number;
}> = (props) => {
	const currentFrame = useCurrentFrame();
	const newPositionTop = interpolate(
		currentFrame,
		[0, props.animationDuration],
		[props.startPosition.top, props.endPosition.top],
		{
			extrapolateRight: 'clamp',
		}
	);
	const newPositionLeft = interpolate(
		currentFrame,
		[0, props.animationDuration],
		[props.startPosition.left, props.endPosition.left],
		{
			extrapolateRight: 'clamp',
		}
	);
	return (
		<Img
			className="w-7 h-auto absolute z-50"
			src={staticFile('icons/cursor.svg')}
			style={{
				top: newPositionTop,
				left: newPositionLeft,
			}}
		/>
	);
};
