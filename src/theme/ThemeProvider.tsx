import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

export const COMPANION_ELEMENT_COLORS: Record<string, string> = {
  flora: '#10b981',
  water: '#0ea5e9',
  fire: '#f59e0b',
  wind: '#14b8a6',
  ice: '#06b6d4',
  earth: '#b45309',
  lightning: '#eab308',
  cosmic: '#8b5cf6',
  shadow: '#6366f1',
  astral: '#ec4899',
  void: '#a855f7',
  temporal: '#f97316',
  divine: '#e11d48',
};

export interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  companionElement?: string;
  setCompanionElement: (element?: string) => void;
  companionBackgroundImageUrl?: string;
  setCompanionBackgroundImageUrl: (url?: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  storageKey?: string;
  companionElement?: string;
  companionBackgroundImageUrl?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'system',
  storageKey = 'pm-ui-theme',
  companionElement: initialElement,
  companionBackgroundImageUrl: initialBgUrl,
}) => {
  const [companionElement, setCompanionElement] = useState<string | undefined>(initialElement);
  const [companionBackgroundImageUrl, setCompanionBackgroundImageUrl] = useState<string | undefined>(
    initialBgUrl
  );
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    try {
      const stored = localStorage.getItem(storageKey);
      return (stored as ThemeMode) || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = () => {
      let resolved: 'light' | 'dark' = 'light';

      if (theme === 'system') {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        resolved = systemDark ? 'dark' : 'light';
      } else {
        resolved = theme;
      }

      setResolvedTheme(resolved);

      if (resolved === 'dark') {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
      }
    };

    applyTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme();
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;

    if (companionElement) {
      const cleanElement = companionElement.toLowerCase().trim();
      root.setAttribute('data-companion-element', cleanElement);
      const accent = COMPANION_ELEMENT_COLORS[cleanElement] || '#3b82f6';
      root.style.setProperty('--companion-accent', accent);
    } else {
      root.removeAttribute('data-companion-element');
      root.style.removeProperty('--companion-accent');
    }

    if (companionBackgroundImageUrl) {
      root.style.setProperty('--companion-bg-image', `url(${companionBackgroundImageUrl})`);
    } else {
      root.style.removeProperty('--companion-bg-image');
    }
  }, [companionElement, companionBackgroundImageUrl]);

  const setTheme = (newTheme: ThemeMode) => {
    try {
      localStorage.setItem(storageKey, newTheme);
    } catch {
      // Ignore storage errors
    }
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
        companionElement,
        setCompanionElement,
        companionBackgroundImageUrl,
        setCompanionBackgroundImageUrl,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: 'system',
      resolvedTheme: 'light',
      setTheme: () => {},
      toggleTheme: () => {},
      setCompanionElement: () => {},
      setCompanionBackgroundImageUrl: () => {},
    };
  }
  return context;
}

ThemeProvider.displayName = 'ThemeProvider';
export default ThemeProvider;
