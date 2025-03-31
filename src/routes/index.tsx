import { AboutCard } from "~/components/models/home/AboutCard";
import { HighlightedWorksCard } from "~/components/models/home/HighlightedWorksCard";
import { ProfileCard } from "~/components/models/home/ProfileCard";
import { RecentArticlesCard } from "~/components/models/home/RecentArticlesCard";
import { MainLayout } from "~/layouts/main";

export default function Home() {
  return (
    <MainLayout>
      <ProfileCard />
      <AboutCard />
      <HighlightedWorksCard />
      <RecentArticlesCard />
    </MainLayout>
  );
}
