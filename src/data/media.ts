/**
 * Centralised image asset registry.
 *
 * Institutional imagery per Brand Design System v1.0 §5.
 * Replace external URLs with `/media/<name>.jpg` once licensed assets are
 * placed in `public/media/`. All consumers import from this file so that
 * swapping the source is a one-line change.
 */

export const media = {
  hero: {
    /** Institutional skyline — replace with licensed Landmark asset */
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2400&q=85",
    alt: "Urban commercial skyline at dusk — institutional real estate context",
  },
  about: {
    /** Grade-A institutional architecture — replace with licensed Landmark asset */
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    alt: "Institutional commercial architecture, glass and stone façade",
  },
} as const;
