module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        content: ['./**/**/*.html', './**/**/*.svelte'],

        options: {
            whitelistPatterns: [/svelte-/],
            defaultExtractor: (content) =>
                [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
        },
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
};
