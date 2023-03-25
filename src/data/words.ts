export interface Word {
	nativeWord: string;
	foreignWord: string;
}

export const wordList: {[key: string]: string[]} = {
	en: ['Wonderfull', 'Advise', 'Easily', 'Wisdom', 'Liability', 'Clue', 'Jump'],
	fr: [
		'Conseil',
		'Merveilleux',
		'Facilement',
		'Sagesse',
		'Résponsabilité',
		'Indice',
		'Sauter',
	],
	es: [
		'Consejos',
		'Maravilloso',
		'Fácilmente',
		'Sabiduría',
		'Responsabilidad',
		'Pista',
		'Salto',
	],
	de: [
		'Wunderschön',
		'Beratung',
		'Einfach',
		'Weisheit',
		'Haftung',
		'Hinweis',
		'Springen',
	],
};
