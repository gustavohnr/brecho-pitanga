export const Footer = () => {
  return (
    <footer className="mt-10 border-t border-border bg-[#f0adbc]">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center text-center">
        <img
          src="/pitanga-novo.svg"
          alt="Logotipo Pitanga Brecho"
          className="w-16 h-auto md:w-24 mb-3"
        />
        <p className="font-bold text-sm text-white">
          Feito com <span aria-hidden="true">❤️</span> por Gustavo
        </p>
      </div>
    </footer>
  );
};
