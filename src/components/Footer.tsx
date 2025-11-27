export const Footer = () => {
  return (
    <footer className="mt-10 border-t border-border bg-[#f0adbc]">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center gap-4 text-center">
        <img
          src="/pitanga-novo.svg"
          alt="Logotipo Brechó da Pitanga"
          className="w-8 h-auto md:w-32"
        />
        <p className="font-bold text-sm text-white">
          Feito com <span aria-hidden="true">❤️</span> por Gustavo
        </p>
      </div>
    </footer>
  );
};
