import { AboutCard } from '~/components/models/home/AboutCard';
import { HighlightedWorksCard } from '~/components/models/home/HighlightedWorksCard';
import { ProfileCard } from '~/components/models/home/ProfileCard';
import { MainLayout } from '~/layouts/main';

export default function Home() {
  return (
    <MainLayout>
      <ProfileCard />
      <AboutCard />
      <HighlightedWorksCard />
    </MainLayout>
  );
}
