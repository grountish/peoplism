export const state = () => ({
	lang: 'es',
	settings:null,
	menu: null,
	client: {
		projectId: '1f2vyuv5',
		dataset: 'production',
		apiVersion: '2019-01-29', // use current UTC date - see "specifying API version"!
		useCdn: true, // `false` if you want to ensure fresh data
	}
})

export const mutations = {
	SET_lang(state, lang) {
		state.lang = lang
	},
	SET_settings(state, settings) {
		state.settings = settings
	},
	SET_menu(state, menu) {
		state.menu = menu
	},
}
 