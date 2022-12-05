// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	extends: 'content-wind',
	modules: [
		'@kevinmarrec/nuxt-pwa'
	],
	content: {
		highlight: {
			preload: ['java','c']
		}
	},
	pwa: {
		manifest: {
			name: "College Prep",
			description: "Semester Exam Preparation notes",
			short_name:"College Prep"
		},
		meta: {
			author: "Fazail Alam",
			description: "Semester Exam Preparation notes",
			name: "College Prep",
			theme_color: "#6366f1",
			title: "College Prep",
		}
	}
})
