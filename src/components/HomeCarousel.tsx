import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export default function HomeCarousel() {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </CarouselContent>
        </Carousel>
    );
}