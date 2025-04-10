export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <p>Follow us on:</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" className="text-blue-400">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-400">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-400">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
