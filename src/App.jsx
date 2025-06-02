import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import your section components
import SidebarNav from './components/SidebarNav';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

/**
 * MainContent component renders all the portfolio sections.
 * It also handles smooth scrolling to sections based on URL hash.
 */
function MainContent() {
  const location = useLocation(); // Hook to get the current URL's location object

  // useEffect to handle scrolling to a specific section when the URL hash changes
  React.useEffect(() => {
    if (location.hash) {
      // Get the ID from the hash (e.g., "#about" becomes "about")
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        // Scroll to the element smoothly
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If there's no hash, scroll to the top of the page (or the 'home' section)
      window.scrollTo(0, 0);
    }
  }, [location]); // Dependency array: re-run this effect whenever 'location' object changes

  return (
    // This div represents the main scrollable content area, offset by the sidebar width
    <div className="flex-1 ml-64 p-8">
      {/* Each <section> corresponds to a major part of your portfolio.
          The 'id' attribute is crucial for anchor linking from the SidebarNav.
          'min-h-screen' ensures each section takes at least the full viewport height,
          which is good for single-page scrolling layouts.
          'py-16' adds vertical padding for spacing between sections.
      */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <HeroSection />
      </section>

      <section id="about" className="min-h-screen py-16">
        <AboutMe />
      </section>

      <section id="resume" className="min-h-screen py-16">
        <Resume />
      </section>

      <section id="portfolio" className="min-h-screen py-16">
        <Portfolio />
      </section>

      <section id="testimonials" className="min-h-screen py-16">
        <Testimonials />
      </section>

      <section id="contact" className="min-h-screen py-16">
        <Contact />
      </section>

      {/* You could add a Footer component here if desired */}
    </div>
  );
}

/**
 * The main App component sets up the React Router and the overall layout.
 */
const App = () => {
  return (
    // BrowserRouter (aliased as Router) is the top-level component for routing
    <Router>
      {/* Flex container for the entire app: sidebar fixed on left, content scrolls on right */}
      <div className="flex bg-gray-50 min-h-screen">
        {/* Sidebar Navigation:
            It's placed outside the <Routes> so it's always rendered and visible,
            regardless of the specific route being displayed.
        */}
        <SidebarNav />

        {/* Routes component:
            This is where you define the different paths (URLs) for your application
            and which component should be rendered for each path.
            <Routes> ensures only one <Route> is rendered at a time based on the URL.
        */}
        <Routes>
          {/*
            This single Route handles the root path ("/").
            When the URL is "/", it renders the 'MainContent' component.
            The 'MainContent' component then renders all the sections of your
            single-page portfolio.
            The `useLocation` hook within `MainContent` handles the scrolling
            to specific sections if a hash (e.g., #about) is present in the URL.
          */}
          <Route path="/" element={<MainContent />} />

          {/*
            If in the future you decide to have truly separate pages (e.g., a dedicated
            blog page, or individual project detail pages), you would add more
            <Route> components here. For example:
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetailPage />} />
          */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
