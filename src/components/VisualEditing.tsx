import { useEffect, useMemo, useRef } from 'react';
import {
  VisualEditing,
  type HistoryAdapter,
} from '@sanity/visual-editing/react';
import { perspectiveCookieName } from '@sanity/preview-url-secret/constants';
import type { ClientPerspective } from '@sanity/client';

function serializePerspective(perspective: ClientPerspective): string {
  return typeof perspective === 'string'
    ? perspective
    : JSON.stringify(perspective);
}

function setCookie(name: string, value: string): void {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; SameSite=None; Secure`;
}

function currentUrl(): string {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export default function SanityVisualEditing() {
  type Navigate = Parameters<HistoryAdapter['subscribe']>[0];
  const navigateRef = useRef<Navigate | undefined>(undefined);
  const lastUrlRef = useRef('');

  useEffect(() => {
    const sync = () => {
      const url = currentUrl();
      if (url !== lastUrlRef.current) {
        lastUrlRef.current = url;
        navigateRef.current?.({ type: 'push', title: document.title, url });
      }
    };

    sync();
    window.addEventListener('popstate', sync);

    const origPush = window.history.pushState;
    window.history.pushState = function (...args) {
      origPush.apply(window.history, args);
      sync();
    };

    return () => {
      window.removeEventListener('popstate', sync);
      window.history.pushState = origPush;
    };
  }, []);

  const history = useMemo<HistoryAdapter>(
    () => ({
      subscribe: (navigate) => {
        navigateRef.current = navigate;
        navigate({ type: 'push', title: document.title, url: currentUrl() });
        return () => {
          navigateRef.current = undefined;
        };
      },
      update: (update) => {
        if (update.type === 'push') window.location.assign(update.url);
        if (update.type === 'replace') window.location.replace(update.url);
        if (update.type === 'pop') window.history.back();
      },
    }),
    []
  );

  return (
    <VisualEditing
      history={history}
      portal={true}
      onPerspectiveChange={(perspective) => {
        setCookie(perspectiveCookieName, serializePerspective(perspective));
        window.location.reload();
      }}
      refresh={() => {
        return new Promise((resolve) => {
          window.location.reload();
          resolve();
        });
      }}
    />
  );
}
