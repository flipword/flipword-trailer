import React, {createRef, useEffect, useRef, useState} from 'react';
import {Img, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {ExtensionAddingPopup} from './ExtensionAddingPopup';

export const WebsiteContent: React.FC<{
	scrollY: number;
	readingStartFrame: number;
	usageIndex: number;
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

	const cursorIcon = staticFile('icons/cursor.svg');
	const cursorRef = useRef<HTMLImageElement>(null);
	const initialCursorPosition = {top: 60, left: 350};

	const unknownDivRef = useRef<HTMLDivElement>(null);
	const selectedDivRef = useRef<HTMLDivElement>(null);
	const logoExtensionRef = useRef<HTMLImageElement>(null);
	const extensionAddingPopupRef = useRef<HTMLDivElement>(null);

	const abbrNodeContainer = useRef<HTMLDivElement>(null);
	const [abbrNode, setAbbrNode] = useState<HTMLElement | null>(null);

	/* On mounted action */
	useEffect(() => {
		abbrNodeContainer.current?.childNodes.forEach((x) => {
			if (x.nodeName === 'ABBR') {
				setAbbrNode(x as HTMLElement);
			}
		});
	}, []);

	/* If scroll change we move the cursor */
	useEffect(() => {
		scrollDivRef.current?.scrollTo({top: props.scrollY, behavior: 'smooth'});
		if (cursorRef.current) {
			cursorRef.current.style.top = `${
				initialCursorPosition.top + props.scrollY
			}px`;
			cursorRef.current.style.left = `${initialCursorPosition.left}px`;
		}
	}, [props.scrollY]);

	/* Scenario depend on frame */
	useEffect(() => {
		if (
			cursorRef.current &&
			unknownDivRef.current &&
			selectedDivRef.current &&
			logoExtensionRef.current &&
			extensionAddingPopupRef.current &&
			abbrNode
		) {
			if (props.usageIndex === 1) {
				if (currentFrame === props.readingStartFrame) {
					cursorRef.current.style.transition = 'left 2s, top 2s';
					cursorRef.current.style.left = `${
						initialCursorPosition.left + 200
					}px`;
				} else if (currentFrame === props.readingStartFrame + 1.5 * fps) {
					cursorRef.current.style.transition = 'left 1s, top 1s';
					cursorRef.current.style.left = `${initialCursorPosition.left}px`;
					cursorRef.current.style.top = `${
						initialCursorPosition.top + props.scrollY + 23
					}px`;
				} else if (currentFrame === props.readingStartFrame + 2.5 * fps) {
					cursorRef.current.style.transition = 'left 2s, top 2s';
					cursorRef.current.style.left = `${
						initialCursorPosition.left + 100
					}px`;
				} else if (currentFrame === props.readingStartFrame + 3 * fps) {
					unknownDivRef.current.style.left = `${
						Number(abbrNode.offsetLeft) - 6
					}px`;
					unknownDivRef.current.style.top = `${
						Number(abbrNode.offsetTop) - 30
					}px`;
					unknownDivRef.current.style.opacity = '1';
				}
			} else if (props.usageIndex === 2) {
				if (currentFrame === 1) {
					unknownDivRef.current.style.opacity = '0';
					cursorRef.current.style.left = `${Number(abbrNode.offsetLeft) - 6}px`;
					cursorRef.current.style.top = `${Number(abbrNode.offsetTop) + 12}px`;
					selectedDivRef.current.style.left = `${
						Number(abbrNode.offsetLeft) - 2
					}px`;
					selectedDivRef.current.style.top = `${
						Number(abbrNode.offsetTop) - 2
					}px`;
					logoExtensionRef.current.style.left = `${
						Number(abbrNode.offsetLeft) + 68
					}px`;
					logoExtensionRef.current.style.top = `${
						Number(abbrNode.offsetTop) + 15
					}px`;
					extensionAddingPopupRef.current.style.left = `${
						Number(abbrNode.offsetLeft) + 68
					}px`;
					extensionAddingPopupRef.current.style.top = `${
						Number(abbrNode.offsetTop) + 15
					}px`;
				}
				if (currentFrame === 1.5 * fps) {
					cursorRef.current.style.left = `${
						Number(abbrNode.offsetLeft) + 60
					}px`;
					selectedDivRef.current.style.width = '74px';
				}
				if (currentFrame === 2.5 * fps) {
					logoExtensionRef.current.style.opacity = '1';
				}
				if (currentFrame === 2.8 * fps) {
					cursorRef.current.style.left = `${
						Number(abbrNode.offsetLeft) + 70
					}px`;
					cursorRef.current.style.top = `${Number(abbrNode.offsetTop) + 20}px`;
				}
				if (currentFrame === 3.6 * fps) {
					extensionAddingPopupRef.current.style.opacity = '1';
					logoExtensionRef.current.style.opacity = '0';
				}
				if (currentFrame === 4 * fps) {
					cursorRef.current.style.left = `${
						Number(abbrNode.offsetLeft) + 160
					}px`;
					cursorRef.current.style.top = `${Number(abbrNode.offsetTop) + 155}px`;
				}
			}
		}
	}, [currentFrame]);

	return (
		<div ref={scrollDivRef} className="w-full flex-1 overflow-auto">
			<div className="bg-darkGrey flex flex-row justify-center relative">
				<div className="w-3/5 bg-white py-6 px-12">
					<h1 className="text-3xl">{title}</h1>
					{/* Part 1 */}
					<div className="px-5 mt-10 flex flex-row justify-start">
						<h2 className="text-xl">{titlePart2}</h2>
					</div>
					<div className="mt-6 w-full flex flex-row">
						<div className="z-30 flex flex-col flex-1 px-5 justify-center">
							<div
								ref={abbrNodeContainer}
								dangerouslySetInnerHTML={{__html: textPart2}}
							/>
						</div>
						<div className="flex flex-row flex-1 justify-center">
							<Img className="w-8/12 h-auto" src={imgPart2} />
						</div>
					</div>
					{/* Part 2 */}
					<div className="px-5 mt-6 flex flex-row justify-end">
						<h2 className="text-xl">{titlePart1}</h2>
					</div>
					<div className="mt-6 w-full flex flex-row">
						<div className="flex-1">
							<Img className="w-11/12 h-auto" src={imgPart1} />
						</div>
						<div className="flex flex-col flex-1 px-5 justify-center">
							<span>{textPart1}</span>
						</div>
					</div>
					{/* Part 3 */}
					<div className="px-5 mt-6 flex flex-row justify-end">
						<h2 className="text-xl">{titlePart3}</h2>
					</div>
					<div className="mt-6 w-full flex flex-row">
						<div className="flex flex-col flex-1 px-5 justify-center">
							<span>{textPart3}</span>
						</div>
						<div className="flex-1">
							<Img className="w-11/12 h-auto" src={imgPart3} />
						</div>
					</div>
				</div>
				<Img
					ref={cursorRef}
					className="cursor-transition w-5 h-auto absolute z-50"
					src={cursorIcon}
				/>
				<div
					ref={unknownDivRef}
					className="flex flex-col w-20 absolute opacity-0 unknown-div-transition"
				>
					<div className="flex flex-row flex-auto w-full justify-center text-red text-stroke-effect text-2xl -mb-1.5 gap-3">
						<span className="transform -rotate-25">?</span>
						<span>?</span>
						<span className="transform rotate-25">?</span>
					</div>
					<div className="w-full h-6 bg-transparent border-2 border-red rounded-full" />
				</div>
				<div
					ref={selectedDivRef}
					className="bg-blue h-5 w-0 absolute selected-div-transition"
				/>
				<Img
					ref={logoExtensionRef}
					className="z-40 absolute w-6 h-auto opacity-0"
					src={staticFile('icons/logo.svg')}
				/>
				<div
					ref={extensionAddingPopupRef}
					className="z-40 absolute w-52 h-40 opacity-0"
				>
					<ExtensionAddingPopup />
				</div>
			</div>
		</div>
	);
};
