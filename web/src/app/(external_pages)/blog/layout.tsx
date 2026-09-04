import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Blog ✦ ${siteConfig.name}`,
  description: "Discover the latest posts, insights, and updates from the SkillSync team.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
