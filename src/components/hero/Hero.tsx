import Image from 'next/image';
import { getBasicInfo } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

export function Hero() {
  const basicInfo = getBasicInfo();

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>
      
      <div className="container relative z-10 max-w-screen-2xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="md:col-span-8 space-y-6">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1 text-sm rounded-md">
                Available for Work
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                {basicInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {basicInfo.title}
              </p>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              {basicInfo.summary}
            </p>
            
            
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-muted-foreground">{basicInfo.location}</span>
              </div>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span className="text-muted-foreground">Email Me</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto p-2">
                  <a href={`mailto:${basicInfo.email}`} className="text-primary hover:underline">
                    {basicInfo.email}
                  </a>
                </HoverCardContent>
              </HoverCard>
              
              <div className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="text-muted-foreground cursor-pointer">Phone</span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto p-2">
                    <a href={`tel:${basicInfo.phone.replace(/\s+/g, '')}`} className="text-primary hover:underline">
                      {basicInfo.phone}
                    </a>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative h-80 w-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src={basicInfo.profileImage}
                alt={basicInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 