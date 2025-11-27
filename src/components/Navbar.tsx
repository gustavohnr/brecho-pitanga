import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SocialIconLink } from '@/components/SocialIcons';

interface NavbarProps {
  onVisibilityChange?: (visible: boolean) => void;
}

export const Navbar = ({ onVisibilityChange }: NavbarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasHeaderLogo, setHasHeaderLogo] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const logoElement = document.getElementById('header-logo');

    if (!logoElement) {
      setHasHeaderLogo(false);
      setIsHeaderVisible(false);
      return;
    }

    setHasHeaderLogo(true);
    setIsHeaderVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeaderVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(logoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        setIsVisible(hasHeaderLogo ? !isHeaderVisible : true);
      } else {
        setIsVisible(window.scrollY > 100);
      }
    };

    handleVisibility();
    window.addEventListener('scroll', handleVisibility);
    window.addEventListener('resize', handleVisibility);

    return () => {
      window.removeEventListener('scroll', handleVisibility);
      window.removeEventListener('resize', handleVisibility);
    };
  }, [hasHeaderLogo, isHeaderVisible]);

  useEffect(() => {
    onVisibilityChange?.(isVisible);
  }, [isVisible, onVisibilityChange]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 navbar-bg header-bg-contrast ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-1 justify-start">
            <SocialIconLink
              type="instagram"
              unstyled
              iconClassName="h-7 w-7"
            />
          </div>
          <Link to="/" className="flex-shrink-0">
            <img
              src="/pitanga-sticker.png"
              alt="Brechó da Pitanga"
              className="w-14 h-14 md:w-16 md:h-16"
            />
          </Link>
          <div className="flex flex-1 justify-end">
            <SocialIconLink
              type="whatsapp"
              unstyled
              iconClassName="h-7 w-7"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
