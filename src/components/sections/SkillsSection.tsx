import { motion } from 'framer-motion';
import javaLogo from 'src/images/java.png';
import pythonLogo from 'src/images/python.jpg';

const SkillsSection = () => {
  const skills = [
    { name: 'Java', logo: 'src/images/java.png' },
    { name: 'Python', logo: 'src/images/python.jpg' },
    { name: 'JavaScript', logo: 'src/images/js.png' },
    { name: 'HTML', logo: 'src/images/html.png'},
    { name: 'React.js', logo: 'src/images/react.png' },
    { name: 'AWS', logo: 'src/images/aws.png' },
    { name: 'CSS', logo: 'src/images/css.jpg'},
    { name: 'Git', logo: 'src/images/git.png' }
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
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 h-full hover:border-primary/50 transition-all duration-300 text-center">
                <motion.img
                  src={skill.logo}
                  alt={skill.name + ' logo'}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg object-contain bg-white p-2"
                  whileHover={{ rotate: 5 }}
                >
                 
                </motion.img>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 gradient-blur rounded-full animate-float opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 gradient-blur rounded-full animate-float opacity-20" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default SkillsSection;