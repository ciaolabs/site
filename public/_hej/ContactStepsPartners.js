import { g as h } from "./index.4db78ffb.js";
import { L as C, s as b, C as k, a as F } from "./CtaA.571967fa.js";
import { _ as w } from "./_plugin-vue_export-helper.c27b6911.js";
import {
  r as o,
  c as r,
  a as s,
  t as y,
  d as l,
  b as g,
  h as A,
  n as L,
  g as a,
} from "./runtime-core.esm-bundler.51d06d5f.js";
import "./runtime-dom.esm-bundler.111d248e.js";
import "./lottie.c13735ad.js";
import "./_commonjsHelpers.de833af9.js";
const B = {
    __name: "ContactStepsRFP",
    props: { info: Object, resultsStep: Object },
    setup(c, { expose: n }) {
      n();
      const t = c,
        e = o(null),
        f = o(null),
        i = o(!1),
        m = o([]),
        S = o(null),
        u = o(t.info.form_id),
        _ = o(t.info.portal_id),
        d = {
          props: t,
          formSection: e,
          form: f,
          resultsStepActive: i,
          stepsResults: m,
          wrapper: S,
          formId: u,
          portalId: _,
          handleFormSubmit: async (p) => {
            const {
              message: T,
              success: v,
              statusCode: z,
            } = await b(_.value, u.value, p.concat(m.value));
            v && (i.value = !0);
          },
          ref: o,
          get gsap() {
            return h;
          },
          Lottie: C,
          get submitToHubspot() {
            return b;
          },
          ContactForm: k,
          CtaA: F,
        };
      return (
        Object.defineProperty(d, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        d
      );
    },
  },
  R = { key: 0, class: "f--container", ref: "wrapper" },
  x = { ref: "formSection", class: "f--row f--gap-e" },
  j = { class: "f--col-5 f--col-tabletm-6 f--col-tablets-12" },
  N = { class: "f--color-b f--font-b font--bold" },
  O = { class: "c--media-f c--media-f--second" },
  P = ["src", "alt"],
  V = {
    class:
      "f--col-6 f--offset-1 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0",
    ref: "form",
  };
function H(c, n, t, e, f, i) {
  return (
    a(),
    r(
      "section",
      {
        class: L({
          "f--section-a": !e.resultsStepActive,
          "f--background-a": !e.resultsStepActive,
        }),
      },
      [
        e.resultsStepActive
          ? l("", !0)
          : (a(),
            r(
              "div",
              R,
              [
                s(
                  "div",
                  x,
                  [
                    s("div", j, [
                      s("h1", N, y(t.info.title), 1),
                      s("div", O, [
                        t.info.logos.image_or_lottie == "image"
                          ? (a(),
                            r(
                              "img",
                              {
                                key: 0,
                                class: "c--media-f__media",
                                src: t.info.logos.image.url,
                                alt: t.info.logos.image.alt || "ciao logos",
                              },
                              null,
                              8,
                              P
                            ))
                          : l("", !0),
                        t.info.logos.image_or_lottie == "lottie"
                          ? (a(),
                            g(
                              e.Lottie,
                              {
                                key: 1,
                                class: "c--media-f__media",
                                lottieSrc: t.info.logos.lottie,
                              },
                              null,
                              8,
                              ["lottieSrc"]
                            ))
                          : l("", !0),
                      ]),
                    ]),
                    s(
                      "div",
                      V,
                      [
                        A(
                          e.ContactForm,
                          {
                            onSubmitForm: e.handleFormSubmit,
                            fieldsRows: t.info.rows,
                            submitButtonLabel: t.info.submit_button_label,
                          },
                          null,
                          8,
                          ["fieldsRows", "submitButtonLabel"]
                        ),
                      ],
                      512
                    ),
                  ],
                  512
                ),
              ],
              512
            )),
        e.resultsStepActive
          ? (a(),
            g(
              e.CtaA,
              {
                key: 1,
                title: t.resultsStep.title,
                subtitle: t.resultsStep.subtitle,
                ciaoLogos: t.resultsStep.ciao_logos,
              },
              null,
              8,
              ["title", "subtitle", "ciaoLogos"]
            ))
          : l("", !0),
      ],
      2
    )
  );
}
const M = w(B, [["render", H]]);
export { M as default };
