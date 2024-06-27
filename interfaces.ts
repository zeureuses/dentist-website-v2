import type { ReactNode } from "react";

export interface JsonData {
  ticker: string;
  ca: string;
  dextools_link: string;
  twitter_link: string;
  telegram_link: string;
}

export interface ButtonWithArrowProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface ScaleLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}
