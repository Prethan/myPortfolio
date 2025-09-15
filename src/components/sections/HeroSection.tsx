import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
const FloatingShape = () => {
  return <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color="#0EA5E9" attach="material" distort={0.3} speed={1.5} roughness={0.4} transparent opacity={0.8} />
    </Sphere>;
};
const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 gradient-blur rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 gradient-blur rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center relative z-10">
        {/* Content */}
       <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="space-y-4 sm:space-y-6"
  >
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }}>
            <h2 className="text-lg text-accent mb-2">Hello, I'm</h2>
            <h1 className="text-5xl font-bold text-gradient mb-4 md:text-6xl">Prethan Ramesh</h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Software Engineer
            </p>
          </motion.div>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Recent BEng (Hons) Software Engineering graduate passionate about building efficient software solutions and eager to contribute to innovative projects.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group" onClick={() => {
            document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              <span>View My Work</span>
              <motion.div className="ml-2" animate={{
              y: [0, 3, 0]
            }} transition={{
              repeat: Infinity,
              duration: 1.5
            }}>
                ↓
              </motion.div>
            </Button>

            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>

        </motion.div>

        {/* 3D Element */}
        <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 1 }}
    className="h-[220px] xs:h-[280px] sm:h-[320px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full max-w-[400px] mx-auto relative"
  >
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <FloatingShape />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 1,
      duration: 0.8
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }} className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;