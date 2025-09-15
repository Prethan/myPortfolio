import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Trophy, Target } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'BEng (Hons) in Software Engineering',
      institution: 'Staffordshire University',
      location: 'UK',
      duration: '2021 – 2025',
      gpa: 'Final Results Received',
      description: 'Comprehensive software engineering program focusing on modern development practices, software architecture, and emerging technologies.',
      color: 'from-blue-500/20 to-cyan-500/20',
      icon: '🎓'
    },
    {
      degree: 'Foundation Certificate in Higher Education',
      institution: 'IIT Sri Lanka',
      location: 'Sri Lanka',
      duration: '2020',
      gpa: 'Completed',
      description: 'Foundation program preparing for higher education in technology and engineering fields.',
      color: 'from-green-500/20 to-emerald-500/20',
      icon: '📚'
    },
    {
      degree: 'Cambridge Advanced Level',
      institution: 'Stafford International School',
      location: 'Sri Lanka',
      duration: '2019',
      gpa: 'Completed',
      description: 'Advanced level studies with focus on science and technology subjects.',
      color: 'from-orange-500/20 to-yellow-500/20',
      icon: '🏫'
    },
    {
      degree: 'Cambridge Ordinary Level',
      institution: 'OKI International School',
      location: 'Sri Lanka',
      duration: '2017',
      gpa: 'Completed',
      description: 'Secondary education with strong foundation in sciences, mathematics, and languages.',
      color: 'from-purple-500/20 to-pink-500/20',
      icon: '🎒'
    }
  ];

  const experiences = [
    {
      title: "Assistant Treasurer & Director of Sports and Recreational Activities",
      organization: "Rotaract Club of APIIT Sri Lanka",
      period: "July 2024 – July 2025",
      icon: <Users className="w-6 h-6" />,
      achievements: [
        "Committee Member of the Month - August 2024",
        "Organized two fitness-focused projects promoting healthy lifestyles",
        "Led sports and recreational activities for members and staff"
      ],
      skills: ["Leadership", "Event Management", "Team Coordination", "Financial Management"]
    },
    {
      title: "Committee/General Member",
      organization: "APIIT Sri Lanka's Tantalize 2023",
      period: "January 2023 – November 2023",
      icon: <Target className="w-6 h-6" />,
      achievements: [
        "Supported event logistics and coordination",
        "Managed venue setup and scheduling",
        
      ],
      skills: ["Event Planning", "Logistics Management", "Teamwork"]
    },
    {
      title: "Cricket Team Player",
      organization: "Stafford International School",
      period: "2017 – 2019",
      icon: <Trophy className="w-6 h-6" />,
      achievements: [
        "Represented school in prestigious annual 'Big Match' against British School (2018, 2019)",
        
        "Contributed to school's sporting excellence and team spirit"
      ],
      skills: ["Teamwork", "Competitive Sports", "Leadership", "Dedication"]
    }
  ];

  const stats = [
    { label: 'Years of Study', value: '8+', icon: BookOpen },
    { label: 'Leadership Roles', value: '3', icon: Award },
    { label: 'Sports Teams', value: '1', icon: GraduationCap },
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
            Educational Background
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and achievements in software engineering and technology
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 items-center`}
            >
              {/* Timeline Connector */}
              <div className="hidden md:block relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"
                />
                {index < education.length - 1 && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-primary to-transparent" />
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 max-w-2xl">
                <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary overflow-hidden relative group">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="text-4xl"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        {edu.icon}
                      </motion.div>
                      <Badge variant="outline" className="border-primary text-primary">
                        {edu.gpa}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {edu.degree}
                    </CardTitle>
                    
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-secondary" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-accent" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Leadership & Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-8 text-center">
            Leadership & Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white group-hover:scale-110 transition-transform duration-300">
                        {experience.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {experience.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-accent mb-2">
                          {experience.organization}
                        </CardDescription>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Skills Developed:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground border-primary/20 hover:scale-105 transition-transform"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 gradient-blur rounded-full animate-float opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 gradient-blur rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default EducationSection;