import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import Glow from "@/components/ui/glow";
import { siteConfig } from "@/config/site";
import { Users, Code } from "lucide-react";

export const metadata = {
  title: `Our Team ✦ ${siteConfig.name}`,
  description: `Meet the team behind ${siteConfig.name}, working to provide personalized roadmaps for future-ready skills.`,
};

export default function Team() {
  return (
    <>
      <main className="min-h-screen w-full relative overflow-hidden bg-background text-foreground">
        <Navbar />

        {/* Decorative background glow */}
        <Glow variant="top" className="opacity-70 dark:opacity-35 pointer-events-none" />

        <div className="max-w-container mx-auto px-6 py-24 pt-32 md:pt-36 flex flex-col items-center gap-12 sm:gap-16">
          
          {/* Header section */}
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-semibold text-primary">
              <Users className="size-3.5" />
              <span>The Builders</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance leading-tight bg-gradient-to-r from-primary via-brand-foreground to-brand bg-clip-text text-transparent pb-1">
              Our Team
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground text-balance max-w-2xl font-medium">
              We are the team driving {siteConfig.name} forward.
            </p>
          </div>

          {/* Originated As Hackathon Card */}
          <div className="w-full max-w-4xl border border-border/60 bg-linear-to-br from-violet-500/5 to-purple-500/5 dark:from-violet-500/10 dark:to-purple-500/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 border-dashed border-violet-500/30">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center shrink-0">
              <Code className="w-6 h-6 text-violet-500" />
            </div>
            <div className="flex flex-col gap-1.5 text-center sm:text-left">
              <h3 className="text-lg font-bold text-violet-850 dark:text-violet-200">Hackathon Origins</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                <strong>{siteConfig.name} originally was started as a hackathon project</strong>. Over time, it has evolved into a robust, AI-powered career navigation and labor market matching platform.
              </p>
            </div>
          </div>

        </div>

        <Footer />
      </main>
    </>
  );
}
