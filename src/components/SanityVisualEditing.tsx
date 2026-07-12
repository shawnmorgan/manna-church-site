import { useEffect, useMemo, useRef } from 'react';
import {
  VisualEditing,
  type HistoryAdapter,
  type HistoryUpdate,
  type Navigate,
} from '@sanity/visual-editing/react';
import type { ClientPerspective } from '@sanity/client';

const perspectiveCookieName = '__sanity_preview_perspective';

function currentUrl(): string {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function serializePerspective(perspective: ClientPerspective): string {
  return typeof perspective === 'string'
    ? perspective
    : JSON.stringify(perspective);
}

function setPerspectiveCookie(perspective: ClientPerspective): boolean {
  const next = serializePerspective(perspective);
  document.cookie = `${perspectiveCookieName}=${encodeURIComponent(next)}; path=/; SameSite=None; Secure`;
  return true;
}

export default function SanityVisualEditing() {
  const navigateRef = useRef<Navigate | undefined>(undefined);
  const lastUrlRef = useRef('');

  useEffect(() => {
    const sync = () => {
      const url = currentUrl();
      if (url !== lastUrlRef.current) {
        lastUrlRef.current = url;
        navigateRef.current?.({
          type: 'push',
          title: document.title,
          url,
        });
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
        navigate({
          type: 'push',
          title: document.title,
          url: currentUrl(),
        });
        return () => {
          navigateRef.current = undefined;
        };
      },
      update: (update: HistoryUpdate) => {
        if (update.type === 'push') {
          window.location.assign(update.url);
        }
        if (update.type === 'replace') {
          window.location.replace(update.url);
        }
      },
    }),
    [],
  );

  return (
    <VisualEditing
      history={history}
      portal={true}
      onPerspectiveChange={(perspective) => {
        if (setPerspectiveCookie(perspective)) {
          window.location.reload();
        }
      }}
      refresh={() => {
        return new Promise<void>((resolve) => {
          window.location.reload();
          resolve();
        });
      }}
    />
  );
}
