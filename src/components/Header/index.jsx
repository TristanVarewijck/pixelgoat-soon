import "./Header.scss";

import Link from "../Link";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <img src="/assets/logo.svg" alt="Pixelgoat logo" />
          </li>
          <li>
            <Link
              type="--primary"
              hasIcon={true}
              icon="/assets/twitter-icon.svg"
              text="Follow us on Twitter"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
