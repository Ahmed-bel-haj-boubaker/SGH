import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomComponent = ({ href, className, children }) => {
  const LinkStyles =
    "text-[15px] font-medium text-gray-600 cursor-pointer list-none";

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${LinkStyles} text-primary-green`
          : `${className} ${LinkStyles}`
      }
    >
      {children}
    </NavLink>
  );
};

CustomComponent.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const Badges = ({ color, children }) => {
  return (
    <div
      className={`w-[18px] h-[18px] ${color} rounded-full flex justify-center text-white `}
    >
      {children}
    </div>
  );
};

Badges.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const CustomLink = ({ href, className, children }) => {
  const LinkStyles =
    "text-[15px] font-medium text-white cursor-pointer list-none transition-colors duration-300 hover:text-primary hover:underline";

  return (
    <NavLink to={href} className={`${className} ${LinkStyles}`}>
      {children}
    </NavLink>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;
  const classes = `font-medium ${
    level === 1
      ? "text-[80px] font-[600] text-white"
      : level === 2
      ? "text-[40px] font-[700] text-primaryy"
      : level === 3
      ? "text-[28px] font-[700] text-primaryy"
      : level === 4
      ? "text-[24px] font-[600] text-primaryy"
      : level === 5
      ? "text-[22px] font-[600] text-white"
      : "text-[18px] font-[500] text-black"
  }`;

  return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};
Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};

const BodyOne = ({ children, className }) => {
  const classes = "text-lg font-normal text-white mb-4";
  return <p className={`${className} ${classes}`}>{children}</p>;
};

const BodyTwo = ({ children }) => {
  return <p className="text-base font-semibold text-white">{children}</p>;
};

const Caption = ({ children }) => {
  return <p className="text-sm font-normal text-white">{children}</p>;
};

const Span = ({ children }) => {
  return <span className="text-xs font-semibold text-white">{children}</span>;
};

BodyTwo.propTypes = {
  children: PropTypes.node.isRequired,
};
Caption.propTypes = {
  children: PropTypes.node.isRequired,
};
Span.propTypes = {
  children: PropTypes.node.isRequired,
};
BodyOne.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export {
  CustomComponent,
  Badges,
  CustomLink,
  Title,
  BodyOne,
  Caption,
  Span,
  BodyTwo,
};
