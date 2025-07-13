export default function SocialIcon({ href, label, children }) {
  return (
    <a
      href={ href }
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition"
      aria-label={ label }
      title={ label }>

      { children }
    </a>
  );
}
