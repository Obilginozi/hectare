import type { Metadata } from "next";
import { Home } from "@/components/Home";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  alternates: { canonical: canonicalPath("/") },
};

export default function HomePage() {
  return <Home />;
}
