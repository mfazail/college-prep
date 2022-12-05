// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	extends: 'content-wind',
	content: {
		highlight: {
			preload: ['java','c']
		}
	}
})
