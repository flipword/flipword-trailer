import {staticFile, Audio} from 'remotion'
import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Coordinate} from "./Cursor";

export const ClickEffect: React.FC<{
    position: Coordinate;
    isPhoneClick?: boolean
}> = (
    {position, isPhoneClick = false}
) => {
    const currentFrame = useCurrentFrame()
    const {fps} = useVideoConfig()
    const scale = interpolate(currentFrame, [0, 0.1 * fps], [0.6, 1.2], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
    })
    const opacity = interpolate(currentFrame, [0, 0.2 * fps], [1, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
    })
    const ClickSound = isPhoneClick ? <></> : <Audio src={staticFile("song/mouse-click.wav")}/>
    return (
        <div
            className="w-8 h-8 bg-blue rounded-full absolute z-50 opacity-75 filter blur-sm"
            style={{
                top: position.top - 3,
                left: position.left - 3,
                transform: `scale(${scale})`,
                opacity
            }}
        >
            {ClickSound}
        </div>
    );
};
