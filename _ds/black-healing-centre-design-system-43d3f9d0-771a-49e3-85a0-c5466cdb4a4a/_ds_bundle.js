/* @ds-bundle: {"format":4,"namespace":"BlackHealingCentreDesignSystem_43d3f9","components":[{"name":"Blossom","sourcePath":"components/brand/Blossom.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"EventCard","sourcePath":"components/content/EventCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/brand/Blossom.jsx":"b61446c77ca0","components/brand/Logo.jsx":"8b441fa39ff0","components/content/Card.jsx":"ea035d6be7f4","components/content/EventCard.jsx":"98a6765bdb5a","components/content/Quote.jsx":"f326b4484d15","components/content/SectionHeading.jsx":"9685c827a386","components/content/Tag.jsx":"9fccb2ae2f50","components/forms/Button.jsx":"122ce590bd0d","components/forms/Checkbox.jsx":"9ee1c01f53e3","components/forms/IconButton.jsx":"180ef995f04c","components/forms/Input.jsx":"bda02d515b8c","components/forms/Select.jsx":"6d5fc88906b9","components/forms/Textarea.jsx":"cea80a2ece74","ui_kits/website/EventsSection.jsx":"46f0a3fd0a75","ui_kits/website/Footer.jsx":"e475d42af8c7","ui_kits/website/Hero.jsx":"ac51cbd7bf52","ui_kits/website/MissionBand.jsx":"556e6fdf4793","ui_kits/website/ProgramsSection.jsx":"87879cd862d0","ui_kits/website/SiteHeader.jsx":"18dfa63b6d4f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BlackHealingCentreDesignSystem_43d3f9 = window.BlackHealingCentreDesignSystem_43d3f9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Blossom.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Blossom — the BHC brand illustration mark.
 *
 * The identity is built on a single organic "blossom + roots" figure (the human
 * form as roots merging into a flower). It ships in 9 expressive pose variations
 * and the full brand colourway set. Use it as a decorative accent, a spot
 * illustration, or a repeating motif — never redraw or alter it.
 */
const COLORS = {
  Espresso: "#2E1308",
  Soil: "#5E4900",
  Terracotta: "#A5593C",
  Tangerine: "#F35326",
  Poppy: "#EC2B27",
  Sun: "#FFC559",
  Butter: "#FFF1A1",
  Olive: "#8B801D",
  Moss: "#293D10",
  Fern: "#21602B",
  Mint: "#DBF2C8",
  Juniper: "#0B424C",
  Sky: "#71BDEC",
  Water: "#BDF3FF",
  Blossom: "#FFDFDF",
  Ivory: "#FFFBF2",
  Bone: "#FBF1DD",
  Black: "#000000",
  White: "#FFFFFF"
};
function Blossom({
  variation = 1,
  color = "Terracotta",
  size = 96,
  base = "assets/illustrations/svg",
  title,
  style,
  ...rest
}) {
  const v = Math.min(9, Math.max(1, variation));
  const c = COLORS[color] ? color : "Terracotta";
  const src = `${base}/variation${v}_${c}.svg`;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: title || `BHC blossom illustration, variation ${v}`,
    width: size,
    height: size,
    style: {
      display: "block",
      width: size,
      height: size,
      ...style
    }
  }, rest));
}
Blossom.colors = Object.keys(COLORS);
Object.assign(__ds_scope, { Blossom });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Blossom.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLORS = {
  Espresso: "#2E1308",
  Terracotta: "#A5593C",
  Fern: "#21602B",
  Ivory: "#FFFBF2",
  Bone: "#FBF1DD",
  Sun: "#FFC559",
  Poppy: "#EC2B27",
  Sky: "#71BDEC",
  Juniper: "#0B424C",
  Black: "#000000",
  White: "#FFFFFF"
};

/**
 * Logo — the BHC lockup: the blossom icon mark beside the typeset wordmark.
 *
 * NOTE: the official vector wordmark was not supplied with the brand package,
 * so the wordmark here is typeset in Poppins Bold to match the guideline
 * specimen. Swap in the official EN/FR wordmark file when available.
 */
function Logo({
  color = "Espresso",
  layout = "horizontal",
  // "horizontal" | "stacked" | "mark"
  size = 44,
  // icon height in px
  base = "assets/logo/svg",
  style,
  ...rest
}) {
  const c = COLORS[color] ? color : "Espresso";
  const ink = COLORS[c];
  const mark = /*#__PURE__*/React.createElement("img", {
    src: `${base}/Logo_Icon_${c}.svg`,
    alt: "Black Healing Centre",
    style: {
      display: "block",
      height: size,
      width: "auto"
    }
  });
  if (layout === "mark") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        ...style
      }
    }, rest), mark);
  }
  const stacked = layout === "stacked";
  const word = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      lineHeight: 1.02,
      letterSpacing: "-0.01em",
      color: ink,
      fontSize: stacked ? size * 0.42 : size * 0.5,
      textAlign: stacked ? "center" : "left",
      textTransform: "uppercase"
    }
  }, "Black", /*#__PURE__*/React.createElement("br", null), "Healing", /*#__PURE__*/React.createElement("br", null), "Centre");
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      flexDirection: stacked ? "column" : "row",
      alignItems: "center",
      gap: stacked ? size * 0.28 : size * 0.42,
      ...style
    }
  }, rest), mark, word);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a soft cream content surface. Warm shadow, generous rounding.
 * Optional hover lift for interactive cards. Compose freely.
 */
function Card({
  interactive = false,
  tone = "card",
  // card (bone) | raised (white) | fern | terracotta | espresso
  padding = "var(--space-6)",
  children,
  style,
  ...rest
}) {
  const tones = {
    card: {
      background: "var(--surface-card)",
      color: "var(--text-body)"
    },
    raised: {
      background: "var(--surface-raised)",
      color: "var(--text-body)"
    },
    fern: {
      background: "var(--surface-fern)",
      color: "var(--text-on-dark)"
    },
    terracotta: {
      background: "var(--surface-terracotta)",
      color: "var(--text-on-dark)"
    },
    espresso: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-dark)"
    }
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-3px)" : "none",
      transition: "transform var(--dur-normal) var(--ease-emphasis), box-shadow var(--dur-normal) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Quote — a large pull-quote set in Ramboia italic, the brand's expressive
 * display face. Optional attribution and tone-filled panel.
 */
function Quote({
  children,
  attribution,
  tone = "plain",
  // plain | bone | fern | terracotta
  style,
  ...rest
}) {
  const tones = {
    plain: {
      bg: "transparent",
      fg: "var(--text-strong)",
      pad: 0
    },
    bone: {
      bg: "var(--surface-card)",
      fg: "var(--text-strong)",
      pad: "var(--space-7)"
    },
    fern: {
      bg: "var(--surface-fern)",
      fg: "var(--text-on-dark)",
      pad: "var(--space-7)"
    },
    terracotta: {
      bg: "var(--surface-terracotta)",
      fg: "var(--text-on-dark)",
      pad: "var(--space-7)"
    }
  };
  const t = tones[tone] || tones.plain;
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      background: t.bg,
      color: t.fg,
      borderRadius: tone === "plain" ? 0 : "var(--radius-lg)",
      padding: t.pad,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "var(--text-3xl)",
      lineHeight: "var(--leading-snug)",
      textWrap: "balance"
    }
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-5)",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "var(--text-sm)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      opacity: 0.85
    }
  }, attribution));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeading — a display heading in the BHC voice. Poppins Bold for the
 * main line, with an optional Ramboia italic accent line that carries the
 * brand's whimsy. Supports the brand's "unexpected alignment" via `align`.
 */
function SectionHeading({
  eyebrow,
  title,
  accent,
  // rendered in Ramboia italic, on its own line
  align = "left",
  // left | center | right
  size = "lg",
  // md | lg | xl
  style,
  ...rest
}) {
  const sizes = {
    md: "var(--text-2xl)",
    lg: "var(--text-3xl)",
    xl: "var(--text-4xl)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "var(--text-sm)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      marginBottom: "var(--space-3)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: sizes[size],
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-strong)",
      textWrap: "balance"
    }
  }, title, accent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 400,
      color: "var(--text-accent)",
      fontSize: "1.06em",
      lineHeight: 1.1,
      marginTop: "0.12em"
    }
  }, accent)));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  terracotta: {
    bg: "var(--bhc-terracotta)",
    fg: "var(--bhc-ivory)"
  },
  fern: {
    bg: "var(--bhc-fern)",
    fg: "var(--bhc-ivory)"
  },
  sun: {
    bg: "var(--bhc-sun)",
    fg: "var(--bhc-espresso)"
  },
  poppy: {
    bg: "var(--bhc-poppy)",
    fg: "var(--bhc-ivory)"
  },
  sky: {
    bg: "var(--bhc-sky)",
    fg: "var(--bhc-espresso)"
  },
  blossom: {
    bg: "var(--bhc-blossom)",
    fg: "var(--bhc-espresso)"
  },
  butter: {
    bg: "var(--bhc-butter)",
    fg: "var(--bhc-espresso)"
  },
  espresso: {
    bg: "var(--bhc-espresso)",
    fg: "var(--bhc-ivory)"
  }
};

/**
 * Tag — a pill chip for event categories, program types, and topic labels.
 * Solid fill in a brand tone, or an outline variant on the espresso ink.
 */
function Tag({
  tone = "terracotta",
  variant = "solid",
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.terracotta;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: "var(--text-xs)",
    letterSpacing: "var(--tracking-caps)",
    textTransform: "uppercase",
    lineHeight: 1,
    padding: "7px 14px",
    borderRadius: "var(--radius-pill)"
  };
  const skin = variant === "outline" ? {
    background: "transparent",
    color: "var(--text-strong)",
    border: "var(--border-width) solid var(--text-strong)"
  } : {
    background: t.bg,
    color: t.fg,
    border: "var(--border-width) solid transparent"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...skin,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/EventCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EventCard — the signature BHC community-event card, drawn from the brand's
 * poster system ("Community Event / Lift Your Voice / 10.07.26"). A tone-filled
 * panel with a category tag, big title, date stamp and details. Optionally
 * carries a blossom motif in the corner.
 */
function EventCard({
  category = "Community Event",
  tone = "espresso",
  // espresso | fern | terracotta | bone
  title,
  date,
  time,
  location,
  blossom,
  // optional React node (e.g. <Blossom/>)
  onClick,
  style,
  ...rest
}) {
  const tones = {
    espresso: {
      bg: "var(--surface-inverse)",
      fg: "var(--text-on-dark)",
      tag: "sun"
    },
    fern: {
      bg: "var(--surface-fern)",
      fg: "var(--text-on-dark)",
      tag: "butter"
    },
    terracotta: {
      bg: "var(--surface-terracotta)",
      fg: "var(--text-on-dark)",
      tag: "butter"
    },
    bone: {
      bg: "var(--surface-card)",
      fg: "var(--text-strong)",
      tag: "terracotta"
    }
  };
  const t = tones[tone] || tones.espresso;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      overflow: "hidden",
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      minHeight: 300,
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-md)",
      transform: hover ? "translateY(-3px)" : "none",
      transition: "transform var(--dur-normal) var(--ease-emphasis), box-shadow var(--dur-normal) var(--ease-standard)",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, rest), blossom && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -18,
      bottom: -18,
      opacity: 0.9,
      pointerEvents: "none"
    }
  }, blossom), /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: t.tag
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "var(--text-2xl)",
      lineHeight: "var(--leading-snug)",
      maxWidth: "14ch"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      position: "relative",
      zIndex: 1
    }
  }, date && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "var(--text-xl)",
      letterSpacing: "-0.01em"
    }
  }, date, time ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: "var(--text-md)"
    }
  }, "  ·  " + time) : null), location && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      opacity: 0.85
    }
  }, location)));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary BHC action control. Fully rounded (pill), Poppins
 * SemiBold, warm palette. Gentle ease-out hover (darken + subtle rise),
 * press settles back down. No bounce.
 */
function Button({
  variant = "primary",
  // primary | secondary | ghost | outline
  size = "md",
  // sm | md | lg
  disabled = false,
  full = false,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 18px",
      fontSize: "var(--text-sm)"
    },
    md: {
      padding: "12px 26px",
      fontSize: "var(--text-base)"
    },
    lg: {
      padding: "16px 34px",
      fontSize: "var(--text-md)"
    }
  };
  const variants = {
    primary: {
      background: "var(--primary)",
      color: "var(--on-primary)",
      border: "var(--border-width) solid transparent"
    },
    secondary: {
      background: "var(--secondary)",
      color: "var(--on-secondary)",
      border: "var(--border-width) solid transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "var(--border-width-bold) solid var(--text-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-accent)",
      border: "var(--border-width) solid transparent"
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === "primary" ? {
    background: "var(--primary-hover)"
  } : variant === "secondary" ? {
    background: "var(--secondary-hover)"
  } : variant === "outline" ? {
    background: "var(--surface-card)"
  } : {
    background: "rgba(165,89,60,0.10)"
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5em",
      width: full ? "100%" : "auto",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      transform: !disabled && active ? "translateY(0)" : !disabled && hover ? "translateY(-1px)" : "translateY(0)",
      boxShadow: !disabled && hover && !active ? "var(--shadow-md)" : "none",
      ...sizes[size],
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — custom square check with terracotta fill when selected. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 22,
      height: 22,
      flex: "0 0 auto",
      borderRadius: "var(--radius-xs)",
      border: `var(--border-width-bold) solid ${on ? "var(--primary)" : "var(--border-strong)"}`,
      background: on ? "var(--primary)" : "var(--surface-raised)",
      color: "var(--on-primary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1,
      transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)"
    }
  }, on ? "✓" : ""), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a circular icon-only control for compact actions (nav, close,
 * social). Pass an icon glyph/SVG/emoji-free node as children.
 */
function IconButton({
  variant = "solid",
  // solid | outline | ghost
  size = "md",
  // sm | md | lg
  label,
  // required accessible label
  disabled = false,
  children,
  style,
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 42,
    lg: 52
  }[size];
  const variants = {
    solid: {
      background: "var(--primary)",
      color: "var(--on-primary)",
      border: "none"
    },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "var(--border-width-bold) solid var(--text-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "none"
    }
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dims,
      height: dims,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
      transform: hover && !disabled ? "translateY(-1px)" : "none",
      filter: hover && !disabled ? "brightness(0.94)" : "none",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. Cream-toned, soft-rounded, with a warm
 * terracotta focus ring. Optional label and helper/error text.
 */
function Input({
  label,
  helper,
  error,
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-strong)",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      background: "var(--surface-raised)",
      padding: "11px 15px",
      borderRadius: "var(--radius-md)",
      border: `var(--border-width) solid ${error ? "var(--danger)" : focus ? "var(--primary)" : "var(--border-soft)"}`,
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      outline: "none",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--text-muted)",
      marginTop: 6
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select — native dropdown styled to match Input. Pass options as
 * [{value,label}] or children <option>. */
function Select({
  label,
  helper,
  error,
  id,
  options,
  children,
  style,
  ...rest
}) {
  const inputId = id || (label ? `sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-strong)",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      background: "var(--surface-raised)",
      padding: "11px 40px 11px 15px",
      borderRadius: "var(--radius-md)",
      border: `var(--border-width) solid ${error ? "var(--danger)" : focus ? "var(--primary)" : "var(--border-soft)"}`,
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      outline: "none",
      cursor: "pointer",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: 15,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: 12
    }
  }, "\u25BE")), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--text-muted)",
      marginTop: 6
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multi-line variant of Input, same cream field styling. */
function Textarea({
  label,
  helper,
  error,
  id,
  rows = 4,
  style,
  ...rest
}) {
  const inputId = id || (label ? `ta-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-strong)",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      background: "var(--surface-raised)",
      padding: "11px 15px",
      borderRadius: "var(--radius-md)",
      border: `var(--border-width) solid ${error ? "var(--danger)" : focus ? "var(--primary)" : "var(--border-soft)"}`,
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      outline: "none",
      resize: "vertical",
      lineHeight: "var(--leading-normal)",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--text-muted)",
      marginTop: 6
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EventsSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  EventCard,
  Blossom,
  Button
} = window.BlackHealingCentreDesignSystem_43d3f9;
const I = "../../assets/illustrations/svg";
const EVENTS = [{
  tone: "espresso",
  category: "Community Event",
  title: "Lift Your Voice",
  date: "10.07.26",
  time: "5PM – 7PM",
  location: "2100 Av. de Marlowe, Suite 449",
  v: 4,
  c: "Sun"
}, {
  tone: "fern",
  category: "Workshop",
  title: "Return to Your Roots",
  date: "25.05.26",
  time: "5PM – 7PM",
  location: "Black Healing Centre, 4th Floor",
  v: 6,
  c: "Butter"
}, {
  tone: "terracotta",
  category: "Monthly Gathering",
  title: "Rest & Reconnect",
  date: "09.07.26",
  time: "6PM – 8PM",
  location: "Montréal · Suite 449",
  v: 8,
  c: "Blossom"
}];
function EventsSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "80px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What's on",
    title: "Come as you are,",
    accent: "leave lighter.",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "View all events \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 22,
      marginTop: 40
    }
  }, EVENTS.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.title
  }, e, {
    blossom: /*#__PURE__*/React.createElement(Blossom, {
      variation: e.v,
      color: e.c,
      size: 150,
      base: I
    })
  }))))));
}
window.EventsSection = EventsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EventsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  Input,
  Button,
  Checkbox,
  Logo,
  Blossom
} = window.BlackHealingCentreDesignSystem_43d3f9;
const L = "../../assets/logo/svg";
const I = "../../assets/illustrations/svg";
function Footer() {
  const cols = [{
    h: "Programs",
    items: ["Therapy", "Workshops", "Gatherings", "Youth"]
  }, {
    h: "About",
    items: ["Our story", "Team", "Careers", "Contact"]
  }, {
    h: "Support",
    items: ["Donate", "Volunteer", "Partners"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "64px 28px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 0.7fr) 1.4fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    layout: "stacked",
    color: "Ivory",
    size: 40,
    base: L
  })), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--bhc-sun)",
      fontWeight: 600,
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--bhc-bone)",
      textDecoration: "none",
      fontSize: 14
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--bhc-sun)",
      fontWeight: 600,
      marginBottom: 14
    }
  }, "Stay in the loop"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@email.com",
    style: {
      background: "var(--bhc-ivory)"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    full: true
  }, "Subscribe")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 22,
      borderTop: "1.5px solid rgba(255,251,242,0.15)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      fontSize: 13,
      color: "var(--bhc-bone)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Black Healing Centre \u2014 For us, by us."), /*#__PURE__*/React.createElement("span", null, "Tioti\xE0:ke / Montr\xE9al"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  SectionHeading,
  Button,
  Blossom,
  Tag
} = window.BlackHealingCentreDesignSystem_43d3f9;
const I = "../../assets/illustrations/svg";
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "72px 28px 80px",
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: "sun"
  }, "Healing space for Black folks \xB7 Tioti\xE0:ke / MTL"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "22px 0 0",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 66,
      lineHeight: 1.02,
      letterSpacing: "-0.03em",
      color: "var(--text-strong)"
    }
  }, "A safer space to", /*#__PURE__*/React.createElement("br", null), "gather, connect", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 400,
      color: "var(--text-accent)",
      fontSize: 70
    }
  }, "and heal.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px 0 0",
      maxWidth: "46ch",
      fontSize: 19,
      lineHeight: 1.65,
      color: "var(--text-body)"
    }
  }, "BHC creates intergenerational programming that reimagines healing through a community-centred and artistic lens \u2014 free and subsidized for people of African and Caribbean descent."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav && onNav("Programs")
  }, "Explore programs"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav && onNav("Events")
  }, "See what's on"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 380,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 320,
      height: 320,
      borderRadius: "50%",
      background: "var(--bhc-blossom)",
      right: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 150,
      height: 150,
      borderRadius: "50%",
      background: "var(--bhc-water)",
      left: 0,
      top: 20
    }
  }), /*#__PURE__*/React.createElement(Blossom, {
    variation: 1,
    color: "Terracotta",
    size: 300,
    base: I,
    style: {
      position: "relative",
      zIndex: 1
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MissionBand.jsx
try { (() => {
const {
  Quote,
  Blossom
} = window.BlackHealingCentreDesignSystem_43d3f9;
const I = "../../assets/illustrations/svg";
function MissionBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-fern)",
      color: "var(--text-on-dark)",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Blossom, {
    variation: 3,
    color: "Butter",
    size: 220,
    base: I,
    style: {
      position: "absolute",
      left: -40,
      bottom: -50,
      opacity: 0.25
    }
  }), /*#__PURE__*/React.createElement(Blossom, {
    variation: 9,
    color: "Sun",
    size: 180,
    base: I,
    style: {
      position: "absolute",
      right: -30,
      top: -40,
      opacity: 0.25
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-md)",
      margin: "0 auto",
      padding: "90px 28px",
      textAlign: "center",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      fontWeight: 600,
      color: "var(--bhc-butter)"
    }
  }, "Our why"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: 46,
      lineHeight: 1.15,
      color: "var(--bhc-ivory)",
      textWrap: "balance"
    }
  }, "Reclaim your mental, physical, emotional and spiritual well-being."))));
}
window.MissionBand = MissionBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MissionBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProgramsSection.jsx
try { (() => {
const {
  SectionHeading,
  Card,
  Blossom,
  Tag
} = window.BlackHealingCentreDesignSystem_43d3f9;
const I = "../../assets/illustrations/svg";
const PROGRAMS = [{
  tag: "Therapy",
  tone: "fern",
  color: "Fern",
  v: 2,
  title: "Subsidized therapy",
  body: "One-on-one sessions with culturally-affirming practitioners, at accessible rates."
}, {
  tag: "Workshops",
  tone: "terracotta",
  color: "Terracotta",
  v: 5,
  title: "Healing workshops",
  body: "Yoga, sound baths, journaling and somatic circles — open to all."
}, {
  tag: "Gatherings",
  tone: "sky",
  color: "Sky",
  v: 7,
  title: "Community gatherings",
  body: "Monthly drop-ins to rest, connect and return to your roots."
}];
function ProgramsSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "80px 28px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we offer",
    title: "Care that meets you",
    accent: "where you are.",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 22,
      marginTop: 40
    }
  }, PROGRAMS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    tone: "raised",
    interactive: true
  }, /*#__PURE__*/React.createElement(Blossom, {
    variation: p.v,
    color: p.color,
    size: 64,
    base: I
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: p.tone
  }, p.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "12px 0 8px",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--text-strong)"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)",
      fontSize: 15,
      lineHeight: 1.6
    }
  }, p.body))))));
}
window.ProgramsSection = ProgramsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProgramsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
const {
  Logo,
  Button,
  IconButton
} = window.BlackHealingCentreDesignSystem_43d3f9;
const L = "../../assets/logo/svg";
window.SiteHeader = SiteHeader;
function SiteHeader({
  onNav,
  active = "Home"
}) {
  const links = ["Home", "Programs", "Events", "About", "Give"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(255,251,242,0.86)",
      backdropFilter: "blur(10px)",
      borderBottom: "1.5px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "14px 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav("Home"),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    layout: "horizontal",
    size: 40,
    base: L
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "center"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => onNav && onNav(l),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: active === l ? 700 : 500,
      color: active === l ? "var(--text-accent)" : "var(--text-body)",
      padding: "4px 0"
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav && onNav("Give")
  }, "Donate")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Blossom = __ds_scope.Blossom;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
