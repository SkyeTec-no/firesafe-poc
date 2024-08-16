export const languages = ["no", "dk", "pl"] as const;
export type Language = (typeof languages)[number];
