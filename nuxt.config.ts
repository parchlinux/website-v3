export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ["@nuxtjs/i18n"],
    i18n: {
        defaultLocale: "en",
        locales: [
            {
                code: "en",
                file: "en-US.json",
            },
            {
                code: "fa",
                file: "fa-IR.json",
            },
        ],
        lazy: true,
        langDir: "./locales",
    },
});
