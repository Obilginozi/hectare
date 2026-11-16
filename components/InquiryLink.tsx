import { company } from "@/lib/content";

export function InquiryLink({ product }: { product: string }) {
  const subject = encodeURIComponent(`Hectare: ${product}`);
  const body = encodeURIComponent(`${product} hakkında bilgi almak istiyorum.`);

  return (
    <a className="text-link" href={`mailto:${company.email}?subject=${subject}&body=${body}`}>
      Bilgi iste
    </a>
  );
}
