/**
 * Centralized Site Configuration & Editorial Narrative
 * PUMP.FUN: MEME KILLER — Master Editorial Redesign
 */

export interface SocialLinkConfig {
  name: string;
  url: string | null;
  configured: boolean;
  handle: string;
}

export const SITE_CONFIG = {
  name: "PUMP.FUN — MEME KILLER",
  title: "PUMP.FUN: MEME KILLER | An Independent Meme Culture Critique",
  eyebrow: "AN INDEPENDENT MEME CULTURE CRITIQUE",
  
  headlinePrimary: "THEY DIDN'T JUST LAUNCH TOKENS.",
  headlineSecondary: "THEY TURNED MEMES INTO AMMUNITION.",
  
  heroSupporting: "An examination of the launchpad machine, the FOMO it creates, and the communities left behind when the attention moves on.",
  
  cycleShort: "DEPLOY / HYPE / FOMO / DUMP / REPEAT",
  cycleExpanded: ["CREATE", "PROMOTE", "FOMO", "SELL-OFF", "ABANDON", "REPEAT"],
  
  coreThesis: "THE PROBLEM ISN'T MEMES. IT'S THE MACHINE THAT MAKES THEM DISPOSABLE.",
  closingQuote: "THE MEME IS DEAD. LONG LIVE THE MEME.",
  
  // Editorial disclaimers
  disclaimerShort: "Independent satirical & editorial critique. Not affiliated with or endorsed by Pump.fun.",
  disclaimerFull: `PUMP.FUN — MEME KILLER is an independent satirical and editorial project. It is not affiliated with, endorsed by, or operated by Pump.fun or its affiliates. References to Pump.fun are for commentary, educational analysis, and cultural criticism. The views presented are opinions and interpretations of meme culture and speculative market dynamics. Nothing on this website constitutes financial advice, and crypto assets involve substantial risk.`,

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
      name: "Telegram Community",
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

  // Confession feature settings
  confessionSettings: {
    isDemoMode: true,
    maxCharacters: 280,
    storageKey: "pump_meme_killer_confessions_demo_v2",
  },

  // Navigation Links
  navLinks: [
    { label: "The Machine", href: "#machine" },
    { label: "The Damage", href: "#damage" },
    { label: "The Timeline", href: "#timeline" },
    { label: "The Manifesto", href: "#manifesto" },
    { label: "Confessions", href: "#confessions" },
  ],
};
