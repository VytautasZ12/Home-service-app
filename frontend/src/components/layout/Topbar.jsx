import styles from "./Topbar.module.css";

const Topbar = () => {
  const links = [
    {
      href: "#",
      label: "Home",
    },
    {
      href: "#",
      label: "Services",
    },
    {
      href: "#",
      label: "About Us",
    },
  ];
  return (
    <div className={styles.topbar}>
      <div className={styles.leftside}>
        <img src="./logo.svg" alt="logo" />
        <nav className={styles.naigation}>
          {links.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className={styles.rightside}>
        {/* <Button>Login / Sign Up</Button> */}
      </div>
    </div>
  );
};

export default Topbar;
