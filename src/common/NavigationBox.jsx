import "./NavigationBox.css";

export const NavigationBox = ({ children, currentPage }) => {
  return <div className="nav-box">{currentPage}</div>;
};
