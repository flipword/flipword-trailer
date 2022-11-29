import React from 'react';
import {WordCard} from "./WordCard";
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from "remotion";

export const WordCardTransition: React.FC = () => {
    const {fps} = useVideoConfig();
    const currentFrame = useCurrentFrame();

    const opacity = interpolate(currentFrame, [0, 0.2 * fps], [0, 1], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
    })
    const offsetTop = `${interpolate(currentFrame, [0.3 * fps, fps], [530, 308], {
        easing: Easing.bezier(.90,1,1,1),
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
    })}px`
    const offsetLeft = `${interpolate(currentFrame, [0.3 * fps, fps], [575, 977], {
        easing: Easing.bezier(.40,1,1,1),
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
    })}px`

    return (
        <div
            className="absolute z-50"
            style={{
                top: offsetTop,
                left: offsetLeft,
                opacity
        }}>
            <WordCard nativeWord='Merveilleux' foreignWord='Wonderful' />
        </div>
    );
};