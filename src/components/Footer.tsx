export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border bg-[#f0adbc]">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center gap-4 text-center">
        <img
          src="/pitanga-logo.svg"
          alt="Brechó da Pitanga"
          className="w-36 h-auto"
        />
        <p className="font-body text-sm text-white">
          Feito com <span aria-hidden="true">❤️</span> por Gustavo
        </p>
      </div>
    </footer>
  );
};
