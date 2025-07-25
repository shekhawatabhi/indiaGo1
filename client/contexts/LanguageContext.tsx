import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation strings
const translations = {
  en: {
    // Navigation
    'nav.findJobs': 'Find Jobs',
    'nav.postJob': 'Post Job',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.register': 'Register',
    
    // Homepage
    'hero.title': 'Bridging Job Seekers & Work Providers',
    'hero.subtitle': 'Across Every City & Village',
    'hero.description': 'Connect with verified workers and trusted employers across India. From construction to digital services, find work or hire talent securely.',
    'hero.postJob': 'Post a Job',
    'hero.findWork': 'Find Work',
    'hero.freeToUse': 'Free to Use',
    'hero.verifiedUsers': 'Verified Users',
    'hero.securePayments': 'Secure Payments',
    
    // How it works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Get started in 4 simple steps and connect with opportunities across India',
    'howItWorks.step1.title': 'Create Profile',
    'howItWorks.step1.desc': 'Sign up and create your professional profile with skills and experience',
    'howItWorks.step2.title': 'Choose Role',
    'howItWorks.step2.desc': 'Select if you\'re looking for work or hiring workers',
    'howItWorks.step3.title': 'Post or Browse',
    'howItWorks.step3.desc': 'Post job requirements or browse available opportunities',
    'howItWorks.step4.title': 'Connect Securely',
    'howItWorks.step4.desc': 'Chat, verify, and complete work with secure payments',
    
    // Categories
    'categories.title': 'Popular Work Categories',
    'categories.subtitle': 'Explore thousands of opportunities across different sectors',
    'categories.construction': 'Construction',
    'categories.driving': 'Driving',
    'categories.housekeeping': 'Housekeeping',
    'categories.electrical': 'Electricians',
    'categories.delivery': 'Delivery',
    'categories.tutoring': 'Home Tutors',
    'categories.digital': 'Digital Services',
    'categories.viewAll': 'View All Categories',
    
    // Features
    'features.title': 'Why Choose WorkIndia360?',
    'features.subtitle': 'Built specifically for the Indian workforce with safety and trust in mind',
    'features.verified.title': 'Verified Users',
    'features.verified.desc': 'All users are verified with Aadhaar and document checks',
    'features.matching.title': 'Real-time Matching',
    'features.matching.desc': 'AI-powered job matching based on skills and location',
    'features.chat.title': 'Secure Chat',
    'features.chat.desc': 'Built-in messaging with phone number protection',
    'features.payments.title': 'Safe Payments',
    'features.payments.desc': 'UPI, QR code payments with dispute protection',
    
    // Testimonials
    'testimonials.title': 'Success Stories',
    'testimonials.subtitle': 'Real people, real results from across India',
    
    // CTA
    'cta.title': 'Ready to Get Started?',
    'cta.subtitle': 'Join thousands of job seekers and employers who trust WorkIndia360 for their work needs',
    'cta.register': 'Register Now - It\'s Free',
    'cta.contact': 'Need Help? Contact Us',
    
    // Footer
    'footer.description': 'Bridging Job Seekers & Work Providers — Across Every City & Village. Connect with verified workers and trusted employers across India.',
    'footer.quickLinks': 'Quick Links',
    'footer.support': 'Support',
    'footer.downloadApp': 'Download App',
    'footer.copyright': '© 2024 WorkIndia360. All rights reserved.',
    
    // Common
    'common.jobs': 'jobs',
    'common.apply': 'Apply Now',
    'common.save': 'Save Job',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.location': 'Location',
    'common.salary': 'Salary',
    'common.experience': 'Experience',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success'
  },
  
  hi: {
    // Navigation
    'nav.findJobs': 'नौकरी खोजें',
    'nav.postJob': 'नौकरी पोस्ट करें',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क करें',
    'nav.login': 'लॉगिन',
    'nav.register': 'पंजीकरण',
    
    // Homepage
    'hero.title': 'नौकरी तलाशन�� वाले और काम देने वाले को जोड़ना',
    'hero.subtitle': 'हर शहर और गांव में',
    'hero.description': 'भारत भर में सत्यापित कामगारों और विश्वसनीय नियोक्ताओं से जुड़ें। निर्माण से लेकर डिजिटल सेवाओं तक, सुरक्षित रूप से काम खोजें या प्रतिभा को किराए पर लें।',
    'hero.postJob': 'नौकरी पोस्ट करें',
    'hero.findWork': 'काम खोजें',
    'hero.freeToUse': 'उपयोग के लिए निःशुल्क',
    'hero.verifiedUsers': 'सत्यापित उपयोगकर्ता',
    'hero.securePayments': 'सुरक्षित भुगतान',
    
    // How it works
    'howItWorks.title': 'यह कैसे काम करता है',
    'howItWorks.subtitle': '4 सरल चरणों में शुरुआत करें और भारत भर में अवसरों से जुड़ें',
    'howItWorks.step1.title': 'प्रोफ़ाइल बनाएं',
    'howItWorks.step1.desc': 'साइन अप करें और कौशल और अनुभव के साथ अपनी पेशेवर प्रोफ़ाइल बनाएं',
    'howItWorks.step2.title': 'भूमिका चुनें',
    'howItWorks.step2.desc': 'चुनें कि आप काम की तलाश कर रहे हैं या कामगारों को नियुक्त कर रहे हैं',
    'howItWorks.step3.title': 'पोस्ट करें या ब्राउज़ करें',
    'howItWorks.step3.desc': 'नौकरी की आवश्यकताओं को पोस्ट करें या उपलब्ध अवसरों को ब्राउज़ करें',
    'howItWorks.step4.title': 'सुरक्षित रूप से जुड़ें',
    'howItWorks.step4.desc': 'सुरक्षित भुगतान के साथ चैट करें, सत्यापित करें और काम पूरा करें',
    
    // Categories
    'categories.title': 'लोकप्रिय कार्य श्रेणियां',
    'categories.subtitle': 'विभिन्न क्षेत्रों में हजारों अवसरों का अन्वेषण करें',
    'categories.construction': 'निर्माण',
    'categories.driving': 'ड्राइविंग',
    'categories.housekeeping': 'घरेलू सफाई',
    'categories.electrical': 'इलेक्ट्रीशियन',
    'categories.delivery': 'डिलीवरी',
    'categories.tutoring': 'होम ट्यूटर',
    'categories.digital': 'डिजिटल सेवाएं',
    'categories.viewAll': 'सभी श्रेणियां देखें',
    
    // Features
    'features.title': 'WorkIndia360 क्यों चुनें?',
    'features.subtitle': 'सुरक्षा और विश्वास को ध्यान में रखते हुए भारतीय कार्यबल के लिए विशेष रूप से निर्मित',
    'features.verified.title': 'सत्यापित उपयोगकर्ता',
    'features.verified.desc': 'सभी उपयोगकर्ता आधार और दस्तावेज़ जांच के साथ सत्यापित हैं',
    'features.matching.title': 'रियल-टाइम मैचिंग',
    'features.matching.desc': 'कौशल और स्थान के आधार पर AI-संचालि��� नौकरी मैचिंग',
    'features.chat.title': 'सुरक्षित चैट',
    'features.chat.desc': 'फोन नंबर सुरक्षा के साथ अंतर्निहित संदेश',
    'features.payments.title': 'सुरक्षित भुगतान',
    'features.payments.desc': 'UPI, QR कोड भुगतान विवाद सुरक्षा के साथ',
    
    // Testimonials
    'testimonials.title': 'सफलता की कहानियां',
    'testimonials.subtitle': 'भारत भर से वास्तविक लोग, वास्तविक परिणाम',
    
    // CTA
    'cta.title': 'शुरुआत करने के लिए तैयार हैं?',
    'cta.subtitle': 'हजारों नौकरी तलाशने वालों और नियोक्ताओं में शामिल हों जो अपनी कार्य आवश्यकताओं के लिए WorkIndia360 पर भरोसा करते हैं',
    'cta.register': 'अभी पंजीकरण करें - यह निःशुल्क है',
    'cta.contact': 'सहायता चाहिए? हमसे संपर्क करें',
    
    // Footer
    'footer.description': 'नौकरी तलाशने वाले और काम देने वाले को जोड़ना — हर शहर और गांव में। भारत भर में सत्यापित कामगारों और विश्वसनीय नियोक्ताओं से जुड़ें।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.support': 'सहायता',
    'footer.downloadApp': 'ऐप डाउनलोड करें',
    'footer.copyright': '© 2024 WorkIndia360. सभी अधिकार सुरक्षित।',
    
    // Common
    'common.jobs': 'नौकरियां',
    'common.apply': 'अभी आवेदन करें',
    'common.save': 'नौकरी सेव करें',
    'common.search': 'खोजें',
    'common.filter': 'फ़िल्टर',
    'common.location': 'स्थान',
    'common.salary': 'वेतन',
    'common.experience': 'अनुभव',
    'common.submit': 'जमा करें',
    'common.cancel': 'रद्द करें',
    'common.back': 'वापस',
    'common.next': 'अगला',
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्र��टि',
    'common.success': 'सफलता'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
