import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavbarSocialIcons } from '@/components/SocialIcons';

interface NavbarProps {
  onVisibilityChange?: (visible: boolean) => void;
}

export const Navbar = ({ onVisibilityChange }: NavbarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    if (!isVisible) {
      setIsMenuOpen(false);
    }
  }, [isVisible]);

  useEffect(() => {
    onVisibilityChange?.(isVisible);
  }, [isVisible, onVisibilityChange]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 navbar-bg header-bg-contrast ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <NavbarSocialIcons />
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/pitanga-sticker.png"
              alt="Brechó da Pitanga"
              className="w-14 h-14 md:w-16 md:h-16"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/sobre" className="font-body font-medium header-bg-contrast hover:opacity-90 transition-opacity">
            Sobre
          </Link>
          <Link to="/contato" className="font-body font-medium header-bg-contrast hover:opacity-90 transition-opacity">
            Contato
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="flex flex-col py-4">
            <Link
              to="/sobre"
              className="px-4 py-3 font-body font-medium text-foreground hover:bg-primary/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/contato"
              className="px-4 py-3 font-body font-medium text-foreground hover:bg-primary/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
