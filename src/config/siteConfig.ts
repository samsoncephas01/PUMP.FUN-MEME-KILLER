/**
 * Centralized Site Configuration & Content Constants
 * PUMP.FUN — MEME KILLER
 */

export interface SocialLinkConfig {
  name: string;
  url: string | null;
  configured: boolean;
  handle: string;
}

export const SITE_CONFIG = {
  name: "PUMP.FUN — MEME KILLER",
  title: "PUMP.FUN — MEME KILLER | A Meme Culture Critique",
  headlineMain: "THEY DIDN'T JUST LAUNCH TOKENS. THEY TURNED MEMES INTO AMMUNITION.",
  headlineAlt: "THEY DIDN'T KILL THE CHART. THEY KILLED THE MEME.",
  tagline: "DEPLOY. HYPE. FOMO. DUMP. REPEAT.",
  closingQuote: "THE MEME IS DEAD. LONG LIVE THE MEME.",
  
  // Editorial disclaimers
  disclaimerShort: "Independent satirical & editorial critique. Not affiliated with or endorsed by Pump.fun.",
  disclaimerFull: `PUMP.FUN — MEME KILLER is an independent satirical and editorial project. It is not affiliated with, endorsed by, or operated by Pump.fun or its affiliates. References to Pump.fun are for commentary and criticism. The views presented are opinions and interpretations of meme culture and speculative market dynamics. Nothing on this website constitutes financial advice, and crypto assets involve substantial risk.`,

  privacyNote: `This application operates in zero-telemetry client mode. We do not track personal identifiers, IP addresses, or cryptocurrency wallets. Confession submissions in this preview build are held temporarily within your browser's local session memory only, and are never transmitted to or stored on a persistent public database without a configured backend and moderation service.`,

  // Social link placeholders - honestly configured
  socials: {
    twitter: {
      name: "X (Twitter)",
      url: null, // Placeholder - set VITE_TWITTER_URL to enable
      configured: false,
      handle: "@memekiller_critique",
    } as SocialLinkConfig,
    telegram: {
      name: "Telegram Channel",
      url: null,
      configured: false,
      handle: "t.me/memekiller",
    } as SocialLinkConfig,
    github: {
      name: "Source Repository",
      url: null,
      configured: false,
      handle: "github.com/project",
    } as SocialLinkConfig,
  },

  // Confession feature mode
  confessionSettings: {
    isDemoMode: true,
    maxCharacters: 280,
    storageKey: "pump_meme_killer_confessions_demo_v1",
  },

  // Navigation Links
  navLinks: [
    { label: "THE MACHINE", href: "#machine" },
    { label: "THE DAMAGE", href: "#damage" },
    { label: "THE TIMELINE", href: "#timeline" },
    { label: "THE MANIFESTO", href: "#manifesto" },
    { label: "CONFESSIONS", href: "#confessions" },
  ],
};
