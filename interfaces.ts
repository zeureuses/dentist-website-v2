import type { ReactNode } from "react";

export interface JsonData {
  ticker: string;
  ca: string;
  dextools_link: string;
  twitter_link: string;
  telegram_link: string;
}

export interface LayoutProps {
  children: ReactNode;
}
