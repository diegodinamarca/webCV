document.documentElement.classList.add("js");

import {
  NAV_ITEMS,
  PROFILE,
  EXPERIENCE,
  PROJECTS,
  HIGHLIGHTS,
  POSTS
} from "./data.js";

import {
  renderNav,
  renderHero,
  renderHeroMeta,
  renderMiniStats,
  renderAbout,
  renderExperience,
  renderProjects,
  renderHighlights,
  renderPostFilters,
  renderPosts,
  renderContactLinks,
  setCurrentYear,
  setupNavigationBehavior,
  setupActiveSectionObserver,
  setupRevealObserver,
  openModal
} from "./ui.js";

const state = {
  activePostCategory: "All"
};

const getFilteredPosts = () =>
  state.activePostCategory === "All"
  ? POSTS
  : POSTS.filter((post) => post.category === state.activePostCategory);
  
  const handleProjectOpen = (project) => {
    openModal({
      title: project.title,
      subtitle: project.tags.join(" · "),
      body: project.details
    });
  };
  
  const handlePostOpen = (post) => {
    openModal({
      title: post.title,
      subtitle: `${post.category} · ${post.date}`,
      body: post.content
    });
  };
  
  const handlePostFilterChange = (category) => {
    state.activePostCategory = category;
    renderPostFilters(POSTS, state.activePostCategory, handlePostFilterChange);
    renderPosts(getFilteredPosts(), handlePostOpen);
    setupRevealObserver();
  };
  
  const initContent = () => {
    renderNav(NAV_ITEMS);
    renderHero(PROFILE);
    renderHeroMeta(PROFILE.heroMeta);
    renderMiniStats(PROFILE.miniStats);
    renderAbout(PROFILE);
    renderExperience(EXPERIENCE);
    renderProjects(PROJECTS, handleProjectOpen);
    renderHighlights(HIGHLIGHTS);
    renderPostFilters(POSTS, state.activePostCategory, handlePostFilterChange);
    renderPosts(getFilteredPosts(), handlePostOpen);
    renderContactLinks(PROFILE.contact);
    setCurrentYear();
  };
  
  const initBehavior = () => {
    setupNavigationBehavior();
    setupActiveSectionObserver();
    setupRevealObserver();
  };
  
  const main = () => {
    initContent();
    initBehavior();
  };
  
  document.addEventListener("DOMContentLoaded", main);