/**
 * Section 9 palette — canonical order for data visualization.
 * Import these constants when passing colors to any chart library so we
 * never accidentally introduce bright saturated hues.
 */

export const chartPalette = {
  primary: "#B7353A",   // Landmark Crimson
  secondary: "#4E6478", // Slate Blue
  support: "#5C6670",   // Slate
  highlight: "#B39664", // Champagne Bronze
  positive: "#3D5C45",  // Forest Green (muted)
  negative: "#A65D5D",  // Muted Red
} as const;

/** Ordered array for series-index-based lookup. */
export const chartSeries = [
  chartPalette.primary,
  chartPalette.secondary,
  chartPalette.support,
  chartPalette.highlight,
  chartPalette.positive,
  chartPalette.negative,
] as const;

export type ChartColor = keyof typeof chartPalette;
