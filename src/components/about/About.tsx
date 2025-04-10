import { Badge } from '@/components/ui/badge';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container max-w-screen-2xl mx-auto px-4">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg">
            Learn more about my background and approach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hi there! I&apos;m an enthusiastic web developer apprentice passionate about creating beautiful, functional, and accessible websites. 
              My journey into web development began with a curiosity about how websites are built and has evolved into a deep love for coding and problem-solving.
            </p>
            
            <p className="text-lg leading-relaxed">
              I specialize in modern front-end frameworks like React and Next.js, and I enjoy creating responsive user interfaces that deliver exceptional user experiences. 
              I&apos;m constantly learning and expanding my skills, currently focusing on deepening my knowledge of backend technologies to become a more versatile full-stack developer.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or improving my UI/UX design skills.
            </p>
          </div>
          
          <div className="bg-muted/30 p-8 rounded-lg space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">My Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>
                    <strong className="block">User-Centric Design</strong>
                    <span className="text-muted-foreground">I prioritize creating intuitive and accessible user experiences.</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>
                    <strong className="block">Clean Code Philosophy</strong>
                    <span className="text-muted-foreground">I write maintainable, well-documented code following best practices.</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>
                    <strong className="block">Continuous Learning</strong>
                    <span className="text-muted-foreground">I stay updated with the latest technologies and industry trends.</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>
                    <strong className="block">Collaborative Mindset</strong>
                    <span className="text-muted-foreground">I thrive in team environments and value constructive feedback.</span>
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Currently exploring</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>TypeScript</Badge>
                <Badge>Next.js</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>UI/UX Design</Badge>
                <Badge>Web Accessibility</Badge>
                <Badge>Node.js</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 