module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,xml,ico,svg,webmanifest,html,txt}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};