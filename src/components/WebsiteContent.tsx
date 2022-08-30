import React from 'react';
import {Img, staticFile} from 'remotion';

export const WebsiteContent: React.FC = () => {
	const title = 'How to help our brain learn new languages ?';
	const titlePart1 = 'Temporal and frontal lobe';
	const textPart1 =
		'According to a study done in 2017, it was shown that the temporal lobe and parts of the frontal lobe are activated when we are learning a new language.';
	const imgPart1 = staticFile('img/brain.png');
	const titlePart2 = 'Spell it out';
	const textPart2 =
		'Taking a pen to paper is a bit outdated, however it has wonderful affects on learning new languages. It helps with "written word learning, by connecting orthography [spelling] and phonology at the whole word level".';
	const imgPart2 = staticFile('img/spell.png');
	const titlePart3 = 'Visualize';
	const textPart3 =
		'Once written, the brain is now able to visualize the word which will now be associated with the meaning of the word. "It has been found that meaning is first attached to the visual form followed by sound in second language written word learning".';
	const imgPart3 = staticFile('img/eyes.png');

	return (
		<div className="bg-darkGrey flex flex-row justify-center">
			<div className="w-3/5 bg-white py-6 px-12">
				<h1 className="text-3xl">{title}</h1>
				{/* Part 1 */}
				<div className="mt-6 flex flex-row justify-start">
					<h2 className="text-xl">{titlePart2}</h2>
				</div>
				<div className="mt-6 w-full flex flex-row">
					<div className="flex flex-col flex-1 px-5 justify-center">
						<span>{textPart2}</span>
					</div>
					<div className="flex flex-row flex-1 justify-center">
						<Img className="w-8/12 h-auto" src={imgPart2} />
					</div>
				</div>
				{/* Part 2 */}
				<div className="mt-6 flex flex-row justify-end">
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
				<div className="mt-6 flex flex-row justify-end">
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
		</div>
	);
};
