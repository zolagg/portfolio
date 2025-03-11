import { getExperience, getEducation } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Experience() {
  const experiences = getExperience();
  const education = getEducation();
  
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container max-w-screen-2xl mx-auto px-4">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and academic background
          </p>
        </div>
        
        <Tabs defaultValue="experience" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="experience">Work Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="experience" className="space-y-8">
            <div className="space-y-6">
              {experiences.map((job, index) => (
                <ExperienceCard
                  key={`${job.company}-${index}`}
                  title={job.position}
                  company={job.company}
                  location={job.location}
                  period={`${job.start} - ${job.end}`}
                  description={job.description}
                  highlights={job.highlights}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="space-y-8">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <ExperienceCard
                  key={`${edu.institution}-${index}`}
                  title={edu.degree}
                  company={edu.institution}
                  period={`${edu.start} - ${edu.end}`}
                  description={edu.description}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights?: string[];
}

function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
  highlights,
}: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-base font-medium mt-1">
              {company} {location && <span>• {location}</span>}
            </CardDescription>
          </div>
          <div className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-md font-medium">
            {period}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        {highlights && highlights.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-1">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
} 