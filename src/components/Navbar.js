import React from "react";
import { createUseStyles } from "react-jss";

export const NavBar = () => {
    const styles = style();
    return (
        <div className={styles.navbar}>
            <ul className={styles.navbar2}>
                <li className={styles.navbar3}>
                    <a href="/" className={styles.link}>
                        Profile
                    </a>
                </li>
                <li className={styles.navbar3}>
                    <a href="Project" className={styles.link}>
                        Project
                    </a>
                </li>
                <li className={styles.navbar3}>
                    <a href="Skill" className={styles.link}>
                        Skill
                    </a>
                </li>
            </ul>
        </div>
    );
};
const style = createUseStyles({
    navbar: {
        height: "40px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        background: "Black"
    },
    navbar2: {
        listStyle: "none",
        position: "relative",
        float: "right",
    },
    navbar3: {
        display: "inline-block",
        marginRight: "7px"
    },
    link: {
        color: "white"
    }
});

export default NavBar;