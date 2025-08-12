import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traduções
const translations = {
  pt: {
    'hero.subtitle': 'Por enquanto sou estudante de Engenharia de Software da PUC Minas',
    'hero.description': 'Sou apaixonado pela área de tecnologia, com destaque para backend, e busco constantemente aprender e evoluir, aprimorando minhas habilidades e crescendo tanto profissional quanto pessoalmente.',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.instagram': 'Instagram',
    'hero.contact': 'Entre em Contato',
    'hero.copyEmail': 'Copiar Email',
    'hero.email': 'lucasfribeiro2005@gmail.com',
    'contact.title': 'Entre em Contato',
    'contact.description': 'Estou sempre aberto para discutir novas oportunidades, projetos interessantes ou simplesmente trocar ideias sobre tecnologia ou sobre qualquer outra coisa, gosto de conversar :)',
    'contact.copyEmail': 'Copiar Email',
    'projects.title': 'Projetos',
    'projects.subtitle': 'Projetos desenvolvidos com foco em qualidade, performance e boas práticas de desenvolvimento.',
    'projects.viewAll': 'Ver todos os projetos no GitHub',
    'projects.repository': 'Repositório',
    'projects.culinariaSemFronteiras.description': 'Nosso objetivo geral é criar um software que ofereça receitas fáceis e rápidas para, assim, solucionar as diversas complicações dos usuários, como a falta de tempo e de experiência.',
    'projects.eliteConstrucoes.description': 'Nós da Elite contruções, temos como objetivo facilitar os processos envolvidos na gestão de uma obra, com o foco de otimizar serviços e facilitar a comunição entre contrutura e cliente',
    'projects.igrejaVidaNova.description': 'O objetivo do nosso projeto é facilitar a gestão de uma igreja e de sua comunidade, oferecendo uma plataforma que centraliza informações importantes para o pastor. A aplicação permite ao pastor organizar melhor seus obreiros, acompanhar atividades internas e informar os membros sobre eventos e compromissos da igreja, promovendo uma administração mais eficiente e uma comunicação mais clara com toda a congregação.',
    'contact.github.description': 'Veja meus projetos',
    'contact.linkedin.description': 'Conecte-se comigo profissionalmente',
    'contact.instagram.description': 'Acompanhe minha jornada',
    'toast.emailCopied.title': 'Email copiado!',
    'toast.emailCopied.description': 'O email {email} foi copiado para a área de transferência.',
    'toast.emailCopyError.title': 'Email: lucasfribeiro2005@gmail.com',
    'toast.emailCopyError.description': 'Copie o email acima manualmente.',
  },
  en: {
    'hero.subtitle': 'For now I am a Software Engineering student at PUC Minas',
    'hero.description': 'I am passionate about the technology field, with a strong focus on backend, and I am constantly seeking to learn and improve, enhancing my skills and growing both professionally and personally.',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.instagram': 'Instagram',
    'hero.contact': 'Get in Touch',
    'hero.copyEmail': 'Copy Email',
    'hero.email': 'lucasfribeiro2005@gmail.com',
    'contact.title': 'Get in Touch',
    'contact.description': 'I am always open to discussing new opportunities, interesting projects or simply exchanging ideas about technology or about anything, I like to talk :)',
    'contact.copyEmail': 'Copy Email',
    'projects.title': 'Projects',
    'projects.subtitle': 'Projects developed with focus on quality, performance and good development practices.',
    'projects.viewAll': 'View all projects on GitHub',
    'projects.repository': 'Repository',
    'projects.culinariaSemFronteiras.description': 'Our overall goal is to create software that offers quick and easy recipes to solve users\' various problems, such as lack of time and experience.',
    'projects.eliteConstrucoes.description': 'We at Elite Constructions aim to facilitate the processes involved in managing a project, with a focus on optimizing services and facilitating communication between the construction company and the client.',
    'projects.igrejaVidaNova.description': 'The goal of our project is to facilitate the management of a church and its community by offering a platform that centralizes important information for the pastor. The application allows the pastor to better organize his staff, monitor internal activities, and inform members about church events and commitments, promoting more efficient administration and clearer communication with the entire congregation.',
    'contact.github.description': 'See my projects',
    'contact.linkedin.description': 'Connect with me professionally',
    'contact.instagram.description': 'Follow my journey',
    'toast.emailCopied.title': 'Email copied!',
    'toast.emailCopied.description': 'The email {email} was copied to the clipboard.',
    'toast.emailCopyError.title': 'Email: lucasfribeiro2005@gmail.com',
    'toast.emailCopyError.description': 'Copy the email above manually.',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
