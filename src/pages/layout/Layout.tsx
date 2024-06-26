import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import website from "../../assets/website.png";
import questionMark from "../../assets/github.svg"; 

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>OPEZY</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            
                            <li className={styles.headerNavLeftMargin}>
                                <a href="https://github.com/ankithreddypati/opezy" target={"_blank"} title="Github repository link">
                                    <img
                                        src={github}
                                        alt="Github logo"
                                        aria-label="Link to github repository"
                                        // width="20px"
                                        // height="20px"
                                        className={styles.githubLogo}
                                    />
                                </a>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <a href="https://linkedin.com/in/ankithreddypati" target={"_blank"} title="Linkedin link">
                                    <img
                                        src={linkedin}
                                        alt="Github logo"
                                        aria-label="Link to github repository"
                                      
                                        className={styles.linkedinlogo}
                                    />
                                </a>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <a href="https://ankithreddy.me" target={"_blank"} title="Portfolio link">
                                    <img
                                        src={website}
                                        alt="Github logo"
                                        aria-label="Link to github repository"
                                        
                                        className={styles.websiteLogo}
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Built for Microsoft Developers AI Learning Hackathon with Cosmos DB MongoDB vCore + Azure OpenAI</h4>

                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
