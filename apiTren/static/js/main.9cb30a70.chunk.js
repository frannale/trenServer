(this["webpackJsonpfront-trenes"] =
  this["webpackJsonpfront-trenes"] || []).push([
  [0],
  {
    47: function (e, t, a) {},
    48: function (e, t, a) {},
    73: function (e, t, a) {
      "use strict";
      a.r(t);
      var l = a(1),
        s = a.n(l),
        n = a(38),
        i = a.n(n),
        c = (a(47), a(48), a(19)),
        o = a(8),
        r = a(3),
        d = a.n(r),
        b = a(7),
        m = a(21),
        u = a(4),
        j = a(2),
        x = a(5),
        h = a.n(x),
        f = a(0);
      var p = function () {
          var e = Object(l.useState)({ username: "", password: "" }),
            t = Object(j.a)(e, 2),
            a = t[0],
            s = t[1],
            n = Object(l.useState)(""),
            i = Object(j.a)(n, 2),
            c = i[0],
            o = i[1],
            r = Object(l.useState)("yellow-500"),
            x = Object(j.a)(r, 2),
            p = x[0],
            v = x[1],
            g = Object(l.useState)(!1),
            w = Object(j.a)(g, 2),
            O = w[0],
            N = w[1],
            y = Object(l.useState)(!1),
            C = Object(j.a)(y, 2),
            R = C[0],
            M = C[1];
          Object(l.useEffect)(function () {
            null !== localStorage.getItem("alert") &&
              (o(localStorage.getItem("alert")),
              v(localStorage.getItem("alertColor")),
              localStorage.removeItem("alert"),
              localStorage.removeItem("alertColor"),
              N(!0));
          }, []);
          var z = function (e) {
              s(
                Object(u.a)(
                  Object(u.a)({}, a),
                  {},
                  Object(m.a)({}, e.target.name, e.target.value)
                )
              );
            },
            L = (function () {
              var e = Object(b.a)(
                d.a.mark(function e(t) {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (M(!0),
                            t.preventDefault(),
                            "" !== a.username.trim())
                          ) {
                            e.next = 7;
                            break;
                          }
                          return (
                            o("Por favor, ingres\xe1 el nombre de usuario"),
                            N(!0),
                            M(!1),
                            e.abrupt("return")
                          );
                        case 7:
                          if ("" !== a.password.trim()) {
                            e.next = 12;
                            break;
                          }
                          return (
                            o("Por favor, ingres\xe1 la contrase\xf1a"),
                            N(!0),
                            M(!1),
                            e.abrupt("return")
                          );
                        case 12:
                          return (
                            (e.next = 14),
                            h.a
                              .post("http://190.12.101.198:5000/auth", {
                                username: a.username,
                                password: a.password,
                              })
                              .then(function (e) {
                                !1 === e.data.exito
                                  ? (v("yellow-500"),
                                    o("Credenciales inv\xe1lidas"),
                                    N(!0),
                                    M(!1))
                                  : (localStorage.setItem(
                                      "token",
                                      e.data.access_token
                                    ),
                                    localStorage.setItem(
                                      "permisos",
                                      e.data.role
                                    ),
                                    localStorage.setItem(
                                      "username",
                                      e.data.message.substring(11)
                                    ),
                                    M(!1),
                                    (window.location.href = "/"));
                              })
                              .catch(function (e) {
                                console.log(e),
                                  o("Hubo un error, intent\xe1 m\xe1s tarde"),
                                  N(!0),
                                  M(!1);
                              })
                          );
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(f.jsx)(l.Fragment, {
            children: Object(f.jsxs)("div", {
              className: "bg-blue-600 h-screen login",
              children: [
                O
                  ? Object(f.jsxs)("div", {
                      className: "bg-".concat(
                        p,
                        " flex rounded justify-between xl:mr-auto xl:ml-auto  p-4 m-4 xl:w-1/2 items-center"
                      ),
                      children: [
                        Object(f.jsxs)("div", {
                          className: "flex flex-row",
                          children: [
                            "yellow-500" === p
                              ? Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-8 w-8 text-white mt-1 mr-3",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                    clipRule: "evenodd",
                                  }),
                                })
                              : Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-8 w-8 text-white mt-1 mr-3",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                            Object(f.jsx)("h1", {
                              className:
                                "font-bold text-medium text-white mt-2",
                              children: c,
                            }),
                          ],
                        }),
                        Object(f.jsx)("button", {
                          className: "bg-".concat(p, " px-1 h-6"),
                          onClick: function () {
                            return N(!1);
                          },
                          children: Object(f.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5 text-white",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: Object(f.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                              clipRule: "evenodd",
                            }),
                          }),
                        }),
                      ],
                    })
                  : null,
                Object(f.jsxs)("div", {
                  className:
                    "flex-col flex ml-auto mr-auto items-center pt-10 xl:pt-40 w-full lg:w-2/4 md:w-3/5",
                  children: [
                    Object(f.jsx)("div", {
                      className: "flex justify-center mb-10 px-6",
                      children: Object(f.jsx)("h1", {
                        className: "text-white text-3xl",
                        children: "Sistema de Gesti\xf3n Ferroviario",
                      }),
                    }),
                    Object(f.jsxs)("form", {
                      onSubmit: L,
                      className: "mt-2 flex flex-col lg:w-1/2 w-full px-6",
                      children: [
                        Object(f.jsx)("label", {
                          className:
                            "block uppercase tracking-wide text-white text-left text-xs font-bold mb-2",
                          htmlFor: "username",
                          children: "Usuario",
                        }),
                        Object(f.jsxs)("div", {
                          className:
                            "flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 shadow-lg",
                          children: [
                            Object(f.jsx)("div", {
                              className:
                                "flex -mr-px justify-center w-15 px-1 bg-gray-300 rounded-l",
                              children: Object(f.jsx)("span", {
                                className:
                                  "flex items-center leading-normal px-2 border-0 text-2xl",
                                children: Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                              }),
                            }),
                            Object(f.jsx)("input", {
                              type: "text",
                              name: "username",
                              id: "username",
                              className:
                                "flex-shrink flex-grow flex-auto leading-normal flex-1 border-0 h-12 px-3 self-center rounded rounded-l-none relative outline-none",
                              placeholder: "Usuario",
                              onChange: z,
                              value: a.username,
                            }),
                          ],
                        }),
                        Object(f.jsx)("label", {
                          className:
                            "block uppercase tracking-wide text-white text-xs font-bold mb-2 text-left",
                          htmlFor: "password",
                          children: "Contrase\xf1a",
                        }),
                        Object(f.jsxs)("div", {
                          className:
                            "flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 shadow-lg",
                          children: [
                            Object(f.jsx)("div", {
                              className:
                                "flex -mr-px justify-center w-15 px-1 bg-gray-300 rounded-l",
                              children: Object(f.jsx)("span", {
                                className:
                                  "flex items-center leading-normal bg-gray-300 px-2 border-0 text-2xl",
                                children: Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  className: "h-5 w-5 text-mainBlue",
                                  children: Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                              }),
                            }),
                            Object(f.jsx)("input", {
                              type: "password",
                              name: "password",
                              id: "password",
                              className:
                                "flex-shrink flex-grow flex-auto leading-normal flex-1 border-0 rounded rounded-l-none h-12 px-3 self-center relative outline-none",
                              placeholder: "***********",
                              onChange: z,
                              value: a.password,
                            }),
                          ],
                        }),
                        Object(f.jsxs)("button", {
                          type: "submit",
                          className:
                            "bg-blue-500 flex items-center justify-center shadow-lg uppercase font-medium py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-lg mt-4 mb-20 transition duration-500 ease-in-out ",
                          children: [
                            "Ingresar",
                            R
                              ? Object(f.jsxs)("svg", {
                                  className:
                                    "animate-spin ml-3 h-5 w-5 text-white",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    Object(f.jsx)("circle", {
                                      className: "opacity-25",
                                      cx: "12",
                                      cy: "12",
                                      r: "10",
                                      stroke: "currentColor",
                                      strokeWidth: "4",
                                    }),
                                    Object(f.jsx)("path", {
                                      className: "opacity-75",
                                      fill: "currentColor",
                                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        v = a.p + "static/media/train_logo.03e807df.svg";
      var g = function () {
          var e = [
              { nombre: "Lecturas", link: "/" },
              { nombre: "Cabinas", link: "/cabinas" },
              { nombre: "Puntos", link: "/puntos" },
              { nombre: "Lista Negra", link: "/listaNegra" },
            ],
            t = Object(l.useState)(!1),
            a = Object(j.a)(t, 2),
            s = a[0],
            n = a[1],
            i = Object(l.useState)(!1),
            o = Object(j.a)(i, 2),
            r = o[0],
            d = o[1],
            b = Object(l.useState)(!1),
            m = Object(j.a)(b, 2),
            u = m[0],
            x = m[1],
            h =
              null !== localStorage.getItem("username")
                ? localStorage.getItem("username")
                : "Usuario";
          Object(l.useEffect)(function () {
            p();
          }, []);
          var p = function () {
            x("/login" !== window.location.pathname);
          };
          return u
            ? Object(f.jsx)("div", {
                className: "p-4",
                children: Object(f.jsxs)("nav", {
                  className: "bg-blue-600 shadow-md xl:rounded rounded-t",
                  children: [
                    Object(f.jsx)("div", {
                      className: "mx-auto px-2 sm:px-6 lg:px-8",
                      children: Object(f.jsxs)("div", {
                        className:
                          "relative flex items-center justify-between h-16",
                        children: [
                          Object(f.jsx)("div", {
                            className:
                              "absolute inset-y-0 left-0 flex items-center sm:hidden",
                            children: Object(f.jsxs)("button", {
                              className:
                                "inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-mainBlueLight focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                              "aria-expanded": "false",
                              onClick: function () {
                                n(!s);
                              },
                              children: [
                                Object(f.jsx)("span", {
                                  className: "sr-only",
                                  children: "Abrir menu",
                                }),
                                s
                                  ? Object(f.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      className: "h-5 w-5",
                                      children: Object(f.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M6 18L18 6M6 6l12 12",
                                      }),
                                    })
                                  : Object(f.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      className: "h-5 w-5",
                                      children: Object(f.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M4 6h16M4 12h16M4 18h16",
                                      }),
                                    }),
                              ],
                            }),
                          }),
                          Object(f.jsxs)("div", {
                            className:
                              "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ",
                            children: [
                              Object(f.jsx)("div", {
                                className: "flex-shrink-0 flex items-center",
                                children: Object(f.jsx)("img", {
                                  src: v,
                                  className: "h-9 text-white",
                                  alt: "frontini logo",
                                }),
                              }),
                              Object(f.jsx)("div", {
                                className:
                                  "hidden sm:block sm:ml-6 flex-wrap content-center",
                                children: Object(f.jsx)("div", {
                                  className: "flex space-x-4 m-main-menu",
                                  children: e.map(function (e) {
                                    return Object(f.jsx)(
                                      c.b,
                                      {
                                        className:
                                          "px-3 py-2 rounded-md font-medium text-white hover:text-white hover:bg-blue-800 transition duration-500 ease-in-out",
                                        to: e.link,
                                        children: e.nombre,
                                      },
                                      e.nombre
                                    );
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(f.jsx)("div", {
                            className:
                              "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                            children: Object(f.jsxs)("div", {
                              className: "ml-3 relative",
                              children: [
                                Object(f.jsx)("div", {
                                  children: Object(f.jsxs)("button", {
                                    type: "button",
                                    onClick: function () {
                                      d(!r);
                                    },
                                    className:
                                      "inline-flex bg-blue-500 justify-center w-full rounded-full shadow-md p-3 bg-mainBlueLight text-sm font-medium text-white focus:outline-none",
                                    id: "options-menu",
                                    "aria-haspopup": "true",
                                    "aria-expanded": "true",
                                    children: [
                                      Object(f.jsx)("span", {
                                        className: "sr-only",
                                        children: "Menu de usuario",
                                      }),
                                      Object(f.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        className: "w-5 h-5 ",
                                        children: Object(f.jsx)("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                Object(f.jsx)("div", {
                                  className: r
                                    ? "transition ease-out duration-100 transform opacity-100 scale-100"
                                    : "transition ease-in duration-75 transform opacity-0 scale-0",
                                  children: Object(f.jsxs)("div", {
                                    className:
                                      "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white",
                                    role: "menu",
                                    "aria-orientation": "vertical",
                                    "aria-labelledby": "user-menu",
                                    children: [
                                      Object(f.jsxs)("p", {
                                        className:
                                          "font-bold text-sm  text-left pl-3 pt-1 pb-1 border border-black border-t-0 border-l-0 border-r-0 border-b-2",
                                        children: [
                                          "Hola,",
                                          " ",
                                          h.charAt(0).toUpperCase() +
                                            h.slice(1),
                                        ],
                                      }),
                                      Object(f.jsxs)("button", {
                                        type: "button",
                                        onClick: function () {
                                          localStorage.removeItem("token"),
                                            localStorage.removeItem("permisos"),
                                            localStorage.setItem(
                                              "alert",
                                              "Sesi\xf3n cerrada exitosamente"
                                            ),
                                            localStorage.setItem(
                                              "alertColor",
                                              "green-500"
                                            ),
                                            (window.location.href = "/login");
                                        },
                                        className:
                                          "block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-start",
                                        role: "menuitem",
                                        children: [
                                          Object(f.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            className: "h-5 w-5 mr-4",
                                            children: Object(f.jsx)("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: "2",
                                              d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
                                            }),
                                          }),
                                          "Desconectar",
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(f.jsx)("div", {
                      className: s ? "block sm:hidden" : "hidden sm:hidden",
                      children: Object(f.jsx)("div", {
                        className: "px-2 pt-2 pb-3 space-y-1",
                        children: e.map(function (e) {
                          return Object(f.jsx)(
                            c.b,
                            {
                              className:
                                "block px-3 py-2 rounded-md font-medium text-white hover:text-white hover:bg-mainBlueLight",
                              to: e.link,
                              children: e.nombre,
                            },
                            e.nombre
                          );
                        }),
                      }),
                    }),
                  ],
                }),
              })
            : Object(f.jsx)("div", {});
        },
        w = a(6),
        O = a.n(w),
        N = Object(l.createContext)();
      var y = function () {
        var e = Object(l.useContext)(N),
          t = e.setMostrarModalAlta,
          a = e.setMostrarModalConfirmacionAlta,
          s = e.datosFormulario,
          n = e.setDatosFormulario,
          i = e.formatFechaISO,
          c = Object(l.useState)(!1),
          o = Object(j.a)(c, 2),
          r = o[0],
          d = o[1],
          b = function (e) {
            var t = Object(u.a)({}, s);
            (t[e.target.name] = e.target.value), n(t);
          };
        return Object(f.jsx)("div", {
          className: "fixed z-10 inset-0 overflow-y-auto",
          children: Object(f.jsxs)("div", {
            className:
              "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
            children: [
              Object(f.jsx)("div", {
                className: "fixed inset-0 transition-opacity",
                "aria-hidden": "true",
                children: Object(f.jsx)("div", {
                  className: "absolute inset-0 bg-gray-500 opacity-75",
                }),
              }),
              Object(f.jsx)("span", {
                className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                "aria-hidden": "true",
                children: "\u200b",
              }),
              Object(f.jsxs)("div", {
                className:
                  "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                children: [
                  Object(f.jsxs)("div", {
                    className:
                      "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                    children: [
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsx)("h1", {
                            className: "font-bold text-2xl text-white",
                            children: "Nueva Cabina",
                          }),
                          Object(f.jsx)("h2", {
                            className: "font-medium text-white mb-3",
                            children: "Formulario de carga",
                          }),
                        ],
                      }),
                      Object(f.jsx)("button", {
                        className: " px-1 h-8 mt-3",
                        onClick: function () {
                          n({
                            codigo_cabina: "",
                            fecha_instalacion: i(),
                            id_config: "",
                            observaciones: "",
                          }),
                            t(!1);
                        },
                        children: Object(f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-6 w-6 text-white",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                            clipRule: "evenodd",
                          }),
                        }),
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    children: [
                      r
                        ? Object(f.jsxs)("div", {
                            className:
                              "flex justify-between p-4 ml-6 mr-6 mt-4 rounded bg-red-400 items-center",
                            children: [
                              Object(f.jsxs)("div", {
                                className: "flex flex-row",
                                children: [
                                  Object(f.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-8 w-8 text-white mt-1 mr-3",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                      clipRule: "evenodd",
                                    }),
                                  }),
                                  Object(f.jsx)("h1", {
                                    className:
                                      "font-bold text-medium text-white mt-2",
                                    children:
                                      "Por favor, complet\xe1 todos los campos requeridos",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("button", {
                                className: "bg-red-400 px-1 h-6 ",
                                onClick: function () {
                                  d(!1);
                                },
                                children: Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5 text-white",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                              }),
                            ],
                          })
                        : null,
                      Object(f.jsxs)("div", {
                        className:
                          "grid grid-cols-1 xl:grid-cols-2 gap-1 p-4 pb-0 ",
                        children: [
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                htmlFor: "nro_movimiento",
                                children: "ID CABINA *",
                              }),
                              Object(f.jsx)("input", {
                                id: "id_config",
                                name: "id_config",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "ID Cabina *",
                                type: "tel",
                                maxLength: "10",
                                value: s.id_config,
                                onChange: function (e) {
                                  return isNaN(e.target.value) ? null : b(e);
                                },
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                htmlFor: "fecha_emision",
                                children: "FECHA DE INSTALACI\xd3N *",
                              }),
                              Object(f.jsx)("input", {
                                id: "fecha_instalacion",
                                name: "fecha_instalacion",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                type: "date",
                                value: s.fecha_instalacion,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                htmlFor: "cod_movimiento",
                                children: "C\xd3DIGO DE CABINA *",
                              }),
                              Object(f.jsx)("input", {
                                id: "codigo_cabina",
                                name: "codigo_cabina",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "C\xf3digo de Cabina *",
                                type: "text",
                                maxLength: "20",
                                value: s.codigo_cabina,
                                onChange: b,
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        className: "pl-6 pr-6 pb-0 mb-0",
                        children: [
                          Object(f.jsx)("label", {
                            className: " font-medium text-white",
                            htmlFor: "fecha_vencimiento",
                            children: "OBSERVACIONES",
                          }),
                          Object(f.jsx)("textarea", {
                            id: "observaciones",
                            name: "observaciones",
                            style: { resize: "none" },
                            className:
                              "rounded mt-1 block w-full h-28 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                            type: "text",
                            placeholder: "Observaciones",
                            value: s.observaciones,
                            onChange: b,
                            maxLength: "400",
                          }),
                        ],
                      }),
                      Object(f.jsx)("div", {
                        className: "bg-blue-600 flex justify-end p-2 pb-4 mr-4",
                        children: Object(f.jsx)("button", {
                          className:
                            "bg-green-500 text-white px-10 py-2 rounded font-medium",
                          onClick: function () {
                            return (function () {
                              for (
                                var e = 0, l = Object.entries(s);
                                e < l.length;
                                e++
                              ) {
                                var n = Object(j.a)(l[e], 2),
                                  i = n[0],
                                  c = n[1];
                                if ("observaciones" !== i && "" === c)
                                  return d(!0), !1;
                              }
                              return t(!1), a(!0), !0;
                            })();
                          },
                          children: "Validar",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var C = function () {
        var e = Object(l.useContext)(N),
          t = e.datosFormulario,
          a = e.setDatosFormulario,
          s = e.setMostrarModalConfirmacionAlta,
          n = e.formatDate,
          i = e.altaCabina,
          c = e.loading,
          o = e.formatFechaISO;
        return Object(f.jsx)("div", {
          className: "fixed z-10 inset-0 overflow-y-auto py-10",
          children: Object(f.jsxs)("div", {
            className:
              "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
            children: [
              Object(f.jsx)("div", {
                className: "fixed inset-0 transition-opacity",
                "aria-hidden": "true",
                children: Object(f.jsx)("div", {
                  className: "absolute inset-0 bg-gray-500 opacity-75",
                }),
              }),
              Object(f.jsx)("span", {
                className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                "aria-hidden": "true",
                children: "\u200b",
              }),
              Object(f.jsxs)("div", {
                className:
                  "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                children: [
                  Object(f.jsx)("div", {
                    className:
                      "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                    children: Object(f.jsxs)("div", {
                      children: [
                        Object(f.jsx)("h1", {
                          className: "font-bold text-2xl text-white",
                          children: "Nueva Cabina",
                        }),
                        Object(f.jsx)("h2", {
                          className: "font-medium text-white mb-3",
                          children: "Confirmaci\xf3n de carga",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsx)("div", {
                    className: "bg-blue-600",
                    children: Object(f.jsxs)("div", {
                      className: "flex flex-row items-center p-4",
                      children: [
                        Object(f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-7 w-7 text-white",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                            clipRule: "evenodd",
                          }),
                        }),
                        Object(f.jsx)("p", {
                          className: "font-medium text-xl text-white ml-2",
                          children:
                            "Atenci\xf3n, vas a dar de alta la siguiente cabina",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsxs)("div", {
                    className: "bg-gray-100 rounded grid-cols-1 p-4 m-4 mt-0",
                    children: [
                      Object(f.jsxs)("div", {
                        className:
                          "flex flex-row items-center mb-1 mt-1 bg-gray-300 rounded",
                        children: [
                          Object(f.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: [
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "font-bold ml-1 subpixel-antialiased",
                            children: "ID de Cabina",
                          }),
                        ],
                      }),
                      Object(f.jsx)("p", {
                        className: "ml-7 font-medium mb-2 text-gray-600",
                        children: t.id_config,
                      }),
                      Object(f.jsxs)("div", {
                        className:
                          "flex flex-row items-center bg-gray-300 mb-1  rounded ",
                        children: [
                          Object(f.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: [
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "font-bold ml-1 subpixel-antialiased",
                            children: "C\xf3digo de Cabina",
                          }),
                        ],
                      }),
                      Object(f.jsx)("p", {
                        className: "ml-7 font-medium mb-2 text-gray-600",
                        children: t.codigo_cabina,
                      }),
                      Object(f.jsxs)("div", {
                        className:
                          "flex flex-row items-center bg-gray-300 mb-1 rounded",
                        children: [
                          Object(f.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: [
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "font-bold ml-1 subpixel-antialiased",
                            children: "Fecha de Instalaci\xf3n",
                          }),
                        ],
                      }),
                      Object(f.jsx)("p", {
                        className: "ml-7 font-medium mb-2 text-gray-600",
                        children: n(t.fecha_instalacion),
                      }),
                      Object(f.jsxs)("div", {
                        className:
                          "flex flex-row items-center bg-gray-300 mb-1 rounded",
                        children: [
                          Object(f.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: [
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "font-bold ml-1 subpixel-antialiased",
                            children: "Observaciones",
                          }),
                        ],
                      }),
                      Object(f.jsx)("p", {
                        className: "ml-7 font-medium  text-gray-600",
                        children: t.observaciones,
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex justify-between p-4",
                    children: [
                      Object(f.jsx)("button", {
                        className:
                          "bg-red-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          a({
                            codigo_cabina: "",
                            fecha_instalacion: o(),
                            id_config: "",
                            observaciones: "",
                          }),
                            s(!1);
                        },
                        children: "Cancelar",
                      }),
                      Object(f.jsx)("button", {
                        className: c
                          ? "bg-green-500 text-white px-16 py-2 rounded font-medium"
                          : "bg-green-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          return i();
                        },
                        children: c
                          ? Object(f.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5 animate-spin",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                clipRule: "evenodd",
                              }),
                            })
                          : "Confirmar",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var R = function () {
        var e = Object(l.useContext)(N),
          t = e.datosFormulario,
          a = e.setDatosFormulario,
          s = e.setMostrarModalEliminar,
          n = e.bajaCabina,
          i = e.loading;
        return Object(f.jsx)("div", {
          className: "fixed z-10 inset-0 overflow-y-auto py-10",
          children: Object(f.jsxs)("div", {
            className:
              "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
            children: [
              Object(f.jsx)("div", {
                className: "fixed inset-0 transition-opacity",
                "aria-hidden": "true",
                children: Object(f.jsx)("div", {
                  className: "absolute inset-0 bg-gray-500 opacity-75",
                }),
              }),
              Object(f.jsx)("span", {
                className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                "aria-hidden": "true",
                children: "\u200b",
              }),
              Object(f.jsxs)("div", {
                className:
                  "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                children: [
                  Object(f.jsx)("div", {
                    className:
                      "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                    children: Object(f.jsxs)("div", {
                      children: [
                        Object(f.jsx)("h1", {
                          className: "font-bold text-2xl text-white",
                          children: "Cabina",
                        }),
                        Object(f.jsx)("h2", {
                          className: "font-medium text-white mb-3",
                          children: "Confirmaci\xf3n de eliminaci\xf3n",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsx)("div", {
                    className: "bg-blue-600",
                    children: Object(f.jsxs)("div", {
                      className:
                        "flex flex-row items-center p-4 bg-red-400 p-4 m-4 rounded",
                      children: [
                        Object(f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-7 w-7 text-white mt-1",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                            clipRule: "evenodd",
                          }),
                        }),
                        Object(f.jsx)("p", {
                          className: "font-medium text-xl text-white ml-2",
                          children:
                            "\xa1Atenci\xf3n! Vas a eliminar la siguiente cabina",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsxs)("div", {
                    className: "bg-gray-100 rounded grid-cols-1 p-4 m-4 mt-0",
                    children: [
                      Object(f.jsxs)("div", {
                        className:
                          "flex flex-row items-center mb-1 mt-1 bg-gray-300 rounded",
                        children: [
                          Object(f.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: [
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "font-bold ml-1 subpixel-antialiased",
                            children: "ID de Cabina",
                          }),
                        ],
                      }),
                      Object(f.jsx)("p", {
                        className: "ml-7 font-medium mb-2 text-gray-600",
                        children: t.id_config,
                      }),
                      Object(f.jsxs)("div", {
                        className:
                          "flex flex-row items-center bg-gray-300 mb-1  rounded ",
                        children: [
                          Object(f.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: [
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "font-bold ml-1 subpixel-antialiased",
                            children: "C\xf3digo de Cabina",
                          }),
                        ],
                      }),
                      Object(f.jsx)("p", {
                        className: "ml-7 font-medium mb-2 text-gray-600",
                        children: t.codigo_cabina,
                      }),
                      Object(f.jsxs)("div", {
                        className:
                          "flex flex-row items-center bg-gray-300 mb-1 rounded",
                        children: [
                          Object(f.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: [
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "font-bold ml-1 subpixel-antialiased",
                            children: "Fecha de Instalaci\xf3n",
                          }),
                        ],
                      }),
                      Object(f.jsx)("p", {
                        className: "ml-7 font-medium mb-2 text-gray-600",
                        children: t.fecha_instalacion,
                      }),
                      Object(f.jsxs)("div", {
                        className:
                          "flex flex-row items-center bg-gray-300 mb-1 rounded",
                        children: [
                          Object(f.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: [
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                              Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                clipRule: "evenodd",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "font-bold ml-1 subpixel-antialiased",
                            children: "Observaciones",
                          }),
                        ],
                      }),
                      Object(f.jsx)("p", {
                        className: "ml-7 font-medium  text-gray-600",
                        children: t.observaciones,
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex justify-between p-4",
                    children: [
                      Object(f.jsx)("button", {
                        className:
                          "bg-red-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          a({
                            codigo_cabina: "",
                            fecha_instalacion: "",
                            id_config: "",
                            observaciones: "",
                          }),
                            s(!1);
                        },
                        children: "Cancelar",
                      }),
                      Object(f.jsx)("button", {
                        className: i
                          ? "bg-green-500 text-white px-16 py-2 rounded font-medium"
                          : "bg-green-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          return n();
                        },
                        children: i
                          ? Object(f.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5 animate-spin",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                clipRule: "evenodd",
                              }),
                            })
                          : "Confirmar",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var M = function () {
        var e = Object(l.useContext)(N),
          t = e.setMostrarModalEditar,
          a = e.setMostrarModalConfirmacionEditar,
          s = e.datosFormulario,
          n = e.setDatosFormulario,
          i = e.formatFechaISO,
          c = Object(l.useState)(!1),
          o = Object(j.a)(c, 2),
          r = o[0],
          d = o[1],
          b = function (e) {
            var t = Object(u.a)({}, s);
            (t[e.target.name] = e.target.value), n(t);
          };
        return Object(f.jsx)("div", {
          className: "fixed z-10 inset-0 overflow-y-auto py-10",
          children: Object(f.jsxs)("div", {
            className:
              "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
            children: [
              Object(f.jsx)("div", {
                className: "fixed inset-0 transition-opacity",
                "aria-hidden": "true",
                children: Object(f.jsx)("div", {
                  className: "absolute inset-0 bg-gray-500 opacity-75",
                }),
              }),
              Object(f.jsx)("span", {
                className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                "aria-hidden": "true",
                children: "\u200b",
              }),
              Object(f.jsxs)("div", {
                className:
                  "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                children: [
                  Object(f.jsxs)("div", {
                    className:
                      "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                    children: [
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsx)("h1", {
                            className: "font-bold text-2xl text-white",
                            children: "Cabina",
                          }),
                          Object(f.jsx)("h2", {
                            className: "font-medium text-white mb-3",
                            children: "Formulario de edici\xf3n",
                          }),
                        ],
                      }),
                      Object(f.jsx)("button", {
                        className: " px-1 h-8 mt-3",
                        onClick: function () {
                          n({
                            codigo_cabina: "",
                            fecha_instalacion: i(),
                            id_config: "",
                            observaciones: "",
                          }),
                            t(!1);
                        },
                        children: Object(f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-6 w-6 text-white",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                            clipRule: "evenodd",
                          }),
                        }),
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    children: [
                      r
                        ? Object(f.jsxs)("div", {
                            className:
                              "flex justify-between p-4  ml-6 mr-6 mt-4 rounded bg-red-400 items-center",
                            children: [
                              Object(f.jsxs)("div", {
                                className: "flex flex-row",
                                children: [
                                  Object(f.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-8 w-8 text-white mt-1 mr-3",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                      clipRule: "evenodd",
                                    }),
                                  }),
                                  Object(f.jsx)("h1", {
                                    className:
                                      "font-bold text-medium text-white mt-2",
                                    children:
                                      "Por favor, complet\xe1 todos los campos requeridos",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("button", {
                                className: "bg-red-400 px-1 h-6 ",
                                onClick: function () {
                                  d(!1);
                                },
                                children: Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5 text-white",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                              }),
                            ],
                          })
                        : null,
                      Object(f.jsxs)("div", {
                        className:
                          "grid grid-cols-1 xl:grid-cols-2 gap-1 p-4 pb-0 ",
                        children: [
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                htmlFor: "nro_movimiento",
                                children: "ID CABINA *",
                              }),
                              Object(f.jsx)("input", {
                                id: "id_config",
                                name: "id_config",
                                className:
                                  "rounded mt-1 block w-full bg-gray-300  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "ID Cabina *",
                                type: "tel",
                                maxLength: "10",
                                value: s.id_config,
                                onChange: function (e) {
                                  return isNaN(e.target.value) ? null : b(e);
                                },
                                disabled: !0,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                htmlFor: "fecha_emision",
                                children: "FECHA DE INSTALACI\xd3N *",
                              }),
                              Object(f.jsx)("input", {
                                id: "fecha_instalacion",
                                name: "fecha_instalacion",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                type: "date",
                                value: s.fecha_instalacion,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                htmlFor: "cod_movimiento",
                                children: "C\xd3DIGO DE CABINA *",
                              }),
                              Object(f.jsx)("input", {
                                id: "codigo_cabina",
                                name: "codigo_cabina",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "C\xf3digo de Cabina *",
                                type: "text",
                                maxLength: "20",
                                value: s.codigo_cabina,
                                onChange: b,
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        className: "pl-6 pr-6 pb-0 mb-0",
                        children: [
                          Object(f.jsx)("label", {
                            className: " font-medium text-white",
                            htmlFor: "fecha_vencimiento",
                            children: "OBSERVACIONES",
                          }),
                          Object(f.jsx)("textarea", {
                            id: "observaciones",
                            name: "observaciones",
                            style: { resize: "none" },
                            className:
                              "rounded mt-1 block w-full h-28 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                            type: "text",
                            maxLength: "400",
                            placeholder: "Observaciones",
                            value: s.observaciones,
                            onChange: b,
                          }),
                        ],
                      }),
                      Object(f.jsx)("div", {
                        className: "bg-blue-600 flex justify-end p-2 pb-4 mr-4",
                        children: Object(f.jsx)("button", {
                          className:
                            "bg-green-500 text-white px-10 py-2 rounded font-medium",
                          onClick: function () {
                            return (function () {
                              for (
                                var e = 0, l = Object.entries(s);
                                e < l.length;
                                e++
                              ) {
                                var n = Object(j.a)(l[e], 2),
                                  i = n[0],
                                  c = n[1];
                                if ("observaciones" !== i && "" === c)
                                  return d(!0), !1;
                              }
                              return t(!1), a(!0), !0;
                            })();
                          },
                          children: "Validar",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var z = function () {
          var e = Object(l.useContext)(N),
            t = e.datosFormulario,
            a = e.setDatosFormulario,
            s = e.setMostrarModalConfirmacionEditar,
            n = e.formatDate,
            i = e.editarCabina,
            c = e.loading,
            o = e.formatFechaISO;
          return Object(f.jsx)("div", {
            className: "fixed z-10 inset-0 overflow-y-auto py-10",
            children: Object(f.jsxs)("div", {
              className:
                "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
              children: [
                Object(f.jsx)("div", {
                  className: "fixed inset-0 transition-opacity",
                  "aria-hidden": "true",
                  children: Object(f.jsx)("div", {
                    className: "absolute inset-0 bg-gray-500 opacity-75",
                  }),
                }),
                Object(f.jsx)("span", {
                  className:
                    "hidden sm:inline-block sm:align-middle sm:h-screen",
                  "aria-hidden": "true",
                  children: "\u200b",
                }),
                Object(f.jsxs)("div", {
                  className:
                    "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "modal-headline",
                  children: [
                    Object(f.jsx)("div", {
                      className:
                        "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                      children: Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsx)("h1", {
                            className: "font-bold text-2xl text-white",
                            children: "Cabina",
                          }),
                          Object(f.jsx)("h2", {
                            className: "font-medium text-white mb-3",
                            children: "Confirmaci\xf3n de edici\xf3n",
                          }),
                        ],
                      }),
                    }),
                    Object(f.jsx)("div", {
                      className: "bg-blue-600",
                      children: Object(f.jsxs)("div", {
                        className: "flex flex-row items-center p-4",
                        children: [
                          Object(f.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-7 w-7 text-white",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: Object(f.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                              clipRule: "evenodd",
                            }),
                          }),
                          Object(f.jsx)("p", {
                            className: "font-medium text-xl text-white ml-2",
                            children:
                              "Atenci\xf3n, vas a editar la cabina con los siguientes datos",
                          }),
                        ],
                      }),
                    }),
                    Object(f.jsxs)("div", {
                      className: "bg-gray-100 rounded grid-cols-1 p-4 m-4 mt-0",
                      children: [
                        Object(f.jsxs)("div", {
                          className:
                            "flex flex-row items-center mb-1 mt-1 bg-gray-300 rounded",
                          children: [
                            Object(f.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: [
                                Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                  clipRule: "evenodd",
                                }),
                                Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                  clipRule: "evenodd",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "font-bold ml-1 subpixel-antialiased",
                              children: "ID de Cabina",
                            }),
                          ],
                        }),
                        Object(f.jsx)("p", {
                          className: "ml-7 font-medium mb-2 text-gray-600",
                          children: t.id_config,
                        }),
                        Object(f.jsxs)("div", {
                          className:
                            "flex flex-row items-center bg-gray-300 mb-1  rounded ",
                          children: [
                            Object(f.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: [
                                Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                  clipRule: "evenodd",
                                }),
                                Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                  clipRule: "evenodd",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "font-bold ml-1 subpixel-antialiased",
                              children: "C\xf3digo de Cabina",
                            }),
                          ],
                        }),
                        Object(f.jsx)("p", {
                          className: "ml-7 font-medium mb-2 text-gray-600",
                          children: t.codigo_cabina,
                        }),
                        Object(f.jsxs)("div", {
                          className:
                            "flex flex-row items-center bg-gray-300 mb-1 rounded",
                          children: [
                            Object(f.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: [
                                Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                  clipRule: "evenodd",
                                }),
                                Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                  clipRule: "evenodd",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "font-bold ml-1 subpixel-antialiased",
                              children: "Fecha de Instalaci\xf3n",
                            }),
                          ],
                        }),
                        Object(f.jsx)("p", {
                          className: "ml-7 font-medium mb-2 text-gray-600",
                          children: n(t.fecha_instalacion),
                        }),
                        Object(f.jsxs)("div", {
                          className:
                            "flex flex-row items-center bg-gray-300 mb-1 rounded",
                          children: [
                            Object(f.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: [
                                Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                  clipRule: "evenodd",
                                }),
                                Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                  clipRule: "evenodd",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "font-bold ml-1 subpixel-antialiased",
                              children: "Observaciones",
                            }),
                          ],
                        }),
                        Object(f.jsx)("p", {
                          className: "ml-7 font-medium  text-gray-600",
                          children: t.observaciones,
                        }),
                      ],
                    }),
                    Object(f.jsxs)("div", {
                      className: "flex justify-between p-4",
                      children: [
                        Object(f.jsx)("button", {
                          className:
                            "bg-red-500 text-white px-10 py-2 rounded font-medium",
                          onClick: function () {
                            a({
                              codigo_cabina: "",
                              fecha_instalacion: o(),
                              id_config: "",
                              observaciones: "",
                            }),
                              s(!1);
                          },
                          children: "Cancelar",
                        }),
                        Object(f.jsx)("button", {
                          className: c
                            ? "bg-green-500 text-white px-16 py-2 rounded font-medium"
                            : "bg-green-500 text-white px-10 py-2 rounded font-medium",
                          onClick: function () {
                            return i();
                          },
                          children: c
                            ? Object(f.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5 animate-spin",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                  clipRule: "evenodd",
                                }),
                              })
                            : "Confirmar",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        L = a(15),
        _ = a(42);
      var S = function (e) {
          var t = e.modalTitle,
            a = e.modalSubtitle,
            s = e.uploadEndpoint,
            n = e.exampleFile,
            i = e.exampleFileName,
            c = e.showModalFunction,
            o = Object(l.useState)(!1),
            r = Object(j.a)(o, 2),
            m = r[0],
            u = r[1],
            x = Object(l.useState)(["Esperando carga de archivo..."]),
            p = Object(j.a)(x, 2),
            v = p[0],
            g = p[1],
            w = Object(l.useState)(null),
            O = Object(j.a)(w, 2),
            N = O[0],
            y = O[1],
            C = Object(l.useState)(!1),
            R = Object(j.a)(C, 2),
            M = R[0],
            z = R[1],
            S = Object(l.useRef)(null);
          Object(l.useEffect)(function () {}, [v]);
          var k = (function () {
            var e = Object(b.a)(
              d.a.mark(function e() {
                var t, a;
                return d.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          z(!0),
                          g(function (e) {
                            return [].concat(Object(L.a)(e), [
                              "Cargando archivo en la base de datos...",
                            ]);
                          }),
                          (t = new FormData()).append("file", N),
                          (a = {
                            headers: {
                              Authorization:
                                "Bearer " + localStorage.getItem("token"),
                            },
                          }),
                          (e.next = 7),
                          h.a
                            .post(
                              ""
                                .concat("http://190.12.101.198:5000/")
                                .concat(s),
                              t,
                              a
                            )
                            .then(function (e) {
                              if (e.data.exito)
                                g(function (e) {
                                  return [].concat(Object(L.a)(e), [
                                    "Archivo '".concat(
                                      N.name,
                                      "' cargado exitosamente. Recargue la p\xe1gina para visualizar los nuevos datos"
                                    ),
                                  ]);
                                });
                              else {
                                var t = e.data.message.split("|");
                                g(function (e) {
                                  return [].concat(Object(L.a)(e), [
                                    "Error al cargar el archivo '".concat(
                                      N.name,
                                      "'."
                                    ),
                                    "Detalle del error:",
                                    t[0],
                                    t[1],
                                  ]);
                                });
                              }
                              z(!1);
                            })
                            .catch(function (e) {
                              void 0 !== e.response
                                ? (401 !== e.response.status &&
                                    422 !== e.response.status) ||
                                  (localStorage.setItem("token", ""),
                                  localStorage.setItem(
                                    "alert",
                                    "La sesi\xf3n expir\xf3"
                                  ),
                                  localStorage.setItem(
                                    "alertColor",
                                    "yellow-500"
                                  ),
                                  z(!1),
                                  console.log(e),
                                  (window.location.href = "/login"))
                                : (g(function (t) {
                                    return [].concat(Object(L.a)(t), [
                                      "Error al cargar el archivo '"
                                        .concat(N.name, "'. Detalle: ")
                                        .concat(e),
                                    ]);
                                  }),
                                  z(!1),
                                  console.log(e));
                            })
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return Object(f.jsx)("div", {
            className: "fixed z-10 inset-0 overflow-y-auto",
            children: Object(f.jsxs)("div", {
              className:
                "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
              children: [
                Object(f.jsx)("div", {
                  className: "fixed inset-0 transition-opacity",
                  "aria-hidden": "true",
                  children: Object(f.jsx)("div", {
                    className: "absolute inset-0 bg-gray-500 opacity-75",
                  }),
                }),
                Object(f.jsx)("span", {
                  className:
                    "hidden sm:inline-block sm:align-middle sm:h-screen",
                  "aria-hidden": "true",
                  children: "\u200b",
                }),
                Object(f.jsxs)("div", {
                  className:
                    "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "modal-headline",
                  children: [
                    Object(f.jsxs)("div", {
                      className:
                        "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                      children: [
                        Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsx)("h1", {
                              className: "font-bold text-2xl text-white",
                              children: t,
                            }),
                            Object(f.jsx)("h2", {
                              className: "font-medium text-white mb-3",
                              children: a,
                            }),
                          ],
                        }),
                        Object(f.jsx)("button", {
                          className: " px-1 h-8 mt-3",
                          onClick: function () {
                            return c(!1);
                          },
                          children: Object(f.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6 text-white",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: Object(f.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                              clipRule: "evenodd",
                            }),
                          }),
                        }),
                      ],
                    }),
                    Object(f.jsxs)("div", {
                      children: [
                        m
                          ? Object(f.jsxs)("div", {
                              className:
                                "flex justify-between p-4 ml-6 mr-6 mt-4 rounded bg-red-400 items-center",
                              children: [
                                Object(f.jsxs)("div", {
                                  className: "flex flex-row",
                                  children: [
                                    Object(f.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: "h-8 w-8 text-white mt-1 mr-3",
                                      viewBox: "0 0 20 20",
                                      fill: "currentColor",
                                      children: Object(f.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                        clipRule: "evenodd",
                                      }),
                                    }),
                                    Object(f.jsx)("h1", {
                                      className:
                                        "font-bold text-medium text-white mt-2",
                                      children:
                                        "Por favor, complet\xe1 todos los campos requeridos",
                                    }),
                                  ],
                                }),
                                Object(f.jsx)("button", {
                                  className: "bg-red-400 px-1 h-6 ",
                                  onClick: function () {
                                    u(!1);
                                  },
                                  children: Object(f.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5 text-white",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                      clipRule: "evenodd",
                                    }),
                                  }),
                                }),
                              ],
                            })
                          : null,
                        Object(f.jsxs)("div", {
                          className:
                            "flex flex-col justify-center justify-items-center",
                          children: [
                            Object(f.jsxs)("ol", {
                              className:
                                "pt-2 pb-2 ml-8 text-white font-medium list-decimal",
                              children: [
                                Object(f.jsx)("li", {
                                  children: "Descarg\xe1 el archivo plantilla",
                                }),
                                Object(f.jsx)("li", {
                                  children:
                                    "Complet\xe1 el archivo con los datos",
                                }),
                                Object(f.jsx)("li", {
                                  children:
                                    "Hac\xe9 click en 'Cargar Archivo' y subi el archivo completo",
                                }),
                                Object(f.jsx)("li", {
                                  children:
                                    "Confirm\xe1 la subida haciendo click en 'Confirmar Subida'",
                                }),
                              ],
                            }),
                            Object(f.jsx)("div", {
                              className:
                                "bg-blue-600 flex justify-center p-2 mr-4",
                              children: Object(f.jsxs)("button", {
                                className:
                                  "bg-yellow-500 text-white px-4 w-72 py-2 rounded font-medium flex flex-row gap-2",
                                onClick: function () {
                                  return Object(_.saveAs)(n, i);
                                },
                                disabled: M,
                                children: [
                                  Object(f.jsx)("svg", {
                                    className: "h-6 w-6",
                                    viewBox: "0 0 24 24",
                                    children: Object(f.jsx)("path", {
                                      fill: "currentColor",
                                      d: "M12 15.575q-.2 0-.375-.063q-.175-.062-.325-.212l-3.6-3.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.712-.288q.438-.012.713.263L11 12.15V5q0-.425.288-.713Q11.575 4 12 4t.713.287Q13 4.575 13 5v7.15l1.875-1.875q.275-.275.713-.263q.437.013.712.288q.275.275.275.7q0 .425-.275.7l-3.6 3.6q-.15.15-.325.212q-.175.063-.375.063ZM6 20q-.825 0-1.412-.587Q4 18.825 4 18v-2q0-.425.287-.713Q4.575 15 5 15t.713.287Q6 15.575 6 16v2h12v-2q0-.425.288-.713Q18.575 15 19 15t.712.287Q20 15.575 20 16v2q0 .825-.587 1.413Q18.825 20 18 20Z",
                                    }),
                                  }),
                                  Object(f.jsx)("p", {
                                    children: "Descargar Archivo Plantilla",
                                  }),
                                ],
                              }),
                            }),
                            Object(f.jsx)("input", {
                              type: "file",
                              id: "file",
                              ref: S,
                              style: { display: "none" },
                              accept:
                                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                              onChange: function (e) {
                                y(e.target.files[0]),
                                  g(function (t) {
                                    return [].concat(Object(L.a)(t), [
                                      "Archivo '".concat(
                                        e.target.files[0].name,
                                        "' cargado exitosamente"
                                      ),
                                    ]);
                                  });
                              },
                            }),
                            Object(f.jsx)("div", {
                              className:
                                "bg-blue-600 flex justify-center p-2 mr-4",
                              children: Object(f.jsxs)("button", {
                                className:
                                  "bg-indigo-700 text-white px-4 w-72 py-2 rounded font-medium flex flex-row gap-2 justify-center",
                                onClick: function () {
                                  S.current.click();
                                },
                                disabled: M,
                                children: [
                                  Object(f.jsx)("svg", {
                                    className: "w-6 h-6",
                                    viewBox: "0 0 24 24",
                                    children: Object(f.jsx)("path", {
                                      fill: "currentColor",
                                      d: "M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm5-4V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16Z",
                                    }),
                                  }),
                                  Object(f.jsx)("p", {
                                    children: "Cargar Archivo",
                                  }),
                                ],
                              }),
                            }),
                            Object(f.jsx)("code", {
                              className:
                                "bg-gray-200 h-52 mx-8 rounded my-4 px-2 py-2 text-sm flex flex-col gap-1 overflow-y-scroll overflow-scroll",
                              children: v.map(function (e) {
                                return Object(f.jsx)("p", { children: e });
                              }),
                            }),
                            Object(f.jsx)("div", {
                              className:
                                "bg-blue-600 flex justify-center p-2 mr-4",
                              children: Object(f.jsxs)("button", {
                                className: "bg-"
                                  .concat(
                                    N ? "green" : "gray",
                                    "-500 text-white px-4 w-72 py-2 rounded font-medium flex flex-row gap-2 justify-center "
                                  )
                                  .concat(
                                    N ? "cursor-pointer" : "cursor-not-allowed"
                                  ),
                                disabled: !N || M,
                                onClick: k,
                                children: [
                                  Object(f.jsx)("svg", {
                                    className: "w-6 h-6",
                                    viewBox: "0 0 24 24",
                                    children: Object(f.jsx)("path", {
                                      fill: "currentColor",
                                      d: "M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm5-4V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16Z",
                                    }),
                                  }),
                                  Object(f.jsx)("p", {
                                    children: "Confirmar Subida",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        k = a.p + "static/media/Carga_Cabinas.1ee22bb8.xlsx";
      var I = function () {
          var e = Object(l.useContext)(N),
            t = e.mostrarModalAlta,
            a = e.setMostrarModalAlta,
            n = e.mostrarModalConfirmacionAlta,
            i = e.mostrarModalConfirmacionEditar,
            c = e.mostrarModalCargaMasiva,
            o = e.setMostrarModalCargaMasiva,
            r = e.getCabinas,
            d = e.loadingCabinas,
            b = e.cabinas,
            m = e.mostrarModalEliminar,
            x = e.setMostrarModalEliminar,
            h = e.setDatosFormulario,
            p = e.mostrarModalEditar,
            v = e.setMostrarModalEditar,
            g = e.buscarCabina,
            L = e.datosFiltros,
            _ = e.setDatosFiltros,
            I = e.permisos,
            B = Object(l.useState)(""),
            P = Object(j.a)(B, 2),
            A = P[0],
            D = P[1];
          Object(l.useEffect)(
            function () {
              r(L);
            },
            [L.pagina, L.por_pagina, L.sort_by, L.sort_order]
          ),
            Object(l.useEffect)(function () {}, [b]);
          var H = {
              headRow: {
                style: {
                  borderTopStyle: "solid",
                  borderTopWidth: "1px",
                  borderTopColor: w.defaultThemes.default.divider.default,
                },
              },
              headCells: {
                style: {
                  "&:not(:last-of-type)": {
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderRightColor: w.defaultThemes.default.divider.default,
                    fontSize: 16,
                    fontWeight: 700,
                  },
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderRightColor: w.defaultThemes.default.divider.default,
                  fontSize: 16,
                  fontWeight: 700,
                },
              },
              cells: {
                style: {
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderRightColor: w.defaultThemes.default.divider.default,
                },
              },
            },
            F = s.a.useMemo(function () {
              return [
                {
                  name: "ID Cabina",
                  selector: "id_config",
                  sortable: !0,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.id_config,
                      }),
                    });
                  },
                },
                {
                  name: "C\xf3digo Cabina",
                  selector: "codigo_cabina",
                  sortable: !0,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.codigo_cabina,
                      }),
                    });
                  },
                },
                {
                  name: "Fecha Instalaci\xf3n",
                  selector: "fecha_instalacion",
                  sortable: !0,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.fecha_instalacion,
                      }),
                    });
                  },
                },
                {
                  name: "Observaciones",
                  selector: "observaciones",
                  sortable: !1,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.observaciones,
                      }),
                    });
                  },
                },
                {
                  name: "Acciones",
                  ignoreRowClick: !0,
                  right: !1,
                  maxWidth: "100px",
                  omit: "admin" !== I,
                  cell: function (e) {
                    return Object(f.jsxs)("div", {
                      className: "flex flex-row items-center 2xl:ml-0.5",
                      children: [
                        Object(f.jsx)("button", {
                          className:
                            "rounded p-1 font-medium bg-purple-800 text-white mr-2 ",
                          onClick: function () {
                            var t = e.fecha_instalacion
                              .split("/")
                              .reverse()
                              .join("-");
                            h({
                              codigo_cabina: e.codigo_cabina,
                              fecha_instalacion: t,
                              id_config: e.id_config,
                              observaciones: e.observaciones,
                            }),
                              v(!0);
                          },
                          id: e.id_config,
                          children: Object(f.jsx)("div", {
                            className: "flex flex-row items-center",
                            children: Object(f.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: [
                                Object(f.jsx)("path", {
                                  d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z",
                                }),
                                Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
                                  clipRule: "evenodd",
                                }),
                              ],
                            }),
                          }),
                        }),
                        Object(f.jsx)("button", {
                          className:
                            "rounded  p-1 font-medium bg-red-700 text-white",
                          onClick: function () {
                            h(e), x(!0);
                          },
                          id: e.id_config,
                          children: Object(f.jsx)("div", {
                            className: "flex flex-row items-center",
                            children: Object(f.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",
                                clipRule: "evenodd",
                              }),
                            }),
                          }),
                        }),
                      ],
                    });
                  },
                },
              ];
            }, []);
          return Object(f.jsxs)("div", {
            className: "p-4 m-4 bg-blue-600 shadow-lg text-left mb-auto",
            children: [
              Object(f.jsxs)("div", {
                className: "flex flex-row justify-between",
                children: [
                  Object(f.jsxs)("div", {
                    className: "flex flex-row",
                    children: [
                      Object(f.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-10 w-10 mt-4 text-white",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: [
                          Object(f.jsx)("path", {
                            d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z",
                          }),
                          Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
                            clipRule: "evenodd",
                          }),
                        ],
                      }),
                      Object(f.jsx)("h1", {
                        className: "text-white text-3xl mb-4 mt-5 font-medium",
                        children: "Listado de Cabinas",
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex flex-row",
                    children: [
                      "admin" === I
                        ? Object(f.jsxs)("div", {
                            className:
                              "border border-white border-r-2 border-b-0 border-t-0 border-l-0",
                            children: [
                              Object(f.jsx)("button", {
                                className:
                                  "mb-4 mr-2 mt-3.5 px-4 py-2 bg-green-500 text-white rounded-md font-medium",
                                onClick: function () {
                                  return a(!0);
                                },
                                children: Object(f.jsxs)("div", {
                                  className: "flex flex-row items-center",
                                  children: [
                                    Object(f.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: "h-5 w-5 ",
                                      viewBox: "0 0 20 20",
                                      fill: "currentColor",
                                      children: Object(f.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
                                        clipRule: "evenodd",
                                      }),
                                    }),
                                    Object(f.jsx)("p", {
                                      className: "ml-2",
                                      children: "Nueva Cabina",
                                    }),
                                  ],
                                }),
                              }),
                              Object(f.jsx)("button", {
                                className:
                                  "mb-4 mr-2 mt-3.5 px-4 py-2 bg-green-500 text-white rounded-md font-medium",
                                onClick: function () {
                                  return o(!0);
                                },
                                children: Object(f.jsxs)("div", {
                                  className: "flex flex-row items-center",
                                  children: [
                                    Object(f.jsx)("svg", {
                                      className: "w-5",
                                      viewBox: "0 0 24 24",
                                      children: Object(f.jsx)("path", {
                                        fill: "currentColor",
                                        d: "M21.17 3.25q.33 0 .59.25q.24.24.24.58v15.84q0 .34-.24.58q-.26.25-.59.25H7.83q-.33 0-.59-.25q-.24-.24-.24-.58V17H2.83q-.33 0-.59-.24Q2 16.5 2 16.17V7.83q0-.33.24-.59Q2.5 7 2.83 7H7V4.08q0-.34.24-.58q.26-.25.59-.25M7 13.06l1.18 2.22h1.79L8 12.06l1.93-3.17H8.22L7.13 10.9l-.04.06l-.03.07q-.26-.53-.56-1.07q-.25-.53-.53-1.07H4.16l1.89 3.19L4 15.28h1.78m8.1 4.22V17H8.25v2.5m5.63-3.75v-3.12H12v3.12m1.88-4.37V8.25H12v3.13M13.88 7V4.5H8.25V7m12.5 12.5V17h-5.62v2.5m5.62-3.75v-3.12h-5.62v3.12m5.62-4.37V8.25h-5.62v3.13M20.75 7V4.5h-5.62V7Z",
                                      }),
                                    }),
                                    Object(f.jsx)("p", {
                                      className: "ml-2",
                                      children: "Carga Masiva",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          })
                        : null,
                      Object(f.jsxs)("div", {
                        className: "flex flex-row",
                        children: [
                          Object(f.jsx)("input", {
                            className: "rounded px-4 text-left ml-2 mt-3.5",
                            style: { height: 40 },
                            placeholder: "ID Cabina",
                            value: A,
                            onChange: function (e) {
                              D(e.target.value);
                            },
                            onKeyPress: function (e) {
                              return "Enter" === e.code ? g(A, L) : null;
                            },
                          }),
                          Object(f.jsx)("button", {
                            className:
                              "mt-3.5 mb-4 ml-2 px-2  bg-green-500 text-white rounded-md font-medium",
                            onClick: function () {
                              g(A, L);
                            },
                            style: { height: 40 },
                            children: Object(f.jsxs)("div", {
                              className: "flex flex-row",
                              children: [
                                Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5 mr-1 mt-0.5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                                "Buscar",
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(f.jsx)(O.a, {
                pagination: !0,
                paginationTotalRows: b.total,
                paginationServer: !0,
                paginationPerPage: L.por_pagina,
                paginationRowsPerPageOptions: [1, 50, 100, 250, 500],
                onChangePage: function (e) {
                  return (function (e) {
                    var t = Object(u.a)({}, L);
                    (t.pagina = e), _(t);
                  })(e);
                },
                onChangeRowsPerPage: function (e) {
                  return (function (e) {
                    var t = Object(u.a)({}, L);
                    (t.por_pagina = e), (t.pagina = 1), _(t);
                  })(e);
                },
                sortServer: !0,
                onSort: function (e, t) {
                  return (function (e, t) {
                    var a = Object(u.a)({}, L);
                    (a.sort_by = e.selector),
                      (a.sort_order = "asc" === t ? "a" : "d"),
                      _(a);
                  })(e, t);
                },
                className: "rounded pt-4",
                title: "Cabinas",
                noHeader: !0,
                striped: !0,
                progressPending: d,
                columns: F,
                data: b.data,
                customStyles: H,
                noDataComponent: Object(f.jsx)("p", {
                  className: "text-2xl font-bold mt-10 mb-10",
                  children:
                    "No se encontraron cabinas con los par\xe1metros solicitados",
                }),
                progressComponent: Object(f.jsx)("p", {
                  className: "text-2xl font-bold mt-10 mb-10",
                  children: "Cargando cabinas ...",
                }),
                paginationComponentOptions: {
                  rowsPerPageText: "Cabinas por p\xe1gina",
                  rangeSeparatorText: "de",
                  noRowsPerPage: !1,
                  selectAllRowsItem: !1,
                  selectAllRowsItemText: "Todas",
                },
              }),
              t ? Object(f.jsx)(y, {}) : null,
              n ? Object(f.jsx)(C, {}) : null,
              m ? Object(f.jsx)(R, {}) : null,
              p ? Object(f.jsx)(M, {}) : null,
              i ? Object(f.jsx)(z, {}) : null,
              c
                ? Object(f.jsx)(S, {
                    modalTitle: "Carga Masiva Cabinas",
                    modalSubtitle: "Carga de archivo excel",
                    exampleFile: k,
                    exampleFileName: "carga_cabinas.xlsx",
                    showModalFunction: o,
                    uploadEndpoint: "cabinas/carga_masiva",
                  })
                : null,
            ],
          });
        },
        B = Object(l.createContext)();
      var P = function () {
        var e = Object(l.useContext)(B),
          t = e.setMostrarModalAlta,
          a = e.setMostrarModalConfirmacionAlta,
          s = e.datosFormulario,
          n = e.setDatosFormulario,
          i = e.formatFechaISO,
          c = Object(l.useState)(!1),
          o = Object(j.a)(c, 2),
          r = o[0],
          d = o[1],
          b = function (e) {
            var t = Object(u.a)({}, s);
            (t[e.target.name] = e.target.value), n(t);
          };
        return Object(f.jsx)("div", {
          className: "fixed z-10 inset-0 overflow-y-auto",
          children: Object(f.jsxs)("div", {
            className:
              "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
            children: [
              Object(f.jsx)("div", {
                className: "fixed inset-0 transition-opacity",
                "aria-hidden": "true",
                children: Object(f.jsx)("div", {
                  className: "absolute inset-0 bg-gray-500 opacity-75",
                }),
              }),
              Object(f.jsx)("span", {
                className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                "aria-hidden": "true",
                children: "\u200b",
              }),
              Object(f.jsxs)("div", {
                className:
                  "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-6/12 2xl:w-2/5",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                children: [
                  Object(f.jsxs)("div", {
                    className:
                      "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                    children: [
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsx)("h1", {
                            className: "font-bold text-2xl text-white",
                            children: "Nuevo Punto",
                          }),
                          Object(f.jsx)("h2", {
                            className: "font-medium text-white mb-3",
                            children: "Formulario de carga",
                          }),
                        ],
                      }),
                      Object(f.jsx)("button", {
                        className: " px-1 h-8 mt-3",
                        onClick: function () {
                          n({
                            id_punto: "",
                            id_tag: "",
                            epc: "",
                            fecha_instalacion: i(),
                            via: "",
                            baliza: "",
                            asociado_a: "",
                            progresivas: "",
                            latitud: "",
                            longitud: "",
                            observaciones: "",
                          }),
                            t(!1);
                        },
                        children: Object(f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-6 w-6 text-white",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                            clipRule: "evenodd",
                          }),
                        }),
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    children: [
                      r
                        ? Object(f.jsxs)("div", {
                            className:
                              "flex justify-between p-4 ml-6 mr-6 mt-4 rounded bg-red-400 items-center",
                            children: [
                              Object(f.jsxs)("div", {
                                className: "flex flex-row",
                                children: [
                                  Object(f.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-8 w-8 text-white mt-1 mr-3",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                      clipRule: "evenodd",
                                    }),
                                  }),
                                  Object(f.jsx)("h1", {
                                    className:
                                      "font-bold text-medium text-white mt-2",
                                    children:
                                      "Por favor, complet\xe1 todos los campos requeridos",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("button", {
                                className: "bg-red-400 px-1 h-6 ",
                                onClick: function () {
                                  d(!1);
                                },
                                children: Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5 text-white",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                              }),
                            ],
                          })
                        : null,
                      Object(f.jsxs)("div", {
                        className:
                          "grid grid-cols-1 xl:grid-cols-2 gap-1 p-4 pb-0 ",
                        children: [
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "ID PUNTO *",
                              }),
                              Object(f.jsx)("input", {
                                id: "id_punto",
                                name: "id_punto",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "ID Punto *",
                                type: "tel",
                                maxLength: "10",
                                value: s.id_punto,
                                onChange: function (e) {
                                  return isNaN(e.target.value) ? null : b(e);
                                },
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "ID TAG *",
                              }),
                              Object(f.jsx)("input", {
                                id: "id_tag",
                                name: "id_tag",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "ID Tag *",
                                type: "text",
                                maxLength: "20",
                                value: s.id_tag,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "FECHA DE INSTALACI\xd3N *",
                              }),
                              Object(f.jsx)("input", {
                                id: "fecha_instalacion",
                                name: "fecha_instalacion",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                type: "date",
                                value: s.fecha_instalacion,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "EPC",
                              }),
                              Object(f.jsx)("input", {
                                id: "epc",
                                name: "epc",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "EPC *",
                                type: "text",
                                maxLength: "30",
                                value: s.epc,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "V\xcdA *",
                              }),
                              Object(f.jsx)("input", {
                                id: "via",
                                name: "via",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "V\xeda *",
                                maxLength: "30",
                                type: "text",
                                value: s.via,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "BALIZA *",
                              }),
                              Object(f.jsx)("input", {
                                id: "baliza",
                                name: "baliza",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "Baliza *",
                                type: "text",
                                maxLength: "40",
                                value: s.baliza,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "LATITUD *",
                              }),
                              Object(f.jsx)("input", {
                                id: "latitud",
                                name: "latitud",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "Latitud *",
                                type: "text",
                                maxLength: "20",
                                value: s.latitud,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "LONGITUD *",
                              }),
                              Object(f.jsx)("input", {
                                id: "longitud",
                                name: "longitud",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "Longitud *",
                                type: "text",
                                maxLength: "20",
                                value: s.longitud,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "ASOCIADO A *",
                              }),
                              Object(f.jsx)("input", {
                                id: "asociado_a",
                                name: "asociado_a",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "Asociado a *",
                                type: "text",
                                maxLength: "40",
                                value: s.asociado_a,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "PROGRESIVAS *",
                              }),
                              Object(f.jsx)("input", {
                                id: "progresivas",
                                name: "progresivas",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "Progresivas *",
                                type: "text",
                                maxLength: "40",
                                value: s.progresivas,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0 pt-0 col-span-2",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "OBSERVACIONES",
                              }),
                              Object(f.jsx)("textarea", {
                                id: "observaciones",
                                name: "observaciones",
                                style: { resize: "none" },
                                className:
                                  "rounded mt-1 block w-full h-20 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                type: "text",
                                placeholder: "Observaciones",
                                value: s.observaciones,
                                onChange: b,
                                maxLength: "400",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(f.jsx)("div", {
                        className: "bg-blue-600 flex justify-end p-2 pb-4 mr-4",
                        children: Object(f.jsx)("button", {
                          className:
                            "bg-green-500 text-white px-10 py-2 rounded font-medium",
                          onClick: function () {
                            return (function () {
                              for (
                                var e = 0, l = Object.entries(s);
                                e < l.length;
                                e++
                              ) {
                                var n = Object(j.a)(l[e], 2),
                                  i = n[0],
                                  c = n[1];
                                if ("observaciones" !== i && "" === c)
                                  return d(!0), !1;
                              }
                              return t(!1), a(!0), !0;
                            })();
                          },
                          children: "Validar",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var A = function () {
        var e = Object(l.useContext)(B),
          t = e.datosFormulario,
          a = e.setDatosFormulario,
          s = e.setMostrarModalConfirmacionAlta,
          n = e.formatDate,
          i = e.altaPunto,
          c = e.loading,
          o = e.formatFechaISO;
        return Object(f.jsx)("div", {
          className: "fixed z-10 inset-0 overflow-y-auto py-10",
          children: Object(f.jsxs)("div", {
            className:
              "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
            children: [
              Object(f.jsx)("div", {
                className: "fixed inset-0 transition-opacity",
                "aria-hidden": "true",
                children: Object(f.jsx)("div", {
                  className: "absolute inset-0 bg-gray-500 opacity-75",
                }),
              }),
              Object(f.jsx)("span", {
                className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                "aria-hidden": "true",
                children: "\u200b",
              }),
              Object(f.jsxs)("div", {
                className:
                  "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                children: [
                  Object(f.jsx)("div", {
                    className:
                      "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                    children: Object(f.jsxs)("div", {
                      children: [
                        Object(f.jsx)("h1", {
                          className: "font-bold text-2xl text-white",
                          children: "Nuevo Punto",
                        }),
                        Object(f.jsx)("h2", {
                          className: "font-medium text-white mb-3",
                          children: "Confirmaci\xf3n de carga",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsx)("div", {
                    className: "bg-blue-600",
                    children: Object(f.jsxs)("div", {
                      className: "flex flex-row items-center p-4",
                      children: [
                        Object(f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-7 w-7 text-white",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                            clipRule: "evenodd",
                          }),
                        }),
                        Object(f.jsx)("p", {
                          className: "font-medium text-xl text-white ml-2",
                          children:
                            "Atenci\xf3n, vas a dar de alta el siguiente punto",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsxs)("div", {
                    className:
                      "bg-gray-100 rounded grid grid-cols-2 p-4 m-4 mt-0",
                    children: [
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center mb-1 mt-1 mr-1 bg-gray-300 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "ID Punto",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.id_punto,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mt-1 rounded ",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "ID Tag",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.id_tag,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Fecha de Instalaci\xf3n",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: n(t.fecha_instalacion),
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "EPC",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2  text-gray-600",
                            children: t.epc,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "V\xeda",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.via,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Baliza",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.baliza,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Latitud",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.latitud,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Longitud",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.longitud,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Asociado a",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.asociado_a,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Progresivas",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.progresivas,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Observaciones",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium  text-gray-600",
                            children: t.observaciones,
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex justify-between p-4",
                    children: [
                      Object(f.jsx)("button", {
                        className:
                          "bg-red-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          a({
                            id_punto: "",
                            id_tag: "",
                            epc: "",
                            fecha_instalacion: o(),
                            via: "",
                            baliza: "",
                            asociado_a: "",
                            progresivas: "",
                            latitud: "",
                            longitud: "",
                            observaciones: "",
                          }),
                            s(!1);
                        },
                        children: "Cancelar",
                      }),
                      Object(f.jsx)("button", {
                        className: c
                          ? "bg-green-500 text-white px-16 py-2 rounded font-medium"
                          : "bg-green-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          return i();
                        },
                        children: c
                          ? Object(f.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5 animate-spin",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                clipRule: "evenodd",
                              }),
                            })
                          : "Confirmar",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var D = function () {
        var e = Object(l.useContext)(B),
          t = e.setMostrarModalEditar,
          a = e.setMostrarModalConfirmacionEditar,
          s = e.datosFormulario,
          n = e.setDatosFormulario,
          i = e.formatFechaISO,
          c = Object(l.useState)(!1),
          o = Object(j.a)(c, 2),
          r = o[0],
          d = o[1],
          b = function (e) {
            var t = Object(u.a)({}, s);
            (t[e.target.name] = e.target.value), n(t);
          };
        return Object(f.jsx)("div", {
          className: "fixed z-10 inset-0 overflow-y-auto",
          children: Object(f.jsxs)("div", {
            className:
              "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
            children: [
              Object(f.jsx)("div", {
                className: "fixed inset-0 transition-opacity",
                "aria-hidden": "true",
                children: Object(f.jsx)("div", {
                  className: "absolute inset-0 bg-gray-500 opacity-75",
                }),
              }),
              Object(f.jsx)("span", {
                className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                "aria-hidden": "true",
                children: "\u200b",
              }),
              Object(f.jsxs)("div", {
                className:
                  "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-6/12 2xl:w-2/5",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                children: [
                  Object(f.jsxs)("div", {
                    className:
                      "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                    children: [
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsx)("h1", {
                            className: "font-bold text-2xl text-white",
                            children: "Punto",
                          }),
                          Object(f.jsx)("h2", {
                            className: "font-medium text-white mb-3",
                            children: "Formulario de edici\xf3n",
                          }),
                        ],
                      }),
                      Object(f.jsx)("button", {
                        className: " px-1 h-8 mt-3",
                        onClick: function () {
                          n({
                            id_punto: "",
                            id_tag: "",
                            epc: "",
                            fecha_instalacion: i(),
                            via: "",
                            baliza: "",
                            asociado_a: "",
                            progresivas: "",
                            latitud: "",
                            longitud: "",
                            observaciones: "",
                          }),
                            t(!1);
                        },
                        children: Object(f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-6 w-6 text-white",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                            clipRule: "evenodd",
                          }),
                        }),
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    children: [
                      r
                        ? Object(f.jsxs)("div", {
                            className:
                              "flex justify-between p-4 ml-6 mr-6 mt-4 rounded bg-red-400 items-center",
                            children: [
                              Object(f.jsxs)("div", {
                                className: "flex flex-row",
                                children: [
                                  Object(f.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-8 w-8 text-white mt-1 mr-3",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                      clipRule: "evenodd",
                                    }),
                                  }),
                                  Object(f.jsx)("h1", {
                                    className:
                                      "font-bold text-medium text-white mt-2",
                                    children:
                                      "Por favor, complet\xe1 todos los campos requeridos",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("button", {
                                className: "bg-red-400 px-1 h-6 ",
                                onClick: function () {
                                  d(!1);
                                },
                                children: Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5 text-white",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                              }),
                            ],
                          })
                        : null,
                      Object(f.jsxs)("div", {
                        className: "grid grid-cols-1 xl:grid-cols-2 gap-1 p-4 ",
                        children: [
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "ID PUNTO *",
                              }),
                              Object(f.jsx)("input", {
                                id: "id_punto",
                                name: "id_punto",
                                className:
                                  "rounded mt-1 block w-full bg-gray-300  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "ID Punto *",
                                type: "tel",
                                maxLength: "10",
                                value: s.id_punto,
                                onChange: function (e) {
                                  return isNaN(e.target.value) ? null : b(e);
                                },
                                disabled: !0,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "ID TAG *",
                              }),
                              Object(f.jsx)("input", {
                                id: "id_tag",
                                name: "id_tag",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "ID Tag *",
                                type: "text",
                                maxLength: "20",
                                value: s.id_tag,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "FECHA DE INSTALACI\xd3N *",
                              }),
                              Object(f.jsx)("input", {
                                id: "fecha_instalacion",
                                name: "fecha_instalacion",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                type: "date",
                                value: s.fecha_instalacion,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "EPC",
                              }),
                              Object(f.jsx)("input", {
                                id: "epc",
                                name: "epc",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "EPC *",
                                type: "text",
                                maxLength: "30",
                                value: s.epc,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "V\xcdA *",
                              }),
                              Object(f.jsx)("input", {
                                id: "via",
                                name: "via",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "V\xeda *",
                                maxLength: "30",
                                type: "text",
                                value: s.via,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "BALIZA *",
                              }),
                              Object(f.jsx)("input", {
                                id: "baliza",
                                name: "baliza",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "Baliza *",
                                type: "text",
                                maxLength: "40",
                                value: s.baliza,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "LATITUD *",
                              }),
                              Object(f.jsx)("input", {
                                id: "latitud",
                                name: "latitud",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "Latitud *",
                                type: "text",
                                maxLength: "20",
                                value: s.latitud,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "LONGITUD *",
                              }),
                              Object(f.jsx)("input", {
                                id: "longitud",
                                name: "longitud",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "Longitud *",
                                type: "text",
                                maxLength: "20",
                                value: s.longitud,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "ASOCIADO A *",
                              }),
                              Object(f.jsx)("input", {
                                id: "asociado_a",
                                name: "asociado_a",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "Asociado a *",
                                type: "text",
                                maxLength: "40",
                                value: s.asociado_a,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "PROGRESIVAS *",
                              }),
                              Object(f.jsx)("input", {
                                id: "progresivas",
                                name: "progresivas",
                                className:
                                  "rounded mt-1 block w-full  h-10 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                placeholder: "Progresivas *",
                                type: "text",
                                maxLength: "40",
                                value: s.progresivas,
                                onChange: b,
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "p-2 pb-0 mb-0 col-span-2",
                            children: [
                              Object(f.jsx)("label", {
                                className: " font-medium text-white",
                                children: "OBSERVACIONES",
                              }),
                              Object(f.jsx)("textarea", {
                                id: "observaciones",
                                name: "observaciones",
                                style: { resize: "none" },
                                className:
                                  "rounded mt-1 block w-full h-20 bg-white p-2 shadow mb-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
                                type: "text",
                                maxLength: "400",
                                placeholder: "Observaciones",
                                value: s.observaciones,
                                onChange: b,
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(f.jsx)("div", {
                        className: "bg-blue-600 flex justify-end p-2 pb-4 mr-4",
                        children: Object(f.jsx)("button", {
                          className:
                            "bg-green-500 text-white px-10 py-2 rounded font-medium",
                          onClick: function () {
                            return (function () {
                              for (
                                var e = 0, l = Object.entries(s);
                                e < l.length;
                                e++
                              ) {
                                var n = Object(j.a)(l[e], 2),
                                  i = n[0],
                                  c = n[1];
                                if ("observaciones" !== i && "" === c)
                                  return d(!0), !1;
                              }
                              return t(!1), a(!0), !0;
                            })();
                          },
                          children: "Validar",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var H = function () {
        var e = Object(l.useContext)(B),
          t = e.datosFormulario,
          a = e.setDatosFormulario,
          s = e.setMostrarModalConfirmacionEditar,
          n = e.editarPunto,
          i = e.loading,
          c = e.formatDate,
          o = e.formatFechaISO;
        return Object(f.jsx)("div", {
          className: "fixed z-10 inset-0 overflow-y-auto py-10",
          children: Object(f.jsxs)("div", {
            className:
              "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
            children: [
              Object(f.jsx)("div", {
                className: "fixed inset-0 transition-opacity",
                "aria-hidden": "true",
                children: Object(f.jsx)("div", {
                  className: "absolute inset-0 bg-gray-500 opacity-75",
                }),
              }),
              Object(f.jsx)("span", {
                className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                "aria-hidden": "true",
                children: "\u200b",
              }),
              Object(f.jsxs)("div", {
                className:
                  "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                children: [
                  Object(f.jsx)("div", {
                    className:
                      "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                    children: Object(f.jsxs)("div", {
                      children: [
                        Object(f.jsx)("h1", {
                          className: "font-bold text-2xl text-white",
                          children: "Punto",
                        }),
                        Object(f.jsx)("h2", {
                          className: "font-medium text-white mb-3",
                          children: "Confirmaci\xf3n de edici\xf3n",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsx)("div", {
                    className: "bg-blue-600",
                    children: Object(f.jsxs)("div", {
                      className: "flex flex-row items-center p-4",
                      children: [
                        Object(f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-7 w-7 text-white",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                            clipRule: "evenodd",
                          }),
                        }),
                        Object(f.jsx)("p", {
                          className: "font-medium text-xl text-white ml-2",
                          children:
                            "Atenci\xf3n, vas a editar el punto con los siguientes datos",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsxs)("div", {
                    className:
                      "bg-gray-100 rounded grid grid-cols-2 p-4 m-4 mt-0",
                    children: [
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center mb-1 mt-1 mr-1 bg-gray-300 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "ID Punto",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.id_punto,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mt-1 rounded ",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "ID Tag",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.id_tag,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Fecha de Instalaci\xf3n",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: c(t.fecha_instalacion),
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "EPC",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2  text-gray-600",
                            children: t.epc,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "V\xeda",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.via,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Baliza",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.baliza,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Latitud",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.latitud,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Longitud",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.longitud,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Asociado a",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.asociado_a,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Progresivas",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.progresivas,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Observaciones",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium  text-gray-600",
                            children: t.observaciones,
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex justify-between p-4",
                    children: [
                      Object(f.jsx)("button", {
                        className:
                          "bg-red-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          a({
                            id_punto: "",
                            id_tag: "",
                            epc: "",
                            fecha_instalacion: o(),
                            via: "",
                            baliza: "",
                            asociado_a: "",
                            progresivas: "",
                            latitud: "",
                            longitud: "",
                            observaciones: "",
                          }),
                            s(!1);
                        },
                        children: "Cancelar",
                      }),
                      Object(f.jsx)("button", {
                        className: i
                          ? "bg-green-500 text-white px-16 py-2 rounded font-medium"
                          : "bg-green-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          return n();
                        },
                        children: i
                          ? Object(f.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5 animate-spin",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                clipRule: "evenodd",
                              }),
                            })
                          : "Confirmar",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var F = function () {
        var e = Object(l.useContext)(B),
          t = e.datosFormulario,
          a = e.setDatosFormulario,
          s = e.setMostrarModalConfirmacionEliminar,
          n = e.bajaPunto,
          i = e.loading,
          c = e.formatDate;
        return Object(f.jsx)("div", {
          className: "fixed z-10 inset-0 overflow-y-auto py-10",
          children: Object(f.jsxs)("div", {
            className:
              "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
            children: [
              Object(f.jsx)("div", {
                className: "fixed inset-0 transition-opacity",
                "aria-hidden": "true",
                children: Object(f.jsx)("div", {
                  className: "absolute inset-0 bg-gray-500 opacity-75",
                }),
              }),
              Object(f.jsx)("span", {
                className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                "aria-hidden": "true",
                children: "\u200b",
              }),
              Object(f.jsxs)("div", {
                className:
                  "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                children: [
                  Object(f.jsx)("div", {
                    className:
                      "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                    children: Object(f.jsxs)("div", {
                      children: [
                        Object(f.jsx)("h1", {
                          className: "font-bold text-2xl text-white",
                          children: "Punto",
                        }),
                        Object(f.jsx)("h2", {
                          className: "font-medium text-white mb-3",
                          children: "Confirmaci\xf3n de eliminaci\xf3n",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsx)("div", {
                    className: "bg-blue-600",
                    children: Object(f.jsxs)("div", {
                      className:
                        "flex flex-row items-center p-4 bg-red-400 p-4 m-4 rounded",
                      children: [
                        Object(f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-7 w-7 text-white mt-1",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                            clipRule: "evenodd",
                          }),
                        }),
                        Object(f.jsx)("p", {
                          className: "font-medium text-xl text-white ml-2",
                          children:
                            "\xa1Atenci\xf3n! Vas a eliminar el siguiente punto",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsxs)("div", {
                    className:
                      "bg-gray-100 rounded grid grid-cols-2 p-4 m-4 mt-0",
                    children: [
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center mb-1 mt-1 mr-1 bg-gray-300 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "ID Punto",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.id_punto,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mt-1 rounded ",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "ID Tag",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.id_tag,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Fecha de Instalaci\xf3n",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: c(t.fecha_instalacion),
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "EPC",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2  text-gray-600",
                            children: t.epc,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "V\xeda",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.via,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Baliza",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.baliza,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Latitud",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.latitud,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Longitud",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.longitud,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Asociado a",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.asociado_a,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Progresivas",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.progresivas,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Observaciones",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium  text-gray-600",
                            children: t.observaciones,
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex justify-between p-4",
                    children: [
                      Object(f.jsx)("button", {
                        className:
                          "bg-red-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          a({
                            id_punto: "",
                            id_tag: "",
                            epc: "",
                            fecha_instalacion: "",
                            via: "",
                            baliza: "",
                            asociado_a: "",
                            progresivas: "",
                            latitud: "",
                            longitud: "",
                            observaciones: "",
                          }),
                            s(!1);
                        },
                        children: "Cancelar",
                      }),
                      Object(f.jsx)("button", {
                        className: i
                          ? "bg-green-500 text-white px-16 py-2 rounded font-medium"
                          : "bg-green-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          return n();
                        },
                        children: i
                          ? Object(f.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5 animate-spin",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                clipRule: "evenodd",
                              }),
                            })
                          : "Confirmar",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var E = function () {
        var e = Object(l.useContext)(B),
          t = e.datosFormulario,
          a = e.setDatosFormulario,
          s = e.setMostrarModalConfirmacionListaNegra,
          n = e.bajaPuntoListaNegra,
          i = e.loading;
        return Object(f.jsx)("div", {
          className: "fixed z-10 inset-0 overflow-y-auto py-10",
          children: Object(f.jsxs)("div", {
            className:
              "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
            children: [
              Object(f.jsx)("div", {
                className: "fixed inset-0 transition-opacity",
                "aria-hidden": "true",
                children: Object(f.jsx)("div", {
                  className: "absolute inset-0 bg-gray-500 opacity-75",
                }),
              }),
              Object(f.jsx)("span", {
                className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                "aria-hidden": "true",
                children: "\u200b",
              }),
              Object(f.jsxs)("div", {
                className:
                  "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                children: [
                  Object(f.jsx)("div", {
                    className:
                      "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                    children: Object(f.jsxs)("div", {
                      children: [
                        Object(f.jsx)("h1", {
                          className: "font-bold text-2xl text-white",
                          children: "Punto",
                        }),
                        Object(f.jsx)("h2", {
                          className: "font-medium text-white mb-3",
                          children: "Confirmaci\xf3n de env\xedo a lista negra",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsx)("div", {
                    className: "bg-blue-600",
                    children: Object(f.jsxs)("div", {
                      className:
                        "flex flex-row items-center p-4 bg-yellow-500 p-4 m-4 rounded",
                      children: [
                        Object(f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-7 w-7 text-white mt-1",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                            clipRule: "evenodd",
                          }),
                        }),
                        Object(f.jsx)("p", {
                          className: "font-medium text-xl text-white ml-2",
                          children:
                            "\xa1Atenci\xf3n! Vas a env\xedar a la lista negra el siguiente punto",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsxs)("div", {
                    className:
                      "bg-gray-100 rounded grid grid-cols-2 p-4 m-4 mt-0",
                    children: [
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center mb-1 mt-1 mr-1 bg-gray-300 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "ID Punto",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.id_punto,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mt-1 rounded ",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "ID Tag",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.id_tag,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Fecha de Instalaci\xf3n",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.fecha_instalacion,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "EPC",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2  text-gray-600",
                            children: t.epc,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "V\xeda",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.via,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Baliza",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.baliza,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Latitud",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.latitud,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Longitud",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.longitud,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Asociado a",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.asociado_a,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Progresivas",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.progresivas,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Observaciones",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium  text-gray-600",
                            children: t.observaciones,
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex justify-between p-4",
                    children: [
                      Object(f.jsx)("button", {
                        className:
                          "bg-red-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          a({
                            id_punto: "",
                            id_tag: "",
                            epc: "",
                            fecha_instalacion: "",
                            via: "",
                            baliza: "",
                            asociado_a: "",
                            progresivas: "",
                            latitud: "",
                            longitud: "",
                            observaciones: "",
                          }),
                            s(!1);
                        },
                        children: "Cancelar",
                      }),
                      Object(f.jsx)("button", {
                        className: i
                          ? "bg-green-500 text-white px-16 py-2 rounded font-medium"
                          : "bg-green-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          return n();
                        },
                        children: i
                          ? Object(f.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5 animate-spin",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                clipRule: "evenodd",
                              }),
                            })
                          : "Confirmar",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var V = function () {
          var e = Object(l.useContext)(B),
            t = e.datosFormulario,
            a = e.setDatosFormulario,
            s = e.formatDate,
            n = e.setMostrarModalInformacion;
          return Object(f.jsx)("div", {
            className: "fixed z-10 inset-0 overflow-y-auto py-10",
            children: Object(f.jsxs)("div", {
              className:
                "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
              children: [
                Object(f.jsx)("div", {
                  className: "fixed inset-0 transition-opacity",
                  "aria-hidden": "true",
                  children: Object(f.jsx)("div", {
                    className: "absolute inset-0 bg-gray-500 opacity-75",
                  }),
                }),
                Object(f.jsx)("span", {
                  className:
                    "hidden sm:inline-block sm:align-middle sm:h-screen",
                  "aria-hidden": "true",
                  children: "\u200b",
                }),
                Object(f.jsxs)("div", {
                  className:
                    "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "modal-headline",
                  children: [
                    Object(f.jsx)("div", {
                      className:
                        "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                      children: Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsx)("h1", {
                            className: "font-bold text-2xl text-white",
                            children: "Punto",
                          }),
                          Object(f.jsx)("h2", {
                            className: "font-medium text-white mb-3",
                            children: "Informaci\xf3n extendida",
                          }),
                        ],
                      }),
                    }),
                    Object(f.jsxs)("div", {
                      className: "bg-gray-100 rounded grid grid-cols-2 p-4 m-4",
                      children: [
                        Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "flex flex-row items-center mb-1 mt-1 mr-1 bg-gray-300 rounded",
                              children: [
                                Object(f.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: [
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                                Object(f.jsx)("p", {
                                  className:
                                    "font-bold ml-1 subpixel-antialiased",
                                  children: "ID Punto",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "ml-7 font-medium mb-2 text-gray-600",
                              children: t.id_punto,
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "flex flex-row items-center bg-gray-300 mb-1 mt-1 rounded ",
                              children: [
                                Object(f.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: [
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                                Object(f.jsx)("p", {
                                  className:
                                    "font-bold ml-1 subpixel-antialiased",
                                  children: "ID Tag",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "ml-7 font-medium mb-2 text-gray-600",
                              children: t.id_tag,
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                              children: [
                                Object(f.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: [
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                                Object(f.jsx)("p", {
                                  className:
                                    "font-bold ml-1 subpixel-antialiased",
                                  children: "Fecha de Instalaci\xf3n",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "ml-7 font-medium mb-2 text-gray-600",
                              children: s(t.fecha_instalacion),
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "flex flex-row items-center bg-gray-300 mb-1 rounded",
                              children: [
                                Object(f.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: [
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                                Object(f.jsx)("p", {
                                  className:
                                    "font-bold ml-1 subpixel-antialiased",
                                  children: "EPC",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "ml-7 font-medium mb-2  text-gray-600",
                              children: t.epc,
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                              children: [
                                Object(f.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: [
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                                Object(f.jsx)("p", {
                                  className:
                                    "font-bold ml-1 subpixel-antialiased",
                                  children: "V\xeda",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "ml-7 font-medium mb-2 text-gray-600",
                              children: t.via,
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "flex flex-row items-center bg-gray-300 mb-1 rounded",
                              children: [
                                Object(f.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: [
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                                Object(f.jsx)("p", {
                                  className:
                                    "font-bold ml-1 subpixel-antialiased",
                                  children: "Baliza",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "ml-7 font-medium mb-2 text-gray-600",
                              children: t.baliza,
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                              children: [
                                Object(f.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: [
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                                Object(f.jsx)("p", {
                                  className:
                                    "font-bold ml-1 subpixel-antialiased",
                                  children: "Latitud",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "ml-7 font-medium mb-2 text-gray-600",
                              children: t.latitud,
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "flex flex-row items-center bg-gray-300 mb-1 rounded",
                              children: [
                                Object(f.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: [
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                                Object(f.jsx)("p", {
                                  className:
                                    "font-bold ml-1 subpixel-antialiased",
                                  children: "Longitud",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "ml-7 font-medium mb-2 text-gray-600",
                              children: t.longitud,
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                              children: [
                                Object(f.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: [
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                                Object(f.jsx)("p", {
                                  className:
                                    "font-bold ml-1 subpixel-antialiased",
                                  children: "Asociado a",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "ml-7 font-medium mb-2 text-gray-600",
                              children: t.asociado_a,
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "flex flex-row items-center bg-gray-300 mb-1 rounded",
                              children: [
                                Object(f.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: [
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                                Object(f.jsx)("p", {
                                  className:
                                    "font-bold ml-1 subpixel-antialiased",
                                  children: "Progresivas",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "ml-7 font-medium mb-2 text-gray-600",
                              children: t.progresivas,
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "flex flex-row items-center bg-gray-300 mb-1 rounded",
                              children: [
                                Object(f.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: [
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                                Object(f.jsx)("p", {
                                  className:
                                    "font-bold ml-1 subpixel-antialiased",
                                  children: "Observaciones",
                                }),
                              ],
                            }),
                            Object(f.jsx)("p", {
                              className: "ml-7 font-medium  text-gray-600",
                              children: t.observaciones,
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(f.jsx)("div", {
                      className: "flex justify-end p-4",
                      children: Object(f.jsx)("button", {
                        className:
                          "bg-green-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          a({
                            id_punto: "",
                            id_tag: "",
                            epc: "",
                            fecha_instalacion: "",
                            via: "",
                            baliza: "",
                            asociado_a: "",
                            progresivas: "",
                            latitud: "",
                            longitud: "",
                            observaciones: "",
                          }),
                            n(!1);
                        },
                        children: "Entendido",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        T = a.p + "static/media/Carga_Puntos.4a99f9a1.xlsx";
      var q = function () {
          var e = Object(l.useContext)(B),
            t = e.getPuntos,
            a = e.puntos,
            n = e.loadingPuntos,
            i = e.setMostrarModalAlta,
            c = e.mostrarModalAlta,
            o = e.mostrarModalConfirmacionAlta,
            r = e.mostrarModalConfirmacionEditar,
            d = e.mostrarModalConfirmacionEliminar,
            b = e.setMostrarModalConfirmacionEliminar,
            m = e.mostrarModalConfirmacionListaNegra,
            x = e.setMostrarModalConfirmacionListaNegra,
            h = e.setDatosFormulario,
            p = e.mostrarModalEditar,
            v = e.setMostrarModalEditar,
            g = e.mostrarModalInformacion,
            N = e.setMostrarModalInformacion,
            y = e.buscarPunto,
            C = e.datosFiltros,
            R = e.setDatosFiltros,
            M = e.permisos,
            z = e.mostrarModalCargaMasiva,
            L = e.setMostrarModalCargaMasiva,
            _ = window.screen.width < 1920 ? 1 : 0.6,
            k = Object(l.useState)(""),
            I = Object(j.a)(k, 2),
            q = I[0],
            W = I[1];
          Object(l.useEffect)(
            function () {
              t();
            },
            [C.pagina, C.por_pagina, C.sort_by, C.sort_order]
          ),
            Object(l.useEffect)(function () {}, [a]);
          var U = {
              headRow: {
                style: {
                  borderTopStyle: "solid",
                  borderTopWidth: "1px",
                  borderTopColor: w.defaultThemes.default.divider.default,
                },
              },
              headCells: {
                style: {
                  "&:not(:last-of-type)": {
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderRightColor: w.defaultThemes.default.divider.default,
                    fontSize: 16,
                    fontWeight: 700,
                  },
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderRightColor: w.defaultThemes.default.divider.default,
                  fontSize: 16,
                  fontWeight: 700,
                },
              },
              cells: {
                style: {
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderRightColor: w.defaultThemes.default.divider.default,
                },
              },
            },
            Q = s.a.useMemo(function () {
              return [
                {
                  name: "ID Punto",
                  selector: "id_punto",
                  sortable: !0,
                  maxWidth: "130px",
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.id_punto,
                      }),
                    });
                  },
                },
                {
                  name: "ID Tag",
                  selector: "id_tag",
                  maxWidth: "10px",
                  sortable: !0,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.id_tag,
                      }),
                    });
                  },
                },
                {
                  name: "EPC",
                  selector: "epc",
                  sortable: !0,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.epc,
                      }),
                    });
                  },
                },
                {
                  name: "Fecha Instalaci\xf3n",
                  selector: "fecha_instalacion",
                  sortable: !0,
                  grow: 1,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.fecha_instalacion,
                      }),
                    });
                  },
                },
                {
                  name: "V\xeda",
                  selector: "via",
                  sortable: !0,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.via,
                      }),
                    });
                  },
                },
                {
                  name: "Baliza",
                  selector: "baliza",
                  sortable: !0,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.baliza,
                      }),
                    });
                  },
                },
                {
                  name: "Asociado a",
                  selector: "asociado_a",
                  sortable: !0,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.asociado_a,
                      }),
                    });
                  },
                },
                {
                  name: "Progresivas",
                  selector: "progresivas",
                  sortable: !0,
                  maxWidth: "130px",
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.progresivas,
                      }),
                    });
                  },
                },
                {
                  name: "Acciones",
                  selector: "acciones",
                  sortable: !1,
                  grow: "admin" === M ? _ : 0,
                  cell: function (e) {
                    return Object(f.jsxs)("div", {
                      className:
                        "admin" === M
                          ? "flex flex-row ml-0.5"
                          : "flex flex-row ml-4 ",
                      children: [
                        Object(f.jsx)("button", {
                          className: "bg-green-500 text-white p-1 rounded mr-1",
                          onClick: function () {
                            var t = e.fecha_instalacion
                              .split("/")
                              .reverse()
                              .join("-");
                            h({
                              id_punto: e.id_punto,
                              id_tag: e.id_tag,
                              epc: e.epc,
                              fecha_instalacion: t,
                              via: e.via,
                              baliza: e.baliza,
                              asociado_a: e.asociado_a,
                              progresivas: e.progresivas,
                              latitud: e.latitud,
                              longitud: e.longitud,
                              observaciones: e.observaciones,
                            }),
                              N(!0);
                          },
                          children: Object(f.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: Object(f.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                              clipRule: "evenodd",
                            }),
                          }),
                        }),
                        "admin" === M
                          ? Object(f.jsxs)("div", {
                              className: "flex flex-row ml-0.5",
                              children: [
                                Object(f.jsx)("button", {
                                  className:
                                    "bg-indigo-700 text-white p-1 rounded",
                                  onClick: function () {
                                    var t = e.fecha_instalacion
                                      .split("/")
                                      .reverse()
                                      .join("-");
                                    h({
                                      id_punto: e.id_punto,
                                      id_tag: e.id_tag,
                                      epc: e.epc,
                                      fecha_instalacion: t,
                                      via: e.via,
                                      baliza: e.baliza,
                                      asociado_a: e.asociado_a,
                                      progresivas: e.progresivas,
                                      latitud: e.latitud,
                                      longitud: e.longitud,
                                      observaciones: e.observaciones,
                                    }),
                                      v(!0);
                                  },
                                  children: Object(f.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: [
                                      Object(f.jsx)("path", {
                                        d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z",
                                      }),
                                      Object(f.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
                                        clipRule: "evenodd",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(f.jsx)("button", {
                                  className:
                                    "bg-red-700 text-white p-1 rounded ml-1",
                                  onClick: function () {
                                    var t = e.fecha_instalacion
                                      .split("/")
                                      .reverse()
                                      .join("-");
                                    h({
                                      id_punto: e.id_punto,
                                      id_tag: e.id_tag,
                                      epc: e.epc,
                                      fecha_instalacion: t,
                                      via: e.via,
                                      baliza: e.baliza,
                                      asociado_a: e.asociado_a,
                                      progresivas: e.progresivas,
                                      latitud: e.latitud,
                                      longitud: e.longitud,
                                      observaciones: e.observaciones,
                                    }),
                                      b(!0);
                                  },
                                  children: Object(f.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",
                                      clipRule: "evenodd",
                                    }),
                                  }),
                                }),
                                Object(f.jsx)("button", {
                                  className:
                                    "bg-black text-white p-1 rounded ml-1",
                                  onClick: function () {
                                    h(e), x(!0);
                                  },
                                  children: Object(f.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: [
                                      Object(f.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",
                                        clipRule: "evenodd",
                                      }),
                                      Object(f.jsx)("path", {
                                        d: "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    });
                  },
                },
              ];
            }, []);
          return Object(f.jsxs)("div", {
            className:
              "rounded p-4 m-4 bg-blue-600 shadow-lg text-left mb-auto",
            children: [
              Object(f.jsxs)("div", {
                className: "flex flex-row justify-between",
                children: [
                  Object(f.jsxs)("div", {
                    className: "flex flex-row",
                    children: [
                      Object(f.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-10 w-10 mt-4 text-white",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: [
                          Object(f.jsx)("path", {
                            d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z",
                          }),
                          Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
                            clipRule: "evenodd",
                          }),
                        ],
                      }),
                      Object(f.jsx)("h1", {
                        className: "text-white text-3xl mb-4 mt-5 font-medium",
                        children: "Listado de Puntos",
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex flex-row",
                    children: [
                      "admin" === M
                        ? Object(f.jsxs)("div", {
                            className:
                              "border border-white border-r-2 border-b-0 border-t-0 border-l-0",
                            children: [
                              Object(f.jsx)("button", {
                                className:
                                  "rounded mb-4 px-4 py-2 mr-2 mt-3.5 bg-green-500 text-white rounded-md font-medium",
                                onClick: function () {
                                  return i(!0);
                                },
                                children: Object(f.jsxs)("div", {
                                  className: "flex flex-row items-center",
                                  children: [
                                    Object(f.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: "h-5 w-5 ",
                                      viewBox: "0 0 20 20",
                                      fill: "currentColor",
                                      children: Object(f.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
                                        clipRule: "evenodd",
                                      }),
                                    }),
                                    Object(f.jsx)("p", {
                                      className: "ml-2",
                                      children: "Nuevo Punto",
                                    }),
                                  ],
                                }),
                              }),
                              Object(f.jsx)("button", {
                                className:
                                  "mb-4 mr-2 mt-3.5 px-4 py-2 bg-green-500 text-white rounded-md font-medium",
                                onClick: function () {
                                  return L(!0);
                                },
                                children: Object(f.jsxs)("div", {
                                  className: "flex flex-row items-center",
                                  children: [
                                    Object(f.jsx)("svg", {
                                      className: "w-5",
                                      viewBox: "0 0 24 24",
                                      children: Object(f.jsx)("path", {
                                        fill: "currentColor",
                                        d: "M21.17 3.25q.33 0 .59.25q.24.24.24.58v15.84q0 .34-.24.58q-.26.25-.59.25H7.83q-.33 0-.59-.25q-.24-.24-.24-.58V17H2.83q-.33 0-.59-.24Q2 16.5 2 16.17V7.83q0-.33.24-.59Q2.5 7 2.83 7H7V4.08q0-.34.24-.58q.26-.25.59-.25M7 13.06l1.18 2.22h1.79L8 12.06l1.93-3.17H8.22L7.13 10.9l-.04.06l-.03.07q-.26-.53-.56-1.07q-.25-.53-.53-1.07H4.16l1.89 3.19L4 15.28h1.78m8.1 4.22V17H8.25v2.5m5.63-3.75v-3.12H12v3.12m1.88-4.37V8.25H12v3.13M13.88 7V4.5H8.25V7m12.5 12.5V17h-5.62v2.5m5.62-3.75v-3.12h-5.62v3.12m5.62-4.37V8.25h-5.62v3.13M20.75 7V4.5h-5.62V7Z",
                                      }),
                                    }),
                                    Object(f.jsx)("p", {
                                      className: "ml-2",
                                      children: "Carga Masiva",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          })
                        : null,
                      Object(f.jsxs)("div", {
                        className: "flex flex-row",
                        children: [
                          Object(f.jsx)("input", {
                            className: "rounded px-4 ml-2 mt-3.5",
                            style: { height: 40 },
                            placeholder: "ID Punto",
                            value: q,
                            onChange: function (e) {
                              W(e.target.value);
                            },
                            onKeyPress: function (e) {
                              return "Enter" === e.code ? y(q) : null;
                            },
                          }),
                          Object(f.jsx)("button", {
                            className:
                              "rounded mt-3.5 mb-4 ml-2 px-2  bg-green-500 text-white rounded-md font-medium",
                            onClick: function () {
                              y(q);
                            },
                            style: { height: 40 },
                            children: Object(f.jsxs)("div", {
                              className: "flex flex-row",
                              children: [
                                Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5 mr-1 mt-0.5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                                "Buscar",
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(f.jsx)("div", {
                className: "mt-2",
                children: Object(f.jsx)(O.a, {
                  pagination: !0,
                  paginationTotalRows: a.total,
                  paginationServer: !0,
                  paginationPerPage: C.por_pagina,
                  paginationRowsPerPageOptions: [10, 50, 100, 250, 500],
                  onChangePage: function (e) {
                    return (function (e) {
                      var t = Object(u.a)({}, C);
                      (t.pagina = e), R(t);
                    })(e);
                  },
                  onChangeRowsPerPage: function (e) {
                    return (function (e) {
                      var t = Object(u.a)({}, C);
                      (t.por_pagina = e), (t.pagina = 1), R(t);
                    })(e);
                  },
                  sortServer: !0,
                  onSort: function (e, t) {
                    return (function (e, t) {
                      var a = Object(u.a)({}, C);
                      (a.sort_by = e.selector),
                        (a.sort_order = "asc" === t ? "a" : "d"),
                        R(a);
                    })(e, t);
                  },
                  title: "Puntos",
                  noHeader: !0,
                  striped: !0,
                  progressPending: n,
                  columns: Q,
                  data: a.data,
                  customStyles: U,
                  noDataComponent: Object(f.jsx)("p", {
                    className: "text-2xl font-bold mt-10 mb-10",
                    children:
                      "No se encontraron puntos con los par\xe1metros solicitados",
                  }),
                  progressComponent: Object(f.jsx)("p", {
                    className: "text-2xl font-bold mt-10 mb-10",
                    children: "Cargando puntos ...",
                  }),
                  paginationComponentOptions: {
                    rowsPerPageText: "Puntos por p\xe1gina",
                    rangeSeparatorText: "de",
                    noRowsPerPage: !1,
                    selectAllRowsItem: !1,
                    selectAllRowsItemText: "Todos",
                  },
                }),
              }),
              c ? Object(f.jsx)(P, {}) : null,
              o ? Object(f.jsx)(A, {}) : null,
              d ? Object(f.jsx)(F, {}) : null,
              m ? Object(f.jsx)(E, {}) : null,
              p ? Object(f.jsx)(D, {}) : null,
              r ? Object(f.jsx)(H, {}) : null,
              g ? Object(f.jsx)(V, {}) : null,
              z
                ? Object(f.jsx)(S, {
                    modalTitle: "Carga Masiva Puntos",
                    modalSubtitle: "Carga de archivo excel",
                    exampleFile: T,
                    exampleFileName: "carga_puntos.xlsx",
                    showModalFunction: L,
                    uploadEndpoint: "puntos/carga_masiva",
                  })
                : null,
            ],
          });
        },
        W = Object(l.createContext)(),
        U = function (e) {
          var t = e.title,
            a = e.detail;
          return Object(f.jsxs)("div", {
            children: [
              Object(f.jsxs)("div", {
                className:
                  "flex flex-row items-center mb-1 mt-1 mr-1 bg-gray-300 rounded",
                children: [
                  Object(f.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: [
                      Object(f.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                        clipRule: "evenodd",
                      }),
                      Object(f.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                        clipRule: "evenodd",
                      }),
                    ],
                  }),
                  Object(f.jsx)("p", {
                    className: "font-bold ml-1 subpixel-antialiased",
                    children: t,
                  }),
                ],
              }),
              Object(f.jsx)("p", {
                className: "ml-7 font-medium mb-2 text-gray-600",
                children: a,
              }),
            ],
          });
        };
      var Q = function () {
        var e = Object(l.useContext)(W),
          t = e.datosInfoCabina,
          a = e.setDatosInfoCabina,
          s = e.setLoading,
          n = e.loading,
          i = e.setMostrarModalInformacionCabina;
        return (
          Object(l.useEffect)(function () {
            var e = {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            };
            h.a
              .get("http://190.12.101.198:5000//cabinas/" + t, e)
              .then(function (e) {
                a(e.data.result), s(!1);
              });
          }, []),
          Object(f.jsx)("div", {
            className: "fixed z-10 inset-0 overflow-y-auto py-10",
            children: Object(f.jsxs)("div", {
              className:
                "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
              children: [
                Object(f.jsx)("div", {
                  className: "fixed inset-0 transition-opacity",
                  "aria-hidden": "true",
                  children: Object(f.jsx)("div", {
                    className: "absolute inset-0 bg-gray-500 opacity-75",
                  }),
                }),
                Object(f.jsx)("span", {
                  className:
                    "hidden sm:inline-block sm:align-middle sm:h-screen",
                  "aria-hidden": "true",
                  children: "\u200b",
                }),
                Object(f.jsxs)("div", {
                  className:
                    "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "modal-headline",
                  children: [
                    Object(f.jsx)("div", {
                      className:
                        "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                      children: Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsx)("h1", {
                            className: "font-bold text-2xl text-white",
                            children: "Cabina",
                          }),
                          Object(f.jsx)("h2", {
                            className: "font-medium text-white mb-3",
                            children: "Informaci\xf3n extendida",
                          }),
                        ],
                      }),
                    }),
                    n
                      ? Object(f.jsxs)("div", {
                          className:
                            "flex flex-row justify-center items-center p-4 ",
                          children: [
                            Object(f.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className:
                                "h-8 w-8 animate-spin mr-3 text-white mt-0.5",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                clipRule: "evenodd",
                              }),
                            }),
                            Object(f.jsx)("p", {
                              className: "text-2xl text-white",
                              children: "Cargando cabina ...",
                            }),
                          ],
                        })
                      : Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "bg-gray-100 rounded grid grid-cols-2 p-4 m-4",
                              children: [
                                Object(f.jsx)(U, {
                                  title: "ID Cabina",
                                  detail: t.id_config,
                                }),
                                Object(f.jsx)(U, {
                                  title: "C\xf3digo Cabina",
                                  detail: t.codigo_cabina,
                                }),
                                Object(f.jsx)(U, {
                                  title: "Fecha de Instalaci\xf3n",
                                  detail: t.fecha_instalacion,
                                }),
                                Object(f.jsx)(U, {
                                  title: "Observaciones",
                                  detail: t.observaciones,
                                }),
                              ],
                            }),
                            Object(f.jsx)("div", {
                              className: "flex justify-end p-4",
                              children: Object(f.jsx)("button", {
                                className:
                                  "bg-green-500 text-white px-10 py-2 rounded font-medium",
                                onClick: function () {
                                  a({
                                    id_config: "",
                                    codigo_cabina: "",
                                    fecha_instalacion: "",
                                    observaciones: "",
                                  }),
                                    s(!0),
                                    i(!1);
                                },
                                children: "Entendido",
                              }),
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var G = function () {
        var e = Object(l.useContext)(W),
          t = e.datosInfoPunto,
          a = e.setDatosInfoPunto,
          s = e.setLoading,
          n = e.loading,
          i = e.setMostrarModalInformacion;
        return (
          Object(l.useEffect)(function () {
            var e = {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            };
            h.a
              .get("http://190.12.101.198:5000//puntos/" + t, e)
              .then(function (e) {
                a(e.data.result), s(!1);
              });
          }, []),
          Object(f.jsx)("div", {
            className: "fixed z-10 inset-0 overflow-y-auto py-10",
            children: Object(f.jsxs)("div", {
              className:
                "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
              children: [
                Object(f.jsx)("div", {
                  className: "fixed inset-0 transition-opacity",
                  "aria-hidden": "true",
                  children: Object(f.jsx)("div", {
                    className: "absolute inset-0 bg-gray-500 opacity-75",
                  }),
                }),
                Object(f.jsx)("span", {
                  className:
                    "hidden sm:inline-block sm:align-middle sm:h-screen",
                  "aria-hidden": "true",
                  children: "\u200b",
                }),
                Object(f.jsxs)("div", {
                  className:
                    "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "modal-headline",
                  children: [
                    Object(f.jsx)("div", {
                      className:
                        "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                      children: Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsx)("h1", {
                            className: "font-bold text-2xl text-white",
                            children: "Punto",
                          }),
                          Object(f.jsx)("h2", {
                            className: "font-medium text-white mb-3",
                            children: "Informaci\xf3n extendida",
                          }),
                        ],
                      }),
                    }),
                    n
                      ? Object(f.jsxs)("div", {
                          className:
                            "flex flex-row justify-center items-center p-4 ",
                          children: [
                            Object(f.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className:
                                "h-8 w-8 animate-spin mr-3 text-white mt-0.5",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                clipRule: "evenodd",
                              }),
                            }),
                            Object(f.jsx)("p", {
                              className: "text-2xl text-white",
                              children: "Cargando punto ...",
                            }),
                          ],
                        })
                      : Object(f.jsxs)("div", {
                          children: [
                            Object(f.jsxs)("div", {
                              className:
                                "bg-gray-100 rounded grid grid-cols-2 p-4 m-4",
                              children: [
                                Object(f.jsx)(U, {
                                  title: "ID Punto",
                                  detail: t.id_punto,
                                }),
                                Object(f.jsx)(U, {
                                  title: "ID Tag",
                                  detail: t.tag,
                                }),
                                Object(f.jsx)(U, {
                                  title: "Fecha de Instalaci\xf3n",
                                  detail: t.fecha_instalacion,
                                }),
                                Object(f.jsx)(U, {
                                  title: "EPC",
                                  detail: t.epc,
                                }),
                                Object(f.jsx)(U, {
                                  title: "V\xeda",
                                  detail: t.via,
                                }),
                                Object(f.jsx)(U, {
                                  title: "Baliza",
                                  detail: t.baliza,
                                }),
                                Object(f.jsx)(U, {
                                  title: "Latitud",
                                  detail: t.latitud,
                                }),
                                Object(f.jsx)(U, {
                                  title: "Longitud",
                                  detail: t.longitud,
                                }),
                                Object(f.jsx)(U, {
                                  title: "Asociado a",
                                  detail: t.asociado_a,
                                }),
                                Object(f.jsx)(U, {
                                  title: "Progresivas",
                                  detail: t.progresivas,
                                }),
                                Object(f.jsx)(U, {
                                  title: "Observaciones",
                                  detail: t.observaciones,
                                }),
                              ],
                            }),
                            Object(f.jsx)("div", {
                              className: "flex justify-end p-4",
                              children: Object(f.jsx)("button", {
                                className:
                                  "bg-green-500 text-white px-10 py-2 rounded font-medium",
                                onClick: function () {
                                  a({
                                    id_punto: "",
                                    id_tag: "",
                                    epc: "",
                                    fecha_instalacion: "",
                                    via: "",
                                    baliza: "",
                                    asociado_a: "",
                                    progresivas: "",
                                    latitud: "",
                                    longitud: "",
                                    observaciones: "",
                                  }),
                                    s(!0),
                                    i(!1);
                                },
                                children: "Entendido",
                              }),
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var Z = function () {
          var e = Object(l.useContext)(W),
            t = e.getLecturas,
            a = e.getLecturasConFiltros,
            n = e.lecturas,
            i = e.loadingLecturas,
            c = e.setDatosInfoPunto,
            o = e.setDatosInfoCabina,
            r = e.setMostrarModalInformacion,
            d = e.setMostrarModalInformacionCabina,
            b = e.mostrarModalInformacion,
            m = e.mostrarModalInformacionCabina;
          Object(l.useEffect)(function () {
            t();
          }, []),
            Object(l.useEffect)(function () {}, [n]);
          var x = function (e) {
              if (void 0 !== e) var t = new Date(e);
              else t = new Date();
              var a = "" + (t.getMonth() + 1),
                l = "" + t.getDate(),
                s = t.getFullYear();
              return (
                a.length < 2 && (a = "0" + a),
                l.length < 2 && (l = "0" + l),
                [s, a, l].join("-")
              );
            },
            h = Object(l.useState)({
              desde: (function () {
                var e = new Date(),
                  t = new Date().setDate(e.getDate() - 15);
                return x(t);
              })(),
              hasta: x(),
              buscar_por: "cabina",
              parametro_busqueda: "",
              sort_by: "fecha_lectura",
              sort_order: "d",
              pagina: 1,
              por_pagina: 50,
            }),
            p = Object(j.a)(h, 2),
            v = p[0],
            g = p[1],
            N = Object(l.useState)(!0),
            y = Object(j.a)(N, 2),
            C = y[0],
            R = y[1],
            M = Object(l.useState)(5),
            z = Object(j.a)(M, 2),
            L = z[0],
            _ = z[1];
          Object(l.useEffect)(
            function () {
              a(v);
            },
            [v.pagina]
          ),
            Object(l.useEffect)(
              function () {
                a(v);
              },
              [v.por_pagina]
            ),
            Object(l.useEffect)(
              function () {
                a(v);
              },
              [v.sort_by, v.sort_order]
            ),
            (function (e, t) {
              var a = Object(l.useRef)();
              Object(l.useEffect)(
                function () {
                  a.current = e;
                },
                [e]
              ),
                Object(l.useEffect)(
                  function () {
                    if (null !== t) {
                      var e = setInterval(function () {
                        a.current();
                      }, t);
                      return function () {
                        return clearInterval(e);
                      };
                    }
                  },
                  [t]
                );
            })(function () {
              C && a(v);
            }, 1e3 * L);
          var S = function (e) {
              var t = Object(u.a)({}, v);
              (t[e.target.name] = e.target.value), g(t);
            },
            k = function (e) {
              var t = Object(u.a)({}, v);
              (t[e] = ""), g(t);
            },
            I = {
              headRow: {
                style: {
                  borderTopStyle: "solid",
                  borderTopWidth: "1px",
                  borderTopColor: w.defaultThemes.default.divider.default,
                },
              },
              headCells: {
                style: {
                  "&:not(:last-of-type)": {
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderRightColor: w.defaultThemes.default.divider.default,
                    fontSize: 16,
                    fontWeight: 700,
                  },
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderRightColor: w.defaultThemes.default.divider.default,
                  fontSize: 16,
                  fontWeight: 700,
                },
              },
              cells: {
                style: {
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderRightColor: w.defaultThemes.default.divider.default,
                },
              },
            },
            B = s.a.useMemo(function () {
              return [
                {
                  name: "ID Cabina",
                  selector: "id_cabina",
                  sortable: !0,
                  grow: 0.4,
                  cell: function (e) {
                    return Object(f.jsxs)("div", {
                      className: "flex flex-row",
                      children: [
                        Object(f.jsx)("button", {
                          className: "bg-green-500 text-white p-1 rounded mr-3",
                          onClick: function () {
                            o(e.id_cabina), d(!0);
                          },
                          children: Object(f.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: Object(f.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                              clipRule: "evenodd",
                            }),
                          }),
                        }),
                        Object(f.jsx)("p", {
                          className: "font-small mt-1",
                          style: { fontSize: 15 },
                          children: e.id_cabina,
                        }),
                      ],
                    });
                  },
                },
                {
                  name: "ID Punto",
                  selector: "id_punto",
                  sortable: !0,
                  grow: 0.4,
                  cell: function (e) {
                    return Object(f.jsxs)("div", {
                      className: "flex flex-row",
                      children: [
                        Object(f.jsx)("button", {
                          className: "bg-green-500 text-white p-1 rounded mr-3",
                          onClick: function () {
                            c(e.id_punto), r(!0);
                          },
                          children: Object(f.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: Object(f.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                              clipRule: "evenodd",
                            }),
                          }),
                        }),
                        Object(f.jsx)("p", {
                          className: "font-small mt-1",
                          style: { fontSize: 15 },
                          children: e.id_punto,
                        }),
                      ],
                    });
                  },
                },
                {
                  name: "Fecha Lectura",
                  selector: "fecha_lectura",
                  sortable: !0,
                  grow: 0.6,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.fecha_lectura,
                      }),
                    });
                  },
                },
                {
                  name: "Fecha Carga",
                  selector: "fecha_carga",
                  sortable: !0,
                  grow: 0.6,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.fecha_carga,
                      }),
                    });
                  },
                },
                {
                  name: "EPC",
                  selector: "epc",
                  sortable: !0,
                  grow: 0.8,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.epc,
                      }),
                    });
                  },
                },
                {
                  name: "V\xeda",
                  selector: "via",
                  sortable: !0,
                  grow: 0.8,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.via,
                      }),
                    });
                  },
                },
                {
                  name: "Asociado a",
                  selector: "asociado_a",
                  sortable: !0,
                  cell: function (e) {
                    return Object(f.jsx)("div", {
                      children: Object(f.jsx)("p", {
                        className: "font-small",
                        style: { fontSize: 15 },
                        children: e.asociado_a,
                      }),
                    });
                  },
                },
              ];
            }, []);
          return Object(f.jsxs)("div", {
            className: "m-4 rounded bg-blue-600 shadow-lg text-left mb-auto",
            children: [
              Object(f.jsxs)("div", {
                className: "flex rounded flex-row justify-between",
                children: [
                  Object(f.jsxs)("div", {
                    className: "p-4 rounded pb-0 flex flex-row",
                    children: [
                      Object(f.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-10 w-10 mt-4 text-white",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: [
                          Object(f.jsx)("path", {
                            d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z",
                          }),
                          Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
                            clipRule: "evenodd",
                          }),
                        ],
                      }),
                      Object(f.jsx)("h1", {
                        className: "text-white text-3xl mb-4 mt-5 font-medium",
                        children: "Listado de Lecturas",
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex flex-row mr-4 mt-4",
                    children: [
                      Object(f.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          Object(f.jsx)("label", {
                            htmlFor: "segundos",
                            className: "font-bold text-md text-white",
                            children: Object(f.jsxs)("div", {
                              className: "flex flex-row",
                              children: [
                                Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5 mt-0.5 mr-1",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: Object(f.jsx)("path", {
                                    "fill-rule": "evenodd",
                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
                                    "clip-rule": "evenodd",
                                  }),
                                }),
                                "Refrescar",
                              ],
                            }),
                          }),
                          Object(f.jsxs)("div", {
                            className: "flex flex-row justify-between",
                            children: [
                              Object(f.jsxs)("button", {
                                onClick: function (e) {
                                  R(!C);
                                },
                                id: "checkboxRefresh",
                                name: "checkboxRefresh",
                                className: C
                                  ? "cursor-pointer select-none bg-green-500 text-white rounded h-8 w-12 mt-0.5 mr-1 flex justify-center items-center"
                                  : "cursor-pointer select-none bg-red-500 text-white rounded h-8 w-12 mt-0.5 mr-1 flex justify-center items-center",
                                children: [
                                  " ",
                                  Object(f.jsx)("p", {
                                    className: "font-bold text-sm",
                                    children: C ? "S\xed" : "No",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("input", {
                                name: "segundosRefresh",
                                id: "segundosRefresh",
                                type: "tel",
                                maxLength: "4",
                                disabled: C,
                                className: "rounded w-12 px-2 h-8 mt-0.5",
                                value: L,
                                onChange: function (e) {
                                  return isNaN(e.target.value)
                                    ? null
                                    : (function (e) {
                                        _(e.target.value);
                                      })(e);
                                },
                                placeholder: "seg",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        className:
                          "flex flex-col ml-2 border-2 border-b-0 border-t-0 border-r-0 pl-2",
                        children: [
                          Object(f.jsx)("label", {
                            htmlFor: "fechaDesde",
                            className: "font-bold text-md text-white",
                            children: Object(f.jsxs)("div", {
                              className: "flex flex-row",
                              children: [
                                Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5 mr-1 mt-0.5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                                "Desde",
                              ],
                            }),
                          }),
                          Object(f.jsxs)("div", {
                            className: "flex flex-row items-center",
                            children: [
                              Object(f.jsx)("input", {
                                name: "desde",
                                id: "fechaDesde",
                                type: "date",
                                onKeyPress: function (e) {
                                  return "Enter" === e.code ? a(v) : null;
                                },
                                value: v.desde,
                                className: "rounded py-0 px-4 h-8 mr-1 mt-0.5",
                                onChange: function (e) {
                                  return S(e);
                                },
                              }),
                              Object(f.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className:
                                  "h-5 w-5 text-white mr-2 cursor-pointer mt-0.5",
                                onClick: function () {
                                  return k("desde");
                                },
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                  clipRule: "evenodd",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        className:
                          "flex flex-col border-2 border-b-0 border-t-0 border-l-0 pr-1.5",
                        children: [
                          Object(f.jsx)("label", {
                            htmlFor: "fechaHasta",
                            className: "font-bold text-md text-white",
                            children: Object(f.jsxs)("div", {
                              className: "flex flex-row",
                              children: [
                                Object(f.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5 mr-1 mt-0.5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                                " ",
                                "Hasta",
                                " ",
                              ],
                            }),
                          }),
                          Object(f.jsxs)("div", {
                            className: "flex flex-row items-center",
                            children: [
                              Object(f.jsx)("input", {
                                name: "hasta",
                                id: "fechaHasta",
                                type: "date",
                                onKeyPress: function (e) {
                                  return "Enter" === e.code ? a(v) : null;
                                },
                                value: v.hasta,
                                className: "rounded py-0 px-4 h-8 mt-0.5",
                                onChange: function (e) {
                                  return S(e);
                                },
                              }),
                              Object(f.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className:
                                  "h-5 w-5 text-white ml-1 cursor-pointer mt-0.5",
                                onClick: function () {
                                  return k("hasta");
                                },
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                  clipRule: "evenodd",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        className: "flex flex-col ml-2 ",
                        children: [
                          Object(f.jsx)("label", {
                            htmlFor: "selectorTipo",
                            className: "font-bold text-md text-white",
                            children: Object(f.jsxs)("div", {
                              className: "flex flex-row",
                              children: [
                                Object(f.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5 mt-0.5 mr-1",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  children: [
                                    Object(f.jsx)("path", {
                                      d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z",
                                    }),
                                    Object(f.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                                "Buscar por",
                              ],
                            }),
                          }),
                          Object(f.jsxs)("select", {
                            name: "buscar_por",
                            id: "selectorTipo",
                            className: "rounded py-0 w-30 px-4 h-8 mt-0.5",
                            onChange: function (e) {
                              return S(e);
                            },
                            children: [
                              Object(f.jsx)("option", {
                                value: "cabina",
                                children: "Cabina",
                              }),
                              Object(f.jsx)("option", {
                                value: "punto",
                                children: "Punto",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(f.jsx)("div", {
                        className:
                          "flex flex-col ml-2 border-2 border-b-0 border-t-0 border-l-0 pr-2",
                        children: Object(f.jsx)("input", {
                          name: "parametro_busqueda",
                          id: "parametro_busqueda",
                          type: "number",
                          style: { marginTop: 25.499 },
                          className: "rounded w-12 px-2 h-8",
                          onChange: function (e) {
                            return S(e);
                          },
                          onKeyPress: function (e) {
                            return "Enter" === e.code ? a(v) : null;
                          },
                          placeholder: "ID",
                        }),
                      }),
                      Object(f.jsx)("div", {
                        className: "flex flex-col ml-2 mt-6",
                        children: Object(f.jsx)("button", {
                          className:
                            "rounded mb-4 px-2 py-1 bg-green-500 text-white rounded-md font-medium",
                          onClick: function () {
                            return a(v);
                          },
                          children: Object(f.jsxs)("div", {
                            className: "flex flex-row",
                            children: [
                              Object(f.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5 mr-1 mt-0.5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: Object(f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                                  clipRule: "evenodd",
                                }),
                              }),
                              "Buscar",
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(f.jsx)("div", {
                className: "bg-blue-600 p-4",
                children: Object(f.jsx)(O.a, {
                  pagination: !0,
                  paginationTotalRows: n.total,
                  paginationServer: !0,
                  paginationPerPage: v.por_pagina,
                  paginationRowsPerPageOptions: [50, 100, 250, 500, 750, 1e3],
                  onChangePage: function (e) {
                    return (function (e) {
                      var t = Object(u.a)({}, v);
                      (t.pagina = e), g(t);
                    })(e);
                  },
                  onChangeRowsPerPage: function (e) {
                    return (function (e) {
                      var t = Object(u.a)({}, v);
                      (t.por_pagina = e), (t.pagina = 1), g(t);
                    })(e);
                  },
                  sortServer: !0,
                  onSort: function (e, t) {
                    return (function (e, t) {
                      var a = Object(u.a)({}, v);
                      (a.sort_by = e.selector),
                        (a.sort_order = "asc" === t ? "a" : "d"),
                        g(a);
                    })(e, t);
                  },
                  className: "pt-2",
                  title: "Lecturas",
                  noHeader: !0,
                  striped: !0,
                  progressPending: i,
                  columns: B,
                  data: n.data,
                  customStyles: I,
                  noDataComponent: Object(f.jsx)("p", {
                    className: "text-2xl font-bold mt-10 mb-10",
                    children:
                      "No se encontraron lecturas con los par\xe1metros solicitados",
                  }),
                  progressComponent: Object(f.jsx)("p", {
                    className: "text-2xl font-bold mt-10 mb-10",
                    children: "Cargando lecturas ...",
                  }),
                  paginationComponentOptions: {
                    rowsPerPageText: "Lecturas por p\xe1gina",
                    rangeSeparatorText: "de",
                    noRowsPerPage: !1,
                    selectAllRowsItem: !1,
                    selectAllRowsItemText: "Todas",
                  },
                }),
              }),
              b ? Object(f.jsx)(G, {}) : null,
              m ? Object(f.jsx)(Q, {}) : null,
            ],
          });
        },
        Y = Object(l.createContext)();
      var K = function () {
        var e = Object(l.useContext)(Y),
          t = e.datosFormulario,
          a = e.setDatosFormulario,
          s = e.setMostrarModalConfirmacionRemover,
          n = e.removerDeListaNegra,
          i = e.loading;
        return Object(f.jsx)("div", {
          className: "fixed z-10 inset-0 overflow-y-auto py-10",
          children: Object(f.jsxs)("div", {
            className:
              "flex items-end justify-center min-h-screen pt-4 px-6 pb-20 text-center sm:block sm:p-0",
            children: [
              Object(f.jsx)("div", {
                className: "fixed inset-0 transition-opacity",
                "aria-hidden": "true",
                children: Object(f.jsx)("div", {
                  className: "absolute inset-0 bg-gray-500 opacity-75",
                }),
              }),
              Object(f.jsx)("span", {
                className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                "aria-hidden": "true",
                children: "\u200b",
              }),
              Object(f.jsxs)("div", {
                className:
                  "inline-block rounded align-bottom bg-blue-600 text-left overflow-hidden shadow-xl lg:align-middle transform transition-all w-full lg:w-2/5",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                children: [
                  Object(f.jsx)("div", {
                    className:
                      "flex justify-between bg-blue-800 border-b-2 p-4 pb-0 ",
                    children: Object(f.jsxs)("div", {
                      children: [
                        Object(f.jsx)("h1", {
                          className: "font-bold text-2xl text-white",
                          children: "Punto",
                        }),
                        Object(f.jsx)("h2", {
                          className: "font-medium text-white mb-3",
                          children:
                            "Confirmaci\xf3n de remoci\xf3n de lista negra",
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsx)("div", {
                    className: "bg-blue-600",
                    children: Object(f.jsxs)("div", {
                      className:
                        "flex flex-row items-center p-4 bg-yellow-500 p-4 m-4 rounded",
                      children: [
                        Object(f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-7 w-7 text-white mt-1",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                            clipRule: "evenodd",
                          }),
                        }),
                        Object(f.jsxs)("p", {
                          className: "font-medium text-xl text-white ml-2",
                          children: [
                            "\xa1Atenci\xf3n! Vas a ",
                            Object(f.jsx)("b", { children: "remover" }),
                            " de la lista negra el siguiente punto",
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(f.jsxs)("div", {
                    className:
                      "bg-gray-100 rounded grid grid-cols-2 p-4 m-4 mt-0",
                    children: [
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center mb-1 mt-1 mr-1 bg-gray-300 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "ID Punto",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.id_punto,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mt-1 rounded ",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "ID Tag",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.id_tag,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Fecha de Instalaci\xf3n",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.fecha_instalacion,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "EPC",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2  text-gray-600",
                            children: t.epc,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "V\xeda",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.via,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Baliza",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.baliza,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Latitud",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.latitud,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Longitud",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.longitud,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 mr-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Asociado a",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.asociado_a,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Progresivas",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium mb-2 text-gray-600",
                            children: t.progresivas,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "flex flex-row items-center bg-gray-300 mb-1 rounded",
                            children: [
                              Object(f.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: [
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                  Object(f.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                    clipRule: "evenodd",
                                  }),
                                ],
                              }),
                              Object(f.jsx)("p", {
                                className:
                                  "font-bold ml-1 subpixel-antialiased",
                                children: "Observaciones",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className: "ml-7 font-medium  text-gray-600",
                            children: t.observaciones,
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex justify-between p-4",
                    children: [
                      Object(f.jsx)("button", {
                        className:
                          "bg-red-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          a({
                            id_punto: "",
                            id_tag: "",
                            epc: "",
                            fecha_instalacion: "",
                            via: "",
                            baliza: "",
                            asociado_a: "",
                            progresivas: "",
                            latitud: "",
                            longitud: "",
                            observaciones: "",
                          }),
                            s(!1);
                        },
                        children: "Cancelar",
                      }),
                      Object(f.jsx)("button", {
                        className: i
                          ? "bg-green-500 text-white px-16 py-2 rounded font-medium"
                          : "bg-green-500 text-white px-10 py-2 rounded font-medium",
                        onClick: function () {
                          return n();
                        },
                        children: i
                          ? Object(f.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-5 w-5 animate-spin",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: Object(f.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                clipRule: "evenodd",
                              }),
                            })
                          : "Confirmar",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var J = function () {
        var e = Object(l.useContext)(Y),
          t = e.getPuntosListaNegra,
          a = e.puntosListaNegra,
          n = e.loadingPuntos,
          i = e.mostrarModalConfirmacionRemover,
          c = e.setDatosFormulario,
          o = e.setMostrarModalConfirmacionRemover,
          r = e.permisos,
          d = e.datosFiltros,
          b = e.setDatosFiltros;
        Object(l.useEffect)(function () {
          t();
        }, []),
          Object(l.useEffect)(
            function () {
              t();
            },
            [d.sort_by, d.sort_order]
          ),
          Object(l.useEffect)(function () {}, [a]);
        var m = {
            headRow: {
              style: {
                borderTopStyle: "solid",
                borderTopWidth: "1px",
                borderTopColor: w.defaultThemes.default.divider.default,
              },
            },
            headCells: {
              style: {
                "&:not(:last-of-type)": {
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderRightColor: w.defaultThemes.default.divider.default,
                  fontSize: 16,
                  fontWeight: 700,
                },
                borderRightStyle: "solid",
                borderRightWidth: "1px",
                borderRightColor: w.defaultThemes.default.divider.default,
                fontSize: 16,
                fontWeight: 700,
              },
            },
            cells: {
              style: {
                borderRightStyle: "solid",
                borderRightWidth: "1px",
                borderRightColor: w.defaultThemes.default.divider.default,
              },
            },
          },
          j = s.a.useMemo(function () {
            return [
              {
                name: "ID Punto",
                selector: "id_punto",
                sortable: !0,
                maxWidth: "130px",
                cell: function (e) {
                  return Object(f.jsx)("div", {
                    children: Object(f.jsx)("p", {
                      className: "font-small",
                      style: { fontSize: 15 },
                      children: e.id_punto,
                    }),
                  });
                },
              },
              {
                name: "ID Tag",
                selector: "id_tag",
                maxWidth: "10px",
                sortable: !0,
                cell: function (e) {
                  return Object(f.jsx)("div", {
                    children: Object(f.jsx)("p", {
                      className: "font-small",
                      style: { fontSize: 15 },
                      children: e.id_tag,
                    }),
                  });
                },
              },
              {
                name: "EPC",
                selector: "epc",
                sortable: !0,
                cell: function (e) {
                  return Object(f.jsx)("div", {
                    children: Object(f.jsx)("p", {
                      className: "font-small",
                      style: { fontSize: 15 },
                      children: e.epc,
                    }),
                  });
                },
              },
              {
                name: "Fecha Instalaci\xf3n",
                selector: "fecha_instalacion",
                sortable: !0,
                grow: 1,
                cell: function (e) {
                  return Object(f.jsx)("div", {
                    children: Object(f.jsx)("p", {
                      className: "font-small",
                      style: { fontSize: 15 },
                      children: e.fecha_instalacion,
                    }),
                  });
                },
              },
              {
                name: "V\xeda",
                selector: "via",
                sortable: !0,
                cell: function (e) {
                  return Object(f.jsx)("div", {
                    children: Object(f.jsx)("p", {
                      className: "font-small",
                      style: { fontSize: 15 },
                      children: e.via,
                    }),
                  });
                },
              },
              {
                name: "Baliza",
                selector: "baliza",
                sortable: !0,
                cell: function (e) {
                  return Object(f.jsx)("div", {
                    children: Object(f.jsx)("p", {
                      className: "font-small",
                      style: { fontSize: 15 },
                      children: e.baliza,
                    }),
                  });
                },
              },
              {
                name: "Asociado a",
                selector: "asociado_a",
                sortable: !0,
                cell: function (e) {
                  return Object(f.jsx)("div", {
                    children: Object(f.jsx)("p", {
                      className: "font-small",
                      style: { fontSize: 15 },
                      children: e.asociado_a,
                    }),
                  });
                },
              },
              {
                name: "Progresivas",
                selector: "progresivas",
                sortable: !0,
                maxWidth: "130px",
                cell: function (e) {
                  return Object(f.jsx)("div", {
                    children: Object(f.jsx)("p", {
                      className: "font-small",
                      style: { fontSize: 15 },
                      children: e.progresivas,
                    }),
                  });
                },
              },
              {
                name: "Acciones",
                selector: "acciones",
                sortable: !1,
                grow: 0,
                omit: "admin" !== r,
                cell: function (e) {
                  return Object(f.jsx)("div", {
                    className: "flex flex-row ml-4",
                    children: Object(f.jsx)("button", {
                      className: "bg-green-500 text-white p-1 rounded mr-1",
                      onClick: function () {
                        c(e), o(!0);
                      },
                      children: Object(f.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: [
                          Object(f.jsx)("path", {
                            d: "M10 12a2 2 0 100-4 2 2 0 000 4z",
                          }),
                          Object(f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
                            clipRule: "evenodd",
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ];
          }, []);
        return Object(f.jsxs)("div", {
          className: "p-4 m-4 bg-blue-600 shadow-lg text-left mb-auto",
          children: [
            Object(f.jsx)("div", {
              className: "flex flex-row justify-between",
              children: Object(f.jsxs)("div", {
                className: "flex flex-row",
                children: [
                  Object(f.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-10 w-10 mt-1 text-white",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: [
                      Object(f.jsx)("path", {
                        d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z",
                      }),
                      Object(f.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
                        clipRule: "evenodd",
                      }),
                    ],
                  }),
                  Object(f.jsx)("h1", {
                    className: "text-white text-3xl mb-4 mt-2 font-medium",
                    children: "Lista Negra",
                  }),
                ],
              }),
            }),
            Object(f.jsx)(O.a, {
              pagination: !0,
              title: "Puntos",
              noHeader: !0,
              striped: !0,
              sortServer: !0,
              onSort: function (e, t) {
                return (function (e, t) {
                  var a = Object(u.a)({}, d);
                  (a.sort_by = e.selector),
                    (a.sort_order = "asc" === t ? "a" : "d"),
                    b(a);
                })(e, t);
              },
              progressPending: n,
              columns: j,
              data: a,
              customStyles: m,
              noDataComponent: Object(f.jsx)("p", {
                className: "text-2xl font-bold mt-10 mb-10",
                children: "No se encontraron puntos en la lista negra",
              }),
              progressComponent: Object(f.jsx)("p", {
                className: "text-2xl font-bold mt-10 mb-10",
                children: "Cargando lista negra ...",
              }),
              paginationComponentOptions: {
                rowsPerPageText: "Puntos por p\xe1gina",
                rangeSeparatorText: "de",
                noRowsPerPage: !1,
                selectAllRowsItem: !1,
                selectAllRowsItemText: "Todos",
              },
            }),
            i ? Object(f.jsx)(K, {}) : null,
          ],
        });
      };
      var X = function () {
          var e = Object(l.useState)(!1),
            t = Object(j.a)(e, 2),
            a = t[0],
            s = t[1];
          return (
            Object(l.useEffect)(function () {
              s("/login" !== window.location.pathname);
            }, []),
            Object(f.jsx)("div", {
              className: a
                ? "bg-blue-800 py-5 px-4 mt-4"
                : "bg-blue-800 py-5 px-4",
              children: Object(f.jsx)("p", {
                className: "text-white font-sans",
                children: "Sistema de Gesti\xf3n Ferroviario",
              }),
            })
          );
        },
        $ = Object(l.createContext)();
      var ee = function () {
          var e = Object(l.useContext)($).alert;
          return e
            ? Object(f.jsxs)("div", {
                className: "flex items-center bg-".concat(
                  e.category,
                  " rounded py-3 px-5 shadow-md mb-2 z-10"
                ),
                children: [
                  "red-300" === e.category
                    ? Object(f.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        className: "h-6 w-6 text-red-600",
                        children: Object(f.jsx)("path", {
                          fillRule: "evenodd",
                          d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                          clipRule: "evenodd",
                        }),
                      })
                    : null,
                  "yellow-300" === e.category
                    ? Object(f.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        className: "h-6 w-6 text-yellow-700",
                        children: Object(f.jsx)("path", {
                          fillRule: "evenodd",
                          d: "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
                          clipRule: "evenodd",
                        }),
                      })
                    : null,
                  "green-300" === e.category
                    ? Object(f.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        className: "h-6 w-6 text-green-600",
                        children: Object(f.jsx)("path", {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                          clipRule: "evenodd",
                        }),
                      })
                    : null,
                  Object(f.jsx)("p", {
                    className: "ml-4 font-bold text-gray-800",
                    children: e.msg,
                  }),
                ],
              })
            : Object(f.jsx)("div", {});
        },
        te = function (e, t) {},
        ae = function (e) {
          var t = Object(l.useContext)($).setAlert,
            a = Object(l.useReducer)(te, {}),
            s = Object(j.a)(a, 2),
            n =
              (s[0],
              s[1],
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }),
            i = Object(l.useState)([]),
            c = Object(j.a)(i, 2),
            o = c[0],
            r = c[1],
            m = Object(l.useState)(!1),
            u = Object(j.a)(m, 2),
            x = u[0],
            p = u[1],
            v = Object(l.useState)({}),
            g = Object(j.a)(v, 2),
            w = g[0],
            O = g[1],
            N = Object(l.useState)({}),
            y = Object(j.a)(N, 2),
            C = y[0],
            R = y[1],
            M = Object(l.useState)(!0),
            z = Object(j.a)(M, 2),
            L = z[0],
            _ = z[1],
            S = Object(l.useState)(!1),
            k = Object(j.a)(S, 2),
            I = k[0],
            B = k[1],
            P = Object(l.useState)(!1),
            A = Object(j.a)(P, 2),
            D = A[0],
            H = A[1],
            F = function (e) {
              var t = new Date(e);
              if (!isNaN(t.getTime())) {
                var a = t.getUTCDate().toString(),
                  l = (t.getUTCMonth() + 1).toString();
                return (
                  (a[1] ? a : "0" + a[0]) +
                  "/" +
                  (l[1] ? l : "0" + l[0]) +
                  "/" +
                  t.getFullYear()
                );
              }
            },
            E = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var a, l;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          p(!0),
                            (a = new Date()),
                            (l = new Date().setDate(a.getDate() - 15)),
                            (l = new Date(l).toLocaleDateString("en-GB")),
                            h.a
                              .get(
                                "http://190.12.101.198:5000/lecturas?page=1&per_page=50&desde=" +
                                  l +
                                  "&hasta=" +
                                  F(a),
                                n
                              )
                              .then(function (e) {
                                r(e.data.result), p(!1);
                              })
                              .catch(function (e) {
                                void 0 !== e.response
                                  ? 401 === e.response.status ||
                                    422 === e.response.status
                                    ? (localStorage.setItem("token", ""),
                                      localStorage.setItem(
                                        "alert",
                                        "La sesi\xf3n expir\xf3"
                                      ),
                                      localStorage.setItem(
                                        "alertColor",
                                        "yellow-500"
                                      ),
                                      p(!1),
                                      (window.location.href = "/login"))
                                    : (p(!1), console.log(e.response))
                                  : (t(
                                      "Hubo un error en el servidor",
                                      "red-300"
                                    ),
                                    p(!1),
                                    console.log(e));
                              });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            V = (function () {
              var e = Object(b.a)(
                d.a.mark(function e(a) {
                  var l, s, i, c, o, b, m, u, j;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          p(!0),
                            (l = a.pagina),
                            (s = a.por_pagina),
                            (i = a.sort_by),
                            (c = a.sort_order),
                            (o = "" !== a.desde ? F(a.desde) : "01/01/1970"),
                            (b =
                              "" !== a.hasta
                                ? F(a.hasta)
                                : new Date().toLocaleDateString()),
                            (m = "" !== a.buscar_por ? a.buscar_por : null),
                            (u =
                              "" !== a.parametro_busqueda
                                ? a.parametro_busqueda
                                : null),
                            (j = "lecturas?desde="
                              .concat(o, "&hasta=")
                              .concat(b, "&page=")
                              .concat(l, "&per_page=")
                              .concat(s, "&sort=")
                              .concat(i, "&ord=")
                              .concat(c)),
                            null !== m &&
                              null !== u &&
                              (j =
                                "cabina" === m
                                  ? j + "&id_cabina=" + u
                                  : j + "&id_punto=" + u),
                            h.a
                              .get("http://190.12.101.198:5000/" + j, n)
                              .then(function (e) {
                                r(e.data.result), p(!1);
                              })
                              .catch(function (e) {
                                void 0 !== e.response
                                  ? 401 === e.response.status ||
                                    422 === e.response.status
                                    ? (localStorage.setItem("token", ""),
                                      localStorage.setItem(
                                        "alert",
                                        "La sesi\xf3n expir\xf3"
                                      ),
                                      localStorage.setItem(
                                        "alertColor",
                                        "yellow-500"
                                      ),
                                      p(!1),
                                      (window.location.href = "/login"))
                                    : (p(!1), console.log(e.response))
                                  : (p(!1),
                                    t(
                                      "Hubo un error en el servidor",
                                      "red-300"
                                    ),
                                    console.log(e));
                              });
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(l.useEffect)(function () {}, []),
            Object(f.jsx)(W.Provider, {
              value: {
                getLecturas: E,
                lecturas: o,
                setLecturas: r,
                loadingLecturas: x,
                setLoadingLecturas: p,
                datosInfoPunto: w,
                setDatosInfoPunto: O,
                datosInfoCabina: C,
                setDatosInfoCabina: R,
                loading: L,
                setLoading: _,
                mostrarModalInformacion: I,
                setMostrarModalInformacion: B,
                mostrarModalInformacionCabina: D,
                setMostrarModalInformacionCabina: H,
                formatDate: F,
                getLecturasConFiltros: V,
              },
              children: e.children,
            })
          );
        },
        le = function (e, t) {},
        se = function (e) {
          var t = Object(l.useContext)($).setAlert,
            a = Object(l.useReducer)(le, {}),
            s = Object(j.a)(a, 2),
            n =
              (s[0],
              s[1],
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }),
            i = localStorage.getItem("permisos"),
            c = Object(l.useState)(!1),
            o = Object(j.a)(c, 2),
            r = o[0],
            m = o[1],
            x = Object(l.useState)(!1),
            p = Object(j.a)(x, 2),
            v = p[0],
            g = p[1],
            w = Object(l.useState)(!1),
            O = Object(j.a)(w, 2),
            y = O[0],
            C = O[1],
            R = Object(l.useState)(!1),
            M = Object(j.a)(R, 2),
            z = M[0],
            L = M[1],
            _ = Object(l.useState)(!1),
            S = Object(j.a)(_, 2),
            k = S[0],
            I = S[1],
            B = Object(l.useState)(!1),
            P = Object(j.a)(B, 2),
            A = P[0],
            D = P[1],
            H = Object(l.useState)(!1),
            F = Object(j.a)(H, 2),
            E = F[0],
            V = F[1],
            T = Object(l.useState)(!1),
            q = Object(j.a)(T, 2),
            W = q[0],
            U = q[1],
            Q = Object(l.useState)([]),
            G = Object(j.a)(Q, 2),
            Z = G[0],
            Y = G[1],
            K = function (e) {
              if (void 0 !== e) var t = new Date(e);
              else t = new Date();
              var a = "" + (t.getMonth() + 1),
                l = "" + t.getDate(),
                s = t.getFullYear();
              return (
                a.length < 2 && (a = "0" + a),
                l.length < 2 && (l = "0" + l),
                [s, a, l].join("-")
              );
            },
            J = Object(l.useState)({
              codigo_cabina: "",
              fecha_instalacion: K(),
              id_config: "",
              observaciones: "",
            }),
            X = Object(j.a)(J, 2),
            ee = X[0],
            te = X[1],
            ae = Object(l.useState)({
              pagina: 1,
              por_pagina: 10,
              sort_by: "id_config",
              sort_order: "a",
            }),
            se = Object(j.a)(ae, 2),
            ne = se[0],
            ie = se[1],
            ce = function (e) {
              var t = new Date(e);
              if (!isNaN(t.getTime())) {
                var a = t.getUTCDate().toString(),
                  l = (t.getUTCMonth() + 1).toString();
                return (
                  (a[1] ? a : "0" + a[0]) +
                  "/" +
                  (l[1] ? l : "0" + l[0]) +
                  "/" +
                  t.getFullYear()
                );
              }
            },
            oe = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          U(!0),
                            h.a
                              .get(
                                "http://190.12.101.198:5000/" +
                                  "cabinas?page="
                                    .concat(ne.pagina, "&per_page=")
                                    .concat(ne.por_pagina, "&sort=")
                                    .concat(ne.sort_by, "&ord=")
                                    .concat(ne.sort_order),
                                n
                              )
                              .then(function (e) {
                                Y(e.data.result), U(!1);
                              })
                              .catch(function (e) {
                                void 0 !== e.response
                                  ? (401 !== e.response.status &&
                                      422 !== e.response.status) ||
                                    (localStorage.setItem("token", ""),
                                    U(!1),
                                    localStorage.setItem(
                                      "alert",
                                      "La sesi\xf3n expir\xf3"
                                    ),
                                    localStorage.setItem(
                                      "alertColor",
                                      "yellow-500"
                                    ),
                                    (window.location.href = "/login"))
                                  : (U(!1),
                                    t(
                                      "Hubo un error recuperando las cabinas",
                                      "red-300"
                                    ),
                                    console.log(e.response));
                              });
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            re = (function () {
              var e = Object(b.a)(
                d.a.mark(function e(a) {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          U(!0),
                            "" !== a
                              ? h.a
                                  .get(
                                    "http://190.12.101.198:5000/" +
                                      "cabinas/".concat(a),
                                    n
                                  )
                                  .then(function (e) {
                                    !0 === e.data.exito
                                      ? (Y({ data: [e.data.result], total: 1 }),
                                        U(!1))
                                      : (Y({ data: [], total: 0 }), U(!1));
                                  })
                                  .catch(function (e) {
                                    void 0 !== e.response
                                      ? (401 !== e.response.status &&
                                          422 !== e.response.status) ||
                                        (localStorage.setItem("token", ""),
                                        U(!1),
                                        localStorage.setItem(
                                          "alert",
                                          "La sesi\xf3n expir\xf3"
                                        ),
                                        localStorage.setItem(
                                          "alertColor",
                                          "yellow-500"
                                        ),
                                        (window.location.href = "/login"))
                                      : (U(!1),
                                        t(
                                          "Hubo un error buscando la cabina",
                                          "red-300"
                                        ),
                                        console.log(e.response));
                                  })
                              : oe();
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            de = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var a;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          V(!0),
                            ((a = Object(u.a)({}, ee)).fecha_instalacion = ce(
                              ee.fecha_instalacion
                            )),
                            h.a
                              .post(
                                "http://190.12.101.198:5000/cabinas/new",
                                a,
                                n
                              )
                              .then(function (e) {
                                !0 === e.data.exito
                                  ? (te({
                                      codigo_cabina: "",
                                      fecha_instalacion: "",
                                      id_config: "",
                                      observaciones: "",
                                    }),
                                    I(!1),
                                    oe(),
                                    V(!1),
                                    t(
                                      "Cabina creada exitosamente",
                                      "green-300"
                                    ))
                                  : (te({
                                      codigo_cabina: "",
                                      fecha_instalacion: "",
                                      id_config: "",
                                      observaciones: "",
                                    }),
                                    I(!1),
                                    V(!1),
                                    t(e.data.message, "red-300"));
                              })
                              .catch(function (e) {
                                void 0 !== e.response
                                  ? (401 !== e.response.status &&
                                      422 !== e.response.status) ||
                                    (localStorage.setItem("token", ""),
                                    localStorage.setItem(
                                      "alert",
                                      "La sesi\xf3n expir\xf3"
                                    ),
                                    localStorage.setItem(
                                      "alertColor",
                                      "yellow-500"
                                    ),
                                    V(!1),
                                    (window.location.href = "/login"))
                                  : (I(!1),
                                    V(!1),
                                    t(
                                      "Hubo un error creando la cabina",
                                      "red-300"
                                    ),
                                    console.log(e.response));
                              });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            be = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var a;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          V(!0),
                            ((a = Object(u.a)({}, ee)).fecha_instalacion = ce(
                              ee.fecha_instalacion
                            )),
                            delete a.id_config,
                            h.a
                              .put(
                                "http://190.12.101.198:5000/cabinas/" +
                                  ee.id_config,
                                a,
                                n
                              )
                              .then(function (e) {
                                !0 === e.data.exito
                                  ? (L(!1),
                                    oe(),
                                    V(!1),
                                    t(
                                      "Cabina editada exitosamente",
                                      "green-300"
                                    ))
                                  : (L(!1),
                                    V(!1),
                                    t(e.data.message, "red-300"));
                              })
                              .catch(function (e) {
                                void 0 !== e.response
                                  ? (401 !== e.response.status &&
                                      422 !== e.response.status) ||
                                    (localStorage.setItem("token", ""),
                                    localStorage.setItem(
                                      "alert",
                                      "La sesi\xf3n expir\xf3"
                                    ),
                                    localStorage.setItem(
                                      "alertColor",
                                      "yellow-500"
                                    ),
                                    V(!1),
                                    console.log(e.response),
                                    (window.location.href = "/login"))
                                  : (L(!1),
                                    V(!1),
                                    t(
                                      "Hubo un error editando la cabina",
                                      "red-300"
                                    ),
                                    console.log(e.response));
                              });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            me = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          V(!0),
                            h.a
                              .delete(
                                "http://190.12.101.198:5000/cabinas/" +
                                  ee.id_config,
                                n
                              )
                              .then(function (e) {
                                !0 === e.data.exito
                                  ? (oe(),
                                    g(!1),
                                    te({}),
                                    t(
                                      "Cabina eliminada exitosamente",
                                      "green-300"
                                    ),
                                    V(!1))
                                  : (g(!1),
                                    te({}),
                                    t(e.data.message, "red-300"),
                                    V(!1));
                              })
                              .catch(function (e) {
                                void 0 !== e.response
                                  ? 401 === e.response.status &&
                                    (localStorage.setItem("token", ""),
                                    localStorage.setItem(
                                      "alert",
                                      "La sesi\xf3n expir\xf3"
                                    ),
                                    localStorage.setItem(
                                      "alertColor",
                                      "yellow-500"
                                    ),
                                    V(!1),
                                    (window.location.href = "/login"))
                                  : (g(!1),
                                    te({}),
                                    t(
                                      "Hubo un problema, intent\xe1 m\xe1s tarde",
                                      "red-300"
                                    ),
                                    V(!1),
                                    console.log(e.response));
                              });
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(l.useEffect)(function () {}, []),
            Object(f.jsx)(N.Provider, {
              value: {
                mostrarModalAlta: r,
                setMostrarModalAlta: m,
                mostrarModalConfirmacionAlta: k,
                setMostrarModalConfirmacionAlta: I,
                datosFormulario: ee,
                setDatosFormulario: te,
                formatDate: ce,
                altaCabina: de,
                editarCabina: be,
                bajaCabina: me,
                loading: E,
                setLoading: V,
                getCabinas: oe,
                loadingCabinas: W,
                setLoadingCabinas: U,
                cabinas: Z,
                setCabinas: Y,
                mostrarModalEliminar: v,
                setMostrarModalEliminar: g,
                mostrarModalEditar: y,
                setMostrarModalEditar: C,
                mostrarModalConfirmacionEditar: z,
                setMostrarModalConfirmacionEditar: L,
                buscarCabina: re,
                datosFiltros: ne,
                setDatosFiltros: ie,
                formatFechaISO: K,
                permisos: i,
                mostrarModalCargaMasiva: A,
                setMostrarModalCargaMasiva: D,
              },
              children: e.children,
            })
          );
        },
        ne = function (e, t) {},
        ie = function (e) {
          var t = Object(l.useContext)($).setAlert,
            a = Object(l.useReducer)(ne, {}),
            s = Object(j.a)(a, 2),
            n =
              (s[0],
              s[1],
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }),
            i = localStorage.getItem("permisos"),
            c = Object(l.useState)([]),
            o = Object(j.a)(c, 2),
            r = o[0],
            m = o[1],
            x = Object(l.useState)(!1),
            p = Object(j.a)(x, 2),
            v = p[0],
            g = p[1],
            w = Object(l.useState)(!1),
            O = Object(j.a)(w, 2),
            N = O[0],
            y = O[1],
            C = Object(l.useState)(!1),
            R = Object(j.a)(C, 2),
            M = R[0],
            z = R[1],
            L = Object(l.useState)(!1),
            _ = Object(j.a)(L, 2),
            S = _[0],
            k = _[1],
            I = Object(l.useState)(!1),
            P = Object(j.a)(I, 2),
            A = P[0],
            D = P[1],
            H = Object(l.useState)(!1),
            F = Object(j.a)(H, 2),
            E = F[0],
            V = F[1],
            T = Object(l.useState)(!1),
            q = Object(j.a)(T, 2),
            W = q[0],
            U = q[1],
            Q = Object(l.useState)(!1),
            G = Object(j.a)(Q, 2),
            Z = G[0],
            Y = G[1],
            K = Object(l.useState)(!1),
            J = Object(j.a)(K, 2),
            X = J[0],
            ee = J[1],
            te = Object(l.useState)(!1),
            ae = Object(j.a)(te, 2),
            le = ae[0],
            se = ae[1],
            ie = function (e) {
              if (void 0 !== e) var t = new Date(e);
              else t = new Date();
              var a = "" + (t.getMonth() + 1),
                l = "" + t.getDate(),
                s = t.getFullYear();
              return (
                a.length < 2 && (a = "0" + a),
                l.length < 2 && (l = "0" + l),
                [s, a, l].join("-")
              );
            },
            ce = Object(l.useState)({
              id_punto: "",
              id_tag: "",
              epc: "",
              fecha_instalacion: ie(),
              via: "",
              baliza: "",
              asociado_a: "",
              progresivas: "",
              latitud: "",
              longitud: "",
              observaciones: "",
            }),
            oe = Object(j.a)(ce, 2),
            re = oe[0],
            de = oe[1],
            be = Object(l.useState)({
              pagina: 1,
              por_pagina: 10,
              sort_by: "id_punto",
              sort_order: "a",
            }),
            me = Object(j.a)(be, 2),
            ue = me[0],
            je = me[1],
            xe = function (e) {
              var t = new Date(e);
              if (!isNaN(t.getTime())) {
                var a = t.getUTCDate().toString(),
                  l = (t.getUTCMonth() + 1).toString();
                return (
                  (a[1] ? a : "0" + a[0]) +
                  "/" +
                  (l[1] ? l : "0" + l[0]) +
                  "/" +
                  t.getFullYear()
                );
              }
            },
            he = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          y(!0),
                            h.a
                              .get(
                                "http://190.12.101.198:5000/" +
                                  "puntos?page="
                                    .concat(ue.pagina, "&per_page=")
                                    .concat(ue.por_pagina, "&sort=")
                                    .concat(ue.sort_by, "&ord=")
                                    .concat(ue.sort_order),
                                n
                              )
                              .then(function (e) {
                                m(e.data.result), y(!1);
                              })
                              .catch(function (e) {
                                void 0 !== e.response
                                  ? (401 !== e.response.status &&
                                      422 !== e.response.status) ||
                                    (localStorage.setItem("token", ""),
                                    localStorage.setItem(
                                      "alert",
                                      "La sesi\xf3n expir\xf3"
                                    ),
                                    localStorage.setItem(
                                      "alertColor",
                                      "yellow-500"
                                    ),
                                    y(!1),
                                    (window.location.href = "/login"))
                                  : (t(
                                      "Hubo un error recuperando los puntos",
                                      "red-300"
                                    ),
                                    y(!1),
                                    console.log(e.response));
                              });
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            fe = (function () {
              var e = Object(b.a)(
                d.a.mark(function e(a) {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          y(!0),
                            "" !== a
                              ? h.a
                                  .get(
                                    "http://190.12.101.198:5000/puntos/" + a,
                                    n
                                  )
                                  .then(function (e) {
                                    !0 === e.data.exito
                                      ? (m({ data: [e.data.result], total: 1 }),
                                        y(!1))
                                      : (m({ data: [], total: 0 }), y(!1));
                                  })
                                  .catch(function (e) {
                                    void 0 !== e.response
                                      ? (401 !== e.response.status &&
                                          422 !== e.response.status) ||
                                        (localStorage.setItem("token", ""),
                                        localStorage.setItem(
                                          "alert",
                                          "La sesi\xf3n expir\xf3"
                                        ),
                                        localStorage.setItem(
                                          "alertColor",
                                          "yellow-500"
                                        ),
                                        y(!1),
                                        (window.location.href = "/login"))
                                      : (t(
                                          "Hubo un error buscando el punto",
                                          "red-300"
                                        ),
                                        y(!1),
                                        console.log(e.response));
                                  })
                              : he();
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            pe = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var a;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          g(!0),
                            ((a = Object(u.a)({}, re)).fecha_instalacion = xe(
                              re.fecha_instalacion
                            )),
                            h.a
                              .post(
                                "http://190.12.101.198:5000/puntos/new",
                                a,
                                n
                              )
                              .then(function (e) {
                                !0 === e.data.exito
                                  ? (he(),
                                    de({
                                      id_punto: "",
                                      id_tag: "",
                                      epc: "",
                                      fecha_instalacion: "",
                                      via: "",
                                      baliza: "",
                                      asociado_a: "",
                                      progresivas: "",
                                      latitud: "",
                                      longitud: "",
                                      observaciones: "",
                                    }),
                                    D(!1),
                                    g(!1),
                                    t("Punto creado exitosamente", "green-300"))
                                  : (de({
                                      id_punto: "",
                                      id_tag: "",
                                      epc: "",
                                      fecha_instalacion: "",
                                      via: "",
                                      baliza: "",
                                      asociado_a: "",
                                      progresivas: "",
                                      latitud: "",
                                      longitud: "",
                                      observaciones: "",
                                    }),
                                    D(!1),
                                    g(!1),
                                    t(e.data.message, "red-300"));
                              })
                              .catch(function (e) {
                                void 0 !== e.response
                                  ? (401 !== e.response.status &&
                                      422 !== e.response.status) ||
                                    (localStorage.setItem("token", ""),
                                    localStorage.setItem(
                                      "alert",
                                      "La sesi\xf3n expir\xf3"
                                    ),
                                    localStorage.setItem(
                                      "alertColor",
                                      "yellow-500"
                                    ),
                                    y(!1),
                                    (window.location.href = "/login"))
                                  : (de({
                                      id_punto: "",
                                      id_tag: "",
                                      epc: "",
                                      fecha_instalacion: "",
                                      via: "",
                                      baliza: "",
                                      asociado_a: "",
                                      progresivas: "",
                                      latitud: "",
                                      longitud: "",
                                      observaciones: "",
                                    }),
                                    D(!1),
                                    g(!1),
                                    t(
                                      "Hubo un error creando el punto",
                                      "red-300"
                                    ),
                                    console.log(e));
                              });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ve = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var a;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          g(!0),
                            ((a = Object(u.a)({}, re)).fecha_instalacion = xe(
                              re.fecha_instalacion
                            )),
                            delete a.id_punto,
                            h.a
                              .put(
                                "http://190.12.101.198:5000/puntos/" +
                                  re.id_punto,
                                a,
                                n
                              )
                              .then(function (e) {
                                he(),
                                  de({
                                    id_punto: "",
                                    id_tag: "",
                                    epc: "",
                                    fecha_instalacion: "",
                                    via: "",
                                    baliza: "",
                                    asociado_a: "",
                                    progresivas: "",
                                    latitud: "",
                                    longitud: "",
                                    observaciones: "",
                                  }),
                                  V(!1),
                                  g(!1),
                                  t("Punto editado exitosamente", "green-300");
                              })
                              .catch(function (e) {
                                void 0 !== e.response
                                  ? (401 !== e.response.status &&
                                      422 !== e.response.status) ||
                                    (localStorage.setItem("token", ""),
                                    localStorage.setItem(
                                      "alert",
                                      "La sesi\xf3n expir\xf3"
                                    ),
                                    localStorage.setItem(
                                      "alertColor",
                                      "yellow-500"
                                    ),
                                    y(!1),
                                    (window.location.href = "/login"))
                                  : (de({
                                      id_punto: "",
                                      id_tag: "",
                                      epc: "",
                                      fecha_instalacion: "",
                                      via: "",
                                      baliza: "",
                                      asociado_a: "",
                                      progresivas: "",
                                      latitud: "",
                                      longitud: "",
                                      observaciones: "",
                                    }),
                                    g(!1),
                                    V(!1),
                                    t(
                                      "Hubo un error editando el punto",
                                      "red-300"
                                    ),
                                    console.log(e));
                              });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ge = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          g(!0),
                            h.a
                              .delete(
                                "http://190.12.101.198:5000/puntos/" +
                                  re.id_punto,
                                n
                              )
                              .then(function (e) {
                                !0 === e.data.exito
                                  ? (he(),
                                    de({
                                      id_punto: "",
                                      id_tag: "",
                                      epc: "",
                                      fecha_instalacion: "",
                                      via: "",
                                      baliza: "",
                                      asociado_a: "",
                                      progresivas: "",
                                      latitud: "",
                                      longitud: "",
                                      observaciones: "",
                                    }),
                                    g(!1),
                                    U(!1),
                                    t(
                                      "Punto eliminado exitosamente",
                                      "green-300"
                                    ))
                                  : (de({
                                      id_punto: "",
                                      id_tag: "",
                                      epc: "",
                                      fecha_instalacion: "",
                                      via: "",
                                      baliza: "",
                                      asociado_a: "",
                                      progresivas: "",
                                      latitud: "",
                                      longitud: "",
                                      observaciones: "",
                                    }),
                                    g(!1),
                                    U(!1),
                                    t(e.data.message, "red-300"));
                              })
                              .catch(function (e) {
                                void 0 !== e.response
                                  ? (401 !== e.response.status &&
                                      422 !== e.response.status) ||
                                    (localStorage.setItem("token", ""),
                                    localStorage.setItem(
                                      "alert",
                                      "La sesi\xf3n expir\xf3"
                                    ),
                                    localStorage.setItem(
                                      "alertColor",
                                      "yellow-500"
                                    ),
                                    y(!1),
                                    console.log(e.response),
                                    (window.location.href = "/login"))
                                  : (de({
                                      id_punto: "",
                                      id_tag: "",
                                      epc: "",
                                      fecha_instalacion: "",
                                      via: "",
                                      baliza: "",
                                      asociado_a: "",
                                      progresivas: "",
                                      latitud: "",
                                      longitud: "",
                                      observaciones: "",
                                    }),
                                    g(!1),
                                    U(!1),
                                    t(
                                      "Hubo un error eliminando el punto",
                                      "red-300"
                                    ),
                                    console.log(e));
                              });
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(l.useEffect)(function () {}, []),
            Object(f.jsx)(B.Provider, {
              value: {
                getPuntos: he,
                puntos: r,
                setPuntos: m,
                loadingPuntos: N,
                setLoadingPuntos: y,
                mostrarModalAlta: M,
                setMostrarModalAlta: z,
                mostrarModalConfirmacionAlta: A,
                setMostrarModalConfirmacionAlta: D,
                datosFormulario: re,
                setDatosFormulario: de,
                formatDate: xe,
                loading: v,
                setLoading: g,
                altaPunto: pe,
                mostrarModalConfirmacionEliminar: W,
                setMostrarModalConfirmacionEliminar: U,
                mostrarModalConfirmacionListaNegra: Z,
                setMostrarModalConfirmacionListaNegra: Y,
                mostrarModalEditar: S,
                setMostrarModalEditar: k,
                mostrarModalConfirmacionEditar: E,
                setMostrarModalConfirmacionEditar: V,
                bajaPunto: ge,
                editarPunto: ve,
                mostrarModalInformacion: X,
                setMostrarModalInformacion: ee,
                bajaPuntoListaNegra: function () {
                  g(!0),
                    h.a
                      .post(
                        "http://190.12.101.198:5000/listaNegra/" + re.id_punto,
                        {},
                        n
                      )
                      .then(function (e) {
                        he(),
                          de({
                            id_punto: "",
                            id_tag: "",
                            epc: "",
                            fecha_instalacion: "",
                            via: "",
                            baliza: "",
                            asociado_a: "",
                            progresivas: "",
                            latitud: "",
                            longitud: "",
                            observaciones: "",
                          }),
                          g(!1),
                          Y(!1),
                          t(
                            "El punto se envi\xf3 a la lista negra exitosamente",
                            "green-300"
                          );
                      })
                      .catch(function (e) {
                        void 0 !== e.response
                          ? (401 !== e.response.status &&
                              422 !== e.response.status) ||
                            (localStorage.setItem("token", ""),
                            localStorage.setItem(
                              "alert",
                              "La sesi\xf3n expir\xf3"
                            ),
                            localStorage.setItem("alertColor", "yellow-500"),
                            y(!1),
                            console.log(e.response),
                            (window.location.href = "/login"))
                          : (de({
                              id_punto: "",
                              id_tag: "",
                              epc: "",
                              fecha_instalacion: "",
                              via: "",
                              baliza: "",
                              asociado_a: "",
                              progresivas: "",
                              latitud: "",
                              longitud: "",
                              observaciones: "",
                            }),
                            g(!1),
                            Y(!1),
                            t(
                              "Hubo un error enviando el punto a la lista negra",
                              "red-300"
                            ),
                            console.log(e));
                      });
                },
                buscarPunto: fe,
                datosFiltros: ue,
                setDatosFiltros: je,
                formatFechaISO: ie,
                permisos: i,
                mostrarModalCargaMasiva: le,
                setMostrarModalCargaMasiva: se,
              },
              children: e.children,
            })
          );
        },
        ce = function (e, t) {},
        oe = function (e) {
          var t = Object(l.useContext)($).setAlert,
            a = Object(l.useReducer)(ce, {}),
            s = Object(j.a)(a, 2),
            n =
              (s[0],
              s[1],
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }),
            i = localStorage.getItem("permisos"),
            c = Object(l.useState)([]),
            o = Object(j.a)(c, 2),
            r = o[0],
            m = o[1],
            u = Object(l.useState)(!1),
            x = Object(j.a)(u, 2),
            p = x[0],
            v = x[1],
            g = Object(l.useState)(!1),
            w = Object(j.a)(g, 2),
            O = w[0],
            N = w[1],
            y = Object(l.useState)(!1),
            C = Object(j.a)(y, 2),
            R = C[0],
            M = C[1],
            z = Object(l.useState)({
              id_punto: "",
              id_tag: "",
              epc: "",
              fecha_instalacion: "",
              via: "",
              baliza: "",
              asociado_a: "",
              progresivas: "",
              latitud: "",
              longitud: "",
              observaciones: "",
            }),
            L = Object(j.a)(z, 2),
            _ = L[0],
            S = L[1],
            k = Object(l.useState)({ sort_by: "id_punto", sort_order: "a" }),
            I = Object(j.a)(k, 2),
            B = I[0],
            P = I[1];
          Object(l.useEffect)(function () {}, []);
          var A = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          N(!0),
                            h.a
                              .get(
                                "http://190.12.101.198:5000/" +
                                  "listaNegra?sort="
                                    .concat(B.sort_by, "&ord=")
                                    .concat(B.sort_order),
                                n
                              )
                              .then(function (e) {
                                m(e.data.result), N(!1);
                              })
                              .catch(function (e) {
                                void 0 !== e.response
                                  ? (401 !== e.response.status &&
                                      422 !== e.response.status) ||
                                    (localStorage.setItem("token", ""),
                                    localStorage.setItem(
                                      "alert",
                                      "La sesi\xf3n expir\xf3"
                                    ),
                                    localStorage.setItem(
                                      "alertColor",
                                      "yellow-500"
                                    ),
                                    N(!1),
                                    console.log(e.response),
                                    (window.location.href = "/login"))
                                  : (N(!1),
                                    t(
                                      "Hubo un error consultando la lista negra",
                                      "red-300"
                                    ),
                                    console.log(e.response));
                              });
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            D = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          v(!0),
                            h.a
                              .delete(
                                "http://190.12.101.198:5000/listaNegra/" +
                                  _.id_punto,
                                n
                              )
                              .then(function (e) {
                                !0 === e.data.exito
                                  ? (A(),
                                    v(!1),
                                    M(!1),
                                    t(
                                      "Punto removido de la lista negra exitosamente",
                                      "green-300"
                                    ))
                                  : (v(!1),
                                    M(!1),
                                    t(e.data.message, "red-300"));
                              })
                              .catch(function (e) {
                                void 0 !== e.response
                                  ? (401 !== e.response.status &&
                                      422 !== e.response.status) ||
                                    (localStorage.setItem("token", ""),
                                    localStorage.setItem(
                                      "alert",
                                      "La sesi\xf3n expir\xf3"
                                    ),
                                    localStorage.setItem(
                                      "alertColor",
                                      "yellow-500"
                                    ),
                                    v(!1),
                                    console.log(e.response),
                                    (window.location.href = "/login"))
                                  : (v(!1),
                                    M(!1),
                                    t(
                                      "Hubo un error consultando la lista negra",
                                      "red-300"
                                    ),
                                    console.log(e.response));
                              });
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(f.jsx)(Y.Provider, {
            value: {
              getPuntosListaNegra: A,
              puntosListaNegra: r,
              setPuntosListaNegra: m,
              loadingPuntos: O,
              setLoadingPuntos: N,
              formatDate: function (e) {
                var t = new Date(e);
                if (!isNaN(t.getTime())) {
                  var a = t.getUTCDate().toString(),
                    l = (t.getUTCMonth() + 1).toString();
                  return (
                    (a[1] ? a : "0" + a[0]) +
                    "/" +
                    (l[1] ? l : "0" + l[0]) +
                    "/" +
                    t.getFullYear()
                  );
                }
              },
              loading: p,
              setLoading: v,
              removerDeListaNegra: D,
              datosFormulario: _,
              setDatosFormulario: S,
              mostrarModalConfirmacionRemover: R,
              setMostrarModalConfirmacionRemover: M,
              permisos: i,
              datosFiltros: B,
              setDatosFiltros: P,
            },
            children: e.children,
          });
        },
        re = "SET_ALERT",
        de = "DELETE_ALERT",
        be = function (e, t) {
          switch (t.type) {
            case re:
              return { alert: t.payload };
            case de:
              return { alert: null };
            default:
              return e;
          }
        },
        me = function (e) {
          var t = Object(l.useReducer)(be, { alert: null }),
            a = Object(j.a)(t, 2),
            s = a[0],
            n = a[1];
          return Object(f.jsx)($.Provider, {
            value: {
              alert: s.alert,
              setAlert: function (e, t) {
                n({ type: re, payload: { msg: e, category: t } }),
                  setTimeout(function () {
                    n({ type: de });
                  }, 5e3);
              },
            },
            children: e.children,
          });
        };
      var ue = function () {
          return Object(f.jsx)(me, {
            children: Object(f.jsx)("div", {
              className: "App h-screen flex flex-col",
              style: { backgroundColor: "whitesmoke" },
              children: Object(f.jsx)(ae, {
                children: Object(f.jsx)(se, {
                  children: Object(f.jsx)(ie, {
                    children: Object(f.jsx)(oe, {
                      children: Object(f.jsxs)(c.a, {
                        children: [
                          Object(f.jsx)(g, {}),
                          Object(f.jsx)("div", {
                            className: "fixed right-0 top-0 mx-4 my-24",
                            children: Object(f.jsx)(ee, {}),
                          }),
                          Object(f.jsxs)(o.c, {
                            children: [
                              Object(f.jsx)(o.a, {
                                exact: !0,
                                path: "/",
                                children: Object(f.jsx)(Z, {}),
                              }),
                              Object(f.jsx)(o.a, {
                                exact: !0,
                                path: "/cabinas",
                                children: Object(f.jsx)(I, {}),
                              }),
                              Object(f.jsx)(o.a, {
                                exact: !0,
                                path: "/puntos",
                                children: Object(f.jsx)(q, {}),
                              }),
                              Object(f.jsx)(o.a, {
                                exact: !0,
                                path: "/login",
                                children: Object(f.jsx)(p, {}),
                              }),
                              Object(f.jsx)(o.a, {
                                exact: !0,
                                path: "/listaNegra",
                                children: Object(f.jsx)(J, {}),
                              }),
                            ],
                          }),
                          Object(f.jsx)(X, {}),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        je = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 74))
              .then(function (t) {
                var a = t.getCLS,
                  l = t.getFID,
                  s = t.getFCP,
                  n = t.getLCP,
                  i = t.getTTFB;
                a(e), l(e), s(e), n(e), i(e);
              });
        };
      i.a.render(
        Object(f.jsx)(s.a.StrictMode, { children: Object(f.jsx)(ue, {}) }),
        document.getElementById("root")
      ),
        je();
    },
  },
  [[73, 1, 2]],
]);
