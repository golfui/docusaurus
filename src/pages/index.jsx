import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory } from "@docusaurus/router";
import clsx from "clsx";
import styles from "./index.module.css";

// Main categories for the homepage
const categories = [
  {
    title: "AI Tools",
    description: "Discover powerful AI tools for various tasks",
    icon: "🤖",
    link: "/AI",
  },
  {
    title: "Web3",
    description: "Resources for blockchain and decentralized applications",
    icon: "🔗",
    link: "/web3/spa-advantages",
  },
  {
    title: "CSS",
    description: "CSS tools, generators, and resources",
    icon: "🎨",
    link: "/CSS",
  },
  {
    title: "Programming",
    description: "Helpful programming tools and references",
    icon: "💻",
    link: "/编程/JSON",
  },
  {
    title: "Resources",
    description: "General resources for developers",
    icon: "📚",
    link: "/资源/Icon",
  },
  {
    title: "Cron",
    description: "Tools for working with cron jobs",
    icon: "⏱️",
    link: "/cron/gui",
  }
];

// Featured resources data
const featuredResources = [
  {
    title: "ChatGPT Alternatives",
    description: "Discover free alternatives to ChatGPT",
    link: "/AI/chatGPT",
  },
  {
    title: "SPA for Web3",
    description: "Learn about the advantages of Single Page Applications for Web3",
    link: "/web3/spa-advantages",
  },
  {
    title: "CSS Tools",
    description: "Useful tools for CSS development",
    link: "/CSS",
  },
  {
    title: "JSON Tools",
    description: "Tools for working with JSON data",
    link: "/编程/JSON",
  },
  {
    title: "Regular Expression Tools",
    description: "Tools for creating and testing regular expressions",
    link: "/编程/正则",
  },
  {
    title: "Icon Resources",
    description: "Free icon resources for your projects",
    link: "/资源/Icon",
  }
];

function CategoryCard({ title, description, icon, link }) {
  return (
    <Link to={link} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardIcon}>{icon}</div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
}

function FeaturedCard({ title, description, link }) {
  return (
    <div className={styles.featuredCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className={styles.featuredLink}>
        Explore →
      </Link>
    </div>
  );
}

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>
          A curated collection of useful development resources and tools
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedFeatured, setDisplayedFeatured] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Redirect to docs if coming from old index page
    const params = new URLSearchParams(window.location.search);
    if (params.has("redirect")) {
      history.replace("/docs");
    }
    
    // Set initial featured resources (random selection of 3)
    const shuffled = [...featuredResources].sort(() => 0.5 - Math.random());
    setDisplayedFeatured(shuffled.slice(0, 3));
  }, [history]);

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout
      title={siteConfig.title}
      description="A curated collection of development resources and tools"
    >
      <Hero />
      <main className={styles.main}>
        <div className={styles.categoryGrid}>
          {filteredCategories.map((category, idx) => (
            <CategoryCard key={idx} {...category} />
          ))}
        </div>
        <div className={styles.featuredSection}>
          <h2 className={styles.sectionTitle}>Featured Resources</h2>
          <div className={styles.featuredGrid}>
            {displayedFeatured.map((resource, idx) => (
              <FeaturedCard key={idx} {...resource} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}