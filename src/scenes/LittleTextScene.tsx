import React from 'react';
import { Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';


export const LittleTextScene: React.FC<{
    firstMessage: string
    secondMessage: string
    startFrame: number
}> = (props) => {
    const {fps} = useVideoConfig();
    const currentFrame = useCurrentFrame();
    const firstTextStartFrame = props.startFrame + 0.5 * fps
    const firstTextEndFrame = props.startFrame + 2 * fps
    const secondTextStartFrame = firstTextEndFrame + 0.2 * fps
    const scale = interpolate(
        currentFrame,
        [firstTextStartFrame, firstTextStartFrame + 0.2 * fps],
        [0.8, 1],
        {
            easing: Easing.bezier(.64,.02,.35,1.58),
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp',
        }
    );
    const width = `${interpolate(
        currentFrame,
        [props.startFrame, firstTextStartFrame],
        [0, 1000],
        {
            easing: Easing.bezier(.40,1,1,1),
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp',
        }
    )}px`;

    const textOpacity = interpolate(
        currentFrame,
        [firstTextEndFrame, firstTextEndFrame + 0.2 * fps, firstTextEndFrame + 0.4 * fps, firstTextEndFrame + 0.6 * fps],
        [1, 0, 0, 1],
        {
            easing: Easing.bezier(.40,1,1,1),
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp',
        }
    );

    const isDisplayedText = (firstTextStartFrame - 0.1 * fps <= currentFrame) || (secondTextStartFrame <= currentFrame)
    const displayedText = secondTextStartFrame >= currentFrame ? props.firstMessage : props.secondMessage
    return (
        <div className="h-full flex flex-row z-50" style={{width}}>
            <div className="flex flex-auto relative flex-col bg-darkGrey px-2">
                <div className="flex-auto w-full" />
                <div className="w-full h-12 bg-primary bottom-text-radius filter blur-sm" />
                <div className="absolute flex flex-row justify-center items-center w-full h-full">
                        <span
                            dangerouslySetInnerHTML={{__html: displayedText}}
                            className="text-7xl leading-tight text-center"
                            style={{
                                transform: `scale(${scale})`,
                                visibility: `${isDisplayedText ? 'visible' : 'hidden'}`,
                                opacity: textOpacity
                            }}
                        />
                </div>
                {/*<div className="w-16 h-16 bg-primary absolute rounded-xl filter blur-sm transform rotate-45" style={{top: '100px', left: '100px'}} />*/}
                {/*<div className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform rotate-45" style={{top: '140px', left: '120px'}} />*/}
                {/*<div className="w-16 h-16 bg-transparent border-4 border-primary absolute rounded-xl filter blur-sm transform rotate-25" style={{top: '450px', left: '465px'}} />*/}
                {/*<div className="w-16 h-16 bg-primary absolute rounded-xl filter blur-sm transform -rotate-25" style={{top: '850px', left: '100px'}} />*/}
            </div>
            <div className="w-2 h-full bg-lightGrey" />
        </div>
    );
};
