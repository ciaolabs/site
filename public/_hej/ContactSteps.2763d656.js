import { g as f } from "./index.4db78ffb.js";
import { L, s as A, C as V, a as H } from "./CtaA.571967fa.js";
import { _ as P } from "./_plugin-vue_export-helper.c27b6911.js";
import {
  r as i,
  o as k,
  i as j,
  g as l,
  c as n,
  a,
  t as v,
  d as u,
  F as C,
  e as w,
  n as b,
  j as B,
  k as I,
  b as y,
  h as T,
} from "./runtime-core.esm-bundler.51d06d5f.js";
import "./runtime-dom.esm-bundler.111d248e.js";
import "./lottie.c13735ad.js";
import "./_commonjsHelpers.de833af9.js";
const N = {
    __name: "HeadingTextPill",
    props: {
      title: String,
      subtitle: String,
      hubspotValue: String,
      pillsOptions: Array,
    },
    setup(m, { expose: p, emit: e }) {
      p();
      const t = i(!0);
      k(() => {
        const r = f.timeline({ defaults: { ease: "power3.inOut" } });
        r.from(".js--step-animation", { autoAlpha: 0, y: 8, duration: 1.1 }),
          r.from(
            ".js--pill-animation",
            { opacity: 0, y: 20, stagger: 0.1 },
            "-=0.5"
          ),
          r.eventCallback("onComplete", () => {
            t.value = !1;
          });
      }),
        j(() => {
          f.to(".js--step-animation", { autoAlpha: 0, y: -28, duration: 4 });
        });
      const d = m,
        c = (r) => {
          const h = [
            "g--pill-01--seventh",
            "g--pill-01--eigth",
            "g--pill-01--ninth",
            "g--pill-01--tenth",
            "g--pill-01--eleventh",
            "g--pill-01--twelfth",
          ];
          return h[r % h.length];
        },
        s = e,
        g = {
          disabledPills: t,
          props: d,
          getPillColor: c,
          emit: s,
          handleButtonClick: (r) => {
            s(
              "selectOption",
              r.target.getAttribute("data-hubspot"),
              r.target.id
            );
          },
          ref: i,
          onMounted: k,
          onBeforeUnmount: j,
          get gsap() {
            return f;
          },
        };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  },
  R = { class: "js--step-animation" },
  z = { class: "f--color-b f--font-b f--sp-c font--bold" },
  E = { key: 0, class: "f--color-b f--font-d f--sp-b" },
  q = { class: "c--pill-set-a" },
  D = ["disabled", "data-hubspot", "id"];
function M(m, p, e, t, d, c) {
  return (
    l(),
    n("div", R, [
      a("h1", z, v(e.title), 1),
      e.subtitle ? (l(), n("p", E, v(e.subtitle), 1)) : u("", !0),
      a("div", q, [
        (l(!0),
        n(
          C,
          null,
          w(
            e.pillsOptions,
            (s, o) => (
              l(),
              n(
                "button",
                {
                  disabled: t.disabledPills,
                  onClick: t.handleButtonClick,
                  "data-hubspot": e.hubspotValue,
                  id: s,
                  class: b(
                    `g--pill-01 js--pill-animation ${t.getPillColor(o)}`
                  ),
                  key: o,
                },
                v(s),
                11,
                D
              )
            )
          ),
          128
        )),
      ]),
    ])
  );
}
const U = P(N, [["render", M]]),
  W = {
    __name: "ContactSteps",
    props: { steps: Array, formStep: Object, resultsStep: Object },
    setup(m, { expose: p }) {
      p();
      const e = m,
        t = i([]),
        d = i(!1),
        c = i(0),
        s = i(null),
        o = i(null),
        g = i(e.steps),
        r = i(e.formStep.contact_steps_form.form_id),
        h = i(e.formStep.contact_steps_form.portal_id),
        S = i(null);
      B(() => {
        if (g.value.length === c.value) {
          const _ = f.timeline({ defaults: { ease: "power3.inOut" } });
          s.value && _.from(s.value, { autoAlpha: 0, y: 8, duration: 1 }),
            o.value &&
              _.from(
                o.value,
                { opacity: 0, y: -15, stagger: 0.1, duration: 1 },
                "-=0.5"
              );
        }
      });
      const O = {
        props: e,
        stepsResults: t,
        resultsStepActive: d,
        activeStepIndex: c,
        formSection: s,
        form: o,
        steps: g,
        formId: r,
        portalId: h,
        wrapper: S,
        handleOptionClick: (_, x) => {
          f.fromTo(
            S.value,
            { height: S.value.clientHeight, duration: 1 },
            { height: "auto", duration: 1 }
          ),
            t.value.push({ name: _, value: x }),
            (c.value += 1);
        },
        handleFormSubmit: async (_) => {
          const {
            message: x,
            success: F,
            statusCode: nt,
          } = await A(h.value, r.value, _.concat(t.value));
          F && (d.value = !0);
        },
        ref: i,
        watchEffect: B,
        onMounted: k,
        get gsap() {
          return f;
        },
        Lottie: L,
        get submitToHubspot() {
          return A;
        },
        HeadingTextPill: U,
        ContactForm: V,
        CtaA: H,
      };
      return (
        Object.defineProperty(O, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        O
      );
    },
  },
  G = { class: "f--section-a f--background-a" },
  J = { class: "f--container", ref: "wrapper" },
  K = { class: b(["f--row justify-content-center f--gap-a"]) },
  Q = { class: "f--col-8 f--col-tablets-12 text-center" },
  X = { class: "c--progress-a" },
  Y = { key: 0, class: "f--col-8 f--col-tablets-12 text-center" },
  Z = { key: 0, ref: "formSection", class: "f--row f--gap-e" },
  $ = { class: "f--col-5 f--col-tabletm-6 f--col-tablets-12" },
  tt = { class: "f--color-b f--font-b font--bold" },
  et = { class: "c--media-f c--media-f--second" },
  st = ["src", "alt"],
  ot = {
    class:
      "f--col-6 f--offset-1 f--offset-tabletm-0 f--col-tablets-10 f--offset-tablets-1 f--col-mobile-12 f--offset-mobile-0",
    ref: "form",
  };
function lt(m, p, e, t, d, c) {
  return (
    l(),
    n("section", G, [
      a(
        "div",
        J,
        [
          a("div", K, [
            a("div", Q, [
              a("div", X, [
                (l(!0),
                n(
                  C,
                  null,
                  w(
                    t.steps,
                    (s, o) => (
                      l(),
                      n(
                        "div",
                        {
                          key: o,
                          class: b([
                            "c--progress-a__item",
                            {
                              "c--progress-a__item--is-active":
                                o <= t.activeStepIndex,
                            },
                          ]),
                        },
                        [
                          a(
                            "span",
                            {
                              class: "c--progress-a__item__artwork",
                              style: I(
                                o + 1 <= t.activeStepIndex
                                  ? "width: 100%"
                                  : o <= t.activeStepIndex
                                  ? "width: 50%; transition-delay: 0.3s"
                                  : "width: 0%"
                              ),
                            },
                            null,
                            4
                          ),
                        ],
                        2
                      )
                    )
                  ),
                  128
                )),
                a(
                  "div",
                  {
                    class: b([
                      "c--progress-a__item",
                      {
                        "c--progress-a__item--is-active":
                          t.activeStepIndex >= t.steps.length,
                      },
                    ]),
                  },
                  [
                    a(
                      "span",
                      {
                        class: "c--progress-a__item__artwork",
                        style: I(
                          t.resultsStepActive
                            ? "width: 100%"
                            : t.activeStepIndex == t.steps.length
                            ? "width: 50%; transition-delay: 0.3s"
                            : "width: 0%"
                        ),
                      },
                      null,
                      4
                    ),
                  ],
                  2
                ),
                a(
                  "div",
                  {
                    class: b([
                      "c--progress-a__item",
                      { "c--progress-a__item--is-active": t.resultsStepActive },
                    ]),
                  },
                  null,
                  2
                ),
              ]),
            ]),
            t.resultsStepActive
              ? u("", !0)
              : (l(),
                n("div", Y, [
                  (l(!0),
                  n(
                    C,
                    null,
                    w(
                      t.steps,
                      (s, o) => (
                        l(),
                        n("div", { key: o }, [
                          o == t.activeStepIndex
                            ? (l(),
                              y(
                                t.HeadingTextPill,
                                {
                                  key: 0,
                                  onSelectOption: t.handleOptionClick,
                                  title: s.question,
                                  subtitle: s.description,
                                  hubspotValue: s.hubspot_value,
                                  pillsOptions: s.options,
                                },
                                null,
                                8,
                                [
                                  "title",
                                  "subtitle",
                                  "hubspotValue",
                                  "pillsOptions",
                                ]
                              ))
                            : u("", !0),
                        ])
                      )
                    ),
                    128
                  )),
                ])),
          ]),
          t.steps.length == t.activeStepIndex && !t.resultsStepActive
            ? (l(),
              n(
                "div",
                Z,
                [
                  a("div", $, [
                    a("h1", tt, v(e.formStep.title), 1),
                    a("div", et, [
                      e.formStep.logos.image_or_lottie == "image"
                        ? (l(),
                          n(
                            "img",
                            {
                              key: 0,
                              class: "c--media-f__media",
                              src: e.formStep.logos.image.url,
                              alt: e.formStep.logos.image.alt || "ciao logos",
                            },
                            null,
                            8,
                            st
                          ))
                        : u("", !0),
                      e.formStep.logos.image_or_lottie == "lottie"
                        ? (l(),
                          y(
                            t.Lottie,
                            {
                              key: 1,
                              class: "c--media-f__media",
                              lottieSrc: e.formStep.logos.lottie,
                            },
                            null,
                            8,
                            ["lottieSrc"]
                          ))
                        : u("", !0),
                    ]),
                  ]),
                  a(
                    "div",
                    ot,
                    [
                      T(
                        t.ContactForm,
                        {
                          onSubmitForm: t.handleFormSubmit,
                          fieldsRows: e.formStep.contact_steps_form.rows,
                          submitButtonLabel:
                            e.formStep.contact_steps_form.submit_button_label,
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
              ))
            : u("", !0),
        ],
        512
      ),
      t.resultsStepActive
        ? (l(),
          y(
            t.CtaA,
            {
              key: 0,
              title: e.resultsStep.title,
              subtitle: e.resultsStep.subtitle,
              ciaoLogos: e.resultsStep.ciao_logos,
            },
            null,
            8,
            ["title", "subtitle", "ciaoLogos"]
          ))
        : u("", !0),
    ])
  );
}
const pt = P(W, [["render", lt]]);
export { pt as default };
