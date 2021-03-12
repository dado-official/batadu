module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            abril: ["Abril Fatface", "cursive"],
        },
        extend: {
            colors: {
                primary: "#B2163A",
                secondary: "#03A57A",
                logoGray: "#545454",
            },
            spacing: {
                1450: "1450px",
                1.25: "1.2rem",
                130: "130%",
                "15/100": "15%",
            },
            maxWidth: {
                "1/9": "90%",
            },
            fontSize: {
                7.5: "1.6875rem",
            },
            borderRadius: {
                st: "0.6rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
