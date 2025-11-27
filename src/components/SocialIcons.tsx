import { cn } from "@/lib/utils";

type SocialType = "instagram" | "whatsapp";

const SOCIAL_CONFIG: Record<
  SocialType,
  { href: string; label: string; iconSrc: string }
> = {
  instagram: {
    href: "https://instagram.com/brechodapitanga",
    label: "Abrir Instagram",
    iconSrc: "/instagram.svg",
  },
  whatsapp: {
    href: "https://wa.me/5541997132569",
    label: "Conversar no WhatsApp",
    iconSrc: "/whatsapp.svg",
  },
};

interface SocialIconLinkProps {
  type: SocialType;
  className?: string;
  iconClassName?: string;
}

const SocialIconLink = ({
  type,
  className,
  iconClassName,
}: SocialIconLinkProps) => {
  const config = SOCIAL_CONFIG[type];

  return (
    <a
      href={config.href}
      target="_blank"
      rel="noreferrer"
      aria-label={config.label}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
        className,
      )}
    >
      <img
        src={config.iconSrc}
        alt=""
        aria-hidden="true"
        className={cn("h-5 w-5", iconClassName)}
      />
    </a>
  );
};

interface FloatingSocialIconsProps {
  visible: boolean;
}

export const FloatingSocialIcons = ({ visible }: FloatingSocialIconsProps) => {
  if (!visible) return null;

  return (
    <>
      <SocialIconLink type="instagram" className="fixed top-4 left-4 z-40" />
      <SocialIconLink type="whatsapp" className="fixed top-4 right-4 z-40" />
    </>
  );
};

export const NavbarSocialIcons = () => (
  <div className="hidden md:flex items-center gap-3">
    <SocialIconLink
      type="instagram"
      className="h-10 w-10 border-transparent bg-white/15 hover:bg-white/25"
    />
    <SocialIconLink
      type="whatsapp"
      className="h-10 w-10 border-transparent bg-white/15 hover:bg-white/25"
    />
  </div>
);
