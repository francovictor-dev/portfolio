"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type CarouselPropType = Pick<ProjectInterface, "images" | "title">;

export const Carousel = ({ images, title }: CarouselPropType) => {
  const slides = images.slice(1);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateControls = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateControls();
    emblaApi.on("select", updateControls).on("reInit", updateControls);
    return () => {
      emblaApi.off("select", updateControls).off("reInit", updateControls);
    };
  }, [emblaApi, updateControls]);

  if (slides.length === 0) return null;

  return (
    <section
      className="w-full min-w-0"
      aria-label={`Imagens do projeto ${title}`}
      aria-roledescription="carrossel"
    >
      <div className="overflow-hidden rounded-4xl bg-footer" ref={emblaRef}>
        <div className="flex [touch-action:pan-y_pinch-zoom]">
          {slides.map((src, index) => (
            <div
              className="min-w-0 flex-[0_0_100%]"
              key={`${src}-${index}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${slides.length}`}
            >
              <Image
                className="h-[50vh] w-full object-contain"
                src={src}
                alt={`${title} — imagem ${index + 1}`}
                height={800}
                width={1200}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="mt-4 flex items-center justify-between gap-4">
          <button
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            type="button"
            aria-label="Imagem anterior"
            disabled={!canScrollPrev}
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <div
            className="flex flex-wrap justify-center"
            aria-label="Selecionar imagem"
          >
            {slides.map((src, index) => (
              <button
                className="flex size-8 items-center justify-center"
                type="button"
                key={`${src}-${index}`}
                aria-label={`Ir para imagem ${index + 1}`}
                aria-current={selectedIndex === index ? "true" : undefined}
                onClick={() => emblaApi?.scrollTo(index)}
              >
                <span
                  className={`size-2 rounded-full ${selectedIndex === index ? "bg-white" : "bg-white/30"}`}
                />
              </button>
            ))}
          </div>
          <button
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            type="button"
            aria-label="Próxima imagem"
            disabled={!canScrollNext}
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      )}
    </section>
  );
};
