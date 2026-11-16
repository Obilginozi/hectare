"use client";

import Image from "next/image";
import { useLocale } from "@/components/Locale";
import { company } from "@/lib/content";
import { withBase } from "@/lib/paths";

export function WhatsAppFloat() {
  const { lang } = useLocale();
  const label =
    lang === "en"
      ? `WhatsApp message to ${company.phoneDisplay}`
      : `WhatsApp ile ${company.phoneDisplay} numarasına yazın`;

  return (
    <a
      className="whatsapp-float"
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Image src={withBase("/media/WhatsApp.webp")} alt="" width={56} height={56} priority />
    </a>
  );
}
