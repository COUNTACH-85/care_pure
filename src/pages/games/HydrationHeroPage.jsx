import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";

const HydrationHeroGame = lazy(() => import("../../components/games/HydrationHeroGame"));

const HydrationHeroPage = () => {
  return (
    <>
      <Helmet>
        <title>Hydration Hero Game | Care Pure</title>
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* <Navbar /> */}
        <main className="container mx-auto px-4 py-8">
          <Suspense fallback={<p className="text-center">Loading Game...</p>}>
            <HydrationHeroGame />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default HydrationHeroPage;
