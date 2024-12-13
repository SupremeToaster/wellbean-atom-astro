/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        "./node_modules/@tailus/themer-**/dist/**/*.{js,ts}"
    ],
    plugins: [
        themer({
            palette: {
                extend: "energy",
            },
            radius: "smoothest",
            background: "light",
            border: "light",
            padding: "large",

        })
    ],
};
