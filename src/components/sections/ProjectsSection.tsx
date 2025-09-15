import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code2, Cloud, Brain } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'java-project',
      title: 'Automated Billing & Inventory System – SYOS',
      description: 'Designed and developed a POS and inventory system for a grocery store, transforming a legacy command line application into a scalable, multi user web application. The project focused on implementing clean architecture, robust concurrency handling, and a modern GUI to streamline operations like billing, inventory management, and reporting.',
      technologies: ['Java','Servlets', 'JDBC', 'JSP', 'MySQL',],
      icon: Code2,
      color: 'text-orange-500',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      // github: '#',
      // demo: '#',
      features: ['SOLID Principles', 'Design Patterns', 'Automated Reporting', 'Multi-User Concurrency']
    },
    {
      id: 'aws-project',
      title: 'Dreamstreamer',
      description: 'Developed DreamStreamer, a full stack, cloud native music streaming web application featuring user authentication, a dynamic music player, and a secure admin dashboard for comprehensive catalog management.',
      technologies: ['AWS Lambda','API Gateway',' DynamoDB', 'S3', 'Cognito', 'SES', 'Amplify'],
      icon: Cloud,
      color: 'text-blue-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      // github: '#',
      features: ['RESTful API', 'Automated Reporting', 'CRUD Operations', 'Authentication']
    },
    {
      id: 'ai-project',
      title: ' Automating Script Generation with NLP',
      description: 'Developed an AI-powered system that converts fiction books or chapters into structured screenplays using NLP and machine learning. Integrated GPT-3 with sentiment analysis to capture narrative tone, character consistency, and genre specific features, reducing manual effort in script adaptation.',
      technologies: ['Python', 'GPT-3', 'Flask', 'React.js', 'NLP','Google Colab'],
      icon: Brain,
      color: 'text-purple-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      // github: '#',
      // demo: '#',
      features: ['Interactive web interface', 'Automated text to script conversion', 'Emotion driven dialogue generation', 'Genre aware screenplay formatting']
    }
  ];

  return (
    <section className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions across different technologies and domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group"
              >
                <Card className={`h-full transition-all duration-500 hover:scale-105 border-border bg-card/50 backdrop-blur-sm relative overflow-hidden ${
                  hoveredProject === project.id ? 'glow-primary' : ''
                }`}>
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={false}
                    animate={{
                      opacity: hoveredProject === project.id ? 0.1 : 0
                    }}
                  />

                  <CardHeader className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.bgGradient} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon className={`w-8 h-8 ${project.color}`} />
                    </motion.div>
                    
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
                        <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* <div className="flex gap-3 pt-4"> */}
                      {/* <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-border hover:bg-muted"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button> */}
                      {/* <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button> */}
                    {/* </div> */}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;