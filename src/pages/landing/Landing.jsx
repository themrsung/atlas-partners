import "../../common/skeleton-wide.css";
import "./Landing.css";

import { default as logo } from "../../resources/Light_AP.svg";
import { NavigationBox } from "../../common/NavigationBox";

export const Landing = () => (
  <div className="wrapper">
    <div className="header">
      <img className="header-logo" src={logo} />
      <NavigationBox currentPage="landing" />
    </div>
  </div>
);
