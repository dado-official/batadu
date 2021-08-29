module.exports = {
    darkMode: "class", // or 'media' or 'class'
    theme: {
        fontFamily: {
            abril: ["Abril Fatface", "cursive"],
        },
        extend: {
            colors: {
                primary: "#B2163A",
                primaryDark: "#F56B8B",
                bgWhite: "#eeeff2",
                bgWhiteDark: "##E2E2E2",
                bgDark: "#121212",
                secondary: "#03A57A",
                secondaryDark: "#06D6A0",
                logoGray: "#545454",
                roomGray: "#d9d9d9",
                tableGray: "#CECECE",
                borderGray: "#858585",
                primaryLight: "#E3A2B1",
                primaryLightDark: "#7E3A4A",
                spielGray: "#E6E6E6",
                whiteDark: "#2E2E2E",
                grayBlack: "#121212",
                statistikGray: "#383838",
                roomBlack: "#1E1E1E",
                borderBlack: "#535353",
                chatBlack: "#4B4B4B",
            },
            spacing: {
                1450: "1400px",
                1.25: "1.2rem",
                130: "130%",
                4.5: "1.125rem",
                "15/100": "15%",
                "12ch": "15ch",
                "110rem": "30rem",
                "29rem": "29.5rem",
                "8.8rem": "8.8rem",
                "4.75rem": "4.75rem",
                "2.875rem": "2.875rem",
                "5.3125rem": "5.3125rem",
                chat: "calc(100% - 5rem)",
                "3.625rem": "3.625rem",
                "80%": "80%",
                "40rem": "40rem",
                "4.4rem": "4.4rem",
                "2.375rem": "2.375",
                "90%": "90%",
                "7.92rem": "7.04rem",
                "4.275rem": "3.8rem",
                "28.25rem": "28.25rem",
                "40rem": "33rem",
                "4.5rem": "4.5rem",
                40: "40rem",
                "17.5rem": "17.5rem",
                "4.25rem": "4.25rem",
                bottomSpiel: "calc(100% - 4rem)",
                8.421875: "8.421875rem",
                6.73625: "6.73625rem",
            },
            maxWidth: {
                "1/9": "90%",
                "80%": "80%",
            },
            maxHeight: {
                chat: "25rem",
                "17.5rem": "17.5rem",
            },
            fontSize: {
                7.5: "1.6875rem",
                14: "0.85rem",
                "7.5xl": [
                    "5rem",
                    {
                        lineHeight: "1.1",
                    },
                ],
                xxs: "0.5rem",
            },
            borderRadius: {
                st: "0.6rem",
            },
            borderWidth: {
                12: "12px",
                1: "1px",
            },
            boxShadow: {
                mdDark: "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)",
                xlDark: "0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.06)",
            },
        },
    },
    variants: {
        extend: {
            boxShadow: ["dark"],
        },
    },
    plugins: [],
};