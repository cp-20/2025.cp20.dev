import { AboutCard } from '~/components/models/home/AboutCard';
import { ProfileCard } from '~/components/models/home/ProfileCard';

export default function Home() {
  return (
    <main class="max-w-4xl mx-auto p-4 space-y-8">
      <ProfileCard />
      <AboutCard />
    </main>
  );
}
