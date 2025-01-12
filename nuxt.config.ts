// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@pinia/nuxt",
		"@nuxt/eslint",
		"pinia-plugin-persistedstate/nuxt",
		"@unocss/nuxt",
		"@nuxtjs/i18n",
		"@vueuse/nuxt",
		"unplugin-icons/nuxt",
		"unplugin-turbo-console/nuxt",
		"@nuxt/image",
		"@element-plus/nuxt",
		"@nuxtjs/color-mode",
	],

	srcDir: "src/",
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
				},
			}
		}
	},
	vueuse: {
		ssrHandlers: true,
	},
	typescript: {
		typeCheck: true,
	},
	unocss: {
		nuxtLayers: true,
	},
	elementPlus: {
		icon: "ElIcon",
		importStyle: "scss",
		themes: ["dark"],
	},
	i18n: {
		vueI18n: "./i18n.config.ts",
	},
	css: ["@unocss/reset/tailwind.css", "@/assets/scss/index.scss"],
	app: {
		// head
		head: {
			title: "Linailnox",
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},
	colorMode: {
		classSuffix: "",
	},
	compatibilityDate: "2024-11-27",
})
