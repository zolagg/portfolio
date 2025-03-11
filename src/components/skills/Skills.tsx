import { getSkills } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Define the type for skill objects
interface Skill {
  name: string;
  level: number;
}

// Define the skills object structure
interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
  programming?: Skill[];
  languages?: Skill[];
}

export function Skills() {
  const skills = getSkills() as SkillsData;
  
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with and expertise level
          </p>
        </div>
        
        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="frontend" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.frontend.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="backend" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.backend.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.tools.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Other Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['Git', 'GitHub', 'Responsive Design', 'SEO', 'Accessibility', 'UI/UX Principles', 'REST APIs', 'Agile', 'Testing'].map((skill) => (
              <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  name: string;
  level: number;
}

function SkillCard({ name, level }: SkillCardProps) {
  const getLevelLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 70) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    return 'Beginner';
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg">{name}</h3>
          <Badge variant="outline">{getLevelLabel(level)}</Badge>
        </div>
        <Progress value={level} className="h-2" />
        <p className="text-right text-sm text-muted-foreground mt-1">{level}%</p>
      </CardContent>
    </Card>
  );
} 