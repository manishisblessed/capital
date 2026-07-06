import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { PageTransition } from "@/components/layout/PageTransition";
import { useLenis } from "@/hooks/useLenis";

const Home = lazy(() => import("@/pages/Home"));
const OurBusiness = lazy(() => import("@/pages/OurBusiness"));
const OurPeople = lazy(() => import("@/pages/OurPeople"));
const Contact = lazy(() => import("@/pages/Contact"));
const Disclaimer = lazy(() => import("@/pages/Disclaimer"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const MultiplierFund = lazy(() => import("@/pages/funds/MultiplierFund"));
const OpportunityFund = lazy(() => import("@/pages/funds/OpportunityFund"));
const LVF = lazy(() => import("@/pages/funds/LVF"));
const SPV = lazy(() => import("@/pages/funds/SPV"));

const Blogs = lazy(() => import("@/pages/knowledge/Blogs"));
const BlogDetail = lazy(() => import("@/pages/knowledge/BlogDetail"));
const FAQ = lazy(() => import("@/pages/knowledge/FAQ"));

function PageFallback() {
  return (
    <div className="min-h-[100svh] grid place-items-center bg-canvas">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-red-500 animate-spin" />
        <p className="text-xs uppercase tracking-[0.22em] text-paper/50">Loading</p>
      </div>
    </div>
  );
}

export default function App() {
  useLenis();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <main>
        <Suspense fallback={<PageFallback />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-business" element={<OurBusiness />} />
              <Route path="/our-people" element={<OurPeople />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/disclaimer" element={<Disclaimer />} />

              <Route path="/funds/multiplier" element={<MultiplierFund />} />
              <Route path="/funds/opportunity" element={<OpportunityFund />} />
              <Route path="/funds/lvf" element={<LVF />} />
              <Route path="/funds/spv" element={<SPV />} />

              <Route path="/knowledge/blogs" element={<Blogs />} />
              <Route path="/knowledge/blogs/:slug" element={<BlogDetail />} />
              <Route path="/knowledge/faq" element={<FAQ />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
