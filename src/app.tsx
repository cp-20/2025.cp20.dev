import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import background from './assets/background.png';

import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';

export default function App() {
  return (
    <div>
      <img
        src={background}
        alt=""
        class="object-cover fixed inset-0 w-screen h-screen -z-1"
      />
      <div class="fixed bottom-4 right-4 text-gray-400 text-xs">
        Image by{' '}
        <a class="underline" href="https://www.pixiv.net/users/1056186">
          catzz
        </a>
      </div>
      <div class="fixed inset-0 bg-black/80 w-screen h-screen -z-1" />
      <Router root={(props) => <Suspense>{props.children}</Suspense>}>
        <FileRoutes />
      </Router>
    </div>
  );
}
