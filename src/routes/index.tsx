import { Title } from "@solidjs/meta";
import { AboutCard } from "~/components/models/home/AboutCard";
import { FeaturedSeriesCard } from "~/components/models/home/FeaturedSeriesCard";
import { HighlightedWorksCard } from "~/components/models/home/HighlightedWorksCard";
import { ProfileCard } from "~/components/models/home/ProfileCard";
import { RecentArticlesCard } from "~/components/models/home/RecentArticlesCard";
import { MainLayout } from "~/layouts/main";

export default function Home() {
  return (
    <MainLayout>
      <Title>cp20.dev</Title>
      <ProfileCard />
      <AboutCard />
      <HighlightedWorksCard />
      <RecentArticlesCard />
      <FeaturedSeriesCard />
    </MainLayout>
  );
}
