import React from 'react';
import {WebsiteContainer} from '../components/WebsiteContainer';
import {WebsiteContent} from '../components/WebsiteContent';
import {WebsiteSceneEnum} from '../helpers/WebsiteSceneEnum';
import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from "remotion";

export const ZoomInComputerScene: React.FC = (props) => {
    const {fps} = useVideoConfig();
    const currentFrame = useCurrentFrame();
    const scale = interpolate(currentFrame, [1.2 * fps, 1.5 * fps], [0.6, 1], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
    })
    const offsetTop = `${interpolate(currentFrame, [1.2 * fps, 1.5 * fps], [-115, 0], {
        easing: Easing.bezier(.40,1.06,1,1),
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
    })}px`
    const offsetLeft = `${interpolate(currentFrame, [1.2 * fps, 1.5 * fps], [-6, 0], {
        easing: Easing.bezier(.40,1.06,1,1),
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
    })}px`
    return (
        <AbsoluteFill>
            <Img className="w-auto h-auto" src={staticFile('img/computer.png')} />
             <div
                 className="w-full h-full absolute"
                 style={{
                     transform: `scale(${scale})`,
                     top: offsetTop,
                     left: offsetLeft
                }}
             >
                <WebsiteContainer url='https://flipword.io' multiTab={false}>
                    <WebsiteContent websiteScene={WebsiteSceneEnum.ArticleReading} />
                </WebsiteContainer>
             </div>
        </AbsoluteFill>
    );
};
