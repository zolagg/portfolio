import Link from 'next/link';
import { getBasicInfo, getInterests, getLanguages } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Define interface for social media items
interface SocialMedia {
  platform: string;
  url: string;
}

// Define the interface for the basic info object
interface BasicInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  profileImage: string;
  backgroundImage: string;
  socialMedia: SocialMedia[];
  website?: string; // Optional website property
}

export function Footer() {
  const basicInfo = getBasicInfo() as BasicInfo;
  const interests = getInterests();
  const languages = getLanguages();
  
  // Temporarily remove the problematic formatting functions
  
  return (
    <footer id="contact" className="bg-muted/30 py-12 md:py-16">
      <div className="container max-w-screen-2xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Personal Info */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xl font-bold">{basicInfo.name}</h3>
            <p className="text-muted-foreground">{basicInfo.title}</p>
            <p className="text-muted-foreground">{basicInfo.location}</p>
            
            <div className="flex flex-col space-y-2 mt-4">
              <a href={`mailto:${basicInfo.email}`} className="hover:text-primary transition-colors">
                {basicInfo.email}
              </a>
              {/* Temporarily disable phone link with replace */}
              <span className="hover:text-primary transition-colors">
                {basicInfo.phone}
              </span>
              {/* Temporarily disable website link with replace */}
            </div>
            
            <div className="flex gap-2 mt-4">
              {basicInfo.socialMedia && basicInfo.socialMedia.length > 0 && basicInfo.socialMedia.map((social) => (
                <Button key={social.platform} asChild variant="ghost" size="icon">
                  <Link href={social.url} target="_blank" rel="noreferrer">
                    <span className="sr-only">{social.platform}</span>
                    {social.platform === "GitHub" ? (
                      <svg viewBox="0 0 24 24" className="h-5 w-5">
                        <path
                          fill="currentColor"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    ) : social.platform === "LinkedIn" ? (
                      <svg viewBox="0 0 24 24" className="h-5 w-5">
                        <path
                          fill="currentColor"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        />
                      </svg>
                    ) : social.platform === "Twitter" ? (
                      <svg viewBox="0 0 24 24" className="h-5 w-5">
                        <path
                          fill="currentColor"
                          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.008 10.008 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
                        />
                      </svg>
                    ) : (
                      social.platform
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                About Me
              </Link>
              <Link href="/#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Interests & Languages */}
          <div className="md:col-span-5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="interests">
                <AccordionTrigger>Interests</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {interests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="languages">
                <AccordionTrigger>Languages</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1 text-muted-foreground">
                    {languages.map((lang, index) => (
                      <li key={index}>
                        <span className="font-medium">{lang.language}</span>: {lang.fluency}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {basicInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
} 