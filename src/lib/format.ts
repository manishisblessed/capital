/**
 * Editorial number & currency helpers.
 * Uses non-breaking / thin spaces so digits never break awkwardly across lines.
 */

const NBSP = "\u00A0";
const THIN_SP = "\u2009";

export function formatINRCrore(amountInCr: number, opts: { decimals?: number } = {}) {
  const { decimals = 0 } = opts;
  const formatted = amountInCr.toLocaleString("en-IN", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
  return `\u20B9${THIN_SP}${formatted}${NBSP}Cr`;
}

export function formatINR(amount: number, opts: { decimals?: number } = {}) {
  const { decimals = 0 } = opts;
  const formatted = amount.toLocaleString("en-IN", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
  return `\u20B9${THIN_SP}${formatted}`;
}

/** Non-breaking join of a number and its unit — e.g. "22 acres" never wraps. */
export function withUnit(value: string | number, unit: string) {
  return `${value}${NBSP}${unit}`;
}

/**
 * "As of Q2 2026" — canonical timestamp for stat blocks.
 * Accepts an ISO date or (year, quarter) tuple.
 */
export function asOfQuarter(date: Date = new Date()) {
  const q = Math.floor(date.getMonth() / 3) + 1;
  return `As of Q${q} ${date.getFullYear()}`;
}
