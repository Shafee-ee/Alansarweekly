// Sample article data - in a real app, this would come from an API/database
export const articles = [
    {
        id: 1,
        title: "Understanding the Five Pillars of Islam",
        author: "Dr. Ahmed Hassan",
        date: "2024-01-15",
        category: "fiqh",
        image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&h=400&fit=crop",
        excerpt: "A comprehensive guide to understanding the fundamental practices that form the foundation of Islamic faith and worship.",
        content: `The Five Pillars of Islam represent the core beliefs and practices that every Muslim must follow. These pillars serve as the foundation of a Muslim's faith and practice, providing structure and guidance for daily life.

The first pillar, Shahada, is the declaration of faith. It states that there is no god but Allah, and Muhammad is His messenger. This simple yet profound statement encapsulates the monotheistic belief that is central to Islam.

The second pillar is Salah, the ritual prayer performed five times daily. These prayers serve as a direct link between the worshipper and Allah, providing moments of reflection and spiritual connection throughout the day.

Zakat, the third pillar, emphasizes the importance of charity and social responsibility. Muslims are required to give a portion of their wealth to those in need, fostering a sense of community and care for the less fortunate.

The fourth pillar, Sawm, refers to fasting during the holy month of Ramadan. This practice promotes self-discipline, empathy for the hungry, and spiritual purification.

Finally, Hajj, the pilgrimage to Mecca, represents the fifth pillar. This journey, undertaken at least once in a lifetime by those who are able, symbolizes unity among Muslims worldwide and submission to Allah.`
    },
    {
        id: 2,
        title: "The Golden Age of Islamic Civilization",
        author: "Prof. Fatima Al-Zahra",
        date: "2024-01-12",
        category: "islamic-history",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
        excerpt: "Exploring the remarkable achievements in science, mathematics, and philosophy during the Islamic Golden Age.",
        content: `The Islamic Golden Age, spanning roughly from the 8th to the 13th centuries, represents one of the most remarkable periods of human intellectual achievement. During this era, the Islamic world became the center of learning, innovation, and cultural exchange.

This period saw unprecedented advances in mathematics, with scholars like Al-Khwarizmi developing algebra and introducing the decimal system to Europe. The House of Wisdom in Baghdad became a beacon of knowledge, where scholars from different backgrounds collaborated to translate and expand upon Greek, Persian, and Indian texts.

In medicine, physicians like Al-Razi and Ibn Sina (Avicenna) made groundbreaking contributions that influenced medical practice for centuries. Their works on anatomy, pharmacology, and clinical observation laid the foundation for modern medicine.

The period also witnessed remarkable achievements in astronomy, with scholars accurately calculating the Earth's circumference and developing sophisticated astronomical instruments. Their observations and calculations were so precise that they remained the standard for centuries.

Philosophy flourished as well, with thinkers like Al-Farabi, Ibn Rushd (Averroes), and Ibn Sina creating sophisticated philosophical systems that bridged Aristotelian thought with Islamic theology.`
    },
    {
        id: 3,
        title: "Authentic Hadith Collection Methods",
        author: "Sheikh Muhammad Al-Bukhari",
        date: "2024-01-10",
        category: "hadees",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
        excerpt: "Understanding the rigorous methodology used by classical scholars to authenticate and preserve the sayings of Prophet Muhammad (PBUH).",
        content: `The science of Hadith authentication represents one of the most sophisticated systems of historical verification ever developed. Classical Islamic scholars established rigorous criteria to ensure the authenticity of the Prophet's sayings and actions.

The methodology involves examining both the chain of transmission (isnad) and the content (matn) of each hadith. Scholars meticulously investigated the reliability, memory, and character of each narrator in the chain, creating biographical dictionaries that span generations.

Imam Bukhari, one of the most renowned hadith collectors, is said to have examined over 600,000 hadiths and included only about 7,275 in his authentic collection. His criteria were so stringent that he would only accept hadiths with unbroken chains of highly reliable narrators.

The classification system developed by these scholars includes categories such as Sahih (authentic), Hasan (good), Da'if (weak), and Mawdu' (fabricated). This systematic approach ensured that only the most reliable traditions were preserved for future generations.

Modern scholars continue to benefit from this methodology, using the same principles to evaluate historical sources and maintain the integrity of Islamic teachings.`
    },
    {
        id: 4,
        title: "The Art of Islamic Calligraphy",
        author: "Master Yusuf Al-Khattat",
        date: "2024-01-08",
        category: "vismaya-jagattu",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
        excerpt: "Discovering the spiritual and artistic dimensions of Arabic calligraphy as a form of worship and artistic expression.",
        content: `Islamic calligraphy represents far more than mere writing; it is a spiritual practice that transforms the written word into a form of worship and artistic expression. This sacred art form has been central to Islamic culture for over fourteen centuries.

The development of various calligraphic styles, from the angular Kufic to the flowing Naskh, reflects the diversity and richness of Islamic artistic tradition. Each style carries its own aesthetic principles and spiritual significance, with master calligraphers spending decades perfecting their craft.

The practice of calligraphy is considered a form of meditation, requiring patience, concentration, and spiritual awareness. As the calligrapher writes verses from the Quran or prophetic traditions, they engage in a form of dhikr (remembrance of Allah) that purifies the heart and mind.

The geometric principles underlying Islamic calligraphy reflect the mathematical harmony found throughout Islamic art and architecture. The careful balance of proportions, the rhythmic flow of letters, and the integration of text with decorative elements create a visual symphony that speaks to both the intellect and the soul.

Today, contemporary calligraphers continue to innovate while respecting traditional principles, creating works that bridge classical techniques with modern artistic sensibilities.`
    },
    {
        id: 5,
        title: "Modern Challenges in Islamic Finance",
        author: "Dr. Aisha Rahman",
        date: "2024-01-05",
        category: "vishleshanegalu",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
        excerpt: "Analyzing contemporary issues and solutions in implementing Sharia-compliant financial systems in the modern economy.",
        content: `Islamic finance has emerged as a significant alternative to conventional banking, offering financial services that comply with Sharia principles. However, implementing these principles in the modern global economy presents unique challenges and opportunities.

The prohibition of riba (interest) requires innovative financial instruments that share risk rather than guarantee fixed returns. Sukuk (Islamic bonds), Murabaha (cost-plus financing), and Musharaka (partnership) structures have been developed to meet various financing needs while maintaining Sharia compliance.

One of the major challenges is standardization across different jurisdictions. Various Sharia boards may have different interpretations of Islamic law, leading to inconsistencies in product approval and implementation. This has led to efforts to create international standards and harmonize practices.

The integration of technology presents both opportunities and challenges. While fintech innovations can make Islamic financial services more accessible and efficient, they also raise new questions about compliance with traditional Islamic principles.

Regulatory frameworks are evolving to accommodate Islamic finance, with many countries establishing specialized regulatory bodies and legal frameworks. This institutional support is crucial for the continued growth and development of the Islamic finance industry.

The sector's growth potential remains significant, particularly in Muslim-majority countries and among Muslim communities worldwide, as awareness and demand for Sharia-compliant financial products continue to increase.`
    }
];

// Helper function to get articles by category
export const getArticlesByCategory = (category) => {
    return articles.filter(article => article.category === category);
};

// Helper function to get latest articles
export const getLatestArticles = (limit = 10) => {
    return articles
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
};

// Helper function to get article by ID
export const getArticleById = (id) => {
    return articles.find(article => article.id === parseInt(id));
};
