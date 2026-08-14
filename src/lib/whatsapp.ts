export const WHATSAPP_URL = "https://wa.me/message/K62JPAM2VAUWP1";

export function whatsappUrl(message?: string) {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
