import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      name: "Culinária Sem Fronteiras",
      descriptionKey: "projects.culinariaSemFronteiras.description",
      repoUrl: "https://github.com/lucasTOSP/culinaria-sem-fronteiras"
    },
    {
      name: "Elite Construções",
      descriptionKey: "projects.eliteConstrucoes.description",
      repoUrl: "https://github.com/lucasTOSP/elite-construcoes"
    },
    {
      name: "Igreja Vida Nova",
      descriptionKey: "projects.igrejaVidaNova.description",
      repoUrl: "https://github.com/lucasTOSP/igreja-vida-nova"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} variants={itemVariants} />
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-elegant hover:shadow-glow transition-all duration-300"
            asChild
          >
            <a href="https://github.com/lucasTOSP" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 mr-2" />
              {t('projects.viewAll')}
              <FaExternalLinkAlt className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    name: string;
    descriptionKey: string;
    repoUrl: string;
  };
  variants: any;
}

const ProjectCard = ({ project, variants }: ProjectCardProps) => {
  const { t } = useLanguage();
  
  return (
    <motion.div variants={variants}>
      <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-card hover:border-primary/30 h-full">
        
        {/* Conteúdo principal (fica por cima) */}
        <div className="p-8 relative z-10 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
              {project.name}
            </h3>
            <FaGithub className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </div>

          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 flex-grow mb-6">
            {t(project.descriptionKey)}
          </p>

          {/* Botão como link funcional */}
          <Button
            variant="outline"
            size="sm"
            className="self-start border-primary/20 bg-background/10 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 z-10"
            asChild
          >
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              {t('projects.repository')}
            </a>
          </Button>
        </div>

        {/* Fundo de animação hover — FICA NO FUNDO */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 to-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </Card>
    </motion.div>
  );
};

export default ProjectsSection;