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
      rel="noreferrer"
      aria-label={label}
    >
      <Image src={withBase("/media/WhatsApp.png")} alt="" width={64} height={64} priority />
    </a>
  );
}
