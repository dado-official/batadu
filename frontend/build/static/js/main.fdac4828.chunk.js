(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
    [0],
    {
        150: function (e, t, a) {
            "use strict";
            a.r(t);
            var s = a(1),
                c = a.n(s),
                r = a(78),
                n = a.n(r),
                l = (a(87), a(2)),
                i = a(9),
                d = a(4),
                o = a.p + "static/media/logo.7f47532b.svg",
                m = a.p + "static/media/casino-24px.d1626b49.svg",
                b = a.p + "static/media/leaderboard-24px.0a51e50e.svg",
                j = a.p + "static/media/account_circle-24px.99b6c0a3.svg",
                u = a.p + "static/media/Menu.8d9a879f.svg",
                x = a.p + "static/media/Cancel.69f7a5f0.svg",
                h = a.p + "static/media/dark_mode-24px.a4ad8d77.svg",
                f = a.p + "static/media/light_mode-24px.81cf8a4d.svg",
                p = a.p + "static/media/verified-24px.631e6110.svg",
                O = a(0),
                g = function (e) {
                    var t = e.level,
                        a = e.size,
                        s = e.className,
                        c = e.isDarkmode;
                    return Object(O.jsxs)("div", {
                        className: "relative ".concat(void 0 !== s ? s : null),
                        style: { height: "".concat(a), fontSize: "".concat(a) },
                        children: [
                            Object(O.jsx)("img", {
                                src: p,
                                alt: "Badge",
                                className: "h-full ".concat(
                                    c ? "secondaryDarkSVG" : "secondarySVG"
                                ),
                            }),
                            Object(O.jsx)("p", {
                                className:
                                    "text-white dark:text-black absolute top-1/2 left-1/2 ",
                                style: {
                                    transform: "translate(-50%, -50%)",
                                    fontSize: "".concat(
                                        t > 90
                                            ? "0.3em"
                                            : t > 9
                                            ? "0.35em"
                                            : "0.4em"
                                    ),
                                },
                                children: t,
                            }),
                        ],
                    });
                },
                k = function (e) {
                    var t = e.url,
                        a = e.isSidebarOpen,
                        s = e.setIsSidebarOpen,
                        c = e.isDarkmode,
                        r = e.setIsDarkmode,
                        n = e.username,
                        l = e.logout,
                        p = e.level,
                        k = Object(i.g)();
                    return Object(O.jsx)("header", {
                        className:
                            "bg-white dark:bg-whiteDark z-50 fixed top-0 left-0 w-full",
                        children: Object(O.jsxs)("div", {
                            className:
                                "bg-white dark:bg-whiteDark flex justify-between items-center lg:w-1450 mx-auto max-w-1/9 h-auto",
                            children: [
                                Object(O.jsx)(d.b, {
                                    to: "/",
                                    children: Object(O.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                            Object(O.jsx)("img", {
                                                src: o,
                                                alt: "4 Wattkarten",
                                            }),
                                            Object(O.jsx)("h4", {
                                                className:
                                                    " text-logoGray dark:text-gray-100 text-7.5 font-abril font-normal",
                                                children: "Batad\xfa",
                                            }),
                                        ],
                                    }),
                                }),
                                "Anmelden" === t || "Registrieren" === t
                                    ? null
                                    : Object(O.jsxs)("div", {
                                          className: "hidden lg:flex lg:gap-12",
                                          children: [
                                              Object(O.jsx)(d.b, {
                                                  to: "/",
                                                  children: Object(O.jsxs)(
                                                      "div",
                                                      {
                                                          className:
                                                              "flex gap-3 items-center relative py-6",
                                                          children: [
                                                              Object(O.jsx)(
                                                                  "img",
                                                                  {
                                                                      src: m,
                                                                      alt:
                                                                          "W\xfcrfel",
                                                                      className: "h-1.25 ".concat(
                                                                          "".concat(
                                                                              "/" ===
                                                                                  t
                                                                                  ? c
                                                                                      ? "primaryDarkSVG"
                                                                                      : "primarySVG"
                                                                                  : c
                                                                                  ? "whiteSVG"
                                                                                  : null
                                                                          )
                                                                      ),
                                                                  }
                                                              ),
                                                              Object(O.jsx)(
                                                                  "h6",
                                                                  {
                                                                      className: "text-base dark:text-white ".concat(
                                                                          "/" ===
                                                                              t
                                                                              ? "text-primary dark:text-primaryDark font-bold"
                                                                              : null
                                                                      ),
                                                                      children:
                                                                          "Spielen",
                                                                  }
                                                              ),
                                                              "/" === t
                                                                  ? Object(
                                                                        O.jsx
                                                                    )("div", {
                                                                        className:
                                                                            "bg-primary dark:bg-primaryDark h-1.5 w-130 absolute -bottom-1.5 -left-15/100  rounded-b-st",
                                                                    })
                                                                  : null,
                                                          ],
                                                      }
                                                  ),
                                              }),
                                              Object(O.jsx)(d.b, {
                                                  to: "/rangliste",
                                                  children: Object(O.jsxs)(
                                                      "div",
                                                      {
                                                          className:
                                                              "flex gap-3 items-center relative py-6",
                                                          children: [
                                                              Object(O.jsx)(
                                                                  "img",
                                                                  {
                                                                      src: b,
                                                                      alt:
                                                                          "Ranglist",
                                                                      className: "h-1.25 ".concat(
                                                                          "".concat(
                                                                              "/rangliste" ===
                                                                                  t
                                                                                  ? c
                                                                                      ? "primaryDarkSVG"
                                                                                      : "primarySVG"
                                                                                  : c
                                                                                  ? "whiteSVG"
                                                                                  : null
                                                                          )
                                                                      ),
                                                                  }
                                                              ),
                                                              Object(O.jsx)(
                                                                  "h6",
                                                                  {
                                                                      className: "text-base dark:text-white ".concat(
                                                                          "/rangliste" ===
                                                                              t
                                                                              ? "text-primary dark:text-primaryDark font-bold"
                                                                              : "dark:text-white"
                                                                      ),
                                                                      children:
                                                                          "Rangliste",
                                                                  }
                                                              ),
                                                              "/rangliste" === t
                                                                  ? Object(
                                                                        O.jsx
                                                                    )("div", {
                                                                        className:
                                                                            "bg-primary dark:bg-primaryDark h-1.5 w-130 absolute -bottom-1.5 -left-15/100  rounded-b-st",
                                                                    })
                                                                  : null,
                                                          ],
                                                      }
                                                  ),
                                              }),
                                              Object(O.jsx)(d.b, {
                                                  to: "/profile/".concat(n),
                                                  children: Object(O.jsxs)(
                                                      "div",
                                                      {
                                                          className:
                                                              "flex gap-3 items-center relative py-6",
                                                          children: [
                                                              Object(O.jsx)(
                                                                  "img",
                                                                  {
                                                                      src: j,
                                                                      alt:
                                                                          "Profil",
                                                                      className: "h-1.25 ".concat(
                                                                          "".concat(
                                                                              "/profile" ===
                                                                                  t
                                                                                  ? c
                                                                                      ? "primaryDarkSVG"
                                                                                      : "primarySVG"
                                                                                  : c
                                                                                  ? "whiteSVG"
                                                                                  : null
                                                                          )
                                                                      ),
                                                                  }
                                                              ),
                                                              Object(O.jsx)(
                                                                  "h6",
                                                                  {
                                                                      className: "text-base dark:text-white ".concat(
                                                                          "/profile" ===
                                                                              t
                                                                              ? "text-primary dark:text-primaryDark font-bold"
                                                                              : null
                                                                      ),
                                                                      children:
                                                                          "Profile",
                                                                  }
                                                              ),
                                                              "/profile" === t
                                                                  ? Object(
                                                                        O.jsx
                                                                    )("div", {
                                                                        className:
                                                                            "bg-primary dark:bg-primaryDark h-1.5 w-130 absolute -bottom-1.5 -left-15/100  rounded-b-st",
                                                                    })
                                                                  : null,
                                                          ],
                                                      }
                                                  ),
                                              }),
                                          ],
                                      }),
                                Object(O.jsxs)("div", {
                                    className:
                                        "hidden lg:flex lg:gap-8 lg:items-center",
                                    children: [
                                        Object(O.jsx)("img", {
                                            src: c ? f : h,
                                            alt: "Nachtmodus",
                                            className: "cursor-pointer ".concat(
                                                c ? "whiteSVG" : null
                                            ),
                                            onClick: function () {
                                                r(function (e) {
                                                    return (
                                                        localStorage.setItem(
                                                            "darkmode",
                                                            !e
                                                        ),
                                                        !e
                                                    );
                                                });
                                            },
                                        }),
                                        "Anmelden" !== t && "" === n
                                            ? Object(O.jsx)(d.b, {
                                                  to: "/anmelden",
                                                  className: "".concat(
                                                      "Registrieren" === t
                                                          ? "py-4.5"
                                                          : "px-6"
                                                  ),
                                                  children: Object(O.jsx)(
                                                      "h6",
                                                      {
                                                          className: "text-base ".concat(
                                                              "Registrieren" ===
                                                                  t
                                                                  ? "btn text-white dark:text-black bg-primary dark:bg-primaryDark"
                                                                  : "dark:text-white"
                                                          ),
                                                          children: "Anmelden",
                                                      }
                                                  ),
                                              })
                                            : null,
                                        "Registrieren" !== t && "" === n
                                            ? Object(O.jsx)(d.b, {
                                                  to: "/registrieren",
                                                  className: "py-4.5",
                                                  children: Object(O.jsx)(
                                                      "button",
                                                      {
                                                          className:
                                                              "btn text-base text-white dark:text-black bg-primary dark:bg-primaryDark",
                                                          children:
                                                              "Registrieren",
                                                      }
                                                  ),
                                              })
                                            : null,
                                        "" !== n
                                            ? Object(O.jsxs)("div", {
                                                  className:
                                                      "flex items-center gap-2",
                                                  children: [
                                                      Object(O.jsx)(g, {
                                                          level: p,
                                                          isDarkmode: c,
                                                          size: "2.2rem",
                                                      }),
                                                      Object(O.jsx)("p", {
                                                          className:
                                                              "font-bold dark:text-white",
                                                          children: n,
                                                      }),
                                                      Object(O.jsx)("button", {
                                                          onClick: function () {
                                                              l(k);
                                                          },
                                                          className:
                                                              "btn text-base ml-4 text-white dark:text-black bg-primary dark:bg-primaryDark",
                                                          children: "Abmelden",
                                                      }),
                                                  ],
                                              })
                                            : null,
                                    ],
                                }),
                                Object(O.jsx)("div", {
                                    className: "py-6 lg:hidden",
                                    children: Object(O.jsx)("img", {
                                        src: a ? x : u,
                                        onClick: function () {
                                            s(function (e) {
                                                return !e;
                                            });
                                        },
                                        alt: "Menue",
                                        className: "block h-5 lg:hidden cursor-pointer ".concat(
                                            c ? "whiteSVG" : null
                                        ),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                w = a.p + "static/media/copyright-24px.587a0df3.svg",
                y = (a.p, a.p + "static/media/contact_mail-24px.edc2aa24.svg"),
                v =
                    (a.p,
                    function (e) {
                        var t = e.isDarkmode;
                        return Object(O.jsx)("footer", {
                            className:
                                "bg-white dark:bg-whiteDark mt-auto  dark:text-white",
                            children: Object(O.jsxs)("div", {
                                className:
                                    "max-w-1/9 w-1450 flex justify-between m-auto",
                                children: [
                                    Object(O.jsxs)("div", {
                                        className:
                                            "flex py-6 items-center gap-3",
                                        children: [
                                            Object(O.jsx)("img", {
                                                src: w,
                                                alt: "Copyright",
                                                className: "h-1.25 ".concat(
                                                    t ? "whiteSVG" : null
                                                ),
                                            }),
                                            Object(O.jsx)("p", {
                                                children:
                                                    "2021, California, Batad\xfa",
                                            }),
                                        ],
                                    }),
                                    Object(O.jsxs)("div", {
                                        className:
                                            "flex py-6 items-center gap-3",
                                        children: [
                                            Object(O.jsx)("img", {
                                                src: y,
                                                alt: "Email",
                                                className: "h-1.25 ".concat(
                                                    t ? "whiteSVG" : null
                                                ),
                                            }),
                                            Object(O.jsx)("a", {
                                                href:
                                                    "mailto:support@batadu.com?subject=Feedback&body=Nachricht",
                                                children:
                                                    "Feedback: support@batadu.com",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        });
                    }),
                N = a.p + "static/media/herz.b9ba7224.svg",
                S = a.p + "static/media/laub.fcd007d8.svg",
                D = function (e) {
                    var t = e.setUrl,
                        a = e.isDarkmode,
                        c = Object(s.useState)(0),
                        r = Object(l.a)(c, 2),
                        n = r[0],
                        i = r[1],
                        o = Object(s.useState)(0),
                        m = Object(l.a)(o, 2),
                        b = m[0],
                        j = m[1];
                    return (
                        Object(s.useEffect)(function () {
                            t("/"),
                                document.addEventListener(
                                    "mousemove",
                                    function (e) {
                                        var t =
                                                (window.innerWidth / 2 -
                                                    e.pageX) /
                                                -80,
                                            a =
                                                (window.innerHeight / 2 -
                                                    e.pageY) /
                                                -40;
                                        j(t), i(a);
                                    }
                                );
                        }, []),
                        Object(O.jsxs)("div", {
                            className:
                                "flex w-1450 max-w-1/9 mx-auto py-12 md:my-auto",
                            children: [
                                Object(O.jsxs)("div", {
                                    className: "w-full lg:w-1/2",
                                    children: [
                                        Object(O.jsx)("h6", {
                                            className:
                                                "pb-2 font-bold text-xl text-gray-600 dark:text-gray-200 break-words",
                                            children:
                                                "Sammle Punkte und erh\xf6he dein Level",
                                        }),
                                        Object(O.jsxs)("h1", {
                                            className:
                                                "text-7xl lg:text-7.5xl font-bold pb-8 break-words dark:text-white",
                                            children: [
                                                "Kostenlos Online",
                                                " ",
                                                Object(O.jsxs)("span", {
                                                    className:
                                                        "text-primary dark:text-primaryDark",
                                                    children: ["Watten", " "],
                                                }),
                                                "wie nie zuvor.",
                                            ],
                                        }),
                                        Object(O.jsx)("h5", {
                                            className:
                                                "text-7.5 text-gray-600 dark:text-gray-100",
                                            children:
                                                "Watten mit einer modernen Grafischen Oberfl\xe4che",
                                        }),
                                        Object(O.jsxs)("div", {
                                            className: "flex gap-4 mt-16",
                                            children: [
                                                Object(O.jsx)("button", {
                                                    className:
                                                        "py-2 bg-primary dark:bg-primaryDark w-12ch text-white dark:text-black text-2xl rounded-st focus:outline-none",
                                                    children: Object(O.jsx)(
                                                        d.b,
                                                        {
                                                            to: "/registrieren",
                                                            children:
                                                                "Registrieren",
                                                        }
                                                    ),
                                                }),
                                                Object(O.jsx)("button", {
                                                    className:
                                                        "py-2 border-4 w-12ch border-black dark:border-white dark:text-white text-2xl rounded-st focus:outline-none",
                                                    children: Object(O.jsx)(
                                                        d.b,
                                                        {
                                                            to: "/anmelden",
                                                            children:
                                                                "Anmelden",
                                                        }
                                                    ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(O.jsx)("div", {
                                    className:
                                        "hidden lg:flex w-1/2 items-center justify-center card-container",
                                    children: Object(O.jsx)("div", {
                                        className: "bg-white rounded-3xl border-8 border-gray-500 w-80  h-110rem relative card ".concat(
                                            a ? "cardDark" : "cardWhite"
                                        ),
                                        style: {
                                            transform: "rotateY("
                                                .concat(b, "deg) rotateX(")
                                                .concat(n, "deg)"),
                                        },
                                        children: Object(O.jsxs)("div", {
                                            className: "card-content",
                                            children: [
                                                Object(O.jsx)("div", {
                                                    className:
                                                        "flex justify-start",
                                                    children: Object(O.jsx)(
                                                        "img",
                                                        {
                                                            src: N,
                                                            alt: "herz",
                                                            className: "h-16",
                                                        }
                                                    ),
                                                }),
                                                Object(O.jsx)("h4", {
                                                    className:
                                                        " text-logoGray text-6xl tran text-center font-abril font-normal",
                                                    style: {
                                                        transform:
                                                            "translateZ(100px)",
                                                    },
                                                    children: "Batad\xfa",
                                                }),
                                                Object(O.jsx)("div", {
                                                    className:
                                                        "flex justify-end",
                                                    children: Object(O.jsx)(
                                                        "img",
                                                        {
                                                            src: S,
                                                            alt: "laub",
                                                            className: "h-20",
                                                        }
                                                    ),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        })
                    );
                },
                G = a.p + "static/media/play_arrow-24px.f303159b.svg",
                E = a(5),
                C = a.n(E),
                V = function (e) {
                    var t = e.roomName,
                        a = e.score1,
                        s = e.score2,
                        c = e.team1_0,
                        r = e.team1_1,
                        n = e.team2_0,
                        l = e.team2_1,
                        d = e.isDarkmode,
                        o = (e.setTeam, Object(i.g)());
                    return Object(O.jsxs)("div", {
                        className: "w-full",
                        children: [
                            Object(O.jsx)("p", {
                                className:
                                    "bg-roomGray dark:bg-roomBlack dark:text-white text-center py-2 rounded-t-st font-bold border-gray-400 border-b-2 dark:border-black",
                                children: t,
                            }),
                            Object(O.jsxs)("div", {
                                className:
                                    "flex bg-white dark:bg-whiteDark justify-center dark:text-white",
                                children: [
                                    Object(O.jsxs)("div", {
                                        className:
                                            "flex flex-1 flex-col py-3 px-2 border-gray-400 dark:border-black border-r-2",
                                        children: [
                                            Object(O.jsx)("p", {
                                                className: "w-12ch text-14 text-center ".concat(
                                                    void 0 === c || null === c
                                                        ? "text-secondary dark:text-secondaryDark underline"
                                                        : null
                                                ),
                                                children:
                                                    void 0 === c || null === c
                                                        ? "offen"
                                                        : c,
                                            }),
                                            Object(O.jsx)("p", {
                                                className:
                                                    "text-right mr-2 text-xl font-medium text-primary dark:text-primaryDark",
                                                children: a,
                                            }),
                                            Object(O.jsx)("p", {
                                                className: "w-12ch text-14 text-center ".concat(
                                                    void 0 === r || null === r
                                                        ? "text-secondary dark:text-secondaryDark underline"
                                                        : null
                                                ),
                                                children:
                                                    void 0 === r || null === r
                                                        ? "offen"
                                                        : r,
                                            }),
                                        ],
                                    }),
                                    Object(O.jsxs)("div", {
                                        className:
                                            "flex flex-1 flex-col py-3 px-2",
                                        children: [
                                            Object(O.jsx)("p", {
                                                className: "w-12ch text-14 text-center ml-auto ".concat(
                                                    void 0 === n || null === n
                                                        ? "text-secondary dark:text-secondaryDark underline"
                                                        : null
                                                ),
                                                children:
                                                    void 0 === n || null === n
                                                        ? "offen"
                                                        : n,
                                            }),
                                            Object(O.jsx)("p", {
                                                className:
                                                    "text-left ml-2 text-xl font-medium text-primary dark:text-primaryDark",
                                                children: s,
                                            }),
                                            Object(O.jsx)("p", {
                                                className: "w-12ch text-14 text-center ml-auto ".concat(
                                                    void 0 === l || null === l
                                                        ? "text-secondary dark:text-secondaryDark underline"
                                                        : null
                                                ),
                                                children:
                                                    void 0 === l || null === l
                                                        ? "offen"
                                                        : l,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(O.jsxs)("button", {
                                onClick: function () {
                                    C.a
                                        .get(
                                            "http://localhost:3003/room/select/".concat(
                                                t
                                            )
                                        )
                                        .then(function (e) {
                                            e.data
                                                ? o.push("/team/".concat(t))
                                                : o.push("/spielen/".concat(t));
                                        });
                                },
                                className:
                                    "bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-b-st flex justify-center gap-2 cursor-pointer",
                                children: [
                                    Object(O.jsx)("img", {
                                        src: G,
                                        alt: "Spielen",
                                        className: "".concat(
                                            d ? null : "whiteSVG"
                                        ),
                                    }),
                                    Object(O.jsx)("p", {
                                        children: "Teilnehmen",
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                z = a.p + "static/media/create-24px.249fb4c7.svg",
                P = a.p + "static/media/search-24px.bc2178ae.svg",
                L = function (e) {
                    var t = e.search,
                        a = e.setSearch,
                        s = e.isDarkmode;
                    return Object(O.jsxs)("div", {
                        className:
                            "bg-white dark:bg-whiteDark rounded-st relative py-2 flex items-center",
                        children: [
                            Object(O.jsx)("img", {
                                src: P,
                                alt: "Lupe",
                                className: "px-4 ".concat(
                                    s ? "whiteSVG" : null
                                ),
                            }),
                            Object(O.jsx)("input", {
                                type: "text",
                                className:
                                    "focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white",
                                value: t,
                                onChange: function (e) {
                                    a(e.target.value);
                                },
                                placeholder: "Suchen",
                            }),
                        ],
                    });
                },
                I = function (e) {
                    var t = e.setUrl,
                        a = e.isDarkmode,
                        c = e.socket,
                        r = e.setTeam,
                        n = Object(s.useState)(""),
                        i = Object(l.a)(n, 2),
                        o = i[0],
                        m = i[1],
                        b = Object(s.useState)([]),
                        j = Object(l.a)(b, 2),
                        u = j[0],
                        x = j[1],
                        h = Object(s.useState)([]),
                        f = Object(l.a)(h, 2),
                        p = f[0],
                        g = f[1];
                    return (
                        Object(s.useEffect)(function () {
                            c.emit("getRooms"),
                                c.on("rooms", function (e) {
                                    x(e);
                                }),
                                r(0);
                        }, []),
                        Object(s.useEffect)(
                            function () {
                                g(
                                    "" === o || " " === o
                                        ? u
                                        : u.filter(function (e) {
                                              return e.name
                                                  .toLowerCase()
                                                  .includes(o.toLowerCase());
                                          })
                                );
                            },
                            [u, o]
                        ),
                        Object(s.useEffect)(function () {
                            t("/");
                        }, []),
                        Object(O.jsxs)("div", {
                            className: "w-1450 max-w-1/9 mx-auto mt-8 mb-16",
                            children: [
                                Object(O.jsxs)("div", {
                                    className:
                                        "flex justify-between md:mt-8 flex-col-reverse md:flex-row",
                                    children: [
                                        Object(O.jsx)("h3", {
                                            className:
                                                "font-semibold text-3xl mb-6 dark:text-white",
                                            children: "Spiele",
                                        }),
                                        Object(O.jsx)("div", {
                                            className: "mb-6 w-full md:w-max ",
                                            children: Object(O.jsx)(L, {
                                                search: o,
                                                setSearch: m,
                                                isDarkmode: a,
                                            }),
                                        }),
                                        Object(O.jsx)(d.b, {
                                            to: "/spielen/erstellen",
                                            className: "w-full md:w-max",
                                            children: Object(O.jsxs)("button", {
                                                className:
                                                    "w-full md:w-max  py-1.5 rounded-st bg-primary dark:bg-primaryDark text-white dark:text-black mb-6 flex justify-center px-8",
                                                children: [
                                                    Object(O.jsx)("img", {
                                                        src: z,
                                                        alt: "Erstellen",
                                                        className: "mr-2 ".concat(
                                                            a
                                                                ? null
                                                                : "whiteSVG"
                                                        ),
                                                    }),
                                                    "Spiel erstellen",
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                Object(O.jsx)("div", {
                                    className:
                                        "grid gap-x-16 gap-y-8 grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                                    children: p.map(function (e) {
                                        return Object(O.jsx)(
                                            V,
                                            {
                                                roomName: e.name,
                                                score1: e.team1,
                                                score2: e.team2,
                                                team1_0: e.users[0],
                                                team1_1: e.users[2],
                                                team2_0: e.users[1],
                                                team2_1: e.users[3],
                                                isDarkmode: a,
                                                setTeam: r,
                                            },
                                            1e3 * Math.random()
                                        );
                                    }),
                                }),
                                0 === p.length
                                    ? Object(O.jsxs)("p", {
                                          className: "mt-4 dark:text-white",
                                          children: [
                                              "Keine Spiele gefunden, Sie k\xf6nnen selbt ein Spiel erstellen indem Sie auf",
                                              " ",
                                              Object(O.jsx)("span", {
                                                  className: "font-bold",
                                                  children: "Spiel erstellen",
                                              }),
                                              " dr\xfccken",
                                          ],
                                      })
                                    : null,
                            ],
                        })
                    );
                },
                A = a(29),
                B = function (e) {
                    var t = e.name;
                    return Object(O.jsx)("div", {
                        className:
                            "bg-primary dark:bg-primaryDark text-white dark:text-black text-xs sm:text-base py-1 sm:py-1.5 px-2 sm:px-3 rounded-st",
                        children: Object(O.jsx)("p", { children: t }),
                    });
                };
            function T(e) {
                var t = e.status;
                return Object(O.jsx)("div", {
                    className:
                        "bg-secondary dark:bg-secondaryDark text-white dark:text-black text-xs sm:text-base py-1 sm:py-1.5 px-2 sm:px-3 rounded-st",
                    children: Object(O.jsx)("p", { children: t }),
                });
            }
            var R = function (e) {
                    var t = e.team,
                        a = e.stiche;
                    return Object(O.jsxs)("div", {
                        className: "flex",
                        children: [
                            Object(O.jsxs)("p", {
                                className:
                                    "bg-primaryLight dark:bg-primaryLightDark text-xxs sm:text-xs text-black dark:text-white py-1 sm:py-2 px-2 sm:px-3 border-gray-700 dark:border-gray-300 border-r-2 rounded-l-st",
                                children: [
                                    "Team ",
                                    Object(O.jsx)("span", {
                                        className: "font-bold",
                                        children: t,
                                    }),
                                ],
                            }),
                            Object(O.jsxs)("p", {
                                className:
                                    "bg-primaryLight dark:bg-primaryLightDark text-xxs sm:text-xs text-black dark:text-white py-1 sm:py-2 px-2 sm:px-3 rounded-r-st",
                                children: [
                                    Object(O.jsx)("span", {
                                        className: "font-bold",
                                        children: a,
                                    }),
                                    " Stiche",
                                ],
                            }),
                        ],
                    });
                },
                U = function (e) {
                    var t = e.geboten,
                        a = e.isDarkmode,
                        c = e.users,
                        r = e.pos,
                        n = e.stiche,
                        i = e.status,
                        d = e.teams,
                        o = e.calcPos,
                        m = e.karten,
                        b = e.cardPhotos,
                        j = Object(s.useState)([
                            { level: 0 },
                            { level: 0 },
                            { level: 0 },
                            { level: 0 },
                        ]),
                        u = Object(l.a)(j, 2),
                        x = u[0],
                        h = u[1];
                    return (
                        Object(s.useEffect)(
                            function () {
                                for (
                                    var e = function (e) {
                                            void 0 !== c[e] &&
                                                null !== c[e] &&
                                                void 0 === x[e].user &&
                                                x[e].user !== c[e] &&
                                                C.a
                                                    .get(
                                                        "http://10.10.30.218:42069/user/level",
                                                        {
                                                            params: {
                                                                username: c[e],
                                                            },
                                                        }
                                                    )
                                                    .then(function (t) {
                                                        var a = x.slice();
                                                        (a[e].level =
                                                            t.data.currentlevel.nr),
                                                            (a[e].user = c[e]),
                                                            h(a);
                                                    });
                                        },
                                        t = 0;
                                    t < c.length;
                                    t++
                                )
                                    e(t);
                            },
                            [c]
                        ),
                        Object(O.jsxs)("div", {
                            className:
                                "w-90% pt-90% sm:pt-0 sm:w-29rem sm:h-29rem flex items-center justify-center bg-tableGray dark:bg-whiteDark relative rounded-full border-8 sm:border-12 border-borderGray dark:border-borderBlack",
                            children: [
                                void 0 !== m[o(2 + r)] && null !== m[o(2 + r)]
                                    ? Object(O.jsx)("img", {
                                          className:
                                              "h-auto w-4.275rem md:w-4.75rem absolute top-6 md:top-12 left-1/2",
                                          style: {
                                              transform: "translateX(-50%)",
                                          },
                                          src: b[m[o(2 + r)]],
                                          alt: m[o(2 + r)],
                                      })
                                    : null,
                                void 0 !== m[o(3 + r)] && null !== m[o(3 + r)]
                                    ? Object(O.jsx)("img", {
                                          className:
                                              "h-auto w-4.275rem md:w-4.75rem absolute top-1/2 left-7 md:left-14",
                                          style: {
                                              transform: "translateY(-50%)",
                                          },
                                          src: b[m[o(3 + r)]],
                                          alt: m[o(3 + r)],
                                      })
                                    : null,
                                void 0 !== m[o(1 + r)] && null !== m[o(1 + r)]
                                    ? Object(O.jsx)("img", {
                                          className:
                                              "h-auto w-4.275rem md:w-4.75rem absolute top-1/2 right-7 md:right-14",
                                          style: {
                                              transform: "translateY(-50%)",
                                          },
                                          src: b[m[o(1 + r)]],
                                          alt: m[o(1 + r)],
                                      })
                                    : null,
                                void 0 !== m[o(0 + r)] && null !== m[o(0 + r)]
                                    ? Object(O.jsx)("img", {
                                          className:
                                              "h-auto w-4.275rem md:w-4.75rem absolute bottom-6 md:bottom-12 left-1/2",
                                          style: {
                                              transform: "translateX(-50%)",
                                          },
                                          src: b[m[o(0 + r)]],
                                          alt: m[o(0 + r)],
                                      })
                                    : null,
                                Object(O.jsxs)("p", {
                                    className:
                                        "hidden sm:block dark:text-white",
                                    children: [
                                        "Geboten: ",
                                        Object(O.jsx)("span", {
                                            className: "font-bold",
                                            children: t,
                                        }),
                                    ],
                                }),
                                void 0 !== c[o(2 + r)] && null !== c[o(2 + r)]
                                    ? Object(O.jsx)("div", {
                                          className:
                                              "absolute -top-10 left-1/2 topBadge",
                                          children: Object(O.jsx)(g, {
                                              className: "tisch",
                                              level: x[o(2 + r)].level,
                                              isDarkmode: a,
                                          }),
                                      })
                                    : null,
                                void 0 !== c[o(3 + r)] && null !== c[o(3 + r)]
                                    ? Object(O.jsx)("div", {
                                          className:
                                              "absolute top-1/2 -left-10 leftBadge",
                                          children: Object(O.jsx)(g, {
                                              className: "tisch",
                                              level: x[o(3 + r)].level,
                                              isDarkmode: a,
                                          }),
                                      })
                                    : null,
                                void 0 !== c[o(1 + r)] && null !== c[o(1 + r)]
                                    ? Object(O.jsx)("div", {
                                          className:
                                              "absolute top-1/2 -right-10 rightBadge",
                                          children: Object(O.jsx)(g, {
                                              className: "tisch",
                                              level: x[o(1 + r)].level,
                                              isDarkmode: a,
                                          }),
                                      })
                                    : null,
                                void 0 !== c[o(0 + r)] && null !== c[o(0 + r)]
                                    ? Object(O.jsx)("div", {
                                          className:
                                              "absolute -bottom-10 left-1/2 bottomBadge",
                                          children: Object(O.jsx)(g, {
                                              className: "tisch",
                                              level: x[o(0 + r)].level,
                                              isDarkmode: a,
                                          }),
                                      })
                                    : null,
                                void 0 !== c[o(2 + r)] && null !== c[o(2 + r)]
                                    ? Object(O.jsxs)("div", {
                                          className:
                                              "absolute -top-10 top md:left-1/2 flex flex-col items-center",
                                          children: [
                                              Object(O.jsx)(B, {
                                                  name: c[o(2 + r)],
                                              }),
                                              Object(O.jsx)(R, {
                                                  stiche: n[o(2 + r)],
                                                  team: d[o(2 + r)],
                                              }),
                                              null != i[o(2 + r)]
                                                  ? Object(O.jsx)(T, {
                                                        status: i[o(2 + r)],
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                                void 0 !== c[o(3 + r)] && null !== c[o(3 + r)]
                                    ? Object(O.jsxs)("div", {
                                          className:
                                              "absolute top-1/2 left -left-4 flex flex-col items-center",
                                          children: [
                                              Object(O.jsx)(B, {
                                                  name: c[o(3 + r)],
                                              }),
                                              Object(O.jsx)(R, {
                                                  stiche: n[o(3 + r)],
                                                  team: d[o(3 + r)],
                                              }),
                                              null != i[o(3 + r)]
                                                  ? Object(O.jsx)(T, {
                                                        status: i[o(3 + r)],
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                                void 0 !== c[o(1 + r)] && null !== c[o(1 + r)]
                                    ? Object(O.jsxs)("div", {
                                          className:
                                              "absolute top-1/2 -right-4 right flex flex-col items-center",
                                          children: [
                                              Object(O.jsx)(B, {
                                                  name: c[o(1 + r)],
                                              }),
                                              Object(O.jsx)(R, {
                                                  stiche: n[o(1 + r)],
                                                  team: d[o(1 + r)],
                                              }),
                                              null != i[o(1 + r)]
                                                  ? Object(O.jsx)(T, {
                                                        status: i[o(1 + r)],
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                                void 0 !== c[o(0 + r)] && null !== c[o(0 + r)]
                                    ? Object(O.jsxs)("div", {
                                          className:
                                              "absolute -bottom-4 bottom left-1/2 flex flex-col items-center",
                                          children: [
                                              Object(O.jsx)(B, {
                                                  name: c[o(0 + r)],
                                              }),
                                              Object(O.jsx)(R, {
                                                  stiche: n[o(0 + r)],
                                                  team: d[o(0 + r)],
                                              }),
                                              null != i[o(0 + r)]
                                                  ? Object(O.jsx)(T, {
                                                        status: i[o(0 + r)],
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                            ],
                        })
                    );
                },
                H = function (e) {
                    var t = e.isDarkmode,
                        a = e.punkte,
                        s = e.isTeam1Gestrichen,
                        c = e.isTeam2Gestrichen;
                    return Object(O.jsx)("div", {
                        className: "bg-white dark:bg-whiteDark flex flex-center text-xs text-center rounded-b-st h-96 xl:h-64 overflow-auto stiche ".concat(
                            t ? "scrollDark" : "scrollWhite"
                        ),
                        children: Object(O.jsxs)("table", {
                            className:
                                "mx-auto my-4 dark:text-white relative text-sm text-center",
                            children: [
                                Object(O.jsx)("div", {
                                    className: "bg-gray-500 absolute ".concat(
                                        s ? "left-1/4" : "hidden",
                                        " top-5"
                                    ),
                                    style: {
                                        height: "calc(100% - 2rem)",
                                        width: "1px",
                                    },
                                }),
                                Object(O.jsx)("div", {
                                    className: "bg-gray-500 absolute ".concat(
                                        c ? "right-1/4" : "hidden",
                                        " top-5"
                                    ),
                                    style: {
                                        height: "calc(100% - 2rem)",
                                        width: "1px",
                                    },
                                }),
                                Object(O.jsx)("thead", {
                                    children: Object(O.jsxs)("tr", {
                                        children: [
                                            Object(O.jsx)("th", {
                                                children: "Team 1",
                                            }),
                                            Object(O.jsx)("th", {
                                                children: "Team 2",
                                            }),
                                        ],
                                    }),
                                }),
                                Object(O.jsxs)("tbody", {
                                    children: [
                                        a.map(function (e) {
                                            return Object(O.jsxs)("tr", {
                                                children: [
                                                    Object(O.jsx)("td", {
                                                        children: e.team1,
                                                    }),
                                                    Object(O.jsx)("td", {
                                                        children: e.team2,
                                                    }),
                                                ],
                                            });
                                        }),
                                        Object(O.jsxs)("tr", {
                                            className:
                                                "text-primary dark:text-primaryDark",
                                            children: [
                                                Object(O.jsx)("td", {
                                                    children: a.reduce(
                                                        function (e, t) {
                                                            return "number" ==
                                                                typeof t.team1
                                                                ? e + t.team1
                                                                : e;
                                                        },
                                                        0
                                                    ),
                                                }),
                                                Object(O.jsx)("td", {
                                                    children: a.reduce(
                                                        function (e, t) {
                                                            return "number" ==
                                                                typeof t.team2
                                                                ? e + t.team2
                                                                : e;
                                                        },
                                                        0
                                                    ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                W = function (e) {
                    var t = e.gewinner,
                        a = e.karten,
                        c = e.pos,
                        r = e.calcPos,
                        n = e.cardPhotos;
                    return (
                        Object(s.useEffect)(function () {}, [t]),
                        Object(O.jsx)("div", {
                            className:
                                "bg-white dark:bg-whiteDark relative flex justify-center items-center w-full h-96 xl:h-64 rounded-b-st",
                            children: Object(O.jsxs)("div", {
                                className: "h-56 w-56 relative",
                                children: [
                                    Object(O.jsx)("img", {
                                        className: "h-auto w-2.875rem absolute top-0 left-1/2 border-4 ".concat(
                                            r(2 + c) === t
                                                ? "border-secondary dark:border-secondaryDark"
                                                : null
                                        ),
                                        style: {
                                            transform: "translateX(-50%)",
                                        },
                                        src: n[a[r(2 + c)]],
                                        alt: a[r(2 + c)],
                                    }),
                                    Object(O.jsx)("img", {
                                        className: "h-auto w-2.875rem absolute top-1/2 left-0 border-4 ".concat(
                                            r(3 + c) === t
                                                ? "border-secondary dark:border-secondaryDark"
                                                : null
                                        ),
                                        style: {
                                            transform: "translateY(-50%)",
                                        },
                                        src: n[a[r(3 + c)]],
                                        alt: a[r(3 + c)],
                                    }),
                                    Object(O.jsx)("img", {
                                        className: "h-auto w-2.875rem absolute top-1/2 right-0 border-4 ".concat(
                                            r(1 + c) === t
                                                ? "border-secondary dark:border-secondaryDark"
                                                : null
                                        ),
                                        style: {
                                            transform: "translateY(-50%)",
                                        },
                                        src: n[a[r(1 + c)]],
                                        alt: a[r(1 + c)],
                                    }),
                                    Object(O.jsx)("img", {
                                        className: "h-auto w-2.875rem absolute bottom-0 left-1/2 border-4 ".concat(
                                            r(0 + c) === t
                                                ? "border-secondary dark:border-secondaryDark"
                                                : null
                                        ),
                                        style: {
                                            transform: "translateX(-50%)",
                                        },
                                        src: n[a[r(0 + c)]],
                                        alt: a[r(0 + c)],
                                    }),
                                ],
                            }),
                        })
                    );
                },
                Z = function (e) {
                    var t = e.selectHandler,
                        a = e.selected,
                        s = e.name;
                    return Object(O.jsxs)("div", {
                        className: "flex-1 relative",
                        children: [
                            Object(O.jsx)("p", {
                                className: " text-center font-bold py-3 cursor-pointer ".concat(
                                    a === s
                                        ? "text-primary dark:text-primaryDark"
                                        : null
                                ),
                                onClick: t,
                                children: s,
                            }),
                            a === s
                                ? Object(O.jsx)("div", {
                                      className:
                                          "bg-primary dark:bg-primaryDark z-10 h-1.5 w-full absolute rounded-b-st -bottom-1.5",
                                  })
                                : null,
                        ],
                    });
                },
                _ = Object(s.forwardRef)(function (e, t) {
                    var a = e.isDarkmode,
                        s = e.selected,
                        c = e.setSelected,
                        r = e.karten,
                        n = e.gewinner,
                        l = e.seeStiche,
                        i = e.calcPos,
                        d = e.pos,
                        o = e.punkte,
                        m = e.isTeam1Gestrichen,
                        b = e.isTeam2Gestrichen,
                        j = e.cardPhotos;
                    function u(e) {
                        c(e.target.innerHTML);
                    }
                    return Object(O.jsxs)("div", {
                        ref: t,
                        className: "pt-20 -mt-28 xl:pt-0 xl:mt-0",
                        children: [
                            Object(O.jsxs)("div", {
                                className:
                                    "flex bg-spielGray dark:bg-roomBlack dark:text-white rounded-t-st",
                                children: [
                                    Object(O.jsx)(Z, {
                                        selectHandler: u,
                                        selected: s,
                                        name: "Punkte",
                                    }),
                                    l
                                        ? Object(O.jsx)(Z, {
                                              selectHandler: u,
                                              selected: s,
                                              name: "Stich 1",
                                          })
                                        : null,
                                ],
                            }),
                            Object(O.jsx)("div", {
                                children:
                                    "Punkte" === s
                                        ? Object(O.jsx)(H, {
                                              punkte: o,
                                              isDarkmode: a,
                                              isTeam1Gestrichen: m,
                                              isTeam2Gestrichen: b,
                                          })
                                        : "Stich 1" === s
                                        ? Object(O.jsx)(W, {
                                              karten: r,
                                              gewinner: n,
                                              seeStiche: l,
                                              calcPos: i,
                                              pos: d,
                                              cardPhotos: j,
                                          })
                                        : null,
                            }),
                        ],
                    });
                }),
                K = a.p + "static/media/insert_emoticon-24px.0e9174e8.svg",
                M = a.p + "static/media/gif-24px.ae9c6de2.svg",
                Y = a.p + "static/media/send-24px.949274d9.svg",
                X = function (e) {
                    var t = e.message,
                        a = e.sender;
                    return Object(O.jsxs)("div", {
                        className: "flex flex-col w-full pr-2 mb-2",
                        children: [
                            Object(O.jsx)("div", {
                                className: "flex w-full ".concat(
                                    "Ich" === a ? "justify-end" : null
                                ),
                                children: Object(O.jsx)("p", {
                                    className: "text-sm w-max-content w-max-full py-2 px-4 rounded-st break-words  ".concat(
                                        "System" === a
                                            ? "text-white dark:text-black bg-primary dark:bg-primaryDark"
                                            : "bg-spielGray dark:bg-chatBlack dark:text-white"
                                    ),
                                    children: t,
                                }),
                            }),
                            Object(O.jsx)("p", {
                                className: "font-bold text-xs py-1 dark:text-white ".concat(
                                    "Ich" === a
                                        ? "flex justify-end"
                                        : "System" === a
                                        ? "text-primary dark:text-primaryDark"
                                        : null
                                ),
                                children: a,
                            }),
                        ],
                    });
                };
            function F(e) {
                var t = e.sender,
                    a = e.url;
                return Object(O.jsxs)("div", {
                    className: "flex flex-col w-full pr-2",
                    children: [
                        Object(O.jsx)("div", {
                            className: "flex w-full ".concat(
                                "Ich" === t ? "justify-end" : null
                            ),
                            children: Object(O.jsx)("img", {
                                src: a,
                                alt: "gif",
                                className: "h-24 rounded-st",
                            }),
                        }),
                        Object(O.jsx)("p", {
                            className: "font-bold text-xs py-1 dark:text-white ".concat(
                                "Ich" === t
                                    ? "flex justify-end"
                                    : "System" === t
                                    ? "text-primary dark:text-primaryDark"
                                    : null
                            ),
                            children: t,
                        }),
                    ],
                });
            }
            var J = a(80);
            a(110);
            function q(e) {
                var t = e.isDarkmode,
                    a = e.sendHandler,
                    c = Object(s.useState)(""),
                    r = Object(l.a)(c, 2),
                    n = r[0],
                    i = r[1],
                    d = Object(s.useState)([]),
                    o = Object(l.a)(d, 2),
                    m = o[0],
                    b = o[1];
                function j(e) {
                    i(""), a(e), u();
                }
                function u() {
                    C()({
                        method: "GET",
                        url: "https://g.tenor.com/v1/trending?key=SL1KD4EPL166",
                    }).then(function (e) {
                        b(
                            e.data.results.map(function (e) {
                                return {
                                    url: e.media[0].tinygif.url,
                                    key: e.id,
                                };
                            })
                        );
                    });
                }
                return (
                    Object(s.useEffect)(
                        function () {
                            var e;
                            if ("" !== n)
                                return (
                                    C()({
                                        method: "GET",
                                        url: "https://g.tenor.com/v1/search?q=".concat(
                                            n,
                                            "&key=SL1KD4EPL166"
                                        ),
                                        cancelToken: new C.a.CancelToken(
                                            function (t) {
                                                return (e = t);
                                            }
                                        ),
                                    }).then(function (e) {
                                        b(
                                            e.data.results.map(function (e) {
                                                return {
                                                    url: e.media[0].tinygif.url,
                                                    key: e.id,
                                                };
                                            })
                                        );
                                    }),
                                    function () {
                                        return e();
                                    }
                                );
                        },
                        [n]
                    ),
                    Object(s.useEffect)(function () {
                        u();
                    }, []),
                    Object(O.jsxs)("div", {
                        className:
                            "w-full h-96 p-3 gap-1 flex flex-col bg-white dark:border-gray-500 border-gray-300 border-1 dark:bg-roomBlack rounded-st",
                        children: [
                            Object(O.jsx)("input", {
                                type: "text",
                                value: n,
                                placeholder: "Suchen Sie einen Gif...",
                                onChange: function (e) {
                                    i(e.target.value);
                                },
                                className:
                                    "rounded-st focus:outline-none p-2 w-full text-sm dark:bg-chatBlack bg-spielGray dark:text-white",
                            }),
                            Object(O.jsxs)("div", {
                                className: "flex-1 w-full overflow-auto flex flex-wrap ".concat(
                                    t ? "scrollDark" : "scrollWhite"
                                ),
                                children: [
                                    Object(O.jsx)("div", {
                                        className: "w-1/2",
                                        children: [
                                            m.map(function (e, t) {
                                                if (t % 2 === 0)
                                                    return Object(O.jsx)(
                                                        "img",
                                                        {
                                                            src: e.url,
                                                            alt: "",
                                                            className:
                                                                "p-1 w-full h-auto self-center cursor-pointer",
                                                            onClick: j,
                                                        },
                                                        e.key
                                                    );
                                            }),
                                        ],
                                    }),
                                    Object(O.jsx)("div", {
                                        className: "w-1/2",
                                        children: [
                                            m.map(function (e, t) {
                                                if (t % 2 !== 0)
                                                    return Object(O.jsx)(
                                                        "img",
                                                        {
                                                            src: e.url,
                                                            alt: "",
                                                            className:
                                                                "p-1 w-full h-auto self-center cursor-pointer",
                                                            onClick: j,
                                                        },
                                                        e.key
                                                    );
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            }
            var $ = a(82),
                Q = Object(s.forwardRef)(function (e, t) {
                    var a = e.isDarkmode,
                        c = e.socket,
                        r = e.username,
                        n = Object(s.useState)(""),
                        i = Object(l.a)(n, 2),
                        d = i[0],
                        o = i[1],
                        m = Object(s.useState)([]),
                        b = Object(l.a)(m, 2),
                        j = b[0],
                        u = b[1],
                        x = Object(s.useState)(!1),
                        h = Object(l.a)(x, 2),
                        f = h[0],
                        p = h[1],
                        g = Object(s.useRef)(),
                        k = Object(s.useRef)(),
                        w = Object(s.useState)(!1),
                        y = Object(l.a)(w, 2),
                        v = y[0],
                        N = y[1],
                        S = Object(s.useRef)(),
                        D = Object(s.useRef)();
                    function G() {
                        if ("" !== d && " " !== d) {
                            var e = { message: d, type: "text", sender: r };
                            c.emit("chat", e),
                                u(function (e) {
                                    return [].concat(Object(A.a)(e), [
                                        {
                                            message: d,
                                            sender: "Ich",
                                            type: "text",
                                        },
                                    ]);
                                }),
                                o("");
                        }
                    }
                    return (
                        Object(s.useEffect)(
                            function () {
                                a
                                    ? (document
                                          .getElementsByClassName(
                                              "emoji-mart-scroll"
                                          )[0]
                                          .classList.remove("scrollWhite"),
                                      document
                                          .getElementsByClassName(
                                              "emoji-mart-scroll"
                                          )[0]
                                          .classList.add("scrollDark"))
                                    : (document
                                          .getElementsByClassName(
                                              "emoji-mart-scroll"
                                          )[0]
                                          .classList.remove("scrollDark"),
                                      document
                                          .getElementsByClassName(
                                              "emoji-mart-scroll"
                                          )[0]
                                          .classList.add("scrollWhite"));
                            },
                            [a]
                        ),
                        Object(s.useEffect)(function () {
                            var e = function (e) {
                                !g.current ||
                                    g.current.contains(e.target) ||
                                    k.current.contains(e.target) ||
                                    p(!1);
                            };
                            return (
                                document.addEventListener("mousedown", e),
                                function () {
                                    document.removeEventListener(
                                        "mousedown",
                                        e
                                    );
                                }
                            );
                        }, []),
                        Object(s.useEffect)(function () {
                            var e = function (e) {
                                !S.current ||
                                    S.current.contains(e.target) ||
                                    D.current.contains(e.target) ||
                                    N(!1);
                            };
                            return (
                                document.addEventListener("mousedown", e),
                                function () {
                                    document.removeEventListener(
                                        "mousedown",
                                        e
                                    );
                                }
                            );
                        }, []),
                        Object(s.useEffect)(function () {
                            c.on("chat", function (e) {
                                u(function (t) {
                                    return [].concat(Object(A.a)(t), [e]);
                                });
                            });
                        }, []),
                        Object(O.jsxs)("div", {
                            ref: t,
                            className:
                                "relative flex flex-col h-40rem xl:h-28.25rem",
                            children: [
                                " ",
                                Object(O.jsxs)("div", {
                                    className:
                                        "relative bg-spielGray dark:bg-roomBlack rounded-t-st mt-8",
                                    children: [
                                        " ",
                                        Object(O.jsxs)("p", {
                                            className:
                                                "text-left font-bold py-3 px-4 cursor-pointer text-primary dark:text-primaryDark",
                                            children: [" ", "Spiel Chat", " "],
                                        }),
                                        " ",
                                        Object(O.jsx)("div", {
                                            className:
                                                "bg-primary dark:bg-primaryDark z-10 h-1.5 w-full absolute rounded-b-st -bottom-1.5",
                                        }),
                                        " ",
                                    ],
                                }),
                                " ",
                                Object(O.jsxs)("div", {
                                    className:
                                        "flex relative flex-col p-4 bg-white dark:bg-whiteDark rounded-b-st justify-between xl:justify-start",
                                    children: [
                                        Object(O.jsx)("div", {
                                            className: "flex flex-col gap-2 pr-2 overflow-y-auto mb-2 max-h-chat xl:max-h-17.5rem xl:h-17.5rem ".concat(
                                                a ? "scrollDark" : "scrollWhite"
                                            ),
                                            children: Object(O.jsx)(J.a, {
                                                className: "".concat(
                                                    a
                                                        ? "scrollDark"
                                                        : "scrollWhite"
                                                ),
                                                forceScroll: !0,
                                                children: j.map(function (e) {
                                                    return "text" === e.type
                                                        ? Object(O.jsx)(
                                                              X,
                                                              {
                                                                  message:
                                                                      e.message,
                                                                  sender:
                                                                      e.sender,
                                                              },
                                                              1e3 *
                                                                  Math.random()
                                                          )
                                                        : Object(O.jsx)(
                                                              F,
                                                              {
                                                                  url: e.url,
                                                                  sender:
                                                                      e.sender,
                                                              },
                                                              1e3 *
                                                                  Math.random()
                                                          );
                                                }),
                                            }),
                                        }),
                                        Object(O.jsx)("div", {
                                            className: "z-10 w-full absolute pr-8 bottom-20 ".concat(
                                                f ? "block" : "hidden"
                                            ),
                                            ref: g,
                                            children: Object(O.jsx)($.a, {
                                                onSelect: function (e) {
                                                    return o(function (t) {
                                                        return t + e.native;
                                                    });
                                                },
                                                theme: "".concat(
                                                    a ? "dark" : "light"
                                                ),
                                                color: "".concat(
                                                    a ? "#F56B8B" : "#B2163A"
                                                ),
                                                title: "Emoji Batad\xfa",
                                                style: {
                                                    width: "100%",
                                                    borderRadius: "10px",
                                                },
                                            }),
                                        }),
                                        Object(O.jsx)("div", {
                                            className: "z-10 w-full absolute pr-8 bottom-20 ".concat(
                                                v ? "block" : "hidden"
                                            ),
                                            ref: S,
                                            children: Object(O.jsx)(q, {
                                                sendHandler: function (e) {
                                                    var t = e.target.src,
                                                        a = {
                                                            url: t,
                                                            type: "gif",
                                                            sender: r,
                                                        };
                                                    c.emit("chat", a),
                                                        u(function (e) {
                                                            return [].concat(
                                                                Object(A.a)(e),
                                                                [
                                                                    {
                                                                        url: t,
                                                                        sender:
                                                                            "Ich",
                                                                        type:
                                                                            "gif",
                                                                    },
                                                                ]
                                                            );
                                                        }),
                                                        o(""),
                                                        N(!1);
                                                },
                                                isDarkmode: a,
                                            }),
                                        }),
                                        Object(O.jsxs)("div", {
                                            className:
                                                " bg-spielGray dark:bg-chatBlack w-full p-2 x-4 rounded-st flex items-center justify-between",
                                            children: [
                                                Object(O.jsx)("input", {
                                                    type: "text",
                                                    value: d,
                                                    placeholder:
                                                        "Schreiben Sie etwas...",
                                                    onChange: function (e) {
                                                        o(e.target.value);
                                                    },
                                                    className:
                                                        "bg-spielGray focus:outline-none p-2 w-full text-sm dark:bg-chatBlack dark:text-white",
                                                    onKeyDown: function (e) {
                                                        "Enter" === e.key &&
                                                            G();
                                                    },
                                                }),
                                                Object(O.jsxs)("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        Object(O.jsx)("div", {
                                                            className:
                                                                "bg-secondary dark:bg-secondaryDark rounded-st h-9 w-9 flex justify-center items-center",
                                                            children: Object(
                                                                O.jsx
                                                            )("img", {
                                                                src: K,
                                                                alt: "Emoji",
                                                                onClick: function () {
                                                                    p(function (
                                                                        e
                                                                    ) {
                                                                        return !e;
                                                                    });
                                                                },
                                                                className: "cursor-pointer w-2/3 ".concat(
                                                                    a
                                                                        ? null
                                                                        : "whiteSVG"
                                                                ),
                                                                ref: k,
                                                            }),
                                                        }),
                                                        Object(O.jsx)("div", {
                                                            className:
                                                                "bg-secondary dark:bg-secondaryDark rounded-st h-9 w-9 flex justify-center items-center",
                                                            children: Object(
                                                                O.jsx
                                                            )("img", {
                                                                src: M,
                                                                alt: "Gif",
                                                                ref: D,
                                                                className: "cursor-pointer w-full ".concat(
                                                                    a
                                                                        ? null
                                                                        : "whiteSVG"
                                                                ),
                                                                onClick: function () {
                                                                    N(function (
                                                                        e
                                                                    ) {
                                                                        return !e;
                                                                    });
                                                                },
                                                            }),
                                                        }),
                                                        Object(O.jsx)("div", {
                                                            className:
                                                                "bg-primary dark:bg-primaryDark rounded-st h-9 w-9 flex justify-center items-center",
                                                            children: Object(
                                                                O.jsx
                                                            )("img", {
                                                                src: Y,
                                                                alt: "Send",
                                                                className: "cursor-pointer w-3/5 ".concat(
                                                                    a
                                                                        ? null
                                                                        : "whiteSVG"
                                                                ),
                                                                onClick: G,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                ee = a.p + "static/media/no-dark.ea5c5b6a.svg",
                te = a.p + "static/media/yes-dark.6bbad7d8.svg",
                ae = a.p + "static/media/no-white.5ae987f9.svg",
                se = a.p + "static/media/yes-white.6f6b57f2.svg",
                ce = a.p + "static/media/lock-24px.733ab324.svg";
            function re(e) {
                var t = e.isDarkmode,
                    a = e.setIsPassword,
                    c = e.joinGame,
                    r = e.room,
                    n = Object(s.useState)(""),
                    i = Object(l.a)(n, 2),
                    o = i[0],
                    m = i[1],
                    b = Object(s.useState)(""),
                    j = Object(l.a)(b, 2),
                    u = j[0],
                    x = j[1];
                return Object(O.jsxs)("div", {
                    className:
                        "mt-32 flex justify-center items-center flex-col m-auto w-96 max-w-1/9",
                    children: [
                        Object(O.jsx)("h6", {
                            className:
                                "text-center text-3xl dark:text-white w-10/12 mb-3.625rem",
                            children:
                                "Dieses Spiel ben\xf6tigt einen Password um beizutreten",
                        }),
                        Object(O.jsx)("div", {
                            className: "w-full flex flex-col gap-6\r ",
                            children: Object(O.jsxs)("div", {
                                className:
                                    "w-full bg-white dark:bg-whiteDark rounded-st py-2 flex items-center",
                                children: [
                                    Object(O.jsx)("img", {
                                        src: ce,
                                        alt: "Name",
                                        className: "px-4 ".concat(
                                            t ? "whiteSVG" : null
                                        ),
                                    }),
                                    Object(O.jsx)("input", {
                                        type: "password",
                                        className:
                                            "focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white",
                                        value: o,
                                        onChange: function (e) {
                                            m(e.target.value);
                                        },
                                        placeholder: "Password",
                                    }),
                                ],
                            }),
                        }),
                        Object(O.jsx)("p", {
                            className: "".concat(
                                "" === u ? "hidden" : "block",
                                " text-xm text-primary dark:text-primaryDark mt-4"
                            ),
                            children: u,
                        }),
                        Object(O.jsx)("button", {
                            onClick: function () {
                                C.a
                                    .get(
                                        "http://localhost:3003/room/password/"
                                            .concat(r, "/")
                                            .concat(o)
                                    )
                                    .then(function (e) {
                                        e.data
                                            ? (a(!1), c())
                                            : x("Dass Passwort ist falsch");
                                    });
                            },
                            className:
                                "bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4",
                            children: "Beitreten",
                        }),
                        Object(O.jsxs)("p", {
                            className:
                                "text-sm mt-3.625rem text-gray-600 dark:text-gray-400 mb-16",
                            children: [
                                "M\xf6chten Sie einem anderen Spiel beitreten?",
                                " ",
                                Object(O.jsx)(d.b, {
                                    to: "/spielen",
                                    children: Object(O.jsx)("span", {
                                        className:
                                            "font-bold underline text-black dark:text-white",
                                        children: "Zur\xfcck",
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            }
            var ne = a(34),
                le = a.p + "static/media/Siebner Eichel.7caf29a0.png",
                ie = a.p + "static/media/Siebner Herz.3eb67cf6.png",
                de = a.p + "static/media/Siebner Laub.2d021f13.png",
                oe = a.p + "static/media/Siebner Shell.c1c44da5.png",
                me = a.p + "static/media/Achter Eichel.98d8b6d9.png",
                be = a.p + "static/media/Achter Herz.1c0cfa3f.png",
                je = a.p + "static/media/Achter Laub.8c92a459.png",
                ue = a.p + "static/media/Achter Shell.092edb33.png",
                xe = a.p + "static/media/Neuner Eichel.af67617a.png",
                he = a.p + "static/media/Neuner Herz.64b884fe.png",
                fe = a.p + "static/media/Neuner Laub.1e873cb7.png",
                pe = a.p + "static/media/Neuner Shell.4ebba285.png",
                Oe = a.p + "static/media/Zehner Eichel.05081d14.png",
                ge = a.p + "static/media/Zehner Herz.c088a4e2.png",
                ke = a.p + "static/media/Zehner Laub.5e7da75d.png",
                we = a.p + "static/media/Zehner Shell.7e1135f1.png",
                ye = a.p + "static/media/Unter Eichel.879d40aa.png",
                ve = a.p + "static/media/Unter Herz.b77d30b5.png",
                Ne = a.p + "static/media/Unter Laub.51544108.png",
                Se = a.p + "static/media/Unter Shell.22a8ac3a.png",
                De = a.p + "static/media/Ober Eichel.28da0d22.png",
                Ge = a.p + "static/media/Ober Herz.46c604fe.png",
                Ee = a.p + "static/media/Ober Laub.0961b04b.png",
                Ce = a.p + "static/media/Ober Shell.97362b0a.png",
                Ve = a.p + "static/media/Koenig Eichel.80b113b4.png",
                ze = {
                    "Siebner Herz": ie,
                    "Siebner Eichel": le,
                    "Siebner Laub": de,
                    "Siebner Shell": oe,
                    "Achter Herz": be,
                    "Achter Eichel": me,
                    "Achter Laub": je,
                    "Achter Shell": ue,
                    "Neuner Herz": he,
                    "Neuner Eichel": xe,
                    "Neuner Laub": fe,
                    "Neuner Shell": pe,
                    "Zehner Herz": ge,
                    "Zehner Eichel": Oe,
                    "Zehner Laub": ke,
                    "Zehner Shell": we,
                    "Unter Herz": ve,
                    "Unter Eichel": ye,
                    "Unter Laub": Ne,
                    "Unter Shell": Se,
                    "Ober Herz": Ge,
                    "Ober Eichel": De,
                    "Ober Laub": Ee,
                    "Ober Shell": Ce,
                    "Koenig Herz":
                        a.p + "static/media/Koenig Herz.3d6a6fa9.png",
                    "Koenig Eichel": Ve,
                    "Koenig Laub":
                        a.p + "static/media/Koenig Laub.d8b48bd8.png",
                    "Koenig Shell":
                        a.p + "static/media/Koenig Shell.cbb6cbee.png",
                    "Ass Herz": a.p + "static/media/Ass Herz.a5a80ed4.png",
                    "Ass Eichel": a.p + "static/media/Ass Eichel.991bc89a.png",
                    "Ass Laub": a.p + "static/media/Ass Laub.14f9a50d.png",
                    "Ass Shell": a.p + "static/media/Ass Shell.f70ed1f4.png",
                    Weli: a.p + "static/media/Weli.330d541e.png",
                },
                Pe = a.p + "static/media/game-1.ad9bb14a.mp3",
                Le = a.p + "static/media/game-2.42e3fd74.mp3",
                Ie = a.p + "static/media/game-3.ac627174.mp3",
                Ae = a.p + "static/media/game-4.af017b2f.mp3",
                Be = function (e) {
                    var t = e.setUrl,
                        a = e.isDarkmode,
                        c = e.socket,
                        r = e.team,
                        n = e.username,
                        o = e.setReconnect,
                        m = Object(s.useState)(!1),
                        b = Object(l.a)(m, 2),
                        j = b[0],
                        u = b[1],
                        x = Object(s.useState)(2),
                        h = Object(l.a)(x, 2),
                        f = h[0],
                        p = h[1],
                        g = Object(s.useState)("?"),
                        k = Object(l.a)(g, 2),
                        w = k[0],
                        y = k[1],
                        v = Object(s.useState)("?"),
                        N = Object(l.a)(v, 2),
                        S = N[0],
                        D = N[1],
                        G = Object(s.useState)(""),
                        E = Object(l.a)(G, 2),
                        V = E[0],
                        z = E[1],
                        P = Object(s.useState)(""),
                        L = Object(l.a)(P, 2),
                        I = L[0],
                        B = L[1],
                        T = Object(s.useState)(void 0),
                        R = Object(l.a)(T, 2),
                        H = R[0],
                        W = R[1],
                        Z = Object(s.useState)([]),
                        K = Object(l.a)(Z, 2),
                        M = K[0],
                        Y = K[1],
                        X = Object(s.useState)([]),
                        F = Object(l.a)(X, 2),
                        J = F[0],
                        q = F[1],
                        $ = Object(s.useState)(!1),
                        ce = Object(l.a)($, 2),
                        le = ce[0],
                        ie = ce[1],
                        de = Object(s.useState)([]),
                        oe = Object(l.a)(de, 2),
                        me = oe[0],
                        be = oe[1],
                        je = Object(s.useState)([]),
                        ue = Object(l.a)(je, 2),
                        xe = ue[0],
                        he = ue[1],
                        fe = Object(s.useState)([]),
                        pe = Object(l.a)(fe, 2),
                        Oe = pe[0],
                        ge = pe[1],
                        ke = Object(s.useState)(""),
                        we = Object(l.a)(ke, 2),
                        ye = we[0],
                        ve = we[1],
                        Ne = Object(s.useState)(!1),
                        Se = Object(l.a)(Ne, 2),
                        De = Se[0],
                        Ge = Se[1],
                        Ee = Object(s.useState)([]),
                        Ce = Object(l.a)(Ee, 2),
                        Ve = Ce[0],
                        Be = Ce[1],
                        Te = Object(s.useState)([]),
                        Re = Object(l.a)(Te, 2),
                        Ue = Re[0],
                        He = Re[1],
                        We = Object(s.useState)(),
                        Ze = Object(l.a)(We, 2),
                        _e = Ze[0],
                        Ke = Ze[1],
                        Me = Object(s.useState)("Punkte"),
                        Ye = Object(l.a)(Me, 2),
                        Xe = Ye[0],
                        Fe = Ye[1],
                        Je = Object(s.useState)(!1),
                        qe = Object(l.a)(Je, 2),
                        $e = qe[0],
                        Qe = qe[1],
                        et = Object(s.useState)([]),
                        tt = Object(l.a)(et, 2),
                        at = tt[0],
                        st = tt[1],
                        ct = Object(s.useState)(!1),
                        rt = Object(l.a)(ct, 2),
                        nt = rt[0],
                        lt = rt[1],
                        it = Object(s.useState)(!1),
                        dt = Object(l.a)(it, 2),
                        ot = dt[0],
                        mt = dt[1],
                        bt = Object(s.useState)(0),
                        jt = Object(l.a)(bt, 2),
                        ut = jt[0],
                        xt = jt[1],
                        ht = Object(s.useState)(!1),
                        ft = Object(l.a)(ht, 2),
                        pt = ft[0],
                        Ot = ft[1],
                        gt = Object(s.useState)(!1),
                        kt = Object(l.a)(gt, 2),
                        wt = kt[0],
                        yt = kt[1],
                        vt = Object(s.useState)(!1),
                        Nt = Object(l.a)(vt, 2),
                        St = Nt[0],
                        Dt = Nt[1],
                        Gt = Object(s.useState)(!1),
                        Et = Object(l.a)(Gt, 2),
                        Ct = Et[0],
                        Vt = Et[1],
                        zt = Object(s.useState)(!1),
                        Pt = Object(l.a)(zt, 2),
                        Lt = Pt[0],
                        It = Pt[1],
                        At = Object(s.useState)(!1),
                        Bt = Object(l.a)(At, 2),
                        Tt = Bt[0],
                        Rt = Bt[1],
                        Ut = Object(s.useState)(!1),
                        Ht = Object(l.a)(Ut, 2),
                        Wt = Ht[0],
                        Zt = Ht[1],
                        _t = Object(s.useState)(!1),
                        Kt = Object(l.a)(_t, 2),
                        Mt = Kt[0],
                        Yt = Kt[1],
                        Xt = Object(s.useState)(!1),
                        Ft = Object(l.a)(Xt, 2),
                        Jt = Ft[0],
                        qt = Ft[1],
                        $t = Object(s.useState)(!1),
                        Qt = Object(l.a)($t, 2),
                        ea = Qt[0],
                        ta = Qt[1],
                        aa = Object(s.useState)(!1),
                        sa = Object(l.a)(aa, 2),
                        ca = sa[0],
                        ra = sa[1],
                        na = Object(s.useState)(0),
                        la = Object(l.a)(na, 2),
                        ia = la[0],
                        da = la[1],
                        oa = Object(s.useState)(!1),
                        ma = Object(l.a)(oa, 2),
                        ba = ma[0],
                        ja = ma[1],
                        ua = Object(s.useState)(!1),
                        xa = Object(l.a)(ua, 2),
                        ha = xa[0],
                        fa = xa[1],
                        pa = Object(s.useState)(!1),
                        Oa = Object(l.a)(pa, 2),
                        ga = Oa[0],
                        ka = Oa[1],
                        wa = Object(s.useState)(!1),
                        ya = Object(l.a)(wa, 2),
                        va = ya[0],
                        Na = ya[1],
                        Sa = Object(s.useRef)(),
                        Da = Object(s.useRef)(),
                        Ga = Object(s.useRef)(),
                        Ea = Object(i.g)(),
                        Ca = Object(i.h)().room,
                        Va = Object(ne.a)(Pe, { volume: 0.5 }),
                        za = Object(l.a)(Va, 1)[0],
                        Pa = Object(ne.a)(Le, { volume: 0.2 }),
                        La = Object(l.a)(Pa, 1)[0],
                        Ia = Object(ne.a)(Ie, { volume: 0.3 }),
                        Aa = Object(l.a)(Ia, 1)[0],
                        Ba = Object(ne.a)(Ae, { volume: 0.6 }),
                        Ta = Object(l.a)(Ba, 1)[0];
                    function Ra() {
                        c.emit("joinRoom", { room: Ca, user: n, team: r });
                    }
                    function Ua(e) {
                        if (
                            "" !== ye ||
                            !ye.includes("Gestochen") ||
                            "Gebot Antwort" === !ye
                        ) {
                            e.target.alt;
                            var t = M.findIndex(function (t) {
                                    return t.name === e.target.alt;
                                }),
                                a = M[t];
                            "Am Zug" === ye &&
                                (function (e) {
                                    var t = M,
                                        a = t.findIndex(function (t) {
                                            return t.name === e.target.alt;
                                        });
                                    -1 !== a && (t.splice(a, 1), Y(t));
                                })(e),
                                c.emit(ye, a),
                                ve(null),
                                ie(!1);
                        }
                    }
                    function Ha(e) {
                        return e > 3 ? e - 4 : e;
                    }
                    function Wa() {
                        return (!Wt || !Mt) && !(!Mt && !Wt);
                    }
                    return (
                        Object(s.useEffect)(function () {
                            return (
                                "undefined" === Ca && Ea.push("/"),
                                o(!1),
                                C.a
                                    .get(
                                        "http://localhost:3003/room/isPassword/".concat(
                                            Ca
                                        )
                                    )
                                    .then(function (e) {
                                        e.data ? u(!0) : Ra();
                                    }),
                                c.on("roomExist", function () {
                                    return z(!0);
                                }),
                                c.on("roomNotExist", function () {
                                    return z(!1);
                                }),
                                c.on("players", function (e) {
                                    B(e.userPos),
                                        be(e.userTeam),
                                        he(e.userStiche),
                                        ge(e.userStatus),
                                        void 0 === H && W(e.userPos.indexOf(n));
                                }),
                                c.on("status", function (e) {
                                    ge(e);
                                }),
                                c.on("karten", function (e) {
                                    q(e);
                                }),
                                c.on("karten sehen", function () {
                                    Ge(!0);
                                }),
                                c.on("tischkarten", function (e) {
                                    Be(e);
                                }),
                                c.on("stich", function (e) {
                                    Qe(!0), Fe("Stich 1"), Ke(e);
                                }),
                                c.on("hide Stich", function () {
                                    Qe(!1), Fe("Punkte");
                                }),
                                c.on("reset nach stich", function (e) {
                                    ge(e.status),
                                        Be(e.karten),
                                        he(e.stiche),
                                        fa(!1),
                                        ka(!1);
                                }),
                                c.on("punkte", function (e) {
                                    st(function (t) {
                                        return [].concat(Object(A.a)(t), [e]);
                                    });
                                }),
                                c.on("geboten", function (e) {
                                    p(e);
                                }),
                                c.on("geboten davor", function (e) {
                                    xt(e);
                                }),
                                c.on("neue Runde", function () {
                                    xt(0),
                                        p(2),
                                        y("?"),
                                        D("?"),
                                        Ge(!1),
                                        Qe(!1),
                                        yt(!1),
                                        Rt(!1),
                                        Fe("Punkte"),
                                        fa(!1),
                                        ka(!1),
                                        Na(!1);
                                }),
                                c.on("reset", function () {
                                    xt(0),
                                        p(2),
                                        y("?"),
                                        D("?"),
                                        Ge(!1),
                                        yt(!1),
                                        Rt(!1),
                                        Be([]),
                                        Y([]),
                                        st([]),
                                        Zt(!1),
                                        Yt(!1),
                                        Qe(!1),
                                        fa(!1),
                                        ka(!1),
                                        Na(!1);
                                }),
                                c.on("kein sch\xf6nere", function () {
                                    Rt(!0);
                                }),
                                c.on("team1 gestrichen", function () {
                                    Zt(!0);
                                }),
                                c.on("team2 gestrichen", function () {
                                    Yt(!0);
                                }),
                                c.on("4erle", function () {
                                    qt(!0);
                                }),
                                c.on("reset status", function () {
                                    ge([]);
                                }),
                                c.on("win", function (e) {
                                    da(e), ta(!0);
                                }),
                                c.on("schlag trumpf", function (e) {
                                    y(e.schlag), D(e.trumpf);
                                }),
                                function () {
                                    window.location.reload();
                                }
                            );
                        }, []),
                        Object(s.useEffect)(
                            function () {
                                $e || He(Ve.slice());
                            },
                            [Ve]
                        ),
                        Object(s.useEffect)(
                            function () {
                                if (void 0 !== H) {
                                    var e = Oe[Ha(H)];
                                    null != e
                                        ? (e.includes("Gestochen") ||
                                              "Geboten Antwort" === e ||
                                              "Schlagtausch Antwort" === e ||
                                              (ie(!0), lt(!0)),
                                          e.includes("Gestochen") &&
                                              (Aa(), lt(!1)),
                                          "Am Zug" === e &&
                                              (ga || (za(), ka(!0), fa(!1))),
                                          "Geboten Antwort" === e
                                              ? (ie(!1), Ta(), mt(!0))
                                              : "Schlagtausch Antwort" === e
                                              ? (Ta(), ie(!1), Ot(!0))
                                              : "Sch\xf6nere Antwort" === e &&
                                                (ie(!1), Vt(!0)),
                                          ve(e),
                                          Ge(!0),
                                          "Schlag" === e || "Trumpf" === e
                                              ? (Na(!0),
                                                ha || (za(), fa(!0)),
                                                Dt(!0),
                                                It(!0))
                                              : (Dt(!1), It(!1)))
                                        : (ie(!1), Dt(!1), It(!1), lt(!1));
                                }
                            },
                            [Oe]
                        ),
                        Object(s.useEffect)(
                            function () {
                                void 0 !== H && Y(J[H]);
                            },
                            [J]
                        ),
                        Object(s.useEffect)(function () {
                            t("/");
                        }, []),
                        Object(s.useEffect)(
                            function () {
                                void 0 !== Ve && Ve.length > 0 && La();
                            },
                            [Ve]
                        ),
                        Object(s.useEffect)(
                            function () {
                                ra(
                                    (1 === ia && H % 2 === 0) ||
                                        (2 === ia && H % 2 !== 0)
                                );
                            },
                            [ia]
                        ),
                        Object(s.useEffect)(
                            function () {
                                ea &&
                                    (ja(!0),
                                    setTimeout(function () {
                                        ja(!1), ta(!1);
                                    }, 1e4));
                            },
                            [ea]
                        ),
                        Object(O.jsx)("div", {
                            className: "w-full",
                            children: j
                                ? Object(O.jsx)(re, {
                                      isDarkmode: a,
                                      setIsPassword: u,
                                      joinGame: Ra,
                                      room: Ca,
                                  })
                                : V
                                ? Object(O.jsxs)("div", {
                                      className:
                                          "relative grid grid-cols-1 xl:grid-cols-3 w-1450 max-w-1/9 mx-auto gap-12 mt-16",
                                      children: [
                                          Object(O.jsxs)("div", {
                                              className:
                                                  "xl:col-span-2 relative",
                                              children: [
                                                  Object(O.jsx)("div", {
                                                      className: "".concat(
                                                          ba
                                                              ? "countdown"
                                                              : "hidden",
                                                          " h-2 bg-secondary z-30 dark:bg-secondaryDark absolute rounded-st bottom-0 mb-16"
                                                      ),
                                                  }),
                                                  Object(O.jsx)("div", {
                                                      className: "flex justify-center mt-8 ".concat(
                                                          ea ? "h-32" : null
                                                      ),
                                                      children: ea
                                                          ? Object(O.jsx)(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "bg-white h-bottomSpiel dark:bg-whiteDark absolute w-full top-0 left-0 z-20 rounded-st flex justify-center items-center",
                                                                    children: Object(
                                                                        O.jsxs
                                                                    )("div", {
                                                                        className:
                                                                            "flex justify-center items-center flex-col w-96 max-w-1/9",
                                                                        children: [
                                                                            Object(
                                                                                O.jsxs
                                                                            )(
                                                                                "h3",
                                                                                {
                                                                                    className:
                                                                                        "dark:text-white text-4xl text-center font-bold",
                                                                                    children: [
                                                                                        ca
                                                                                            ? "Gratulation!"
                                                                                            : "Schade!",
                                                                                        Object(
                                                                                            O.jsx
                                                                                        )(
                                                                                            "br",
                                                                                            {}
                                                                                        ),
                                                                                        ca
                                                                                            ? "Sie haben gewonnen"
                                                                                            : "Sie haben verloren",
                                                                                    ],
                                                                                }
                                                                            ),
                                                                            Object(
                                                                                O.jsx
                                                                            )(
                                                                                "h6",
                                                                                {
                                                                                    className:
                                                                                        "text-center text-xl text-gray-500 dark:text-gray-400 mt-4",
                                                                                    children:
                                                                                        "Sie k\xf6nnen jetzt das Spiel verlassen oder Sie spielen nochmal",
                                                                                }
                                                                            ),
                                                                            Object(
                                                                                O.jsx
                                                                            )(
                                                                                "button",
                                                                                {
                                                                                    onClick: function () {
                                                                                        ta(
                                                                                            !1
                                                                                        );
                                                                                    },
                                                                                    className:
                                                                                        "bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st cursor-pointer mt-8 xl:mt-20",
                                                                                    children:
                                                                                        "Nochmal Spielen",
                                                                                }
                                                                            ),
                                                                            Object(
                                                                                O.jsx
                                                                            )(
                                                                                d.b,
                                                                                {
                                                                                    to:
                                                                                        "/spielen",
                                                                                    className:
                                                                                        "w-full",
                                                                                    children: Object(
                                                                                        O.jsx
                                                                                    )(
                                                                                        "button",
                                                                                        {
                                                                                            className:
                                                                                                " bg-bgWhite dark:bg-bgDark  dark:text-white font-medium w-full py-2 rounded-st cursor-pointer mt-4",
                                                                                            children:
                                                                                                "Verlassen",
                                                                                        }
                                                                                    ),
                                                                                }
                                                                            ),
                                                                        ],
                                                                    }),
                                                                }
                                                            )
                                                          : Object(O.jsx)(U, {
                                                                geboten: f,
                                                                isDarkmode: a,
                                                                users: I,
                                                                pos: H,
                                                                teams: me,
                                                                stiche: xe,
                                                                status: Oe,
                                                                calcPos: Ha,
                                                                karten: Ve,
                                                                cardPhotos: ze,
                                                            }),
                                                  }),
                                                  Object(O.jsxs)("div", {
                                                      className: "fixed mt-4.25rem lg:mt-4.5rem w-full top-0 left-0 flex justify-center items-center gap-10 bg-secondary dark:bg-secondaryDark p-3 rounded-b-st z-10 ".concat(
                                                          ot
                                                              ? "fadein"
                                                              : "fadeout"
                                                      ),
                                                      children: [
                                                          Object(O.jsxs)("p", {
                                                              className:
                                                                  "font-medium text-center text-2xl text-white dark:text-black",
                                                              children: [
                                                                  Jt && 2 === f
                                                                      ? f + 2
                                                                      : f + 1,
                                                                  " ",
                                                                  "halten?",
                                                              ],
                                                          }),
                                                          Object(O.jsxs)(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "flex gap-4",
                                                                  children: [
                                                                      Object(
                                                                          O.jsx
                                                                      )("img", {
                                                                          src: a
                                                                              ? te
                                                                              : se,
                                                                          alt:
                                                                              "Ja",
                                                                          onClick: function () {
                                                                              mt(
                                                                                  !1
                                                                              ),
                                                                                  Jt &&
                                                                                  2 ===
                                                                                      f
                                                                                      ? (c.emit(
                                                                                            "4erle halten"
                                                                                        ),
                                                                                        qt(
                                                                                            !1
                                                                                        ))
                                                                                      : c.emit(
                                                                                            "halten"
                                                                                        );
                                                                          },
                                                                          className:
                                                                              "cursor-pointer",
                                                                      }),
                                                                      Object(
                                                                          O.jsx
                                                                      )("img", {
                                                                          src: a
                                                                              ? ee
                                                                              : ae,
                                                                          alt:
                                                                              "Nein",
                                                                          onClick: function () {
                                                                              mt(
                                                                                  !1
                                                                              ),
                                                                                  c.emit(
                                                                                      "ablehnen",
                                                                                      H
                                                                                  ),
                                                                                  Jt &&
                                                                                      qt(
                                                                                          !1
                                                                                      );
                                                                          },
                                                                          className:
                                                                              "cursor-pointer",
                                                                      }),
                                                                  ],
                                                              }
                                                          ),
                                                      ],
                                                  }),
                                                  Object(O.jsxs)("div", {
                                                      className: "fixed mt-4.25rem lg:mt-4.5rem w-full top-0 left-0 flex justify-center items-center gap-10 bg-secondary dark:bg-secondaryDark p-3 rounded-b-st z-10 ".concat(
                                                          pt
                                                              ? "fadein"
                                                              : "fadeout"
                                                      ),
                                                      children: [
                                                          Object(O.jsx)("p", {
                                                              className:
                                                                  "font-medium text-center text-2xl text-white dark:text-black",
                                                              children:
                                                                  "Schlagtausch?",
                                                          }),
                                                          Object(O.jsxs)(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "flex gap-4",
                                                                  children: [
                                                                      Object(
                                                                          O.jsx
                                                                      )("img", {
                                                                          src: a
                                                                              ? te
                                                                              : se,
                                                                          alt:
                                                                              "Ja",
                                                                          onClick: function () {
                                                                              Ot(
                                                                                  !1
                                                                              ),
                                                                                  c.emit(
                                                                                      "schlagtausch annehmen"
                                                                                  );
                                                                          },
                                                                          className:
                                                                              "cursor-pointer",
                                                                      }),
                                                                      Object(
                                                                          O.jsx
                                                                      )("img", {
                                                                          src: a
                                                                              ? ee
                                                                              : ae,
                                                                          alt:
                                                                              "Nein",
                                                                          onClick: function () {
                                                                              Ot(
                                                                                  !1
                                                                              ),
                                                                                  c.emit(
                                                                                      "schlagtausch ablehnen"
                                                                                  );
                                                                          },
                                                                          className:
                                                                              "cursor-pointer",
                                                                      }),
                                                                  ],
                                                              }
                                                          ),
                                                      ],
                                                  }),
                                                  Object(O.jsxs)("div", {
                                                      className: "fixed mt-4.25rem lg:mt-4.5rem w-full top-0 left-0 flex justify-center items-center gap-10 bg-secondary dark:bg-secondaryDark p-3 rounded-b-st z-10 ".concat(
                                                          Ct
                                                              ? "fadein"
                                                              : "fadeout"
                                                      ),
                                                      children: [
                                                          Object(O.jsx)("p", {
                                                              className:
                                                                  "font-medium text-center text-2xl text-white dark:text-black",
                                                              children:
                                                                  "Sch\xf6nere?",
                                                          }),
                                                          Object(O.jsxs)(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "flex gap-4",
                                                                  children: [
                                                                      Object(
                                                                          O.jsx
                                                                      )("img", {
                                                                          src: a
                                                                              ? te
                                                                              : se,
                                                                          alt:
                                                                              "Ja",
                                                                          onClick: function () {
                                                                              Vt(
                                                                                  !1
                                                                              ),
                                                                                  c.emit(
                                                                                      "sch\xf6nere annehmen"
                                                                                  );
                                                                          },
                                                                          className:
                                                                              "cursor-pointer",
                                                                      }),
                                                                      Object(
                                                                          O.jsx
                                                                      )("img", {
                                                                          src: a
                                                                              ? ee
                                                                              : ae,
                                                                          alt:
                                                                              "Nein",
                                                                          onClick: function () {
                                                                              Vt(
                                                                                  !1
                                                                              ),
                                                                                  c.emit(
                                                                                      "sch\xf6nere ablehnen"
                                                                                  );
                                                                          },
                                                                          className:
                                                                              "cursor-pointer",
                                                                      }),
                                                                  ],
                                                              }
                                                          ),
                                                      ],
                                                  }),
                                                  Object(O.jsxs)("div", {
                                                      className:
                                                          "flex justify-between mt-28 md:mt-28 mb-16 flex-wrap",
                                                      children: [
                                                          Object(O.jsxs)(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "flex justify-between md:flex-col gap-1 sm:gap-8 md:gap-2 w-full md:w-max mb-4 md:mb-0",
                                                                  children: [
                                                                      Object(
                                                                          O.jsx
                                                                      )(
                                                                          "button",
                                                                          {
                                                                              onClick: function () {
                                                                                  if (
                                                                                      nt &&
                                                                                      ut !==
                                                                                          (H %
                                                                                              2 ===
                                                                                          0
                                                                                              ? 1
                                                                                              : 2) &&
                                                                                      !ot &&
                                                                                      !pt &&
                                                                                      !Ct
                                                                                  ) {
                                                                                      if (
                                                                                          2 ===
                                                                                              f &&
                                                                                          Wa()
                                                                                      )
                                                                                          return;
                                                                                      c.emit(
                                                                                          "bieten",
                                                                                          H
                                                                                      );
                                                                                  }
                                                                              },
                                                                              className: "btn bg-white dark:bg-transparent dark:text-white border-2 border-black dark:border-white w-full ".concat(
                                                                                  !nt ||
                                                                                      ut ===
                                                                                          (H %
                                                                                              2 ===
                                                                                          0
                                                                                              ? 1
                                                                                              : 2) ||
                                                                                      ot ||
                                                                                      pt ||
                                                                                      Ct ||
                                                                                      (2 ===
                                                                                          f &&
                                                                                          Wa())
                                                                                      ? "opacity-20 cursor-not-allowed"
                                                                                      : null
                                                                              ),
                                                                              children:
                                                                                  "Bieten",
                                                                          }
                                                                      ),
                                                                      Object(
                                                                          O.jsx
                                                                      )(
                                                                          "button",
                                                                          {
                                                                              onClick: function () {
                                                                                  !Lt ||
                                                                                      Tt ||
                                                                                      ot ||
                                                                                      pt ||
                                                                                      Ct ||
                                                                                      c.emit(
                                                                                          "sch\xf6nere",
                                                                                          H
                                                                                      );
                                                                              },
                                                                              className: "btn bg-white dark:bg-transparent dark:text-white border-2 border-black dark:border-white w-full ".concat(
                                                                                  !Lt ||
                                                                                      Tt ||
                                                                                      pt ||
                                                                                      ot ||
                                                                                      Ct
                                                                                      ? "opacity-20 cursor-not-allowed"
                                                                                      : null
                                                                              ),
                                                                              children:
                                                                                  "Sch\xf6nere",
                                                                          }
                                                                      ),
                                                                      Object(
                                                                          O.jsx
                                                                      )(
                                                                          "button",
                                                                          {
                                                                              onClick: function () {
                                                                                  !St ||
                                                                                      wt ||
                                                                                      ot ||
                                                                                      pt ||
                                                                                      Ct ||
                                                                                      (yt(
                                                                                          !0
                                                                                      ),
                                                                                      c.emit(
                                                                                          "schlagtausch",
                                                                                          H
                                                                                      ));
                                                                              },
                                                                              className: "btn bg-white dark:bg-transparent dark:text-white border-2 border-black dark:border-white w-full ".concat(
                                                                                  !St ||
                                                                                      wt ||
                                                                                      pt ||
                                                                                      ot ||
                                                                                      Ct
                                                                                      ? "opacity-20 cursor-not-allowed"
                                                                                      : null
                                                                              ),
                                                                              children:
                                                                                  "Schlagtausch",
                                                                          }
                                                                      ),
                                                                  ],
                                                              }
                                                          ),
                                                          De
                                                              ? M.map(function (
                                                                    e
                                                                ) {
                                                                    return Object(
                                                                        O.jsx
                                                                    )(
                                                                        "img",
                                                                        {
                                                                            className: "h-auto w-4.275rem md:w-4.75rem rounded-st karte ".concat(
                                                                                le
                                                                                    ? "hover:border-secondary dark:hover:border-secondaryDark border-4 border-transparent cursor-pointer"
                                                                                    : null,
                                                                                " "
                                                                            ),
                                                                            src:
                                                                                ze[
                                                                                    e
                                                                                        .name
                                                                                ],
                                                                            alt:
                                                                                e.name,
                                                                            onClick: Ua,
                                                                        },
                                                                        1e3 *
                                                                            Math.random()
                                                                    );
                                                                })
                                                              : null,
                                                          Object(O.jsxs)(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "flex flex-row static sm:absolute sm:bottom-72 sm:right-0 md:static sm:flex-col justify-between md:justify-start w-full sm:w-max mt-4 md:mt-0",
                                                                  children: [
                                                                      Object(
                                                                          O.jsxs
                                                                      )("p", {
                                                                          className:
                                                                              "dark:text-white",
                                                                          children: [
                                                                              "Schlag:",
                                                                              " ",
                                                                              Object(
                                                                                  O.jsx
                                                                              )(
                                                                                  "span",
                                                                                  {
                                                                                      className:
                                                                                          "font-bold",
                                                                                      children: va
                                                                                          ? w
                                                                                          : "?",
                                                                                  }
                                                                              ),
                                                                          ],
                                                                      }),
                                                                      Object(
                                                                          O.jsxs
                                                                      )("p", {
                                                                          className:
                                                                              "dark:text-white",
                                                                          children: [
                                                                              "Trumpf:",
                                                                              " ",
                                                                              Object(
                                                                                  O.jsx
                                                                              )(
                                                                                  "span",
                                                                                  {
                                                                                      className:
                                                                                          "font-bold",
                                                                                      children: va
                                                                                          ? S
                                                                                          : "?",
                                                                                  }
                                                                              ),
                                                                          ],
                                                                      }),
                                                                      Object(
                                                                          O.jsxs
                                                                      )("p", {
                                                                          className:
                                                                              "block sm:hidden dark:text-white",
                                                                          children: [
                                                                              "Geboten:",
                                                                              " ",
                                                                              Object(
                                                                                  O.jsx
                                                                              )(
                                                                                  "span",
                                                                                  {
                                                                                      className:
                                                                                          "font-bold",
                                                                                      children: f,
                                                                                  }
                                                                              ),
                                                                          ],
                                                                      }),
                                                                  ],
                                                              }
                                                          ),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          Object(O.jsxs)("div", {
                                              className:
                                                  "xl:col-span-1 mb-16 flex flex-col",
                                              children: [
                                                  Object(O.jsx)(_, {
                                                      ref: Da,
                                                      isDarkmode: a,
                                                      selected: Xe,
                                                      setSelected: Fe,
                                                      karten: Ue,
                                                      seeStiche: $e,
                                                      calcPos: Ha,
                                                      gewinner: _e,
                                                      pos: H,
                                                      punkte: at,
                                                      isTeam1Gestrichen: Wt,
                                                      isTeam2Gestrichen: Mt,
                                                      cardPhotos: ze,
                                                  }),
                                                  Object(O.jsx)("button", {
                                                      className:
                                                          "btn bg-secondary dark:bg-secondaryDark w-full font-bold text-white dark:text-black mt-8 xl:hidden",
                                                      onClick: function () {
                                                          Ga.current.scrollIntoView(
                                                              {
                                                                  behavior:
                                                                      "smooth",
                                                              }
                                                          );
                                                      },
                                                      children:
                                                          "Zur\xfcck zum Spiel",
                                                  }),
                                                  Object(O.jsx)(Q, {
                                                      socket: c,
                                                      ref: Sa,
                                                      isDarkmode: a,
                                                      username: n,
                                                  }),
                                              ],
                                          }),
                                          Object(O.jsxs)("div", {
                                              ref: Ga,
                                              className:
                                                  "flex justify-between gap-16 absolute top-0 w-full xl:hidden -mt-96 pt-96",
                                              children: [
                                                  Object(O.jsx)("button", {
                                                      className:
                                                          "btn bg-white border-4 border-secondary w-28 font-bold",
                                                      onClick: function () {
                                                          Sa.current.scrollIntoView(
                                                              {
                                                                  behavior:
                                                                      "smooth",
                                                              }
                                                          );
                                                      },
                                                      children: "Chat",
                                                  }),
                                                  Object(O.jsx)("button", {
                                                      className:
                                                          "btn bg-white border-4 border-secondary w-28 font-bold text-black xl:hidden",
                                                      onClick: function () {
                                                          Da.current.scrollIntoView(
                                                              {
                                                                  behavior:
                                                                      "smooth",
                                                              }
                                                          );
                                                      },
                                                      children: "Infos",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  })
                                : !1 === V
                                ? Object(O.jsxs)("div", {
                                      children: [
                                          Object(O.jsx)("h2", {
                                              className:
                                                  "dark:text-white text-4xl text-center mt-16",
                                              children:
                                                  "Dieser Raum existiert nicht oder ist voll",
                                          }),
                                          Object(O.jsxs)("p", {
                                              className:
                                                  "text-sm pt-8 text-center text-gray-600 dark:text-gray-400 mb-8 md:mb-12 lg:mb-16",
                                              children: [
                                                  "M\xf6chten Sie ein Spiel beitreten?",
                                                  " ",
                                                  Object(O.jsx)(d.b, {
                                                      to: "/spielen",
                                                      children: Object(O.jsx)(
                                                          "span",
                                                          {
                                                              className:
                                                                  "font-bold underline text-black dark:text-white",
                                                              children:
                                                                  "Zu den Offenen Spielen",
                                                          }
                                                      ),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  })
                                : null,
                        })
                    );
                },
                Te = function (e) {
                    var t = e.url,
                        a = e.isSidebarOpen,
                        s = e.setIsSidebarOpen,
                        c = e.isDarkmode,
                        r = e.setIsDarkmode,
                        n = e.username,
                        l = e.logout,
                        o = e.level,
                        u = Object(i.g)();
                    function x() {
                        s(!1);
                    }
                    return Object(O.jsx)("div", {
                        className: "fixed top-0 w-screen h-screen bg-white dark:bg-whiteDark lg:hidden z-40 ".concat(
                            a ? "sidebaropen" : "sidebar"
                        ),
                        children: Object(O.jsxs)("div", {
                            className: "flex flex-col justify-between h-full py-8 ".concat(
                                a ? "fade" : null
                            ),
                            children: [
                                "Anmelden" === t || "Registrieren" === t
                                    ? null
                                    : Object(O.jsxs)("div", {
                                          className:
                                              "flex items-center flex-col gap-12 mt-20",
                                          children: [
                                              Object(O.jsx)(d.b, {
                                                  to: "/",
                                                  children: Object(O.jsxs)(
                                                      "div",
                                                      {
                                                          className:
                                                              "flex gap-3 items-center relative py-2",
                                                          onClick: x,
                                                          children: [
                                                              Object(O.jsx)(
                                                                  "img",
                                                                  {
                                                                      src: m,
                                                                      alt:
                                                                          "W\xfcrfel",
                                                                      className: "h-1.25 ".concat(
                                                                          "".concat(
                                                                              "/" ===
                                                                                  t
                                                                                  ? c
                                                                                      ? "primaryDarkSVG"
                                                                                      : "primarySVG"
                                                                                  : c
                                                                                  ? "whiteSVG"
                                                                                  : null
                                                                          )
                                                                      ),
                                                                  }
                                                              ),
                                                              Object(O.jsx)(
                                                                  "h6",
                                                                  {
                                                                      className: "text-base dark:text-white ".concat(
                                                                          "/" ===
                                                                              t
                                                                              ? "text-primary dark:text-primaryDark font-bold"
                                                                              : null
                                                                      ),
                                                                      children:
                                                                          "Spielen",
                                                                  }
                                                              ),
                                                          ],
                                                      }
                                                  ),
                                              }),
                                              Object(O.jsx)(d.b, {
                                                  to: "/rangliste",
                                                  children: Object(O.jsxs)(
                                                      "div",
                                                      {
                                                          className:
                                                              "flex gap-3 items-center relative py-2",
                                                          onClick: x,
                                                          children: [
                                                              Object(O.jsx)(
                                                                  "img",
                                                                  {
                                                                      src: b,
                                                                      alt:
                                                                          "Ranglist",
                                                                      className: "h-1.25 ".concat(
                                                                          "".concat(
                                                                              "/rangliste" ===
                                                                                  t
                                                                                  ? c
                                                                                      ? "primaryDarkSVG"
                                                                                      : "primarySVG"
                                                                                  : c
                                                                                  ? "whiteSVG"
                                                                                  : null
                                                                          )
                                                                      ),
                                                                  }
                                                              ),
                                                              Object(O.jsx)(
                                                                  "h6",
                                                                  {
                                                                      className: "text-base dark:text-white ".concat(
                                                                          "/rangliste" ===
                                                                              t
                                                                              ? "text-primary dark:text-primaryDark font-bold"
                                                                              : "dark:text-white"
                                                                      ),
                                                                      children:
                                                                          "Rangliste",
                                                                  }
                                                              ),
                                                          ],
                                                      }
                                                  ),
                                              }),
                                              Object(O.jsx)(d.b, {
                                                  to: "/profile/".concat(n),
                                                  children: Object(O.jsxs)(
                                                      "div",
                                                      {
                                                          className:
                                                              "flex gap-3 items-center relative py-2",
                                                          onClick: x,
                                                          children: [
                                                              Object(O.jsx)(
                                                                  "img",
                                                                  {
                                                                      src: j,
                                                                      alt:
                                                                          "Profil",
                                                                      className: "h-1.25 ".concat(
                                                                          "".concat(
                                                                              "/profile" ===
                                                                                  t
                                                                                  ? c
                                                                                      ? "primaryDarkSVG"
                                                                                      : "primarySVG"
                                                                                  : c
                                                                                  ? "whiteSVG"
                                                                                  : null
                                                                          )
                                                                      ),
                                                                  }
                                                              ),
                                                              Object(O.jsx)(
                                                                  "h6",
                                                                  {
                                                                      className: "text-base dark:text-white ".concat(
                                                                          "/profile" ===
                                                                              t
                                                                              ? "text-primary dark:text-primaryDark font-bold"
                                                                              : null
                                                                      ),
                                                                      children:
                                                                          "Profile",
                                                                  }
                                                              ),
                                                          ],
                                                      }
                                                  ),
                                              }),
                                          ],
                                      }),
                                Object(O.jsxs)("div", {
                                    className:
                                        "flex gap-8 flex-col items-center",
                                    children: [
                                        Object(O.jsx)("div", {
                                            className:
                                                "border-gray-600 dark:border-gray-100 border-t-2 w-80% mx-auto",
                                        }),
                                        Object(O.jsx)("img", {
                                            src: c ? f : h,
                                            alt: "Nachtmodus",
                                            className: "cursor-pointer ".concat(
                                                c ? "whiteSVG" : null
                                            ),
                                            onClick: function () {
                                                r(function (e) {
                                                    return (
                                                        localStorage.setItem(
                                                            "darkmode",
                                                            !e
                                                        ),
                                                        !e
                                                    );
                                                });
                                            },
                                        }),
                                        "Anmelden" !== t && "" === n
                                            ? Object(O.jsx)(d.b, {
                                                  to: "/anmelden",
                                                  onClick: x,
                                                  className: "".concat(
                                                      "Registrieren" === t
                                                          ? "py-4.5"
                                                          : "px-6"
                                                  ),
                                                  children: Object(O.jsx)(
                                                      "h6",
                                                      {
                                                          className: "text-base ".concat(
                                                              "Registrieren" ===
                                                                  t
                                                                  ? "btn text-white dark:text-black bg-primary dark:bg-primaryDark"
                                                                  : "dark:text-white"
                                                          ),
                                                          children: "Anmelden",
                                                      }
                                                  ),
                                              })
                                            : null,
                                        "Registrieren" !== t && "" === n
                                            ? Object(O.jsx)(d.b, {
                                                  to: "/registrieren",
                                                  onClick: x,
                                                  className: "py-4.5",
                                                  children: Object(O.jsx)(
                                                      "button",
                                                      {
                                                          className:
                                                              "btn text-base text-white dark:text-black bg-primary dark:bg-primaryDark",
                                                          children:
                                                              "Registrieren",
                                                      }
                                                  ),
                                              })
                                            : null,
                                        "" !== n
                                            ? Object(O.jsxs)("div", {
                                                  className:
                                                      "flex flex-col items-center gap-8",
                                                  children: [
                                                      Object(O.jsxs)("div", {
                                                          className:
                                                              "flex items-center gap-2",
                                                          children: [
                                                              Object(O.jsx)(g, {
                                                                  level: o,
                                                                  isDarkmode: c,
                                                                  size:
                                                                      "2.2rem",
                                                              }),
                                                              Object(O.jsx)(
                                                                  "p",
                                                                  {
                                                                      className:
                                                                          "font-bold dark:text-white",
                                                                      children: n,
                                                                  }
                                                              ),
                                                          ],
                                                      }),
                                                      Object(O.jsx)("button", {
                                                          onClick: function () {
                                                              l(u);
                                                          },
                                                          className:
                                                              "btn text-base  text-white dark:text-black bg-primary dark:bg-primaryDark",
                                                          children: "Abmelden",
                                                      }),
                                                  ],
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                Re = a.p + "static/media/group-24px.20785a92.svg",
                Ue = function (e) {
                    var t = e.spieler1,
                        a = e.spieler2,
                        s = e.punkte,
                        c = e.team,
                        r = e.selected,
                        n = e.setSelected;
                    return Object(O.jsxs)("div", {
                        className: "flex w-full items-center bg-white dark:bg-whiteDark rounded-st mb-6 cursor-pointer justify-between ".concat(
                            r === c
                                ? "ring-4 ring-primary dark:ring-primaryDark"
                                : "null"
                        ),
                        onClick: function () {
                            n(c);
                        },
                        children: [
                            Object(O.jsx)("p", {
                                className: "font-bold px-2 w-12ch text-center ".concat(
                                    void 0 === t || null === t
                                        ? "text-secondary dark:text-secondaryDark underline"
                                        : "dark:text-white"
                                ),
                                children:
                                    void 0 === t || null === t ? "offen" : t,
                            }),
                            Object(O.jsx)("p", {
                                className: "font-bold w-12ch px-2 text-center ".concat(
                                    void 0 === a || null === a
                                        ? "text-secondary dark:text-secondaryDark underline"
                                        : "dark:text-white"
                                ),
                                children:
                                    void 0 === a || null === a ? "offen" : a,
                            }),
                            Object(O.jsx)("p", {
                                className:
                                    "text-2xl text-gray-500 dark:text-gray-300 text-center px-8 py-3 border-l-2 border-gray-400 dark:border-gray-600 font-bold",
                                children: s,
                            }),
                        ],
                    });
                },
                He = function (e) {
                    var t = e.setUrl,
                        a = e.isDarkmode,
                        c = e.setTeam,
                        r = e.team,
                        n = Object(s.useState)(1),
                        o = Object(l.a)(n, 2),
                        m = o[0],
                        b = o[1],
                        j = Object(s.useState)({ users: [] }),
                        u = Object(l.a)(j, 2),
                        x = u[0],
                        h = u[1],
                        f = Object(s.useState)(!1),
                        p = Object(l.a)(f, 2),
                        g = (p[0], p[1]),
                        k = Object(i.h)().room,
                        w = Object(i.g)();
                    Object(s.useEffect)(function () {
                        t("/"),
                            "undefined" === k && w.push("/"),
                            C.a
                                .get("http://localhost:3003/room/".concat(k))
                                .then(function (e) {
                                    h(e.data);
                                });
                    }, []);
                    return (
                        Object(s.useEffect)(
                            function () {
                                0 !== r && w.push("/spielen/".concat(x.name));
                            },
                            [r]
                        ),
                        Object(O.jsxs)("div", {
                            className:
                                "flex justify-center items-center flex-col m-auto w-96 max-w-1/9",
                            children: [
                                Object(O.jsx)("img", {
                                    src: Re,
                                    alt: "Team",
                                    className: "h-24 mt-4 ".concat(
                                        a ? "whiteSVG" : null
                                    ),
                                }),
                                Object(O.jsx)("h3", {
                                    className:
                                        "font-bold text-4xl pt-4 dark:text-white",
                                    children: "Team aussuchen",
                                }),
                                Object(O.jsx)("p", {
                                    className:
                                        "text-sm text-gray-600 dark:text-gray-400 pt-3 text-center mb-10",
                                    children:
                                        "Clicken Sie auf das Team, den Sie betreten m\xf6chten und dann auf Teilnehmen",
                                }),
                                Object(O.jsx)(Ue, {
                                    spieler1: x.users[0],
                                    spieler2: x.users[2],
                                    team: 1,
                                    punkte: x.team1,
                                    selected: m,
                                    setSelected: b,
                                }),
                                Object(O.jsx)(Ue, {
                                    spieler1: x.users[1],
                                    spieler2: x.users[3],
                                    team: 2,
                                    punkte: x.team2,
                                    selected: m,
                                    setSelected: b,
                                }),
                                Object(O.jsxs)("div", {
                                    onClick: function () {
                                        g(!0), c(m);
                                    },
                                    className:
                                        "bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4",
                                    children: [
                                        Object(O.jsx)("img", {
                                            src: G,
                                            alt: "Spielen",
                                            className: "".concat(
                                                a ? null : "whiteSVG"
                                            ),
                                        }),
                                        Object(O.jsx)("p", {
                                            children: "Teilnehmen",
                                        }),
                                    ],
                                }),
                                Object(O.jsxs)("p", {
                                    className:
                                        "text-sm pt-8 text-gray-600 dark:text-gray-400  mb-4",
                                    children: [
                                        "M\xf6chten Sie ein anderes Spiel beitreten?",
                                        " ",
                                        Object(O.jsx)(d.b, {
                                            to: "/spielen",
                                            children: Object(O.jsx)("span", {
                                                className:
                                                    "font-bold underline text-black dark:text-white",
                                                children: "Zur\xfcck",
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                We = a.p + "static/media/add_circle-24px.b7bb9a46.svg",
                Ze =
                    a.p +
                    "static/media/drive_file_rename_outline-24px.db1ac8ed.svg",
                _e = function (e) {
                    var t = e.value,
                        a = e.setSelectValue,
                        s = e.selectValue;
                    return Object(O.jsx)("p", {
                        className: "text-center py-2 bg-white dark:bg-whiteDark dark:text-white rounded-st flex-1 cursor-pointer ".concat(
                            s === t
                                ? "font-bold text-primary dark:text-primaryDark ring-4 ring-primary dark:ring-primaryDark"
                                : null
                        ),
                        onClick: function () {
                            a(t);
                        },
                        children: t,
                    });
                },
                Ke = function (e) {
                    var t = e.isPasswordHandler;
                    return Object(O.jsx)("div", {
                        className: "container",
                        children: Object(O.jsxs)("label", {
                            className: "switch",
                            children: [
                                Object(O.jsx)("input", {
                                    type: "checkbox",
                                    onClick: t,
                                }),
                                " ",
                                Object(O.jsx)("div", {}),
                            ],
                        }),
                    });
                },
                Me = function (e) {
                    var t = e.setUrl,
                        a = e.isDarkmode,
                        c = e.socket,
                        r = Object(s.useState)(""),
                        n = Object(l.a)(r, 2),
                        o = n[0],
                        m = n[1],
                        b = Object(s.useState)("18"),
                        j = Object(l.a)(b, 2),
                        u = j[0],
                        x = j[1],
                        h = Object(s.useState)(""),
                        f = Object(l.a)(h, 2),
                        p = f[0],
                        g = f[1],
                        k = Object(s.useState)(!1),
                        w = Object(l.a)(k, 2),
                        y = w[0],
                        v = w[1],
                        N = Object(s.useState)("4"),
                        S = Object(l.a)(N, 2),
                        D = S[0],
                        G = (S[1], Object(s.useState)("Offen")),
                        E = Object(l.a)(G, 2),
                        V = E[0],
                        P = (E[1], Object(s.useState)("")),
                        L = Object(l.a)(P, 2),
                        I = L[0],
                        A = L[1],
                        B = Object(i.g)();
                    return (
                        Object(s.useEffect)(function () {
                            t("/");
                        }, []),
                        Object(O.jsxs)("div", {
                            className:
                                "flex justify-center items-center flex-col m-auto w-96 max-w-1/9",
                            children: [
                                Object(O.jsx)("img", {
                                    src: z,
                                    alt: "Team",
                                    className: "h-16 sm:h-20 mt-8 md:mt-12 lg:mt-16 ".concat(
                                        a ? "whiteSVG" : null
                                    ),
                                }),
                                Object(O.jsx)("h3", {
                                    className:
                                        "font-bold text-4xl pt-4 mb-8 dark:text-white",
                                    children: "Spiel erstellen",
                                }),
                                Object(O.jsxs)("div", {
                                    className:
                                        "w-full flex flex-col gap-6 dark:text-white\r ",
                                    children: [
                                        Object(O.jsxs)("div", {
                                            className: "w-full",
                                            children: [
                                                Object(O.jsx)("p", {
                                                    className:
                                                        "font-bold text-left mb-2",
                                                    children: "Spielname",
                                                }),
                                                Object(O.jsxs)("div", {
                                                    className:
                                                        "bg-white rounded-st py-2 flex items-center dark:bg-whiteDark",
                                                    children: [
                                                        Object(O.jsx)("img", {
                                                            src: Ze,
                                                            alt: "Name",
                                                            className: "px-4 ".concat(
                                                                a
                                                                    ? "whiteSVG"
                                                                    : null
                                                            ),
                                                        }),
                                                        Object(O.jsx)("input", {
                                                            type: "text",
                                                            className:
                                                                "focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white",
                                                            value: o,
                                                            onChange: function (
                                                                e
                                                            ) {
                                                                m(
                                                                    e.target
                                                                        .value
                                                                );
                                                            },
                                                            placeholder:
                                                                "Spielname",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        Object(O.jsxs)("div", {
                                            className: "w-full",
                                            children: [
                                                Object(O.jsx)("p", {
                                                    className:
                                                        "font-bold text-left mb-2",
                                                    children: "Spielen bis",
                                                }),
                                                Object(O.jsxs)("div", {
                                                    className:
                                                        "flex justify-between gap-4 sm:gap-8",
                                                    children: [
                                                        Object(O.jsx)(_e, {
                                                            value: "11",
                                                            setSelectValue: x,
                                                            selectValue: u,
                                                        }),
                                                        Object(O.jsx)(_e, {
                                                            value: "15",
                                                            setSelectValue: x,
                                                            selectValue: u,
                                                        }),
                                                        Object(O.jsx)(_e, {
                                                            value: "18",
                                                            setSelectValue: x,
                                                            selectValue: u,
                                                        }),
                                                        Object(O.jsx)(_e, {
                                                            value: "21",
                                                            setSelectValue: x,
                                                            selectValue: u,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        Object(O.jsxs)("div", {
                                            className: "w-full mb-8",
                                            children: [
                                                Object(O.jsx)("p", {
                                                    className:
                                                        "font-bold text-left mb-2",
                                                    children: "Password",
                                                }),
                                                Object(O.jsxs)("div", {
                                                    className:
                                                        "relative flex items-center w-full gap-8",
                                                    children: [
                                                        Object(O.jsx)(Ke, {
                                                            isPasswordHandler: function (
                                                                e
                                                            ) {
                                                                v(function (e) {
                                                                    return !e;
                                                                });
                                                            },
                                                        }),
                                                        Object(O.jsxs)("div", {
                                                            className: "bg-white dark:bg-whiteDark rounded-st py-2 flex items-center w-full transition-all ".concat(
                                                                y
                                                                    ? null
                                                                    : "cursor-not-allowed opacity-0"
                                                            ),
                                                            children: [
                                                                Object(O.jsx)(
                                                                    "img",
                                                                    {
                                                                        src: ce,
                                                                        alt:
                                                                            "Name",
                                                                        className: "px-4 w-12 ".concat(
                                                                            a
                                                                                ? "whiteSVG"
                                                                                : null
                                                                        ),
                                                                    }
                                                                ),
                                                                y
                                                                    ? Object(
                                                                          O.jsx
                                                                      )(
                                                                          "input",
                                                                          {
                                                                              type:
                                                                                  "Password",
                                                                              className:
                                                                                  "focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white",
                                                                              value: p,
                                                                              onChange: function (
                                                                                  e
                                                                              ) {
                                                                                  g(
                                                                                      e
                                                                                          .target
                                                                                          .value
                                                                                  );
                                                                              },
                                                                              placeholder:
                                                                                  "Password",
                                                                          }
                                                                      )
                                                                    : null,
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(O.jsx)("p", {
                                    className: "".concat(
                                        "" === I ? "hidden" : "block",
                                        " text-xm text-primary dark:text-primaryDark text-center"
                                    ),
                                    children: I,
                                }),
                                Object(O.jsxs)("button", {
                                    onClick: function () {
                                        "" === o || " " === o
                                            ? A("Der Spielname fehlt!")
                                            : o.length > 31
                                            ? A(
                                                  "Spielname muss kleiner als 32 Zeichen sein!"
                                              )
                                            : C.a
                                                  .get(
                                                      "http://localhost:3003/room/available/".concat(
                                                          o
                                                      )
                                                  )
                                                  .then(function (e) {
                                                      console.log(e.data),
                                                          e.data
                                                              ? A(
                                                                    "Dieser Spielname existiert schon, w\xe4hlen Sie einen anderer Name"
                                                                )
                                                              : (c.emit(
                                                                    "createRoom",
                                                                    {
                                                                        spielerAnzahl: D,
                                                                        punkte: u,
                                                                        name: o,
                                                                        modus: V,
                                                                        isPassword: y,
                                                                        password: p,
                                                                    }
                                                                ),
                                                                B.push(
                                                                    "/spielen/".concat(
                                                                        o
                                                                    )
                                                                ));
                                                  });
                                    },
                                    className:
                                        "bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4",
                                    children: [
                                        Object(O.jsx)("img", {
                                            src: We,
                                            alt: "Spielen",
                                            className: "".concat(
                                                a ? null : "whiteSVG"
                                            ),
                                        }),
                                        Object(O.jsx)("p", {
                                            children: "Erstellen",
                                        }),
                                    ],
                                }),
                                Object(O.jsxs)("p", {
                                    className:
                                        "text-sm pt-8 text-gray-600 dark:text-gray-400 mb-8 md:mb-12 lg:mb-16",
                                    children: [
                                        "M\xf6chten Sie ein Spiel beitreten?",
                                        " ",
                                        Object(O.jsx)(d.b, {
                                            to: "/spielen",
                                            children: Object(O.jsx)("span", {
                                                className:
                                                    "font-bold underline text-black dark:text-white",
                                                children: "Zur\xfcck",
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                Ye = a(28),
                Xe = a.n(Ye),
                Fe = function (e) {
                    var t = e.setUrl,
                        a = e.isDarkmode,
                        c = e.setIsLoggedIn,
                        r = e.setUsernameApp,
                        n = Object(s.useState)(""),
                        o = Object(l.a)(n, 2),
                        m = o[0],
                        b = o[1],
                        u = Object(s.useState)(""),
                        x = Object(l.a)(u, 2),
                        h = x[0],
                        f = x[1],
                        p = Object(s.useState)(""),
                        g = Object(l.a)(p, 2),
                        k = g[0],
                        w = g[1],
                        y = Object(i.g)();
                    return (
                        Object(s.useEffect)(function () {
                            t("Anmelden");
                        }, []),
                        Object(O.jsxs)("div", {
                            className:
                                "flex justify-center items-center flex-col m-auto w-96 max-w-1/9",
                            children: [
                                Object(O.jsx)("h1", {
                                    className:
                                        "font-bold text-7.5xl mb-4 mt-16 dark:text-white",
                                    children: "Hallo",
                                }),
                                Object(O.jsx)("h6", {
                                    className:
                                        "text-center text-2xl text-gray-500 dark:text-gray-300 w-10/12 mb-3.625rem",
                                    children:
                                        "Melden Sie sich bei Ihrem Konto an",
                                }),
                                Object(O.jsxs)("div", {
                                    className: "w-full flex flex-col gap-6\r ",
                                    children: [
                                        Object(O.jsxs)("div", {
                                            className:
                                                "w-full bg-white dark:bg-whiteDark rounded-st py-2 flex items-center",
                                            children: [
                                                Object(O.jsx)("img", {
                                                    src: j,
                                                    alt: "Name",
                                                    className: "px-4 ".concat(
                                                        a ? "whiteSVG" : null
                                                    ),
                                                }),
                                                Object(O.jsx)("input", {
                                                    type: "text",
                                                    className:
                                                        "focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white",
                                                    value: m,
                                                    onChange: function (e) {
                                                        b(e.target.value);
                                                    },
                                                    placeholder: "Username",
                                                }),
                                            ],
                                        }),
                                        Object(O.jsxs)("div", {
                                            className:
                                                "w-full bg-white dark:bg-whiteDark rounded-st py-2 flex items-center",
                                            children: [
                                                Object(O.jsx)("img", {
                                                    src: ce,
                                                    alt: "Name",
                                                    className: "px-4 ".concat(
                                                        a ? "whiteSVG" : null
                                                    ),
                                                }),
                                                Object(O.jsx)("input", {
                                                    type: "password",
                                                    className:
                                                        "focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white",
                                                    value: h,
                                                    onChange: function (e) {
                                                        f(e.target.value);
                                                    },
                                                    placeholder: "Password",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(O.jsx)("p", {
                                    className: "".concat(
                                        "" === k ? "hidden" : "block",
                                        " text-xm text-primary dark:text-primaryDark mt-4"
                                    ),
                                    children: k,
                                }),
                                Object(O.jsx)("button", {
                                    onClick: function () {
                                        if ("" === m || " " === m)
                                            w("Der Benutzername fehlt");
                                        else if ("" === h || " " === h)
                                            w("Das Password fehlt");
                                        else {
                                            var e = {
                                                params: {
                                                    username: m,
                                                    password: Xe()(h),
                                                },
                                            };
                                            C.a
                                                .get(
                                                    "http://10.10.30.218:42069/user/login",
                                                    e,
                                                    {
                                                        headers: {
                                                            "Content-Type":
                                                                "application/json;charset=UTF-8",
                                                            "Access-Control-Allow-Origin":
                                                                "*",
                                                        },
                                                    }
                                                )
                                                .then(function (e) {
                                                    r(m),
                                                        c(!0),
                                                        localStorage.setItem(
                                                            "username",
                                                            m
                                                        ),
                                                        localStorage.setItem(
                                                            "password",
                                                            Xe()(h)
                                                        ),
                                                        y.push("/spielen");
                                                })
                                                .catch(function (e) {
                                                    w(
                                                        "Benutzername oder Password ist falsch"
                                                    );
                                                });
                                        }
                                    },
                                    className:
                                        "bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4",
                                    children: "Anmelden",
                                }),
                                Object(O.jsxs)("p", {
                                    className:
                                        "text-sm mt-3.625rem text-gray-600 dark:text-gray-400 mb-16",
                                    children: [
                                        "Haben Sie kein Konto?",
                                        " ",
                                        Object(O.jsx)(d.b, {
                                            to: "/registrieren",
                                            children: Object(O.jsx)("span", {
                                                className:
                                                    "font-bold underline text-black dark:text-white",
                                                children: "Erstellen",
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                Je = function (e) {
                    var t = e.setUrl,
                        a = e.isDarkmode,
                        c = e.setIsLoggedIn,
                        r = e.setUsernameApp,
                        n = Object(s.useState)(""),
                        o = Object(l.a)(n, 2),
                        m = o[0],
                        b = o[1],
                        u = Object(s.useState)(""),
                        x = Object(l.a)(u, 2),
                        h = x[0],
                        f = x[1],
                        p = Object(s.useState)(""),
                        g = Object(l.a)(p, 2),
                        k = g[0],
                        w = g[1],
                        v = Object(s.useState)(""),
                        N = Object(l.a)(v, 2),
                        S = N[0],
                        D = N[1],
                        G = Object(s.useState)(""),
                        E = Object(l.a)(G, 2),
                        V = E[0],
                        z = E[1],
                        P = Object(i.g)();
                    return (
                        Object(s.useEffect)(function () {
                            t("Registrieren");
                        }),
                        Object(O.jsxs)("div", {
                            className:
                                "flex justify-center items-center flex-col m-auto w-96 max-w-1/9",
                            children: [
                                Object(O.jsx)("h1", {
                                    className:
                                        "font-bold text-6xl sm:text-7.5xl mb-4 mt-16 dark:text-white",
                                    children: "Wilkommen",
                                }),
                                Object(O.jsx)("h6", {
                                    className:
                                        "text-center text-2xl text-gray-500 dark:text-gray-300 w-10/12 mb-3.625rem",
                                    children: "Erstellen Sie einen Konto",
                                }),
                                Object(O.jsxs)("div", {
                                    className: "w-full flex flex-col gap-6\r ",
                                    children: [
                                        Object(O.jsxs)("div", {
                                            className:
                                                "w-full rounded-st py-2 flex items-center bg-white dark:bg-whiteDark",
                                            children: [
                                                Object(O.jsx)("img", {
                                                    src: j,
                                                    alt: "Name",
                                                    className: "px-4 ".concat(
                                                        a ? "whiteSVG" : null
                                                    ),
                                                }),
                                                Object(O.jsx)("input", {
                                                    type: "text",
                                                    className:
                                                        "focus:outline-none flex-1 mr-4 dark:text-white dark:bg-whiteDark",
                                                    value: m,
                                                    onChange: function (e) {
                                                        b(e.target.value);
                                                    },
                                                    placeholder: "Username",
                                                }),
                                            ],
                                        }),
                                        Object(O.jsxs)("div", {
                                            className:
                                                "w-full bg-white dark:bg-whiteDark rounded-st py-2 flex items-center",
                                            children: [
                                                Object(O.jsx)("img", {
                                                    src: y,
                                                    alt: "Email",
                                                    className: "px-4 ".concat(
                                                        a ? "whiteSVG" : null
                                                    ),
                                                }),
                                                Object(O.jsx)("input", {
                                                    type: "text",
                                                    className:
                                                        "focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white",
                                                    value: h,
                                                    onChange: function (e) {
                                                        f(e.target.value);
                                                    },
                                                    placeholder: "Email",
                                                }),
                                            ],
                                        }),
                                        Object(O.jsxs)("div", {
                                            className:
                                                "w-full bg-white dark:bg-whiteDark rounded-st py-2 flex items-center",
                                            children: [
                                                Object(O.jsx)("img", {
                                                    src: ce,
                                                    alt: "Name",
                                                    className: "px-4 ".concat(
                                                        a ? "whiteSVG" : null
                                                    ),
                                                }),
                                                Object(O.jsx)("input", {
                                                    type: "password",
                                                    className:
                                                        "focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white",
                                                    value: S,
                                                    onChange: function (e) {
                                                        D(e.target.value);
                                                    },
                                                    placeholder: "Password",
                                                }),
                                            ],
                                        }),
                                        Object(O.jsxs)("div", {
                                            className:
                                                "w-full bg-white rounded-st py-2 flex items-center dark:bg-whiteDark",
                                            children: [
                                                Object(O.jsx)("img", {
                                                    src: ce,
                                                    alt: "Name",
                                                    className: "px-4 ".concat(
                                                        a ? "whiteSVG" : null
                                                    ),
                                                }),
                                                Object(O.jsx)("input", {
                                                    type: "password",
                                                    className:
                                                        "focus:outline-none flex-1 mr-4 dark:bg-whiteDark dark:text-white",
                                                    value: k,
                                                    onChange: function (e) {
                                                        w(e.target.value);
                                                    },
                                                    placeholder:
                                                        "Password best\xe4tigen",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(O.jsx)("p", {
                                    className: "".concat(
                                        "" === V ? "hidden" : "block",
                                        " text-xm text-primary dark:text-primaryDark mt-4 text-center"
                                    ),
                                    children: V,
                                }),
                                Object(O.jsx)("button", {
                                    onClick: function () {
                                        if ("" === m || " " === m)
                                            z("Der Benutzername fehlt");
                                        else if ("" === k || " " === k)
                                            z("Das Password fehlt");
                                        else if (k !== S)
                                            z(
                                                "Die Passw\xf6rter stimmen nicht \xfcberein"
                                            );
                                        else if (m.length > 15)
                                            z(
                                                "Der Benutzername ist zu gro\xdf"
                                            );
                                        else if (m.search(/^[a-zA-Z0-9]+$/) < 0)
                                            z(
                                                "Der Benutzername ist kann Buchstaben und Zahlen beiinhalten"
                                            );
                                        else if (k.length < 8)
                                            z(
                                                "Ihr Password muss mindestens 8 Zeichen gro\xdf sein"
                                            );
                                        else if (k.search(/[a-z]/i) < 0)
                                            z(
                                                "Ihr Password muss mindestens ein Buchstabe beinhalten"
                                            );
                                        else if (k.search(/[0-9]/) < 0)
                                            z(
                                                "Ihr Password muss mindestens ein Zeichen haben"
                                            );
                                        else if (
                                            (function (e) {
                                                return /\S+@\S+\.\S+/.test(e);
                                            })(h)
                                        )
                                            if ("System" === m || "Ich" === m)
                                                z(
                                                    "Dieser Benutzername ist verboten"
                                                );
                                            else {
                                                var e = {
                                                        headers: {
                                                            "Content-Type":
                                                                "application/json;charset=UTF-8",
                                                            "Access-Control-Allow-Origin":
                                                                "*",
                                                        },
                                                    },
                                                    t = {
                                                        params: {
                                                            username: m,
                                                            email: h,
                                                        },
                                                    };
                                                C.a
                                                    .get(
                                                        "http://10.10.30.218:42069/user/check",
                                                        t,
                                                        e
                                                    )
                                                    .then(function (t) {
                                                        var a = {
                                                            username: m,
                                                            password: Xe()(k),
                                                            email: h,
                                                        };
                                                        C.a
                                                            .post(
                                                                "http://10.10.30.218:42069/register",
                                                                a,
                                                                e
                                                            )
                                                            .then(function (e) {
                                                                r(m),
                                                                    localStorage.setItem(
                                                                        "username",
                                                                        m
                                                                    ),
                                                                    localStorage.setItem(
                                                                        "password",
                                                                        Xe()(k)
                                                                    ),
                                                                    c(!0),
                                                                    P.push(
                                                                        "/spielen"
                                                                    );
                                                            })
                                                            .catch(function (
                                                                e
                                                            ) {
                                                                z(
                                                                    "Dieser Benutzername gibt es schon"
                                                                );
                                                            });
                                                    })
                                                    .catch(function (e) {
                                                        "username" ===
                                                        e.response.data.taken
                                                            ? z(
                                                                  "Dieser Benutzername existiert schon, Sie m\xfcssen einen anderen w\xe4hlen"
                                                              )
                                                            : "email" ===
                                                              e.response.data
                                                                  .taken
                                                            ? z(
                                                                  "Diese Email wurde schon benutzt, Sie m\xfcssen eine andere Email nehmen"
                                                              )
                                                            : z(
                                                                  "Email und Benutzername wurden schon benutzt, w\xe4hlen Sie etwas anderes"
                                                              );
                                                    });
                                            }
                                        else
                                            z("Ihre Email ist nicht g\xfcltig");
                                    },
                                    className:
                                        "bg-primary dark:bg-primaryDark text-white dark:text-black font-medium w-full py-2 rounded-st flex justify-center gap-2 cursor-pointer mt-4",
                                    children: "Registrieren",
                                }),
                                Object(O.jsxs)("p", {
                                    className:
                                        "text-sm mt-3.625rem text-gray-600 dark:text-gray-400 mb-16",
                                    children: [
                                        "Haben Sie bereits einen Konto?",
                                        " ",
                                        Object(O.jsx)(d.b, {
                                            to: "/anmelden",
                                            children: Object(O.jsx)("span", {
                                                className:
                                                    "font-bold underline text-black dark:text-white",
                                                children: "Anmelden",
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                qe = function (e) {
                    var t = e.typ,
                        a = e.data,
                        s = e.percentage,
                        c = e.extra;
                    return Object(O.jsxs)("div", {
                        className:
                            "rounded-st bg-gray-200 dark:bg-statistikGray dark:text-white w-full py-4 px-8 flex  justify-between",
                        children: [
                            Object(O.jsxs)("div", {
                                children: [
                                    Object(O.jsx)("p", {
                                        className: "text-sm",
                                        children: t,
                                    }),
                                    Object(O.jsxs)("div", {
                                        className: "flex items-end",
                                        children: [
                                            Object(O.jsx)("h6", {
                                                className: "text-2xl font-bold",
                                                children: a,
                                            }),
                                            Object(O.jsx)("p", {
                                                className: "text-sm pl-2",
                                                children: c,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            void 0 !== s
                                ? Object(O.jsxs)("div", {
                                      className: "h-full w-2 relative",
                                      children: [
                                          Object(O.jsx)("div", {
                                              className:
                                                  "h-full w-full rounded-st bg-secondary dark:bg-secondaryDark opacity-20",
                                          }),
                                          Object(O.jsx)("div", {
                                              className:
                                                  "w-full rounded-st bg-secondary dark:bg-secondaryDark absolute bottom-0 left-0",
                                              style: {
                                                  height: "".concat(s, "%"),
                                              },
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    });
                },
                $e = function (e) {
                    var t = e.date,
                        a = e.team1,
                        s = e.team2,
                        c = e.stiche,
                        r = e.punkte,
                        n = e.percentage,
                        l = e.win;
                    return Object(O.jsxs)("div", {
                        className:
                            "bg-white dark:bg-whiteDark relative py-4 rounded-st px-8 grid grid-flow-row gap-y-8 grid-cols-1 sm:grid-cols-5",
                        children: [
                            Object(O.jsx)("div", {
                                className: "absolute h-full w-2 rounded-l-st left-0 top-0 ".concat(
                                    l
                                        ? "bg-secondary dark:bg-secondaryDark"
                                        : "bg-primary dark:bg-primaryDark"
                                ),
                            }),
                            Object(O.jsx)("div", {
                                className: "absolute h-full left-2 top-0 rounded-r-st ".concat(
                                    l
                                        ? "bg-secondary dark:bg-secondaryDark"
                                        : "bg-primary dark:bg-primaryDark"
                                ),
                                style: {
                                    width: "".concat(n, "%"),
                                    opacity: "5%",
                                },
                            }),
                            Object(O.jsxs)("div", {
                                className: "flex items-end gap-3 pl-2 m-auto",
                                children: [
                                    Object(O.jsx)("p", {
                                        className:
                                            "text-gray-500 dark:text-gray-300",
                                        children: "Datum",
                                    }),
                                    Object(O.jsx)("h6", {
                                        className:
                                            "font-bold text-xl dark:text-white",
                                        children: t,
                                    }),
                                ],
                            }),
                            Object(O.jsx)("div", {
                                className: "hidden sm:block",
                            }),
                            Object(O.jsxs)("div", {
                                className: "flex items-end gap-3 m-auto",
                                children: [
                                    " ",
                                    Object(O.jsxs)("h6", {
                                        className:
                                            "font-bold text-xl dark:text-white",
                                        children: [
                                            Object(O.jsx)("span", {
                                                className:
                                                    "text-secondary dark:text-secondaryDark",
                                                children: a,
                                            }),
                                            ":",
                                            Object(O.jsx)("span", {
                                                className:
                                                    "text-primary dark:text-primaryDark",
                                                children: s,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(O.jsxs)("div", {
                                className: "flex items-end gap-3 m-auto",
                                children: [
                                    Object(O.jsx)("p", {
                                        className:
                                            "text-gray-500 dark:text-gray-300",
                                        children: "Stiche",
                                    }),
                                    Object(O.jsx)("h6", {
                                        className:
                                            "font-bold text-xl dark:text-white",
                                        children: c,
                                    }),
                                ],
                            }),
                            Object(O.jsxs)("div", {
                                className: "flex items-end gap-3 mx-auto",
                                children: [
                                    Object(O.jsx)("p", {
                                        className:
                                            "text-gray-500 text-right dark:text-gray-300",
                                        children: "Punkte gewonnen",
                                    }),
                                    Object(O.jsx)("h6", {
                                        className:
                                            "font-bold text-xl m-auto dark:text-white",
                                        children: r,
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                Qe = function (e) {
                    var t = e.username,
                        a = e.isDarkmode,
                        c = Object(s.useState)(0),
                        r = Object(l.a)(c, 2),
                        n = r[0],
                        i = r[1];
                    return (
                        Object(s.useEffect)(function () {
                            C.a
                                .get("http://10.10.30.218:42069/user/level", {
                                    params: { username: t },
                                })
                                .then(function (e) {
                                    i(e.data.currentlevel.nr);
                                });
                        }, []),
                        Object(O.jsx)(d.b, {
                            to: "/profile/".concat(t),
                            children: Object(O.jsxs)("div", {
                                className:
                                    "bg-white dark:bg-whiteDark dark:text-white relative py-2 flex items-center",
                                children: [
                                    Object(O.jsx)("div", {
                                        className: "pr-4",
                                        children: Object(O.jsx)(g, {
                                            level: n,
                                            size: "1.7rem",
                                            isDarkmode: a,
                                        }),
                                    }),
                                    Object(O.jsx)("p", {
                                        className: "flex-1 mr-4",
                                        children: t,
                                    }),
                                ],
                            }),
                        })
                    );
                },
                et = function (e) {
                    var t = e.isDarkmode,
                        a = e.searchResults;
                    return Object(O.jsx)("div", {
                        className:
                            "w-full absolute bottom-0 left-0 rounded-st max-h-52 bg-white dark:bg-whiteDark z-10 px-4 overflow-auto",
                        style: { transform: "translateY(calc(100% + 0.5rem)" },
                        children: a.map(function (e) {
                            return Object(O.jsx)(Qe, {
                                username: e.username,
                                isDarkmode: t,
                            });
                        }),
                    });
                },
                tt = function (e) {
                    var t = e.isDarkmode,
                        a = Object(s.useState)(""),
                        c = Object(l.a)(a, 2),
                        r = c[0],
                        n = c[1],
                        i = Object(s.useState)(!1),
                        d = Object(l.a)(i, 2),
                        o = d[0],
                        m = d[1],
                        b = Object(s.useState)([]),
                        j = Object(l.a)(b, 2),
                        u = j[0],
                        x = j[1];
                    Object(s.useEffect)(
                        function () {
                            o || m(!0);
                        },
                        [r]
                    );
                    var h = Object(s.useRef)();
                    return (
                        Object(s.useEffect)(function () {
                            var e = function (e) {
                                h.current &&
                                    !h.current.contains(e.target) &&
                                    m(!1);
                            };
                            return (
                                document.addEventListener("mousedown", e),
                                function () {
                                    document.removeEventListener(
                                        "mousedown",
                                        e
                                    );
                                }
                            );
                        }),
                        Object(s.useEffect)(
                            function () {
                                "" != r &&
                                    C.a
                                        .get(
                                            "http://10.10.30.218:42069/users/search",
                                            {
                                                params: {
                                                    username: r.toLocaleLowerCase(),
                                                },
                                            }
                                        )
                                        .then(function (e) {
                                            x(e.data);
                                        });
                            },
                            [r]
                        ),
                        Object(O.jsxs)("div", {
                            ref: h,
                            className: "relative",
                            onClick: function () {
                                m(!0);
                            },
                            children: [
                                Object(O.jsx)(L, {
                                    search: r,
                                    setSearch: n,
                                    isDarkmode: t,
                                }),
                                Object(O.jsx)("div", {
                                    children:
                                        o && "" !== r
                                            ? Object(O.jsx)(et, {
                                                  isDarkmode: t,
                                                  searchResults: u,
                                              })
                                            : null,
                                }),
                            ],
                        })
                    );
                },
                at = a(81),
                st = a.n(at),
                ct = function (e) {
                    var t = e.setUrl,
                        a = e.isDarkmode,
                        c = Object(s.useState)(0),
                        r = Object(l.a)(c, 2),
                        n = r[0],
                        d = r[1],
                        o = Object(s.useState)(0),
                        m = Object(l.a)(o, 2),
                        b = m[0],
                        j = m[1],
                        u = Object(s.useState)(0),
                        x = Object(l.a)(u, 2),
                        h = x[0],
                        f = x[1],
                        p = Object(s.useState)(0),
                        k = Object(l.a)(p, 2),
                        w = k[0],
                        y = k[1],
                        v = Object(s.useState)([]),
                        N = Object(l.a)(v, 2),
                        S = N[0],
                        D = N[1],
                        G = Object(s.useState)("?"),
                        E = Object(l.a)(G, 2),
                        V = E[0],
                        z = E[1],
                        P = Object(s.useState)("?"),
                        L = Object(l.a)(P, 2),
                        I = L[0],
                        A = L[1],
                        B = Object(s.useState)("0"),
                        T = Object(l.a)(B, 2),
                        R = T[0],
                        U = T[1],
                        H = Object(s.useState)("?"),
                        W = Object(l.a)(H, 2),
                        Z = W[0],
                        _ = W[1],
                        K = Object(s.useState)("0"),
                        M = Object(l.a)(K, 2),
                        Y = M[0],
                        X = M[1],
                        F = Object(i.h)().username;
                    return (
                        Object(s.useEffect)(
                            function () {
                                t("/profile"),
                                    C.a
                                        .get(
                                            "http://10.10.30.218:42069/user/level",
                                            { params: { username: F } }
                                        )
                                        .then(function (e) {
                                            var t = e.data;
                                            y(t.currentlevel.nr),
                                                d(t.punkte),
                                                j(
                                                    t.currentlevel
                                                        .erforderlichepunkte
                                                ),
                                                f(
                                                    t.nextlevel
                                                        .erforderlichepunkte
                                                );
                                        }),
                                    C.a
                                        .get(
                                            "http://10.10.30.218:42069/user/games",
                                            { params: { username: F } }
                                        )
                                        .then(function (e) {
                                            D(e.data);
                                        }),
                                    C.a
                                        .get(
                                            "http://10.10.30.218:42069/user/stats",
                                            { params: { username: F } }
                                        )
                                        .then(function (e) {
                                            A(e.data.anzspieler),
                                                U(e.data.winrate),
                                                _(
                                                    e.data.verlorenespiele +
                                                        e.data.gewonnenespiele
                                                ),
                                                X(e.data.sticheprospiel);
                                        }),
                                    C.a
                                        .get(
                                            "http://10.10.30.218:42069/rankings"
                                        )
                                        .then(function (e) {
                                            z(
                                                e.data.findIndex(function (e) {
                                                    return e.username === F;
                                                }) + 1
                                            );
                                        });
                            },
                            [F]
                        ),
                        Object(O.jsxs)("div", {
                            children: [
                                Object(O.jsxs)("div", {
                                    className: "w-1450 max-w-1/9 mx-auto mt-8",
                                    children: [
                                        Object(O.jsx)("div", {
                                            className: "md:hidden",
                                            children: Object(O.jsx)(tt, {
                                                isDarkmode: a,
                                            }),
                                        }),
                                        Object(O.jsxs)("div", {
                                            className:
                                                "flex mt-4 items-center gap-8 mb-6",
                                            children: [
                                                Object(O.jsx)(g, {
                                                    level: w,
                                                    size: "6.6875rem",
                                                    isDarkmode: a,
                                                }),
                                                Object(O.jsxs)("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        Object(O.jsxs)("div", {
                                                            className:
                                                                "flex flex-row mt-4 justify-between w-full items-center",
                                                            children: [
                                                                Object(O.jsx)(
                                                                    "h3",
                                                                    {
                                                                        className:
                                                                            "font-bold dark:text-white text-3xl md:text-4xl text-left",
                                                                        children: F,
                                                                    }
                                                                ),
                                                                Object(O.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            " hidden md:block",
                                                                        children: Object(
                                                                            O.jsx
                                                                        )(tt, {
                                                                            isDarkmode: a,
                                                                        }),
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                        Object(O.jsxs)("h6", {
                                                            className:
                                                                "text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-2",
                                                            children: [
                                                                n,
                                                                " Punkte",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        Object(O.jsxs)("div", {
                                            className: "mb-16",
                                            children: [
                                                Object(O.jsxs)("h6", {
                                                    className:
                                                        "text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-right font-light mb-4",
                                                    children: ["Level ", w + 1],
                                                }),
                                                Object(O.jsxs)("div", {
                                                    className:
                                                        "relative w-full rounded-st h-9",
                                                    children: [
                                                        Object(O.jsx)("div", {
                                                            className:
                                                                "w-full bg-secondary dark:bg-secondaryDark rounded-st h-full opacity-20 flex justify-center items-center",
                                                        }),
                                                        (100 / (h - b)) *
                                                            (n - b) <
                                                            30 || n === b
                                                            ? Object(O.jsxs)(
                                                                  "p",
                                                                  {
                                                                      className:
                                                                          "absolute text-black dark:text-white font-regular left-1/2 top-1/2",
                                                                      style: {
                                                                          transform:
                                                                              "translate(-0%, -50%",
                                                                      },
                                                                      children: [
                                                                          n,
                                                                          "/",
                                                                          h,
                                                                      ],
                                                                  }
                                                              )
                                                            : null,
                                                        Object(O.jsx)("div", {
                                                            className:
                                                                "bg-secondary dark:bg-secondaryDark rounded-st flex items-center justify-center h-full absolute left-0 top-0",
                                                            style: {
                                                                width: "".concat(
                                                                    (100 /
                                                                        (h -
                                                                            b)) *
                                                                        (n - b),
                                                                    "%"
                                                                ),
                                                            },
                                                            children:
                                                                (100 /
                                                                    (h - b)) *
                                                                    (n - b) >
                                                                30
                                                                    ? Object(
                                                                          O.jsxs
                                                                      )("p", {
                                                                          className:
                                                                              "text-white dark:text-black font-regular",
                                                                          children: [
                                                                              n,
                                                                              "/",
                                                                              h,
                                                                          ],
                                                                      })
                                                                    : null,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(O.jsx)("div", {
                                    className: "bg-white dark:bg-whiteDark",
                                    style: { width: "100%" },
                                    children: Object(O.jsxs)("div", {
                                        className:
                                            "w-1450 max-w-1/9 mx-auto py-8",
                                        children: [
                                            Object(O.jsx)("h5", {
                                                className:
                                                    "font-bold text-7.5 mb-6 mt-2 dark:text-white",
                                                children: "Statistiken",
                                            }),
                                            Object(O.jsxs)("div", {
                                                className:
                                                    "grid gap-x-8 lg:gap-x-20 gap-y-8 grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                                                children: [
                                                    Object(O.jsx)(qe, {
                                                        typ: "Rang",
                                                        data: "#".concat(V),
                                                        extra: "von ".concat(I),
                                                    }),
                                                    Object(O.jsx)(qe, {
                                                        typ: "Winnrate %",
                                                        data: "".concat(
                                                            R,
                                                            " %"
                                                        ),
                                                        percentage: R,
                                                    }),
                                                    Object(O.jsx)(qe, {
                                                        typ: "Spiele gesamt",
                                                        data: Z,
                                                    }),
                                                    Object(O.jsx)(qe, {
                                                        typ: "Stich/Spiel %",
                                                        data: "".concat(
                                                            Y,
                                                            " %"
                                                        ),
                                                        percentage: Y,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                Object(O.jsxs)("div", {
                                    className:
                                        "w-1450 max-w-1/9 mx-auto mt-8 flex flex-col gap-6 mb-12",
                                    children: [
                                        Object(O.jsx)("h5", {
                                            className:
                                                "font-bold text-7.5 mt-2 dark:text-white",
                                            children: "Verlauf",
                                        }),
                                        0 === S.length
                                            ? Object(O.jsxs)("p", {
                                                  className: "dark:text-white",
                                                  children: [
                                                      F,
                                                      " hat noch keine Spiele gespielt",
                                                  ],
                                              })
                                            : S.map(function (e) {
                                                  return Object(O.jsx)($e, {
                                                      win: e.amiawinner,
                                                      team1:
                                                          e.teams.myteampoints,
                                                      team2:
                                                          e.teams
                                                              .otherteampoints,
                                                      stiche: e.mystiche,
                                                      date: st()(
                                                          e.gamedate
                                                      ).format("MM/DD/YYYY"),
                                                      punkte: e.wonpoints,
                                                      percentage:
                                                          (100 /
                                                              (e.teams
                                                                  .myteampoints +
                                                                  e.teams
                                                                      .otherteampoints)) *
                                                          e.teams.myteampoints,
                                                  });
                                              }).reverse(),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                rt = a.p + "static/media/emoji_events-24px.1f56dc3c.svg",
                nt = a.p + "static/media/gold.1a61fcbd.svg",
                lt = a.p + "static/media/silver.bad81e57.svg",
                it = a.p + "static/media/bronze.b5b3c218.svg",
                dt = function (e) {
                    var t = e.pos,
                        a = e.username,
                        s = e.points,
                        c = e.winrate,
                        r = e.games,
                        n = Object(i.g)();
                    return Object(O.jsxs)("tr", {
                        className: "mb-8 cursor-pointer",
                        onClick: function () {
                            n.push("/profile/".concat(a));
                        },
                        children: [
                            Object(O.jsx)("td", {
                                className:
                                    "rounded-t-st md:rounded-t-none md:rounded-l-st dark:bg-whiteDark dark:text-white",
                                "data-label": "Platz",
                                children:
                                    1 === t
                                        ? Object(O.jsx)("img", {
                                              src: nt,
                                              alt: "Goldmedallie",
                                              className:
                                                  "my-auto ml-auto md:mx-auto",
                                          })
                                        : 2 === t
                                        ? Object(O.jsx)("img", {
                                              src: lt,
                                              alt: "Silveredallie",
                                              className:
                                                  "my-auto ml-auto md:mx-auto",
                                          })
                                        : 3 === t
                                        ? Object(O.jsx)("img", {
                                              src: it,
                                              alt: "Bronzedallie",
                                              className:
                                                  "my-auto ml-auto md:mx-auto",
                                          })
                                        : Object(O.jsxs)("p", {
                                              children: [t, "."],
                                          }),
                            }),
                            Object(O.jsx)("td", {
                                "data-label": "Benutzer",
                                children: a,
                            }),
                            Object(O.jsx)("td", {
                                "data-label": "Winrate %",
                                children: c,
                            }),
                            Object(O.jsx)("td", {
                                "data-label": "Gewonnene Spiele",
                                children: r,
                            }),
                            Object(O.jsx)("td", {
                                className:
                                    "rounded-b-st md:rounded-b-none md:rounded-r-st",
                                "data-label": "Punkte",
                                children: s,
                            }),
                        ],
                    });
                },
                ot = function (e) {
                    var t = e.data,
                        a = e.filter;
                    return Object(O.jsxs)("table", {
                        className: "rangliste mt-2 border-separate mb-16",
                        children: [
                            Object(O.jsx)("thead", {
                                children: Object(O.jsxs)("tr", {
                                    className: "dark:text-white",
                                    children: [
                                        Object(O.jsx)("th", {
                                            children: "Platz",
                                        }),
                                        Object(O.jsx)("th", {
                                            children: "Benutzer",
                                        }),
                                        Object(O.jsx)("th", {
                                            children: "Winrate %",
                                        }),
                                        Object(O.jsx)("th", {
                                            children: "Gewonnene Spiele",
                                        }),
                                        Object(O.jsx)("th", {
                                            children: "Punkte",
                                        }),
                                    ],
                                }),
                            }),
                            Object(O.jsx)("tbody", {
                                children: t
                                    .sort(function (e, t) {
                                        return "Gewonnene Spiele" === a
                                            ? t.wongames - e.wongames
                                            : "Winrate" === a
                                            ? t.winrate - e.winrate
                                            : "Punkte" === a
                                            ? t.points - e.points
                                            : void 0;
                                    })
                                    .map(function (e, t) {
                                        return Object(O.jsx)(
                                            dt,
                                            {
                                                pos: t + 1,
                                                username: e.username,
                                                points: e.points,
                                                winrate: e.winrate,
                                                games: e.wongames,
                                            },
                                            1e4 * Math.random()
                                        );
                                    }),
                            }),
                        ],
                    });
                },
                mt = function (e) {
                    var t = e.setUrl,
                        a = e.isDarkmode,
                        c = Object(s.useState)("Punkte"),
                        r = Object(l.a)(c, 2),
                        n = r[0],
                        i = r[1],
                        d = Object(s.useState)([]),
                        o = Object(l.a)(d, 2),
                        m = o[0],
                        b = o[1],
                        j = Object(s.useState)(!1),
                        u = Object(l.a)(j, 2),
                        x = u[0],
                        h = u[1];
                    return (
                        Object(s.useEffect)(function () {
                            t("/rangliste");
                        }, []),
                        Object(s.useEffect)(function () {
                            C.a
                                .get("http://10.10.30.218:42069/rankings")
                                .then(function (e) {
                                    b(e.data), h(!0);
                                });
                        }, []),
                        Object(O.jsxs)("div", {
                            className:
                                "flex w-1450 max-w-1/9 mx-auto pt-12 flex-col justify-center items-center",
                            children: [
                                Object(O.jsx)("img", {
                                    src: rt,
                                    alt: "Troph\xe4e",
                                    className: "w-16 mb-2 ".concat(
                                        a ? "whiteSVG" : null
                                    ),
                                }),
                                Object(O.jsx)("h3", {
                                    className:
                                        "font-bold text-4xl dark:text-white",
                                    children: "Die besten Spieler",
                                }),
                                Object(O.jsxs)("div", {
                                    className:
                                        "mt-4 border-t-2 border-gray-300 dark:border-gray-600 w-full md:w-40",
                                    children: [
                                        Object(O.jsxs)("div", {
                                            className:
                                                "mt-6 flex justify-between gap-4 md:gap-8",
                                            children: [
                                                Object(O.jsx)(_e, {
                                                    value: "Gewonnene Spiele",
                                                    selectValue: n,
                                                    setSelectValue: i,
                                                }),
                                                Object(O.jsx)(_e, {
                                                    value: "Winrate",
                                                    selectValue: n,
                                                    setSelectValue: i,
                                                }),
                                                Object(O.jsx)(_e, {
                                                    value: "Punkte",
                                                    selectValue: n,
                                                    setSelectValue: i,
                                                }),
                                            ],
                                        }),
                                        x
                                            ? Object(O.jsx)(ot, {
                                                  data: m,
                                                  filter: n,
                                              })
                                            : Object(O.jsxs)("div", {
                                                  className:
                                                      "lds-ellipsis w-full flex justify-center mt-16 left-1/2",
                                                  style: {
                                                      transform:
                                                          "translateX(-50%)",
                                                  },
                                                  children: [
                                                      Object(O.jsx)("div", {
                                                          className:
                                                              "bg-primary dark:bg-primaryDark",
                                                      }),
                                                      Object(O.jsx)("div", {
                                                          className:
                                                              "bg-primary dark:bg-primaryDark",
                                                      }),
                                                      Object(O.jsx)("div", {
                                                          className:
                                                              "bg-primary dark:bg-primaryDark",
                                                      }),
                                                      Object(O.jsx)("div", {
                                                          className:
                                                              "bg-primary dark:bg-primaryDark",
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                bt = a.p + "static/media/construction-24px.b14de93b.svg",
                jt = function (e) {
                    var t = e.isDarkmode;
                    return Object(O.jsx)("div", {
                        style: {
                            width: "100vw",
                            height: "calc(100vh - 4.5rem)",
                        },
                        className:
                            "bg-bgWhite dark:bg-bgDark fixed z-20 flex justify-center items-center",
                        children: Object(O.jsxs)("div", {
                            className:
                                "max-w-1/9 text-center flex flex-col justify-center items-center dark:text-white",
                            children: [
                                Object(O.jsx)("img", {
                                    src: bt,
                                    alt: "Werkzeug",
                                    className: "w-32 ".concat(
                                        t ? "whiteSVG" : null
                                    ),
                                }),
                                Object(O.jsx)("h2", {
                                    className: "font-bold text-6xl mt-4",
                                    children: "Der Server ist down",
                                }),
                                Object(O.jsx)("h4", {
                                    className:
                                        "font-bold text-3xl text-gray-500 dark:text-gray-400 mt-10",
                                    children:
                                        "Unser Team versucht das Problem zu l\xf6sen",
                                }),
                            ],
                        }),
                    });
                },
                ut = a(51),
                xt = a.n(ut),
                ht = xt()("http://localhost:8080");
            var ft = function () {
                var e = Object(s.useState)(""),
                    t = Object(l.a)(e, 2),
                    a = t[0],
                    c = t[1],
                    r = Object(s.useState)(!1),
                    n = Object(l.a)(r, 2),
                    o = n[0],
                    m = n[1],
                    b = Object(s.useState)(!0),
                    j = Object(l.a)(b, 2),
                    u = j[0],
                    x = (j[1], Object(s.useState)(!1)),
                    h = Object(l.a)(x, 2),
                    f = h[0],
                    p = h[1],
                    g = Object(s.useState)(!1),
                    w = Object(l.a)(g, 2),
                    y = w[0],
                    N = w[1],
                    S = Object(s.useState)(0),
                    G = Object(l.a)(S, 2),
                    E = G[0],
                    V = G[1],
                    z = Object(s.useState)(""),
                    P = Object(l.a)(z, 2),
                    L = P[0],
                    A = P[1],
                    B = Object(s.useState)(!1),
                    T = Object(l.a)(B, 2),
                    R = T[0],
                    U = T[1],
                    H = Object(s.useState)(0),
                    W = Object(l.a)(H, 2),
                    Z = W[0],
                    _ = W[1],
                    K = Object(s.useState)(!1),
                    M = Object(l.a)(K, 2),
                    Y = M[0],
                    X = M[1];
                function F(e) {
                    A(""),
                        localStorage.setItem("username", ""),
                        localStorage.setItem("password", ""),
                        m(!1),
                        e.push("/anmelden");
                }
                return (
                    Object(s.useEffect)(function () {
                        ht.on("connect_failed", function () {
                            console.log("Network error");
                        }),
                            (function () {
                                var e = localStorage.getItem("darkmode");
                                if (void 0 === e) return;
                                N("true" == e);
                            })(),
                            (function () {
                                var e = localStorage.getItem("username");
                                if (void 0 === e || "" === e) return void U(!0);
                                var t = localStorage.getItem("password");
                                if (void 0 === t || "" === t) return void U(!0);
                                var a = {
                                        headers: {
                                            "Content-Type":
                                                "application/json;charset=UTF-8",
                                            "Access-Control-Allow-Origin": "*",
                                        },
                                    },
                                    s = {
                                        params: { username: e, password: t },
                                    };
                                C.a
                                    .get(
                                        "http://10.10.30.218:42069/user/login",
                                        s,
                                        a
                                    )
                                    .then(function (t) {
                                        A(e),
                                            m(!0),
                                            C.a
                                                .get(
                                                    "http://10.10.30.218:42069/user/level",
                                                    { params: { username: e } },
                                                    a
                                                )
                                                .then(function (e) {
                                                    _(e.data.currentlevel.nr),
                                                        U(!0);
                                                });
                                    })
                                    .catch(function () {
                                        U(!0);
                                    });
                            })();
                    }, []),
                    Object(s.useEffect)(
                        function () {
                            Y && (ht = xt()("http://localhost:8080"));
                        },
                        [Y]
                    ),
                    Object(s.useEffect)(
                        function () {
                            y
                                ? (document
                                      .getElementsByTagName("html")[0]
                                      .classList.add("dark"),
                                  document.body.classList.remove("scrollWhite"),
                                  document.body.classList.add("scrollDark"))
                                : (document
                                      .getElementsByTagName("html")[0]
                                      .classList.remove("dark"),
                                  document.body.classList.add("scrollWhite"),
                                  document.body.classList.remove("scrollDark")),
                                localStorage.setItem("darkmode", y);
                        },
                        [y]
                    ),
                    Object(O.jsxs)(d.a, {
                        children: [
                            u ? null : Object(O.jsx)(jt, { isDarkmode: y }),
                            R
                                ? Object(O.jsx)(k, {
                                      url: a,
                                      isSidebarOpen: f,
                                      setIsSidebarOpen: p,
                                      isDarkmode: y,
                                      setIsDarkmode: N,
                                      username: L,
                                      logout: F,
                                      level: Z,
                                  })
                                : null,
                            R
                                ? Object(O.jsx)(Te, {
                                      url: a,
                                      isSidebarOpen: f,
                                      setIsSidebarOpen: p,
                                      isDarkmode: y,
                                      setIsDarkmode: N,
                                      username: L,
                                      logout: F,
                                      level: Z,
                                  })
                                : null,
                            R
                                ? Object(O.jsxs)(i.d, {
                                      children: [
                                          Object(O.jsx)(i.b, {
                                              path: ["/", "/spielen"],
                                              exact: !0,
                                              children: o
                                                  ? Object(O.jsx)(I, {
                                                        setUrl: c,
                                                        socket: ht,
                                                        isDarkmode: y,
                                                        setTeam: V,
                                                    })
                                                  : Object(O.jsx)(D, {
                                                        setUrl: c,
                                                        isDarkmode: y,
                                                    }),
                                          }),
                                          Object(O.jsx)(i.b, {
                                              path: "/spielen/erstellen",
                                              children: o
                                                  ? Object(O.jsx)(Me, {
                                                        setUrl: c,
                                                        socket: ht,
                                                        isDarkmode: y,
                                                    })
                                                  : Object(O.jsx)(i.a, {
                                                        to: "/anmelden",
                                                    }),
                                          }),
                                          Object(O.jsx)(i.b, {
                                              path: "/spielen/:room",
                                              children: o
                                                  ? Object(O.jsx)(Be, {
                                                        setUrl: c,
                                                        socket: ht,
                                                        isDarkmode: y,
                                                        team: E,
                                                        username: L,
                                                        setReconnect: X,
                                                    })
                                                  : Object(O.jsx)(i.a, {
                                                        to: "/anmelden",
                                                    }),
                                          }),
                                          Object(O.jsx)(i.b, {
                                              path: "/rangliste",
                                              children: o
                                                  ? Object(O.jsx)(mt, {
                                                        setUrl: c,
                                                        isDarkmode: y,
                                                        isLoggedIn: o,
                                                    })
                                                  : Object(O.jsx)(i.a, {
                                                        to: "/anmelden",
                                                    }),
                                          }),
                                          Object(O.jsx)(i.b, {
                                              path: "/team/:room",
                                              children: o
                                                  ? Object(O.jsx)(He, {
                                                        setUrl: c,
                                                        isDarkmode: y,
                                                        setTeam: V,
                                                        team: E,
                                                    })
                                                  : Object(O.jsx)(i.a, {
                                                        to: "/anmelden",
                                                    }),
                                          }),
                                          Object(O.jsx)(i.b, {
                                              path: "/profile/:username",
                                              children: o
                                                  ? Object(O.jsx)(ct, {
                                                        setUrl: c,
                                                        isDarkmode: y,
                                                    })
                                                  : Object(O.jsx)(i.a, {
                                                        to: "/anmelden",
                                                    }),
                                          }),
                                          Object(O.jsx)(i.b, {
                                              path: "/anmelden",
                                              children: Object(O.jsx)(Fe, {
                                                  setUrl: c,
                                                  isDarkmode: y,
                                                  setIsLoggedIn: m,
                                                  setUsernameApp: A,
                                              }),
                                          }),
                                          Object(O.jsx)(i.b, {
                                              path: "/registrieren",
                                              children: Object(O.jsx)(Je, {
                                                  setUrl: c,
                                                  isDarkmode: y,
                                                  setIsLoggedIn: m,
                                                  setUsernameApp: A,
                                              }),
                                          }),
                                      ],
                                  })
                                : null,
                            R ? Object(O.jsx)(v, { isDarkmode: y }) : null,
                            R
                                ? null
                                : Object(O.jsxs)("div", {
                                      className:
                                          "lds-ellipsis fixed top-1/2 left-1/2 mt-4.5rem",
                                      style: {
                                          transform: "translate(-50%, -50%)",
                                      },
                                      children: [
                                          Object(O.jsx)("div", {
                                              className:
                                                  "bg-primary dark:bg-primaryDark",
                                          }),
                                          Object(O.jsx)("div", {
                                              className:
                                                  "bg-primary dark:bg-primaryDark",
                                          }),
                                          Object(O.jsx)("div", {
                                              className:
                                                  "bg-primary dark:bg-primaryDark",
                                          }),
                                          Object(O.jsx)("div", {
                                              className:
                                                  "bg-primary dark:bg-primaryDark",
                                          }),
                                      ],
                                  }),
                        ],
                    })
                );
            };
            n.a.render(
                Object(O.jsx)(c.a.StrictMode, {
                    children: Object(O.jsx)(ft, {}),
                }),
                document.getElementById("root")
            );
        },
        87: function (e, t, a) {},
    },
    [[150, 1, 2]],
]);
//# sourceMappingURL=main.fdac4828.chunk.js.map
