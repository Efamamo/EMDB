'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted &&
        (currentTheme === 'dark' ? (
          <div
            className="cursor-pointer"
            onClick={() => {
              setTheme('light');
            }}
          >
            <MdLightMode size={'40px'} />
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => {
              setTheme('dark');
            }}
          >
            <MdDarkMode size={'40px'} />
          </div>
        ))}
    </div>
  );
}
