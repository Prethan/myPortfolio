import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { url } from 'inspector';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Developing Front-End Apps with React',
      issuer: 'IBM',
      date: '2025',
      credential: 'OTQ30VVDEKMD',
      description: 'A program that teaches you to build interactive web applications using React, JSX, ES6, and Redux. You’ll learn to create reusable components, manage state, handle events, and build dynamic UIs. The course includes hands on projects and is ideal for those with prior knowledge of HTML, CSS, JavaScript, and Git.',
      skills: ['JavaScript', 'React.js', 'Javascript Frameworks', 'Web Development','UI Components'],
      color: 'from-orange-500/20 to-yellow-500/20',
      icon: '☕',
      url: 'https://www.coursera.org/account/accomplishments/records/OTQ30VVDEKMD'
    },
    {
      title: 'Google AI Essentials ',
      issuer: 'Google',
      date: '2025',
      credential: '0C5ZSBTE09Q5',
      description: 'A program that introduces AI basics, shows how to boost productivity with AI tools, teaches effective prompt writing, explains responsible AI use (bias, safety, privacy), and helps you stay updated with future AI trends',
      skills: ['Artificial Intelligence (AI)', 'Machine Learning', 'Prompt Engineering', 'Generative AI', 'Large Language Models (LLM)', 'Natural Language Processing (NLP)'],
      color: 'from-green-500/20 to-emerald-500/20',
      icon: '🌐',
      url: 'https://coursera.org/share/9db4fbe0758d76ded19c4b2fa447e804'
    },
  
    
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
            Professional Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications demonstrating expertise across multiple domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credential}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary overflow-hidden relative">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="text-4xl"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      {cert.icon}
                    </motion.div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-gradient transition-all duration-300 leading-tight">
                    {cert.title}
                  </CardTitle>
                  
                  <div className="flex items-center text-primary text-sm font-medium">
                    <Award className="w-4 h-4 mr-2" />
                    {cert.issuer}
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Skills Validated</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">Credential ID:</span> {cert.credential}
                    </div>
                    
                   <motion.a
  href={cert.url}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-2 flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
>
  <ExternalLink className="w-3 h-3 mr-1" />
  Verify Credential
</motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">Active Certifications</div>
            </div>
          
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Verified Credentials</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-40 left-10 w-24 h-24 gradient-blur rounded-full animate-float opacity-20"></div>
      <div className="absolute bottom-40 right-10 w-36 h-36 gradient-blur rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default CertificationsSection;