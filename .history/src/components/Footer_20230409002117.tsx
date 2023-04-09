import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Research and Development Cell</h2>
            <p className="text-gray-400 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet euismod nisl, vel ullamcorper purus tincidunt sit amet.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
            <nav className="grid gap-4">
              <Link href="/"><a className="text-gray-400 hover:text-white transition duration-150 ease-in-out">Home</a></Link>
              <Link href="/about"><a className="text-gray-400 hover:text-white transition duration-150 ease-in-out">About</a></Link>
              <Link href="/services"><a className="text-gray-400 hover:text-white transition duration-150 ease-in-out">Services</a></Link>
              <Link href="/contact"><a className="text-gray-400 hover:text-white transition duration-150 ease-in-out">Contact</a></Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="text-gray-400 leading-6">
              <li>Email: rdc@university.edu</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Main St, City, State, Zip</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-gray-400">© 2023 University. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
L