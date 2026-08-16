"use client";

import { ReactNode } from "react";
import { consumeSearchAttribution, trackEvent } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppLink({ children, message, origin, serviceId, categoryId, className = "button" }: { children: ReactNode; message?: string; origin: string; serviceId?: string; categoryId?: string; className?: string }) {
  return <a className={className} href={whatsappUrl(message)} target="_blank" rel="noreferrer" onClick={() => {
    trackEvent("whatsapp_click", { origin, service_id: serviceId, category_id: categoryId, from_page: `${window.location.pathname}${window.location.search}` });
    const search = consumeSearchAttribution();
    if (search) trackEvent("search_to_booking", { ...search, booking_origin: origin });
  }}>{children}</a>;
}
