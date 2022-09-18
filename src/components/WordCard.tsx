import React from 'react';

export const WordCard: React.FC<{
	nativeWord: string;
	foreignWord: string;
}> = (props) => {
	return (
		<div className="w-40 h-20 filter drop-shadow-md text-md">
			<div className="w-full h-1/2 bg-primary flex flex-row justify-center items-center rounded-t-lg">
				<span className="font-sans text-md leading-normal text-white">
					{props.nativeWord}
				</span>
			</div>
			<div className="w-full h-1/2 bg-white items-center flex flex-row justify-center items-center rounded-b-lg border-primary border-2">
				<span className="text-black"> {props.foreignWord}</span>
			</div>
		</div>
	);
};
