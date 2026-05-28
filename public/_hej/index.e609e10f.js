import { _ as s } from "./preload-helper.cf010ec4.js";
const a = () => {
    s(
      () => import("./lottie.c13735ad.js").then((t) => t.l),
      ["_hej/lottie.c13735ad.js", "_hej/_commonjsHelpers.de833af9.js"]
    ).then(async (t) => {
      for (
        let o = 0;
        o < document.querySelectorAll(".js--lottie-data").length;
        o++
      ) {
        const e = document.querySelectorAll(".js--lottie-data")[o],
          n = e.getAttribute("data-loop"),
          l = e.getAttribute("data-autoplay"),
          r = n === "true",
          i = l === "true",
          d = await t.loadAnimation({
            container: e,
            renderer: "svg",
            loop: r,
            autoplay: i,
            path: e.getAttribute("data-src"),
          });
        window.windowLotties[e.getAttribute("data-name")] = d;
      }
    }),
      window.removeEventListener("scroll", a);
  },
  u = (t) => {
    (window.windowLotties = []),
      document.querySelectorAll(".js--lottie-data").length &&
        (t?.onScroll ? window.addEventListener("scroll", a) : a());
  };
export { u as preloadLotties };
