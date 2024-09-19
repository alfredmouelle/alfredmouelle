export const Footer = () => {
  return (
    <footer className="h-20 py-4">
      <div className="container">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Alfred Mouelle. Tous droit réservé.
        </p>
      </div>
    </footer>
  );
};
