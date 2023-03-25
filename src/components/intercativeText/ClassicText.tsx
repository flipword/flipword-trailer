import React from 'react';
import useI18n from '../../plugins/i18n.plugin';

export const ClassicText: React.FC = () => {
	const {foreignTranslate: t} = useI18n();
	return (
		<div className="text-xl z-30 flex flex-col flex-1 px-5 justify-center">
			<p>{t('website_text1_full')}</p>
		</div>
	);
};
