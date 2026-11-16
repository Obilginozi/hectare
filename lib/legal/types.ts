export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] };

export type LegalPage = {
  slug: string;
  title: { tr: string; en: string };
  intro?: { tr: string; en: string };
  blocks: { tr: LegalBlock[]; en: LegalBlock[] };
};
