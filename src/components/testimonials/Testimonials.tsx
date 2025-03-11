import Image from 'next/image';
import { getTestimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Define Testimonial interface
interface Testimonial {
  name: string;
  position: string;
  text: string;
  image: string;
}

export function Testimonials() {
  // Add proper typing to the array
  const testimonials = getTestimonials() as Testimonial[] || [];
  
  if (!testimonials.length) {
    return null;
  }
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Testimonials
          </h2>
          <p className="text-muted-foreground text-lg">
            What colleagues and clients say about working with me
          </p>
        </div>
        
        <div className="hidden lg:block">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {testimonials.map((testimonial: Testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
        
        <div className="block lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial: Testimonial) => (
                <CarouselItem key={testimonial.name}>
                  <div className="p-1">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static left-0 right-0 mr-2" />
              <CarouselNext className="relative static left-0 right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    name: string;
    position: string;
    text: string;
    image: string;
  };
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground/20"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 2-2.75 3 0 0 0 1 1 1 1 0 .24-.65 2-1 .5 0 2 0 2 2.5V20c0 1 0 1 1 1z" />
          </svg>
        </div>
        
        <p className="text-lg text-muted-foreground mb-6 flex-grow">{testimonial.text}</p>
        
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 