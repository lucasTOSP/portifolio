import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm border border-primary/20 rounded-lg p-1"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant={language === 'pt' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('pt')}
        className={`transition-all duration-200 ${
          language === 'pt' 
            ? 'bg-primary text-primary-foreground shadow-glow' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        PT
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`transition-all duration-200 ${
          language === 'en' 
            ? 'bg-primary text-primary-foreground shadow-glow' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </Button>
    </motion.div>
  );
};

export default LanguageSelector;
