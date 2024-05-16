const Footer = () => {
  return (
    <footer className="text-gray-800  py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">Your Company</div>
        </div>
        <div className="mt-4 text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
