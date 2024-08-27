export const languages = ["no", "dk", "en", "pl"] as const;
export type Language = (typeof languages)[number];
