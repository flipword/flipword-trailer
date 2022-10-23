import React, {createRef, useEffect, useRef, useState} from 'react';
import {
	Img,
	Sequence,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
} from 'remotion';
import {ExtensionAddingPopup} from './ExtensionAddingPopup';
import {ExtensionPopup} from './ExtensionPopup';
import {WebsiteSceneEnum} from '../helpers/WebsiteSceneEnum';
import {Cursor} from './Cursor';

export const WebsiteContent: React.FC<{
	websiteScene: number;
}> = (props) => {
	const {fps} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const title = 'How to help our brain learn new languages ?';
	const titlePart1 = 'Temporal and frontal lobe';
	const textPart1 =
		'According to a study done in 2017, it was shown that the temporal lobe and parts of the frontal lobe are activated when we are learning a new language.';
	const imgPart1 = staticFile('img/brain.png');
	const titlePart2 = 'Spell it out';
	const textPart2 = `Taking a pen to paper is a bit outdated, however it has <abbr>wonderful</abbr> affects on learning new languages. It helps with "written word learning, by connecting orthography [spelling] and phonology at the whole word level".`;
	const imgPart2 = staticFile('img/spell.png');
	const titlePart3 = 'Visualize';
	const textPart3 =
		'Once written, the brain is now able to visualize the word which will now be associated with the meaning of the word. "It has been found that meaning is first attached to the visual form followed by sound in second language written word learning".';
	const imgPart3 = staticFile('img/eyes.png');

	const scrollDivRef = createRef<HTMLDivElement>();

	const unknownDivRef = useRef<HTMLDivElement>(null);
	const selectedDivRef = useRef<HTMLDivElement>(null);
	const logoExtensionRef = useRef<HTMLImageElement>(null);
	const extensionAddingPopupRef = useRef<HTMLDivElement>(null);
	const extensionPopupRef = useRef<HTMLDivElement>(null);

	const keyWorkAbbrNodeContainer = useRef<HTMLDivElement>(null);
	const [keyWorkAbbrNode, setKeyWorkAbbrNode] = useState<HTMLElement | null>(
		null
	);
	/* On mounted action */
	useEffect(() => {
		keyWorkAbbrNodeContainer.current?.childNodes.forEach((x) => {
			if (x.nodeName === 'ABBR') {
				setKeyWorkAbbrNode(x as HTMLElement);
			}
		});
	}, []);

	/* Scenario depend on frame */
	useEffect(() => {
		if (
			unknownDivRef.current &&
			selectedDivRef.current &&
			logoExtensionRef.current &&
			extensionAddingPopupRef.current &&
			extensionPopupRef.current &&
			keyWorkAbbrNode
		) {
			if (props.websiteScene === WebsiteSceneEnum.ArticleReading) {
				if (currentFrame === fps) {
					// MoveCursorTo({top: 240, left: 470}, 0.7);
				} else if (currentFrame === 3 * fps) {
					// MoveCursorTo({top: 348, left: 500}, 0.5);
				} else if (currentFrame === 3.5 * fps) {
					// MoveCursorTo({top: 348, left: 900}, 1);
				} else if (currentFrame === 4.5 * fps) {
					// MoveCursorTo({top: 373, left: 500}, 0.5);
				} else if (currentFrame === 6 * fps) {
					unknownDivRef.current.style.left = `${
						Number(keyWorkAbbrNode.offsetLeft) - 6
					}px`;
					unknownDivRef.current.style.top = `${
						Number(keyWorkAbbrNode.offsetTop) - 30
					}px`;
					unknownDivRef.current.style.opacity = '1';
				}
			} else if (props.websiteScene === WebsiteSceneEnum.WordHighlight) {
				if (currentFrame === 1) {
					unknownDivRef.current.style.opacity = '0';
					moveCursorTo({top: 373, left: 465}, 0.1);
					selectedDivRef.current.style.left = `${
						Number(keyWorkAbbrNode.offsetLeft) - 2
					}px`;
					selectedDivRef.current.style.top = `${
						Number(keyWorkAbbrNode.offsetTop) - 2
					}px`;
					logoExtensionRef.current.style.left = `${
						Number(keyWorkAbbrNode.offsetLeft) + 85
					}px`;
					logoExtensionRef.current.style.top = `${
						Number(keyWorkAbbrNode.offsetTop) + 17
					}px`;
					extensionAddingPopupRef.current.style.left = `${
						Number(keyWorkAbbrNode.offsetLeft) + 68
					}px`;
					extensionAddingPopupRef.current.style.top = `${
						Number(keyWorkAbbrNode.offsetTop) + 15
					}px`;
				}
				if (currentFrame === 1.5 * fps) {
					// CursorRef.current.style.left = `${
					// 	Number(keyWorkAbbrNode.offsetLeft) + 60
					// }px`;
					// moveCursorTo({top: 373, left: 540}, 1);
					selectedDivRef.current.style.width = '88px';
				}
				if (currentFrame === 2.5 * fps) {
					logoExtensionRef.current.style.opacity = '1';
				}
				if (currentFrame === 2.8 * fps) {
					// MoveCursorTo({top: 380, left: 550}, 0.5);
				}
				if (currentFrame === 3.6 * fps) {
					extensionAddingPopupRef.current.style.opacity = '1';
					logoExtensionRef.current.style.opacity = '0';
				}
				if (currentFrame === 4 * fps) {
					// MoveCursorTo({top: 510, left: 620}, 0.5);
				}
			} else if (props.websiteScene === WebsiteSceneEnum.ExtensionClick) {
				if (currentFrame === 1) {
					// CursorRef.current.style.left = `${initialCursorPosition.left}px`;
					// cursorRef.current.style.top = `${initialCursorPosition.top}px`;
				} else if (currentFrame === fps) {
					// CursorRef.current.style.transition = 'left 2s, top 2s';
					// cursorRef.current.style.left = '1250px';
					// cursorRef.current.style.top = '50px';
				} else if (currentFrame === 3 * fps) {
					extensionPopupRef.current.style.opacity = '1';
					extensionPopupRef.current.style.top = '81px';
				} else if (currentFrame === 3 * fps + 10) {
					// CursorRef.current.style.transition = 'left 1s, top 1s';
					// cursorRef.current.style.left = '1215px';
					// cursorRef.current.style.top = '90px';
				}
			}
		}
	}, [currentFrame]);

	return (
		<>
			<div ref={scrollDivRef} className="w-full flex-1 overflow-auto">
				<div className="bg-darkGrey flex flex-row justify-center relative">
					<div className="w-7/12 bg-white py-6 px-12">
						<h1 className="text-4xl">{title}</h1>
						{/* Part 1 */}
						<div className="px-5 mt-10 flex flex-row justify-start">
							<h2 className="text-3xl">{titlePart2}</h2>
						</div>
						<div className="mt-6 w-full flex flex-row">
							<div className="text-xl z-30 flex flex-col flex-1 px-5 justify-center">
								<div
									ref={keyWorkAbbrNodeContainer}
									dangerouslySetInnerHTML={{__html: textPart2}}
								/>
							</div>
							<div className="flex flex-row flex-1 justify-center">
								<Img className="w-6/12 h-auto" src={imgPart2} />
							</div>
						</div>
						{/* Part 2 */}
						<div className="px-5 mt-6 flex flex-row justify-end">
							<h2 className="text-3xl">{titlePart1}</h2>
						</div>
						<div className="mt-6 w-full flex flex-row">
							<div className="flex-1">
								<Img className="w-11/12 h-auto" src={imgPart1} />
							</div>
							<div className="text-xl flex flex-col flex-1 px-5 justify-center">
								<span>{textPart1}</span>
							</div>
						</div>
						{/* Part 3 */}
						<div className="px-5 mt-6 flex flex-row justify-start">
							<h2 className="text-3xl">{titlePart3}</h2>
						</div>
						<div className="mt-6 w-full flex flex-row">
							<div className="text-xl flex flex-col flex-1 px-5 justify-center">
								<span>{textPart3}</span>
							</div>
							<div className="flex-1">
								<Img className="w-11/12 h-auto" src={imgPart3} />
							</div>
						</div>
					</div>
					<div
						ref={selectedDivRef}
						className="bg-blue h-5 w-0 absolute selected-div-transition"
					/>
					<div
						ref={unknownDivRef}
						className="flex flex-col w-24 absolute opacity-0 unknown-div-transition"
					>
						<div className="flex flex-row flex-auto w-full justify-center text-negative text-stroke-effect text-2xl -mb-0.5 gap-3">
							<span className="transform -rotate-25">?</span>
							<span>?</span>
							<span className="transform rotate-25">?</span>
						</div>
						<div className="w-full h-6 bg-transparent border-2 border-negative rounded-full" />
					</div>
					<Img
						ref={logoExtensionRef}
						className="z-40 absolute w-8 h-auto opacity-0"
						src={staticFile('icons/logo.svg')}
					/>
					<div
						ref={extensionAddingPopupRef}
						className="z-40 absolute w-52 h-40 filter drop-shadow-md opacity-0"
					>
						<ExtensionAddingPopup />
					</div>
				</div>
			</div>
			<Sequence from={0} durationInFrames={fps}>
				<Cursor
					startPosition={{top: 170, left: 470}}
					endPosition={{top: 170, left: 470}}
					animationDuration={1}
				/>
			</Sequence>
			<Sequence from={fps} durationInFrames={fps}>
				<Cursor
					startPosition={{top: 170, left: 470}}
					endPosition={{top: 240, left: 470}}
					animationDuration={fps}
				/>
			</Sequence>
			<Sequence from={2 * fps} durationInFrames={fps}>
				<Cursor
					startPosition={{top: 240, left: 470}}
					endPosition={{top: 348, left: 500}}
					animationDuration={fps}
				/>
			</Sequence>
			<Sequence from={3 * fps} durationInFrames={fps}>
				<Cursor
					startPosition={{top: 348, left: 500}}
					endPosition={{top: 348, left: 900}}
					animationDuration={fps}
				/>
			</Sequence>
			<Sequence from={4 * fps} durationInFrames={fps}>
				<Cursor
					startPosition={{top: 348, left: 900}}
					endPosition={{top: 373, left: 500}}
					animationDuration={fps}
				/>
			</Sequence>
			<Sequence from={5 * fps} durationInFrames={3 * fps}>
				<Cursor
					startPosition={{top: 373, left: 500}}
					endPosition={{top: 373, left: 500}}
					animationDuration={1}
				/>
			</Sequence>
			<div
				ref={extensionPopupRef}
				className="z-40 absolute w-60 opacity-0 filter drop-shadow-md extension-popup-position"
			>
				<ExtensionPopup />
			</div>
		</>
	);
};
