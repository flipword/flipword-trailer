import React from 'react';
import useI18n from '../plugins/i18n.plugin';
import {wordList as words} from '../data/words';

export const ExtensionAddingPopup: React.FC = () => {
	const {
		t,
		currentNativeLang,
		currentForeignLang,
		getNativeLanguageLabel,
		getForeignLanguageLabel,
	} = useI18n();
	const foreignLanguageLabel = `${getNativeLanguageLabel()}:`;
	const nativeLanguageLabel = `${getForeignLanguageLabel()}:`;
	const foreignWord = words[currentForeignLang][0];
	const nativeWord = words[currentNativeLang][0];
	return (
		<div className="h-full w-full bg-base rounded-md text-sm py-2 font-sans">
			<div className="w-full h-full flex flex-col items-center justify-center gap-3">
				<div className="w-4/5">
					<span className="ml-2 px-2 font-bold bg-white rounded-t-sm">
						{foreignLanguageLabel}
					</span>
					<div className="-mt-1 pl-3 h-8 bg-white rounded-sm flex flex-col justify-center">
						<span className="text-black">{foreignWord}</span>
					</div>
				</div>
				<div className="w-4/5">
					<span className="ml-2 px-2 font-bold bg-white rounded-t-sm">
						{nativeLanguageLabel}
					</span>
					<div className="-mt-1 pl-3 h-8 bg-white rounded-sm flex flex-col justify-center">
						<span className="text-black">{nativeWord}</span>
					</div>
				</div>

				<div className="px-3 py-1 bg-primary filter drop-shadow-sm flex flex-row justify-center items-center rounded-lg">
					<span className="text-black font-bold">{t('save')}</span>
				</div>
			</div>
		</div>
	);
};
