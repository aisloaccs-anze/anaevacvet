import { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galerija",
  description: "Brskajte po naši zbirki luksuznih ročno vezanih šopkov, botaničnih poročnih instalacij in sodobnih dekoracij za dogodke, ročno izdelanih v Sloveniji.",
};

export default function GalleryPage() {
  return (
    <div className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent-sage font-bold mb-4 block">
            Botanični arhiv
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground mb-6 leading-tight">
            Ustvarjene kreacije
          </h1>
          <p className="font-sans text-sm md:text-base text-muted-text leading-relaxed max-w-xl mx-auto">
            Raziščite naš vizualni indeks vrhunskih cvetličnih kreacij, ustvarjenih z redkimi sezonskimi cvetovi, 
            organskimi oblikami in umetniškimi načeli oblikovanja ambientov.
          </p>
        </div>

        {/* Gallery Grid Masonry with Filter & Lightbox */}
        <GalleryGrid />
      </div>
    </div>
  );
}
