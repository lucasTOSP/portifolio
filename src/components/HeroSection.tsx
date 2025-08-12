import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <motion.section 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Language Selector */}
      <motion.div 
        className="absolute top-8 right-8 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <LanguageSelector />
      </motion.div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main name with gradient text */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Lucas Ferreira
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.h2 
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('hero.subtitle')}
        </motion.h2>
        
        {/* Description */}
        <motion.p 
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t('hero.description')}
        </motion.p>
        
        {/* Social links */}
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <SocialButton 
            href="https://github.com/lucasTOSP"
            icon={<FaGithub className="w-6 h-6" />} 
            label={t('hero.github')}
          />
          <SocialButton 
            href="https://www.linkedin.com/in/lucas-ribeiro-b6b955303"
            icon={<FaLinkedin className="w-6 h-6" />} 
            label={t('hero.linkedin')}
          />
          <SocialButton 
            href="https://www.instagram.com/lucasf_ribeiro"
            icon={<FaInstagram className="w-6 h-6" />} 
            label={t('hero.instagram')}
          />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialButton = ({ href, icon, label }: SocialButtonProps) => {
  return (
    <Button
      variant="outline"
      size="lg"
      className="group relative overflow-hidden border-primary/20 bg-background/10 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-glow"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
          {icon}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
      </a>
    </Button>
  );
};

export default HeroSection;