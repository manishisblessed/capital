/**
 * Motion tokens — mirrors the CSS custom properties in `globals.css`
 * (`--animate-duration-*`, `--ease-out-*`). Import from this file rather
 * than hard-coding values, so tempo can be tuned in one place.
 *
 * All values are in seconds because framer-motion uses seconds.
 */

export const durations = {
  fast: 0.2,
  base: 0.35,
  slow: 0.5,
  page: 0.4,
} as const;

/** Named easing curves. Serialisable as arrays for framer-motion. */
export const easings = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  outQuart: [0.25, 1, 0.5, 1] as const,
  inOutQuad: [0.45, 0, 0.55, 1] as const,
};

/** Standard framer-motion `transition` presets. */
export const transitions = {
  fade: { duration: durations.fast, ease: easings.outExpo },
  reveal: { duration: durations.slow, ease: easings.outExpo },
  page: { duration: durations.page, ease: easings.outExpo },
};
