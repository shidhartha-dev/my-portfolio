export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {year} — Built with <span className="accent">♥</span> and Next.js
        </p>
      </div>
    </footer>
  );
}
