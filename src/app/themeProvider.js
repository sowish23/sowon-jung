"use client";
import { ThemeProvider } from "next-themes"

export default function ThemeProviderC({ children }) {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}