import classNames from "classnames";

const UrlIcon = ({ className, style = {}, url }) => {
  return (
    <div
      className={classNames(styles.icon, className)}
      style={{
        maskImage: "url(${url})",
        WebkitMaskImage: "url(${url})",
        ...style,
      }}
    />
  );
};

export default UrlIcon;
