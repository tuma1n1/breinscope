/** "+254 (0)20 260 1894" -> "tel:+254202601894" (drops the trunk "(0)"). */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/\(0\)/g, "").replace(/[^\d+]/g, "")}`;
}
