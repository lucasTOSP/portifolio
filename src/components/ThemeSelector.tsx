import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

type Theme = 'default';

const ThemeSelector = () => {
  const themes: { id: Theme; name: string; icon: React.ReactNode; description: string }[] = [
    {
      id: 'default',
      name: 'GitHub Dark',
      icon: <Moon className="w-4 h-4" />,
      description: 'Minimalista e Profissional'
    }
  ];

  const setTheme = (theme: Theme) => {
    document.documentElement.setAttribute('data-theme', theme === 'default' ? '' : theme);
    localStorage.setItem('theme', theme);
  };

  const getCurrentTheme = (): Theme => {
    const saved = localStorage.getItem('theme') as Theme;
    if (saved && themes.some(t => t.id === saved)) {
      return saved;
    }
    return 'default';
  };

  const currentTheme = getCurrentTheme();

  return (
    <motion.div 
      className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm border border-primary/20 rounded-lg p-1"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {themes.map((theme) => (
        <Button
          key={theme.id}
          variant={currentTheme === theme.id ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setTheme(theme.id)}
          className={`transition-all duration-200 ${
            currentTheme === theme.id 
              ? 'bg-primary text-primary-foreground shadow-glow' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
          title={`${theme.name} - ${theme.description}`}
        >
          {theme.icon}
        </Button>
      ))}
    </motion.div>
  );
};

export default ThemeSelector;
