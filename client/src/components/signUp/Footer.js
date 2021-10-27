const Footer = () => {
  return (
    <footer className="bg-white w-full justify-center items-center py-3  mb-auto lg:flex hidden">
      <ul className="md:flex flex-row text-xs hidden">
        <li className="flex flex-row">
          <img
            src="./Assets/linkedinfooter.svg"
            className="w-12"
            alt="image"
          ></img>
          <span className="ml-1 opacity-60">© 2021</span>
        </li>
        <li>
          <a href="###" className="ml-2 opacity-60">
            About
          </a>
        </li>
        <li>
          <a href="###" className="ml-2 opacity-60">
            Accessibility
          </a>
        </li>
        <li>
          <a href="###" className="ml-2 opacity-60">
            User Agreement
          </a>
        </li>
        <li>
          <a href="###" className="ml-2 opacity-60">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="###" className="ml-2 opacity-60">
            Cookie Policy
          </a>
        </li>
        <li>
          <a href="###" className="ml-2 opacity-60">
            Copyright Policy
          </a>
        </li>
        <li>
          <a href="###" className="ml-2 opacity-60">
            Brand Policy
          </a>
        </li>
        <li>
          <a href="###" className="ml-2 opacity-60">
            Guest Controls
          </a>
        </li>
        <li>
          <a href="###" className="ml-2 opacity-60">
            Community Guidelines
          </a>
        </li>
        <li>
          <select className="bg-white ml-2 opacity-60">
            <option>Language</option>
            <option>Hindi</option>
            <option>Malayalam</option>
          </select>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
