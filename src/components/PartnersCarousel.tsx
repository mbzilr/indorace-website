"use client";

import '@/styles/global.css';

import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import partners from "../assets/partners/partners.json";

// Import images
import mabesTni from "../assets/partners/01_mabestni.png";
import kopassus from "../assets/partners/02_kopassus.png";
import pussenif from "../assets/partners/03_pusseniftniad.png";
import paspampres from "../assets/partners/04_paspampres.png";
import disparbud from "../assets/partners/05_dinparbudkabbangka.png";
import poldaBabel from "../assets/partners/06_poldababel.png";
import koremBabel from "../assets/partners/07_korambabel.png";
import persaja from "../assets/partners/08_persaja.png";
import tmii from "../assets/partners/09_tmii.png";
import prasmul from "../assets/partners/10_prasmul.png";
import aperti from "../assets/partners/11_aperti.png";
import binus from "../assets/partners/12_binus.png";
import ui from "../assets/partners/13_universitasindonesia.png";
import jm from "../assets/partners/14.png";
import umn from "../assets/partners/15_umn.png";
import kompas from "../assets/partners/16.png";
import itb from "../assets/partners/17.png";

// Image mapping
const imageMap: { [key: string]: string } = {
  "01_mabestni.png": mabesTni.src, // This should be the path to the image as a URL
  "02_kopassus.png": kopassus.src,
  "03_pusseniftniad.png": pussenif.src,
  "04_paspampres.png": paspampres.src,
  "05_dinparbudkabbangka.png": disparbud.src,
  "06_poldababel.png": poldaBabel.src,
  "07_korambabel.png": koremBabel.src,
  "08_persaja.png": persaja.src,
  "09_tmii.png": tmii.src,
  "10_prasmul.png": prasmul.src,
  "11_aperti.png": aperti.src,
  "12_binus.png": binus.src,
  "13_universitasindonesia.png": ui.src,
  "14.png": jm.src,
  "15_umn.png": umn.src,
  "16.png": kompas.src,
  "17.png": itb.src,
};

export default function PartnersCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!api) return;

    const handleInteraction = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
      api.plugins().autoScroll?.stop();

      timeoutRef.current = window.setTimeout(() => {
        api.plugins().autoScroll?.play();
      }, 200);
    };

    api.on("pointerDown", handleInteraction);

    return () => {
      api.off("pointerDown", handleInteraction);
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [api]);

  return (
    <Carousel
      className="w-full max-w-md md:max-w-full"
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        AutoScroll({
          speed: 2,
        }),
      ]}
      setApi={setApi}
    >
      <CarouselContent className="-ml-1">
        {partners.partners
          .filter((partner) => partner.id > 0 && partner.src) // Ensure valid src and id
          .map((partner) => {
            const imageSrc = imageMap[partner.src];
            console.log("Image src:", imageSrc); // Log the image source to verify it's a URL string

            return (
              <CarouselItem
                key={partner.id}
                className="pl-1 basis-54 md:basis-64 h-fit md:h-auto"
              >
                <div className="p-1">
                  <Card className="border-4 border-zinc-100 shadow-lg">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={partner.alt}
                          width={200}
                          height={200}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-red-500 text-sm text-center">
                          Image not found:
                          <br />
                          {partner.src}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
      </CarouselContent>
    </Carousel>
  );
}
