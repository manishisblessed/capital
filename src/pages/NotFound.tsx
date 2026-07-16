import { Link } from "react-router-dom";
import { ButtonLink } from "@/components/common/Button";
import { Seo } from "@/components/common/Seo";

export default function NotFound() {
  return (
    <section className="min-h-[100svh] grid place-items-center bg-ivory px-6">
      <Seo title="Page not found" noindex />
      <div className="relative text-center max-w-xl mx-auto py-32">
        <p className="eyebrow">Page not found</p>
        <h1 className="display-1 mt-6 tabular-nums">404</h1>
        <p className="mt-6 text-lg text-slate text-balance">
          The page you are looking for does not exist. Return home or explore current opportunities.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink to="/" variant="primary">
            Back home
          </ButtonLink>
          <Link
            to="/opportunities"
            className="text-sm uppercase tracking-[0.1em] text-charcoal link-underline"
          >
            View opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}
