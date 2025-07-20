export default function Header({ scrolled }) {
  const dynamicClasses = scrolled ? 'bg-[#111111] shadow-md text-gray-300' : 'text-gray-200';

  return (
    <header className={`fixed top-0 left-0 w-full px-10 z-50 transition-colors duration-300 ${ dynamicClasses }`}>
      <div className="max-w-6xl mx-auto py-3 flex justify-between items-center">
        <a href="https://serhmel.github.io/portfolio/" className="text-xl uppercase cursor-pointer">
          Serhiy Melnychuk
        </a>
      </div>
    </header>
  );
}
