import { registerApplication, start } from "single-spa";

// registerApplication({
//     name: "@single-spa/welcome",
//     app: () =>
//         System.import(
//             "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//         ),
//     activeWhen: ["/"],
// });

registerApplication({
    name: "@allst/agm",
    app: () => System.import("@allst/agm"),
    activeWhen: (location) => location.pathname.startsWith("/"),
});

start({
    urlRerouteOnly: true,
});