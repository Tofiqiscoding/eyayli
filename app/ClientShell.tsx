"use client";

import { usePathname, useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isAdminRoute = pathname.startsWith("/admin");

  // onNavigate tipini HeaderProps ilə uyğunlaşdırın, məsələn: (to: string) => void
  const handleNavigate = (to: string) => {
    // optional: yoxlayın ki, link relative-dir və ya tam url-dir
    router.push(to);
  };

  return (
    <>
      {!isAdminRoute && <Header onNavigate={handleNavigate} />}
      <main>{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
