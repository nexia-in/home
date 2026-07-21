import { useState, useEffect } from 'react';

type Language = 'malayalam' | 'english' | null;
type SelectedService = string | null;

interface ServiceInfo {
  id: string;
  icon: string;
  title: string;
  titleMl: string;
  description: string;
  descriptionMl: string;
  details: string;
  detailsMl: string;
  features: string[];
  featuresMl: string[];
  priceRange: string;
  priceTooltip: string;
  priceTooltipMl: string;
  duration: string;
  lightningAvailable: boolean;
  lightningDuration: string;
  customPricing?: boolean;
}

const services: ServiceInfo[] = [
  {
    id: 'cv',
    icon: '📄',
    title: 'CV (Curriculum Vitae)',
    titleMl: 'സി.വി (കറിക്കുലം വിറ്റേ)',
    description: 'A comprehensive document showcasing your complete academic and professional history.',
    descriptionMl: 'നിങ്ങളുടെ സമ്പൂർണ്ണ അക്കാദമിക് വ്യവസായ ചരിത്രം പ്രദർശിപ്പിക്കുന്ന സമഗ്ര രേഖ.',
    details: 'A CV (Curriculum Vitae) is a detailed document that highlights your educational background, work experience, research, publications, awards, and other achievements. It is typically used for academic, research, or specialized positions where a thorough overview of your credentials is required. Unlike a resume, a CV can be longer and more detailed.',
    detailsMl: 'സി.വി എന്നത് നിങ്ങളുടെ വിദ്യാഭ്യാസ പശ്ചാത്തലം, ജോലി അനുഭവം, ഗവേഷണം, പ്രസിദ്ധീകരണങ്ങൾ, അവാർഡുകൾ, മറ്റ് നേട്ടങ്ങൾ എന്നിവ ഉയർത്തിക്കാട്ടുന്ന വിശദമായ രേഖയാണ്. ഇത് സാധാരണയായി അക്കാദമിക്, ഗവേഷണം അല്ലെങ്കിൽ പ്രത്യേക തൊഴിലുകൾക്കായി ഉപയോഗിക്കുന്നു.',
    features: [
      'Professional formatting and layout',
      'Custom content tailored to your field',
      'ATS-friendly design',
      '1 revision within 7 days',
      'PDF and Word formats included'
    ],
    featuresMl: [
      'പ്രൊഫഷണൽ ഫോർമാറ്റിംഗ്',
      'നിങ്ങളുടെ മേഖലയ്ക്ക് അനുയോജ്യമായ കന്റെന്റ്',
      'എടിഎസ് ഫ്രണ്ട്ലി ഡിസൈൻ',
      '7 ദിവസത്തിനുള്ളിൽ 1 തിരുത്തൽ',
      'പിഡിഎഫ് ആന്റ് വേഡ് ഫോർമാറ്റുകൾ'
    ],
    priceRange: '₹499 to ₹799',
    priceTooltip: "Package charge depends on your information's complexity",
    priceTooltipMl: 'നിങ്ങളുടെ വിവരങ്ങളുടെ സങ്കീർണ്ണതയെ ആശ്രയിച്ച് പാക്കേജ് ചാർജ് നിർണ്ണയിക്കും',
    duration: '2-3 Days',
    lightningAvailable: true,
    lightningDuration: '5 Hours'
  },
  {
    id: 'resume',
    icon: '📋',
    title: 'Resume',
    titleMl: 'റെസ്യൂമെ',
    description: 'A concise, targeted document highlighting key skills and experience for specific job applications.',
    descriptionMl: 'നിർദ്ദിഷ്ട ജോലി അപേക്ഷകൾക്കായി പ്രധാന കഴിവുകളും അനുഭവവും ഉയർത്തിക്കാട്ടുന്ന ചുരുക്കമായ രേഖ.',
    details: 'A resume is a concise document, typically 1-2 pages, that summarizes your skills, work experience, and education relevant to a specific job. It is the most commonly required document for job applications in the private sector. A well-crafted resume grabs the attention of recruiters quickly.',
    detailsMl: 'റെസ്യൂമെ എന്നത് 1-2 പേജുള്ള ചുരുക്കമായ രേഖയാണ്, അതിൽ നിങ്ങളുടെ കഴിവുകൾ, ജോലി അനുഭവം, വിദ്യാഭ്യാസം എന്നിവ ഒരു നിർദ്ദിഷ്ട ജോലിയുമായി ബന്ധപ്പെടുത്തി സംഗ്രഹിക്കുന്നു. ഇത് സ്വകാര്യമേഖലയിലെ ജോലി അപേക്ഷകൾക്കായി ഏറ്റവും സാധാരണയായി ആവശ്യമായ രേഖയാണ്.',
    features: [
      '1-2 page professional resume',
      'Keyword optimization for ATS',
      'Industry-specific templates',
      '1 revision within 7 days',
      'Express delivery available'
    ],
    featuresMl: [
      '1-2 പേജ് പ്രൊഫഷണൽ റെസ്യൂമെ',
      'എടിഎസിനായി കീവേഡ് ഒപ്റ്റിമൈസേഷൻ',
      'വ്യവസായ-നിർദ്ദിഷ്ട ടെംപ്ലേറ്റുകൾ',
      '7 ദിവസത്തിനുള്ളിൽ 1 തിരുത്തൽ',
      'എക്സ്പ്രസ് ഡെലിവറി ലഭ്യമാണ്'
    ],
    priceRange: '₹399 to ₹699',
    priceTooltip: "Package charge depends on your experience level and details",
    priceTooltipMl: 'നിങ്ങളുടെ അനുഭവ നിലവാരവും വിവരങ്ങളും ആശ്രയിച്ച് പാക്കേജ് ചാർജ്',
    duration: '1-2 Days',
    lightningAvailable: true,
    lightningDuration: '5 Hours'
  },
  {
    id: 'portfolio',
    icon: '🎨',
    title: 'Portfolio',
    titleMl: 'പോർട്ട്ഫോളിയോ',
    description: 'A visual showcase of your best work, projects, and creative achievements.',
    descriptionMl: 'നിങ്ങളുടെ മികച്ച പ്രവർത്തനങ്ങൾ, പ്രോജക്ടുകൾ, സൃഷ്ടിപരമായ നേട്ടങ്ങൾ എന്നിവയുടെ ദൃശ്യ പ്രദർശനം.',
    details: 'A portfolio is a curated collection of your best work samples, projects, case studies, and creative outputs. It is essential for creative professionals like designers, developers, writers, photographers, and artists. A strong portfolio demonstrates your skills and style to potential employers or clients.',
    detailsMl: 'പോർട്ട്ഫോളിയോ എന്നത് നിങ്ങളുടെ മികച്ച പ്രവർത്തന സാമ്പിളുകൾ, പ്രോജക്ടുകൾ, കേസ് സ്റ്റഡികൾ, സൃഷ്ടിപരമായ ഔട്ട്പുട്ടുകൾ എന്നിവയുടെ തിരഞ്ഞെടുത്ത ശേഖരമാണ്. ഡിസൈനർമാർ, ഡെവലപ്പർമാർ, എഴുത്തുകാർ, ഫോട്ടോഗ്രാഫർമാർ, കലാകാരന്മാർ പോലുള്ള സൃഷ്ടിപരമായ പ്രൊഫഷണലുകൾക്ക് ഇത് അത്യാവശ്യമാണ്.',
    features: [
      'Custom design based on your industry',
      'Project showcase with case studies',
      'Responsive web portfolio (optional)',
      '1 revision within 7 days',
      'Social media integration'
    ],
    featuresMl: [
      'നിങ്ങളുടെ വ്യവസായത്തെ അടിസ്ഥാനമാക്കിയുള്ള കസ്റ്റം ഡിസൈൻ',
      'കേസ് സ്റ്റഡികൾ ഉള്ള പ്രോജക്ട് പ്രദർശനം',
      'റെസ്പോൺസിവ് വെബ് പോർട്ട്ഫോളിയോ (ഓപ്ഷണൽ)',
      '7 ദിവസത്തിനുള്ളിൽ 1 തിരുത്തൽ',
      'സോഷ്യൽ മീഡിയ സംയോജനം'
    ],
    priceRange: '₹1,499 to ₹2,999',
    priceTooltip: "Package charge depends on complexity and number of projects",
    priceTooltipMl: 'സങ്കീർണ്ണതയും പ്രോജക്ടുകളുടെ എണ്ണവും ആശ്രയിച്ച് പാക്കേജ് ചാർജ്',
    duration: '5-7 Days',
    lightningAvailable: true,
    lightningDuration: '2 Days'
  },
  {
    id: 'europass',
    icon: '🌍',
    title: 'Europass CV',
    titleMl: 'യൂറോപാസ് സി.വി',
    description: 'Standardized European CV format recognized by employers across the EU and EEA countries.',
    descriptionMl: 'EU, EEA രാജ്യങ്ങളിലുടനീളം തൊഴിലുടമകൾ അംഗീകരിക്കുന്ന സ്റ്റാൻഡേർഡൈസ്ഡ് യൂറോപ്യൻ സി.വി ഫോർമാറ്റ്.',
    details: 'Europass is a standard set of documents developed by the European Commission to help citizens communicate their skills and qualifications effectively when looking for a job or training. The Europass CV is the most widely recognized CV format in Europe and is accepted by most employers, educational institutions, and training providers across 36 countries.',
    detailsMl: 'യൂറോപ്യൻ കമ്മീഷൻ വികസിപ്പിച്ച രേഖകളുടെ ഒരു സ്റ്റാൻഡേർഡ് സെറ്റാണ് യൂറോപാസ്, ഇത് പൗരന്മാർക്ക് തൊഴിൽ അല്ലെങ്കിൽ പരിശീലനം തേടുമ്പോൾ അവരുടെ കഴിവുകളും യോഗ്യതകളും ഫലപ്രദമായി ആശയവിനിമയം നടത്താൻ സഹായിക്കുന്നു.',
    features: [
      'Official Europass format',
      'EU/EEA employer recognized',
      'Language proficiency section',
      '1 revision within 7 days',
      'Multi-language support'
    ],
    featuresMl: [
      'ഔദ്യോഗിക യൂറോപാസ് ഫോർമാറ്റ്',
      'EU/EEA തൊഴിലുടമ അംഗീകരിച്ചത്',
      'ഭാഷ പ്രാവീണ്യ വിഭാഗം',
      '7 ദിവസത്തിനുള്ളിൽ 1 തിരുത്തൽ',
      'ബഹു-ഭാഷ പിന്തുണ'
    ],
    priceRange: '₹699 to ₹999',
    priceTooltip: "Package charge depends on your experience and qualifications",
    priceTooltipMl: 'നിങ്ങളുടെ അനുഭവവും യോഗ്യതകളും ആശ്രയിച്ച് പാക്കേജ് ചാർജ്',
    duration: '2-3 Days',
    lightningAvailable: true,
    lightningDuration: '5 Hours'
  },
  {
    id: 'cover-letter',
    icon: '✉️',
    title: 'Cover Letter',
    titleMl: 'കവർ ലെറ്റർ',
    description: 'A personalized letter introducing yourself and explaining why you are the best fit for the job.',
    descriptionMl: 'സ്വയം പരിചയപ്പെടുത്തുന്നതും നിങ്ങൾ എന്തുകൊണ്ടാണ് ജോലിക്ക് ഏറ്റവും അനുയോജ്യനെന്ന് വിശദീകരിക്കുന്നതുമായ വ്യക്തിഗത കത്ത്.',
    details: 'A cover letter is a document sent with your resume to provide additional information about your skills and experience. It serves as a personal introduction and helps to convince the hiring manager that you are a strong candidate. A well-written cover letter can significantly increase your chances of getting an interview.',
    detailsMl: 'നിങ്ങളുടെ റെസ്യൂമെയോടൊപ്പം അയയ്ക്കുന്ന ഒരു രേഖയാണ് കവർ ലെറ്റർ, അതിൽ നിങ്ങളുടെ കഴിവുകളെയും അനുഭവത്തെയും കുറിച്ച് കൂടുതൽ വിവരങ്ങൾ നൽകുന്നു. ഇത് ഒരു വ്യക്തിഗത ആമുഖമായി പ്രവർത്തിക്കുന്നു, കൂടാതെ ഹയറിംഗ് മാനേജരെ നിങ്ങൾ ഒരു ശക്തമായ സ്ഥാനാർത്ഥിയാണെന്ന് ബോധ്യപ്പെടുത്താൻ സഹായിക്കുന്നു.',
    features: [
      'Customized for each job application',
      'Professional tone and structure',
      'Highlight key achievements',
      '1 revision within 7 days',
      'Call-to-action closing'
    ],
    featuresMl: [
      'ഓരോ ജോലി അപേക്ഷയ്ക്കും ഇടപാട് ചെയ്തത്',
      'പ്രൊഫഷണൽ ടോൺ ആന്റ് ഘടന',
      'പ്രധാന നേട്ടങ്ങൾ ഉയർത്തിക്കാട്ടുന്നു',
      '7 ദിവസത്തിനുള്ളിൽ 1 തിരുത്തൽ',
      'കോൾ-ടു-ആക്ഷൻ ക്ലോസിംഗ്'
    ],
    priceRange: '₹249 to ₹499',
    priceTooltip: "Package charge depends on complexity and customization",
    priceTooltipMl: 'സങ്കീർണ്ണതയും ഇടപാടും ആശ്രയിച്ച് പാക്കേജ് ചാർജ്',
    duration: '1 Day',
    lightningAvailable: true,
    lightningDuration: '5 Hours'
  },
  {
    id: 'linkedin',
    icon: '💼',
    title: 'LinkedIn Profile Optimization',
    titleMl: 'ലിങ്ക്ഡിൻ പ്രൊഫൈൽ ഒപ്റ്റിമൈസേഷൻ',
    description: 'Optimize your LinkedIn profile to attract recruiters and build your professional brand.',
    descriptionMl: 'റിക്രൂട്ടർമാരെ ആകർഷിക്കുന്നതിനും നിങ്ങളുടെ പ്രൊഫഷണൽ ബ്രാൻഡ് നിർമ്മിക്കുന്നതിനും നിങ്ങളുടെ ലിങ്ക്ഡിൻ പ്രൊഫൈൽ ഒപ്റ്റിമൈസ് ചെയ്യുക.',
    details: 'LinkedIn is the world\'s largest professional network with over 900 million members. An optimized LinkedIn profile helps you appear in recruiter searches, showcases your expertise, and builds your professional network. We help you create a compelling headline, summary, experience section, and more to stand out.',
    detailsMl: '900 ദശലക്ഷത്തിലധികം അംഗങ്ങളുള്ള ലോകത്തിലെ ഏറ്റവും വലിയ പ്രൊഫഷണൽ നെറ്റ്‌വർക്കാണ് ലിങ്ക്ഡിൻ. ഒപ്റ്റിമൈസ് ചെയ്ത ലിങ്ക്ഡിൻ പ്രൊഫൈൽ റിക്രൂട്ടർ തിരയലിൽ പ്രത്യക്ഷപ്പെടാനും നിങ്ങളുടെ വൈദഗ്ദ്ധ്യം പ്രദർശിപ്പിക്കാനും നിങ്ങളുടെ പ്രൊഫഷണൽ നെറ്റ്‌വർക്ക് നിർമ്മിക്കാനും സഹായിക്കുന്നു.',
    features: [
      'SEO-optimized headline and summary',
      'Experience section enhancement',
      'Skills and endorsements strategy',
      '1 revision within 7 days',
      'Content posting tips'
    ],
    featuresMl: [
      'എസ്ഇഒ-ഒപ്റ്റിമൈസ്ഡ് ഹെഡ്‌ലൈൻ ആന്റ് സമാരംഭം',
      'അനുഭവ വിഭാഗം വർദ്ധന',
      'കഴിവുകളും അംഗീകാരങ്ങളും തന്ത്രം',
      '7 ദിവസത്തിനുള്ളിൽ 1 തിരുത്തൽ',
      'കന്റെന്റ് പോസ്റ്റിംഗ് ടിപ്സ്'
    ],
    priceRange: '₹599 to ₹899',
    priceTooltip: "Package charge depends on current profile and optimization level",
    priceTooltipMl: 'നിലവിലെ പ്രൊഫൈലും ഒപ്റ്റിമൈസേഷൻ നിലവാരവും ആശ്രയിച്ച് പാക്കേജ് ചാർജ്',
    duration: '2-3 Days',
    lightningAvailable: true,
    lightningDuration: '5 Hours'
  }
];

// Additional Profile Services (Custom Pricing)
const additionalServices = [
  {
    id: 'marriage',
    icon: '💍',
    title: 'Marriage Profile',
    titleMl: 'വിവാഹ പ്രൊഫൈൽ',
    description: 'Elegant and detailed marriage biodata to find your perfect match.',
    descriptionMl: 'നിങ്ങളുടെ അനുയോജ്യമായ പങ്കാളിയെ കണ്ടെത്തുന്നതിന് ഭംഗിയുള്ള വിശദമായ വിവാഹ ബയോഡേറ്റ.',
  },
  {
    id: 'local-cv',
    icon: '📝',
    title: 'Personal / Local Simple CV',
    titleMl: 'വ്യക്തിഗത / പ്രാദേശിക സിമ്പിൾ സി.വി',
    description: 'Simple, straightforward CV for local jobs and personal requirements.',
    descriptionMl: 'പ്രാദേശിക തൊഴിലുകൾക്കും വ്യക്തിഗത ആവശ്യങ്ങൾക്കുമായി ലളിതമായ സി.വി.',
  },
  {
    id: 'other',
    icon: '✨',
    title: 'Other Custom Profiles',
    titleMl: 'മറ്റ് കസ്റ്റം പ്രൊഫൈലുകൾ',
    description: 'Customized profile creation for any other specific requirements.',
    descriptionMl: 'മറ്റേതെങ്കിലും പ്രത്യേക ആവശ്യങ്ങൾക്കായി ഇടപാട് ചെയ്ത പ്രൊഫൈൽ സൃഷ്ടി.',
  }
];

const jobSearchServices = [
  {
    icon: '🔍',
    title: 'Job Search Assistance',
    titleMl: 'ജോലി തിരയൽ സഹായം',
    desc: 'We help you find relevant job openings matching your skills and experience.',
    descMl: 'നിങ്ങളുടെ കഴിവുകളുമായി പൊരുത്തപ്പെടുന്ന അനുയോജ്യമായ ജോലി അവസരങ്ങൾ കണ്ടെത്താൻ ഞങ്ങൾ സഹായിക്കുന്നു.'
  },
  {
    icon: '📊',
    title: 'Career Counseling',
    titleMl: 'കരിയർ കൗൺസിലിംഗ്',
    desc: 'Expert guidance on career paths, skill development, and industry trends.',
    descMl: 'കരിയർ പാത്തുകൾ, കഴിവ് വികസനം, വ്യവസായ പ്രവണതകൾ എന്നിവയിൽ വിദഗ്ധ മാർഗ്ഗനിർദ്ദേശം.'
  },
  {
    icon: '🎯',
    title: 'Interview Preparation',
    titleMl: 'അഭിമുഖ തയ്യാറെടുപ്പ്',
    desc: 'Mock interviews, common questions, and tips to ace your next interview.',
    descMl: 'മോക്ക് ഇൻ്റർവ്യൂകൾ, സാധാരണ ചോദ്യങ്ങൾ, അടുത്ത അഭിമുഖത്തിൽ വിജയിക്കാനുള്ള ടിപ്സ്.'
  },
  {
    icon: '📱',
    title: 'Digital Presence Building',
    titleMl: 'ഡിജിറ്റൽ സാന്നിധ്യ നിർമ്മാണം',
    desc: 'Build a strong online presence across professional platforms.',
    descMl: 'പ്രൊഫഷണൽ പ്ലാറ്റ്ഫോമുകളിൽ ശക്തമായ ഓൺലൈൻ സാന്നിധ്യം നിർമ്മിക്കുക.'
  },
  {
    icon: '📝',
    title: 'Application Tracking',
    titleMl: 'അപേക്ഷ ട്രാക്കിംഗ്',
    desc: 'Organize and track all your job applications in one place.',
    descMl: 'നിങ്ങളുടെ എല്ലാ ജോലി അപേക്ഷകളും ഒരു സ്ഥലത്ത് സംഘടിപ്പിക്കുകയും ട്രാക്ക് ചെയ്യുകയും ചെയ്യുക.'
  },
  {
    icon: '🤝',
    title: 'Networking Guidance',
    titleMl: 'നെറ്റ്‌വർക്കിംഗ് മാർഗ്ഗനിർദ്ദേശം',
    desc: 'Learn how to build and leverage professional connections effectively.',
    descMl: 'പ്രൊഫഷണൽ കണക്ഷനുകൾ ഫലപ്രദമായി നിർമ്മിക്കുന്നതും പ്രയോജനപ്പെടുത്തുന്നതും എങ്ങനെയെന്ന് പഠിക്കുക.'
  }
];

export default function App() {
  const [language, setLanguage] = useState<Language>(null);
  const [selectedService, setSelectedService] = useState<SelectedService>(null);
  const [showContact, setShowContact] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    phone: '',
    location: ''
  });

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setSelectedService(null);
    setShowContact(false);
    // Scroll to top of page to show Welcome Guest area
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setShowContact(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToServices = () => {
    setSelectedService(null);
    setShowContact(false);
  };

  const handleBackToLanguages = () => {
    setLanguage(null);
    setSelectedService(null);
    setShowContact(false);
  };

  const handleContactClick = () => {
    setShowContact(true);
    setShowEnquiryPopup(true);
  };

  const handleSendEnquiry = () => {
    if (!enquiryForm.name || !enquiryForm.phone) {
      alert(language === 'malayalam' ? 'ദയവായി പേരും ഫോൺ നമ്പറും പൂരിപ്പിക്കുക' : 'Please fill in your name and phone number');
      return;
    }

    const selectedServiceData = services.find(s => s.id === selectedService);
    const additionalService = additionalServices.find(s => s.id === selectedService);
    const serviceName = selectedServiceData 
      ? (language === 'malayalam' ? selectedServiceData.titleMl : selectedServiceData.title)
      : additionalService
        ? (language === 'malayalam' ? additionalService.titleMl : additionalService.title)
        : 'Profile Creation Service';

    const now = new Date();
    const date = now.toLocaleDateString('en-IN');
    const time = now.toLocaleTimeString('en-IN');

    const message = language === 'malayalam'
      ? `*നെക്സിയ വിർച്ച്വൽ ഡെസ്കിന് അന്വേഷണം*%0A%0A*പേര്:* ${enquiryForm.name}%0A*ഫോൺ:* ${enquiryForm.phone}%0A*സ്ഥാനം:* ${enquiryForm.location || 'പ്രതീക്ഷിക്കുന്നു'}%0A*തീയതി:* ${date}%0A*സമയം:* ${time}%0A*സേവനം:* ${serviceName}%0A%0Aഹായ്, ഈ സേവനത്തെക്കുറിച്ച് കൂടുതൽ അറിയാൻ ഞാൻ ആഗ്രഹിക്കുന്നു. ദയവായി എന്നോട് ബന്ധപ്പെടുക.`
      : `*Nexia Virtual Desk Enquiry*%0A%0A*Name:* ${enquiryForm.name}%0A*Phone:* ${enquiryForm.phone}%0A*Location:* ${enquiryForm.location || 'N/A'}%0A*Date:* ${date}%0A*Time:* ${time}%0A*Service Interested:* ${serviceName}%0A%0AHi, I would like to know more about this service. Please get in touch with me.`;

    const whatsappUrl = `https://wa.me/919961850698?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setShowEnquiryPopup(false);
    setEnquiryForm({ name: '', phone: '', location: '' });
    // Show thank you popup after sending
    setTimeout(() => {
      setShowThankYou(true);
    }, 500);
  };

  const handleCloseSite = () => {
    // Try to close the window/tab
    window.open('', '_self');
    window.close();
    // Fallback: show a message if the browser blocks closing
    setTimeout(() => {
      alert(
        language === 'malayalam'
          ? 'വിൻഡോ അടയ്ക്കാൻ ബ്രൗസർ അനുവദിക്കുന്നില്ല. ദയവായി ടാബ് അടയ്ക്കുക.'
          : 'Browser does not allow closing this window. Please close the tab manually.'
      );
    }, 300);
  };

  const selectedServiceData = services.find(s => s.id === selectedService);
  const selectedAdditionalService = additionalServices.find(s => s.id === selectedService);
  const anySelectedService = selectedServiceData || selectedAdditionalService;

  const t = (ml: string, en: string) => language === 'malayalam' ? ml : en;

  useEffect(() => {
    if (showEnquiryPopup || showThankYou) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showEnquiryPopup, showThankYou]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enquiry Popup */}
      {showEnquiryPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-slideUp">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white relative">
              <button
                onClick={() => setShowEnquiryPopup(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📨</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {t('നെക്സിയയ്ക്ക് നിങ്ങളുടെ അന്വേഷണം സമർപ്പിക്കുക', 'Submit your enquiry to Nexia')}
                  </h3>
                  <p className="text-indigo-100 text-sm">
                    {t('ഞങ്ങൾ ഉടൻ തന്നെ നിങ്ങളുമായി ബന്ധപ്പെടും', 'We will get back to you shortly')}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('പേര്', 'Name')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={enquiryForm.name}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                  placeholder={t('നിങ്ങളുടെ പേര് പൂരിപ്പിക്കുക', 'Enter your full name')}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('ഫോൺ നമ്പർ', 'Phone Number')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={enquiryForm.phone}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                  placeholder={t('+91 98765 43210', '+91 98765 43210')}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('നിലവിലെ സ്ഥാനം', 'Present Location')}
                </label>
                <input
                  type="text"
                  value={enquiryForm.location}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, location: e.target.value })}
                  placeholder={t('ഉദാ. ഇന്ത്യ / യുകെ / യുഎഇ / മറ്റേതും', 'e.g. India / UK / UAE / Any')}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {anySelectedService && (
                <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                  <p className="text-xs text-indigo-600 font-medium mb-1">
                    {t('തിരഞ്ഞെടുത്ത സേവനം', 'Selected Service')}
                  </p>
                  <p className="font-bold text-indigo-800">
                    {selectedServiceData 
                      ? t(selectedServiceData.titleMl, selectedServiceData.title)
                      : t(selectedAdditionalService!.titleMl, selectedAdditionalService!.title)
                    }
                  </p>
                </div>
              )}

              <button
                onClick={handleSendEnquiry}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {t('ഇപ്പോൾ അന്വേഷണം അയയ്ക്കുക', 'Send Enquiry Now')}
              </button>

              <p className="text-center text-xs text-slate-500">
                {t('അയക്കുമ്പോൾ വാട്സ്ആപ്പ് വഴി നേരിട്ട് അയയ്ക്കും', 'Will be sent directly via WhatsApp')}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-slideUp">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-white text-center relative">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur rounded-full mb-4 animate-bounce">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {t('നന്ദി!', 'Thank You!')}
              </h3>
            </div>
            <div className="p-8 text-center">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                {t(
                  'നിങ്ങളുടെ സമർപ്പണത്തിന് നന്ദി. ഒരു നെക്സിയ പ്രതിനിധി ഉടൻ തന്നെ നിങ്ങളുമായി ബന്ധപ്പെടും. ✅',
                  'Thank you for your submission. A Nexia representative will contact you soon. ✅'
                )}
              </p>
              <div className="bg-green-50 rounded-xl p-4 mb-6 border border-green-100">
                <p className="text-sm text-green-700">
                  {t(
                    '📱 വാട്സ്ആപ്പ് വഴി ഞങ്ങളുമായി ബന്ധപ്പെടാം',
                    '📱 You can also reach us on WhatsApp'
                  )}
                </p>
                <p className="font-bold text-green-800 mt-1">+91 99618 50698</p>
              </div>
              <button
                onClick={handleCloseSite}
                className="w-full py-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-bold rounded-xl hover:from-slate-800 hover:to-slate-950 transition-all shadow-lg flex items-center justify-center gap-2 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {t('അടയ്ക്കുക', 'Close')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleBackToLanguages}>
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <span className="text-white text-xl font-bold">N</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">Nexia Virtual Desk</h1>
              <p className="text-xs text-slate-500">Olarikkara | Thrissur | Kerala</p>
            </div>
          </div>
          {language && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleBackToLanguages}
                className="px-3 py-1.5 text-sm rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('ഭാഷ മാറ്റുക', 'Change Language')}
              </button>
              <span className={`px-3 py-1.5 text-sm rounded-lg font-medium ${
                language === 'malayalam' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {language === 'malayalam' ? '🇮🇳 മലയാളം' : '🇬🇧 English'}
              </span>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full mb-4">
            <span className="text-2xl">👋</span>
            <span className="text-indigo-700 font-medium">
              {language === 'malayalam' ? 'സ്വാഗതം അതിഥേ' : 'Welcome Guest'}
            </span>
          </div>

          {/* 16 Years Experience Banner - Easy to Edit/Remove */}
          {/* --- EDITABLE EXPERIENCE LINE START --- */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-full mb-4 border border-amber-200 shadow-sm">
            <span className="text-2xl">🏆</span>
            <span className="text-amber-800 font-bold">
              {t('16 വർഷത്തെ വിജയകരമായ അനുഭവം കരിയർ വിഭവങ്ങളിൽ', '16+ Years of Excellence in Career Solutions')}
            </span>
            <span className="text-2xl">✨</span>
          </div>
          {/* --- EDITABLE EXPERIENCE LINE END --- */}

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            {t(
              'നിങ്ങളുടെ സ്വപ്ന തൊഴിലിനായി ഒരു പ്രൊഫഷണൽ പ്രൊഫൈൽ സൃഷ്ടിക്കുക',
              'Create a Professional Profile for Your Dream Job'
            )}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            {!language && t(
              'CV, റെസ്യൂമെ, പോർട്ട്ഫോളിയോ, കവർ ലെറ്റർ തുടങ്ങിയവ നിർമ്മിക്കുന്നതിലൂടെ നിങ്ങളുടെ കരിയർ മെച്ചപ്പെടുത്താൻ ഞങ്ങൾ സഹായിക്കുന്നു.',
              'We help you advance your career by creating professional CVs, Resumes, Portfolios, Cover Letters, and more.'
            )}
            {language && !selectedService && (
              <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold">
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                {t(
                  'ഒരു പാക്കേജ് തിരഞ്ഞെടുക്കാൻ താഴേക്ക് സ്ക്രോൾ ചെയ്യുക',
                  'Scroll down for select a package'
                )}
              </span>
            )}
            {selectedService && (
              <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold">
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                {t(
                  'തിരഞ്ഞെടുത്ത പാക്കേജിനെക്കുറിച്ച് കൂടുതൽ അറിയുക. തുടരാൻ താഴേക്ക് സ്ക്രോൾ ചെയ്യുക.',
                  'Learn more about your selected package. Scroll down to continue.'
                )}
              </span>
            )}
          </p>
        </section>

        {/* Language Selection (Part 1) */}
        {!language && (
          <section className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mb-4 shadow-lg shadow-indigo-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Scroll down for Select Your Comfortable Language
                </h3>
                <p className="text-slate-500">
                  തുടരാൻ നിങ്ങൾക്ക് സൗകര്യമുള്ള ഭാഷ തിരഞ്ഞെടുക്കുക
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={() => handleLanguageSelect('malayalam')}
                  className="group relative overflow-hidden p-8 rounded-2xl border-2 border-slate-200 hover:border-green-500 bg-gradient-to-br from-white to-green-50/50 hover:from-green-50 hover:to-green-100 transition-all duration-300 hover:shadow-xl hover:shadow-green-200/50 hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative">
                    <div className="text-6xl mb-4">🇮🇳</div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">മലയാളം</h4>
                    <p className="text-slate-600 mb-4">Malayalam</p>
                    <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                      <span>തുടരുക</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleLanguageSelect('english')}
                  className="group relative overflow-hidden p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-500 bg-gradient-to-br from-white to-blue-50/50 hover:from-blue-50 hover:to-blue-100 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative">
                    <div className="text-6xl mb-4">🇬🇧</div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">English</h4>
                    <p className="text-slate-600 mb-4">ഇംഗ്ലീഷ്</p>
                    <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                      <span>Continue</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Service Detail View */}
        {language && selectedService && anySelectedService && (
          <section className="max-w-4xl mx-auto">
            <button
              onClick={handleBackToServices}
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 mb-6 font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t('സേവനങ്ങളിലേക്ക് മടങ്ങുക', 'Back to Services')}
            </button>

            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-5xl">
                    {anySelectedService.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2">
                      {selectedServiceData 
                        ? t(selectedServiceData.titleMl, selectedServiceData.title)
                        : t(selectedAdditionalService!.titleMl, selectedAdditionalService!.title)
                      }
                    </h3>
                    <p className="text-indigo-100 text-lg">
                      {selectedServiceData 
                        ? t(selectedServiceData.descriptionMl, selectedServiceData.description)
                        : t(selectedAdditionalService!.descriptionMl, selectedAdditionalService!.description)
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {selectedServiceData && (
                  <>
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100 relative group">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-10">
                          {t(selectedServiceData.priceTooltipMl, selectedServiceData.priceTooltip)}
                        </div>
                        <p className="text-sm text-amber-600 font-medium mb-1">
                          {t('വില', 'Price')}
                        </p>
                        <p className="text-2xl font-bold text-amber-700">{selectedServiceData.priceRange}</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
                        <p className="text-sm text-green-600 font-medium mb-1">
                          {t('ഡെലിവറി സമയം', 'Delivery Time')}
                        </p>
                        <p className="text-2xl font-bold text-green-700">{selectedServiceData.duration}</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100 relative group">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-10">
                          {t('ചെറിയ തിരുത്തലുകൾ മാത്രം ബാധകം', '*Minor revisions applicable')}
                        </div>
                        <p className="text-sm text-purple-600 font-medium mb-1">
                          {t('റിവിഷൻ', 'Revision')}
                        </p>
                        <p className="text-2xl font-bold text-purple-700">{t('1 തിരുത്തൽ 7 ദിവസം', '1 Revision 7 Days')}</p>
                      </div>
                    </div>

                    {/* Lightning Service */}
                    {selectedServiceData.lightningAvailable && (
                      <div className="mb-8 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 rounded-2xl p-5 border-2 border-amber-200 relative group">
                        <div className="absolute -top-3 left-5 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-10">
                          {t(
                            selectedServiceData.lightningDuration.includes('Day') 
                              ? 'ഈ സേവനത്തിന് കുറഞ്ഞ സമയത്തിനുള്ളിൽ ഡെലിവറി'
                              : '5 ജോലി മണിക്കൂറിനുള്ളിൽ ഡെലിവർ ചെയ്യും',
                            selectedServiceData.lightningDuration.includes('Day') 
                              ? 'Fast track delivery for this service'
                              : 'Deliver within 5 working hours'
                          )}
                        </div>
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-amber-200 animate-pulse">
                              ⚡
                            </div>
                            <div>
                              <h5 className="text-xl font-bold text-amber-800">
                                {t('ലൈറ്റ്നിംഗ് സേവനം', 'Lightning Service')}
                              </h5>
                              <p className="text-amber-700 text-sm">
                                {t(
                                  `${selectedServiceData.lightningDuration} കുറഞ്ഞ സമയത്തിനുള്ളിൽ ഡെലിവറി`,
                                  `Delivery within ${selectedServiceData.lightningDuration}`
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl px-5 py-3 border border-amber-200 shadow-sm">
                            <p className="text-xs text-amber-600 font-medium">
                              {t('പുതിയ ചാർജ്', 'Extra Charge')}
                            </p>
                            <p className="text-2xl font-bold text-amber-700">+₹199</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        {t('ഏതാണ് ഇത്?', 'What is it?')}
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {t(selectedServiceData.detailsMl, selectedServiceData.details)}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {t('സവിശേഷതകൾ', 'Features Included')}
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {(language === 'malayalam' ? selectedServiceData.featuresMl : selectedServiceData.features).map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</span>
                            <span className="text-slate-700 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {/* Additional Services View */}
                {selectedAdditionalService && (
                  <div className="mb-8">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-5xl shadow-sm">
                          {selectedAdditionalService.icon}
                        </div>
                        <div>
                          <p className="text-sm text-purple-600 font-medium mb-1">
                            {t('വില', 'Pricing')}
                          </p>
                          <p className="text-2xl font-bold text-purple-700">
                            {t('നിങ്ങളുടെ ആവശ്യകതയ്ക്കനുസരിച്ച് വില', 'Price depends on your requirement')}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {t(selectedAdditionalService.descriptionMl, selectedAdditionalService.description)}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h5 className="text-xl font-bold text-slate-800 mb-1">
                        {t('ഈ സേവനം ഓർഡർ ചെയ്യാൻ താൽപ്പര്യമുണ്ടോ?', 'Interested in this service?')}
                      </h5>
                      <p className="text-slate-600">
                        {t('ഞങ്ങളുമായി ബന്ധപ്പെടുക, ഞങ്ങൾ നിങ്ങളെ സഹായിക്കാം!', 'Contact us today and we will help you get started!')}
                      </p>
                    </div>
                    <button
                      onClick={handleContactClick}
                      className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {t('ബന്ധപ്പെടുക', 'Contact Now')}
                    </button>
                  </div>
                </div>

                {showContact && (
                  <div className="mt-6 bg-white rounded-2xl p-6 border-2 border-indigo-200 shadow-lg">
                    <h5 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        📞
                      </span>
                      {t('ഞങ്ങളുമായി ബന്ധപ്പെടുക', 'Contact Us')}
                    </h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">{t('ഫോൺ / വാട്സ്ആപ്പ്', 'Phone / WhatsApp')}</p>
                          <a href="tel:+919961850698" className="font-bold text-slate-800 hover:text-green-600 transition-colors">+91 99618 50698</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">{t('ഇമെയിൽ', 'Email')}</p>
                          <a href="mailto:nexiacare@gmail.com" className="font-bold text-slate-800 hover:text-blue-600 transition-colors break-all">nexiacare@gmail.com</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl md:col-span-2">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">{t('വിലാസം', 'Address')}</p>
                          <p className="font-bold text-slate-800">Nexia Virtual Desk, Olarikkara, Thrissur, Kerala</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Information Help Desk (Part 2 - Malayalam / Part 3 - English) */}
        {language && !selectedService && (
          <>
            {/* Help Desk Header */}
            <section className="mb-10">
              <div className={`rounded-3xl p-8 md:p-12 text-white relative overflow-hidden ${
                language === 'malayalam' 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600' 
                  : 'bg-gradient-to-r from-indigo-600 to-blue-600'
              }`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {t('ഇൻഫർമേഷൻ ഹെൽപ്പ് ഡെസ്ക്', 'Information Help Desk')}
                      </h3>
                      <p className="text-white/80">
                        {t('ഞങ്ങളുടെ സേവനങ്ങളെക്കുറിച്ച് അറിയുക', 'Learn more about our services')}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-white/90 max-w-3xl leading-relaxed">
                    {t(
                      'തൊഴിൽ തേടുന്നവർക്കായി പ്രൊഫഷണൽ പ്രൊഫൈൽ സൃഷ്ടിക്കുന്നതിലൂടെ നിങ്ങളുടെ കരിയർ മെച്ചപ്പെടുത്താൻ ഞങ്ങൾ സഹായിക്കുന്നു. ചുവടെ നൽകിയിരിക്കുന്ന ഓരോ സേവനത്തെക്കുറിച്ചും വിശദമായ വിവരങ്ങൾ കാണുക.',
                      'We help you advance your career by creating professional profiles for job seekers. Click on any service below to see detailed information.'
                    )}
                  </p>
                </div>
              </div>
            </section>

            {/* Services Grid */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  language === 'malayalam' ? 'bg-green-100' : 'bg-indigo-100'
                }`}>
                  <span className="text-2xl">📑</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">
                    {t('പ്രൊഫൈൽ സൃഷ്ടി സേവനങ്ങൾ', 'Profile Creation Services')}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {t('ക്ലിക്ക് ചെയ്ത് വിശദാംശങ്ങൾ കാണുക', 'Click to view details')}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="group text-left bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 ${
                      language === 'malayalam'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                        : 'bg-gradient-to-r from-indigo-500 to-blue-500'
                    }`}></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h5 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                      {t(service.titleMl, service.title)}
                    </h5>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {t(service.descriptionMl, service.description)}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      {/* Price Range with Tooltip */}
                      <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-amber-100 relative group/price">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/price:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-20">
                          {t(service.priceTooltipMl, service.priceTooltip)}
                        </div>
                        <span className="text-xs text-amber-700 font-medium flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {t('വില', 'Price')}
                        </span>
                        <span className="font-bold text-amber-700">{service.priceRange}</span>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-100">
                        <span className="text-xs text-green-700 font-medium flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {t('സമയം', 'Time')}
                        </span>
                        <span className="font-bold text-green-700">{service.duration}</span>
                      </div>

                      {/* Lightning Service Available */}
                      {service.lightningAvailable && (
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-amber-200 relative group/lightning">
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/lightning:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-20">
                            {t(
                              service.lightningDuration.includes('Day')
                                ? 'വേഗത്തിലുള്ള ഡെലിവറി ലഭ്യമാണ്'
                                : '5 ജോലി മണിക്കൂറിനുള്ളിൽ ഡെലിവർ ചെയ്യും',
                              service.lightningDuration.includes('Day')
                                ? 'Fast delivery available'
                                : 'Deliver within 5 working hours'
                            )}
                          </div>
                          <span className="text-xs text-amber-700 font-medium flex items-center gap-1">
                            ⚡ {t('ലൈറ്റ്നിംഗ്', 'Lightning')}
                          </span>
                          <span className="font-bold text-amber-700">+₹199</span>
                        </div>
                      )}
                    </div>

                    {/* Select Button */}
                    <button
                      onClick={() => handleServiceSelect(service.id)}
                      className={`w-full py-3 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg ${
                        language === 'malayalam'
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                          : 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700'
                      }`}
                    >
                      {t('ഈ ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക', 'Select This Option')}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Profile Services (Custom Pricing) */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  language === 'malayalam' ? 'bg-purple-100' : 'bg-pink-100'
                }`}>
                  <span className="text-2xl">🌟</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">
                    {t('മറ്റ് പ്രൊഫൈൽ സൃഷ്ടി സേവനങ്ങൾ', 'Other Profile Creation Services')}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {t('നിങ്ങളുടെ ആവശ്യകതകൾക്കനുസരിച്ച് ഇടപാട് ചെയ്ത സേവനങ്ങൾ', 'Customized services for your specific needs')}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {additionalServices.map((service) => (
                  <div
                    key={service.id}
                    className="group text-left bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 rounded-2xl p-6 border-2 border-dashed border-purple-200 hover:border-purple-400 shadow-sm hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h5 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors">
                      {t(service.titleMl, service.title)}
                    </h5>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {t(service.descriptionMl, service.description)}
                    </p>
                    
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border border-purple-200 mb-4">
                      <span className="text-xs text-purple-700 font-medium flex items-center gap-1">
                        💰 {t('വില', 'Price')}
                      </span>
                      <span className="font-bold text-purple-700 text-sm">
                        {t('നിങ്ങളുടെ ആവശ്യകതയ്ക്കനുസരിച്ച്', 'As per requirement')}
                      </span>
                    </div>

                    <button
                      onClick={() => handleServiceSelect(service.id)}
                      className="w-full py-3 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      {t('ഈ ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക', 'Select This Option')}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Job Search Services */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  language === 'malayalam' ? 'bg-amber-100' : 'bg-purple-100'
                }`}>
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">
                    {t('ജോലി തിരയൽ സേവനങ്ങൾ', 'Job Search Services')}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {t('നിങ്ങളുടെ സ്വപ്ന തൊഴിൽ നേടാൻ സഹായിക്കുന്നു', 'Helping you achieve your dream job')}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobSearchServices.map((service, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-300 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-4">
                      {service.icon}
                    </div>
                    <h5 className="text-lg font-bold text-slate-800 mb-2">
                      {t(service.titleMl, service.title)}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t(service.descMl, service.desc)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12">
              <div className={`rounded-3xl p-8 md:p-12 ${
                language === 'malayalam'
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200'
                  : 'bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200'
              }`}>
                <div className="text-center mb-8">
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                    {t('എന്തുകൊണ്ട് ഞങ്ങളെ തിരഞ്ഞെടുക്കണം?', 'Why Choose Nexia Virtual Desk?')}
                  </h4>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    {t(
                      'നിങ്ങളുടെ കരിയർ വികസനത്തിനായി ഞങ്ങൾ ഏറ്റവും മികച്ച സേവനങ്ങൾ നൽകുന്നു.',
                      'We provide the best services for your career development.'
                    )}
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { icon: '🏆', title: t('16 വർഷത്തെ അനുഭവം', '16+ Years Experience'), desc: t('വിജയകരമായ കരിയർ വിഭവങ്ങൾ', 'Successful career solutions') },
                    { icon: '⚡', title: t('പെട്ടെന്നുള്ള ഡെലിവറി', 'Fast Delivery'), desc: t('സമയത്തിനുള്ളിൽ മികച്ച ഫലം', 'Timely results') },
                    { icon: '💰', title: t('വിലക്കുറവ്', 'Affordable'), desc: t('മികച്ച വിലയിൽ മികച്ച നിലവാരം', 'Best prices') },
                    { icon: '🔄', title: t('1 തിരുത്തൽ 7 ദിവസം', '1 Revision 7 Days'), desc: t('ചെറിയ തിരുത്തലുകൾ ബാധകം', 'Minor revisions applicable') }
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100">
                      <div className="text-5xl mb-3">{item.icon}</div>
                      <h5 className="font-bold text-slate-800 mb-1">{item.title}</h5>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section>
              <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
                <div className="relative">
                  <h4 className="text-2xl md:text-3xl font-bold mb-3">
                    {t('നിങ്ങളുടെ കരിയർ യാത്ര ഇവിടെ തുടങ്ങുന്നു!', 'Your Career Journey Starts Here!')}
                  </h4>
                  <p className="text-slate-300 max-w-2xl mx-auto mb-6 text-lg">
                    {t(
                      'ഇന്നുതന്നെ ഞങ്ങളുമായി ബന്ധപ്പെടുക, നിങ്ങളുടെ സ്വപ്ന തൊഴിൽ നേടാൻ ഞങ്ങൾ സഹായിക്കാം.',
                      'Contact us today and let us help you land your dream job.'
                    )}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="tel:+919961850698"
                      className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/30 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {t('ഫോൺ ചെയ്യുക', 'Call Now')}
                    </a>
                    <a
                      href="mailto:nexiacare@gmail.com"
                      className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {t('ഇമെയിൽ', 'Email Us')}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">N</span>
                </div>
                <div>
                  <h5 className="text-xl font-bold">Nexia Virtual Desk</h5>
                  <p className="text-slate-400 text-sm">Career Solutions</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-amber-400 text-sm font-medium">
                <span>🏆</span>
                <span>{t('16 വർഷത്തെ വിജയം', '16+ Years of Excellence')}</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t(
                  'തൊഴിൽ തേടുന്നവർക്കായി പ്രൊഫഷണൽ പ്രൊഫൈൽ സൃഷ്ടി സേവനങ്ങൾ നൽകുന്നു.',
                  'Professional profile creation services for job seekers.'
                )}
              </p>
            </div>
            <div>
              <h6 className="font-bold text-lg mb-4">{t('സേവനങ്ങൾ', 'Services')}</h6>
              <ul className="space-y-2 text-slate-400">
                {services.slice(0, 5).map(s => (
                  <li key={s.id} className="hover:text-white transition-colors cursor-pointer" onClick={() => handleServiceSelect(s.id)}>
                    • {t(s.titleMl, s.title)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-lg mb-4">{t('ബന്ധപ്പെടുക', 'Contact')}</h6>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Olarikkara, Thrissur, Kerala
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 99618 50698
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  nexiacare@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Nexia Virtual Desk. {t('എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.', 'All rights reserved.')}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
