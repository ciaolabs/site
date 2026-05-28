import { _ as f } from "./_plugin-vue_export-helper.c27b6911.js";
import {
  g as o,
  c as u,
  k as g,
  d as k,
  a as n,
  t as i,
} from "./runtime-core.esm-bundler.51d06d5f.js";
const b = {
    __name: "cardB",
    props: { work: Object },
    setup(c, { expose: l }) {
      l();
      const a = {
        props: c,
        getThePermalink: (e) => {
          var s = e.link.permalink.work_slug + "/" + e.link.slug;
          return `/${s}`;
        },
        getImage: (e) => {
          switch (e.link.slug) {
            case "4patientcare":
              return "/works/4pc_featured.webp";
            case "essilorluxotica":
              return "/works/4patientcare.webp";
            case "airbnb":
              return "/works/airbnb_featured.webp";
            case "axa-im":
              return "/works/axa_featured.webp";
            case "dat":
              return "/works/dat_featured.webp";
            case "undp-global-fund-coral-reefs":
              return "/works/gfcr_featured.webp";
            case "healthgrades":
              return "/works/hg_featured.webp";
            case "healthline-media":
              return "/works/hlm_featured.webp";
            case "lucet":
              return "/works/lct_featured.webp";
            case "new-york-hall-of-science":
              return "/works/nyhs_featured.webp";
            case "stifel":
              return "/works/stf_featured.webp";
            default:
              return e.image.url;
          }
        },
        getMobileTitle: (e) => {
          switch (e.link.slug) {
            case "airbnb":
              return "Airbnb";
            case "undp-human-development-report":
              return "United Nations";
            case "axa-im":
              return "AXA";
            case "healthline-media":
              return "Healthline Media";
            case "undp-global-fund-coral-reefs":
              return "United Nations";
            case "stifel":
              return "Stifel Institutional";
            case "dat":
              return "DAT";
            case "lucet":
              return "Lucet";
            case "sei":
              return "SEI";
            case "new-york-hall-of-science":
              return "New York Hall of Science";
            case "university-of-southern-california":
              return "USC School of Social Work";
            case "essilorluxotica":
              return "EssilorLuxottica";
            case "healthgrades":
              return "Healthgrades";
            case "leedssource":
              return "LeedsSource";
            case "valorx":
              return "Valorx";
            case "unqork":
              return "Unqork";
            case "ntopology":
              return "nTop";
            case "rev-clinics":
              return "Rev Clinics";
            case "dental-sleep-solutions":
              return "Dental Sleep Solutions";
            case "cardata":
              return "Cardata";
            case "undp-sdg-integration":
              return "United Nations";
            case "trascent":
              return "Trascent";
            case "luna":
              return "Luna";
            case "undp":
              return "UNDP";
            case "telink-semiconductor":
              return "Telink";
            default:
              return e.title;
          }
        },
      };
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  },
  m = ["href"],
  p = { class: "c--card-b__ft-items" },
  w = { class: "c--card-b__ft-items__title" },
  h = { class: "c--card-b__ft-items__subtitle" };
function S(c, l, r, t, d, _) {
  return (
    o(),
    u(
      "a",
      { href: t.getThePermalink(r.work), class: "c--card-b" },
      [
        r.work.image
          ? (o(),
            u(
              "div",
              {
                key: 0,
                class: "c--card-b__bg-items",
                style: g("background-image: url(" + t.getImage(r.work) + ")"),
              },
              null,
              4
            ))
          : k("", !0),
        n("div", p, [
          n("h2", w, i(t.getMobileTitle(r.work)), 1),
          n(
            "p",
            h,
            i(
              r.work.services && r.work.services.map((a) => a.title).join(", ")
            ),
            1
          ),
        ]),
      ],
      8,
      m
    )
  );
}
const y = f(b, [["render", S]]);
export { y as default };
