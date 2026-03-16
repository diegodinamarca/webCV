const SELECTORS = {
  navList: "#nav-list",
  heroMeta: "#hero-meta",
  miniStats: "#mini-stats",
  aboutSummary: "#about-summary",
  interestTags: "#interest-tags",
  strengthList: "#strength-list",
  experienceList: "#experience-list",
  projectList: "#project-list",
  highlightList: "#highlight-list",
  postList: "#post-list",
  postFilters: "#post-filters",
  contactLinks: "#contact-links",
  currentYear: "#current-year",
  navToggle: ".nav-toggle",
  heroMenuButton: ".hero-menu-btn",
  siteNav: ".site-nav",
  reveal: ".reveal",
  heroCover: "#hero-cover",
  heroProfile: "#hero-profile",
  heroTitle: "#hero-title",
  heroSubtitle: "#hero-subtitle",
  heroIntro: "#hero-intro",
  heroSignature: "#hero-signature"
};

export const getElement = (selector, scope = document) => scope.querySelector(selector);

export const getElements = (selector, scope = document) =>
  Array.from(scope.querySelectorAll(selector));

export const createElement = ({ tag, className, text, html, attrs = {} }) => {
  const element = document.createElement(tag);
  
  if (className) {
    element.className = className;
  }
  
  if (text) {
    element.textContent = text;
  }
  
  if (html) {
    element.innerHTML = html;
  }
  
  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  
  return element;
};

const clearAndAppend = (container, items) => {
  if (!container) {
    return;
  }

  container.innerHTML = "";
  items.forEach((item) => container.appendChild(item));
};

export const renderNav = (items) => {
  const navList = getElement(SELECTORS.navList);
  
  const links = items.map(({ id, label }) => {
    const listItem = createElement({ tag: "li" });
    const link = createElement({
      tag: "a",
      className: "nav-link",
      text: label,
      attrs: { href: `#${id}`, "data-section-link": id }
    });
    
    listItem.appendChild(link);
    return listItem;
  });
  
  clearAndAppend(navList, links);
};


export const renderHero = ({ title, heroSubtitle, heroIntro, signature, introTitle, images }) => {
  const { heroCover, profile } = images;
  const cover = getElement(SELECTORS.heroCover);
  const profileContainer = getElement(SELECTORS.heroProfile);

  if (cover && heroCover) {
    cover.style.backgroundImage = `url("${heroCover}")`;
  }

  const heroTitle = getElement(SELECTORS.heroTitle);
  const subtitle = getElement(SELECTORS.heroSubtitle);
  const intro = getElement(SELECTORS.heroIntro);
  const signatureNode = getElement(SELECTORS.heroSignature);
  const introHeading = document.querySelector(".intro-card h2");

  if (heroTitle) heroTitle.textContent = title;
  if (subtitle) subtitle.textContent = heroSubtitle;
  if (intro) intro.textContent = heroIntro;
  if (signatureNode) signatureNode.textContent = signature;
  if (introHeading && introTitle) introHeading.textContent = introTitle;

  if (profileContainer && profile) {
    profileContainer.innerHTML = "";
    const profileImage = createElement({
      tag: "img",
      className: "profile-image",
      attrs: {
        src: profile,
        alt: "Profile portrait"
      }
    });
    profileContainer.appendChild(profileImage);
  }
};

export const renderHeroMeta = (items) => {
  const container = getElement(SELECTORS.heroMeta);
  
  const nodes = items.map(({ label, value }) => {
    const item = createElement({ tag: "li" });
    
    item.appendChild(createElement({ tag: "span", className: "meta-label", text: label }));
    item.appendChild(createElement({ tag: "span", className: "meta-value", text: value }));
    
    return item;
  });
  
  clearAndAppend(container, nodes);
};

export const renderMiniStats = (items) => {
  const container = getElement(SELECTORS.miniStats);
  
  const nodes = items.map(({ value, label }) => {
    const wrapper = createElement({ tag: "div", className: "mini-stat" });
    wrapper.appendChild(createElement({ tag: "strong", text: value }));
    wrapper.appendChild(createElement({ tag: "span", text: label }));
    return wrapper;
  });
  
  clearAndAppend(container, nodes);
};

export const renderAbout = ({ about, interests, strengths }) => {
  const aboutSummary = getElement(SELECTORS.aboutSummary);
  if (aboutSummary) {
    aboutSummary.textContent = about;
  }
  
  const interestContainer = getElement(SELECTORS.interestTags);
  clearAndAppend(
    interestContainer,
    interests.map((item) => createElement({ tag: "span", className: "tag", text: item }))
  );
  
  const strengthContainer = getElement(SELECTORS.strengthList);
  clearAndAppend(
    strengthContainer,
    strengths.map((item) => {
      const li = createElement({ tag: "li", text: item });
      return li;
    })
  );
};

export const renderExperience = (items) => {
  const container = getElement(SELECTORS.experienceList);
  
  const nodes = items.map((item) => {
    const card = createElement({ tag: "article", className: "timeline-card reveal" });
    const meta = createElement({ tag: "div", className: "item-meta" });
    
    meta.appendChild(createElement({ tag: "span", text: item.type }));
    meta.appendChild(createElement({ tag: "span", text: item.organization }));
    meta.appendChild(createElement({ tag: "span", text: item.period }));
    
    card.appendChild(meta);
    card.appendChild(createElement({ tag: "h3", className: "item-title", text: item.title }));
    card.appendChild(createElement({ tag: "p", className: "item-subtitle", text: item.subtitle }));
    card.appendChild(createElement({ tag: "p", className: "card-text", text: item.description }));
    
    const tagList = createElement({ tag: "div", className: "card-tags" });
    item.tags.forEach((tag) => {
      tagList.appendChild(createElement({ tag: "span", className: "tag", text: tag }));
    });
    card.appendChild(tagList);
    
    return card;
  });
  
  clearAndAppend(container, nodes);
};

const createCardBase = ({ title, summary, tags, footer, imageLabel, className }) => {
  const card = createElement({ tag: "article", className });
  
  if (imageLabel) {
    card.appendChild(createElement({ tag: "div", className: "card-image", text: imageLabel }));
  }
  
  const body = createElement({ tag: "div", className: "card-body" });
  body.appendChild(createElement({ tag: "h3", text: title }));
  body.appendChild(createElement({ tag: "p", className: "card-text", text: summary }));
  
  const tagList = createElement({ tag: "div", className: "card-tags" });
  tags.forEach((tag) => tagList.appendChild(createElement({ tag: "span", className: "tag", text: tag })));
  body.appendChild(tagList);
  
  if (footer) {
    body.appendChild(footer);
  }
  
  card.appendChild(body);
  return card;
};

export const renderProjects = (items, onOpen) => {
  const container = getElement(SELECTORS.projectList);
  
  const nodes = items.map((item) => {
    const footer = createElement({ tag: "div", className: "card-footer" });
    const link = createElement({
      tag: "button",
      className: "card-link",
      text: "View More",
      attrs: { type: "button" }
    });
    
    link.addEventListener("click", () => onOpen(item));
    footer.appendChild(link);
    
    return createCardBase({
      title: item.title,
      summary: item.summary,
      tags: item.tags,
      footer,
      imageLabel: item.imageLabel,
      className: "project-card reveal"
    });
  });
  
  clearAndAppend(container, nodes);
};

export const renderHighlights = (items) => {
  const container = getElement(SELECTORS.highlightList);
  
  const nodes = items.map((item) => {
    const card = createElement({ tag: "article", className: "highlight-card reveal" });
    card.appendChild(createElement({ tag: "h3", text: item.value }));
    card.appendChild(createElement({ tag: "p", text: item.label }));
    return card;
  });
  
  clearAndAppend(container, nodes);
};

export const renderPostFilters = (posts, activeCategory, onSelect) => {
  const container = getElement(SELECTORS.postFilters);
  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  
  const buttons = categories.map((category) => {
    const button = createElement({
      tag: "button",
      className: `filter-button${category === activeCategory ? " active" : ""}`,
      text: category,
      attrs: { type: "button", "data-category": category }
    });
    
    button.addEventListener("click", () => onSelect(category));
    return button;
  });
  
  clearAndAppend(container, buttons);
};

export const renderPosts = (posts, onOpen) => {
  const container = getElement(SELECTORS.postList);
  
  const nodes = posts.map((post) => {
    const footer = createElement({ tag: "div", className: "card-footer" });
    const button = createElement({
      tag: "button",
      className: "card-link",
      text: "Read Note",
      attrs: { type: "button" }
    });
    
    button.addEventListener("click", () => onOpen(post));
    footer.appendChild(button);
    
    const card = createCardBase({
      title: post.title,
      summary: post.excerpt,
      tags: [post.category],
      footer,
      className: "post-card reveal"
    });
    
    const body = card.querySelector(".card-body");
    const meta = createElement({ tag: "div", className: "post-meta" });
    meta.appendChild(createElement({ tag: "span", text: formatDate(post.date) }));
    meta.appendChild(createElement({ tag: "span", text: post.category }));
    body.insertBefore(meta, body.firstChild);
    
    return card;
  });
  
  clearAndAppend(container, nodes);
};

export const renderContactLinks = (items) => {
  const container = getElement(SELECTORS.contactLinks);
  
  const nodes = items.map((item) => {
    const link = createElement({
      tag: "a",
      className: "contact-link",
      attrs: { href: item.href, target: item.href.startsWith("http") ? "_blank" : "_self" }
    });
    
    const textGroup = createElement({ tag: "div" });
    textGroup.appendChild(createElement({ tag: "span", className: "contact-label", text: item.label }));
    textGroup.appendChild(createElement({ tag: "span", className: "contact-value", text: item.value }));
    
    const arrow = createElement({ tag: "span", text: "↗" });
    
    link.appendChild(textGroup);
    link.appendChild(arrow);
    
    return link;
  });
  
  clearAndAppend(container, nodes);
};

export const setCurrentYear = () => {
  const yearNode = getElement(SELECTORS.currentYear);
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
};

export const setupNavigationBehavior = () => {
  const toggle = getElement(SELECTORS.navToggle);
  const nav = getElement(SELECTORS.siteNav);
  const navLinks = getElements(".nav-link");
  const heroMenuButton = getElement(SELECTORS.heroMenuButton);

  if (!toggle || !nav) return;

  const toggleMenu = () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  toggle.addEventListener("click", toggleMenu);

  if (heroMenuButton) {
    heroMenuButton.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 820px)").matches) {
        toggleMenu();
      } else {
        document.querySelector(".site-header")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
};

export const setupActiveSectionObserver = () => {
  const sections = getElements("main section[id]");
  const navLinks = getElements(".nav-link");
  
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      
      if (!visibleEntry) return;
      
      const sectionId = visibleEntry.target.id;
      
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("data-section-link") === sectionId;
        link.classList.toggle("active", isActive);
      });
    },
    {
      rootMargin: "-25% 0px -55% 0px",
      threshold: [0.2, 0.4, 0.7]
    }
  );
  
  sections.forEach((section) => observer.observe(section));
};

export const setupRevealObserver = () => {
  const revealItems = getElements(SELECTORS.reveal);
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );
  
  revealItems.forEach((item) => observer.observe(item));
};

export const openModal = ({ title, subtitle, body }) => {
  const template = getElement("#modal-template");
  if (!template) {
    return;
  }

  const fragment = template.content.cloneNode(true);
  const overlay = fragment.querySelector("[data-modal-overlay]");
  const content = fragment.querySelector(".modal-content");
  
  const heading = createElement({ tag: "h3", text: title, attrs: { id: "modal-title" } });
  content.appendChild(heading);
  
  if (subtitle) {
    content.appendChild(createElement({ tag: "p", className: "item-subtitle", text: subtitle }));
  }
  
  content.appendChild(createElement({ tag: "p", text: body }));
  
  const closeModal = () => {
    overlay.remove();
    document.body.style.overflow = "";
  };
  
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });
  
  overlay.querySelector("[data-close-modal]").addEventListener("click", closeModal);
  
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape" && document.body.contains(overlay)) {
        closeModal();
      }
    },
    { once: true }
  );
  
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
};
