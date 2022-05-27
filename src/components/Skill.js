import React from "react";
import { createUseStyles } from "react-jss";

export const Skill = () => {


    const styles = style();
    return (
        <div>
            <ul className={styles.navbar2}>
                <li className={styles.navbar3}>
                    <p  >
                        <img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react-native/react-native.png"
                            alt="ReactNative"
                            width="30"
                            height="30"
                        />
                        ReactNative
                    </p>
                </li>
                <li className={styles.navbar3}>
                    <p  >
                        <img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                            alt="Reactjs"
                            width="30"
                            height="30"
                        />
                        Reactjs
                    </p>
                </li>
                <li className={styles.navbar3}>
                    <p  >
                        <img
                            src="https://raw.githubusercontent.com/github/explore/ccc16358ac4530c6a69b1b80c7223cd2744dea83/topics/php/php.png"
                            alt="PHP"
                            width="30"
                            height="30"
                        />
                        PHP
                    </p>
                </li>
                <li className={styles.navbar3}>
                    <p  >
                        <img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                            alt="JavaScript"
                            width="30"
                            height="30"
                        />
                        JavaScript
                    </p>
                </li>
                <li className={styles.navbar3}>
                    <p  >
                        <img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                            alt="HTML"
                            width="30"
                            height="30"
                        />
                        HTML
                    </p>
                </li>
                <li className={styles.navbar3}>
                    <p  >
                        <img
                            src="https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/laravel/laravel.png"
                            alt="Laravel"
                            width="30"
                            height="30"
                        />
                        Laravel
                    </p>
                </li>
                <li className={styles.navbar3}>
                    <p  >
                        <img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                            alt="MySQL"
                            width="30"
                            height="30"
                        />
                        MySQL
                    </p>
                </li>
                <li className={styles.navbar3}>
                    <p  >
                        <img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
                            alt="PostgreSQL"
                            width="30"
                            height="30"
                        />
                        PostgreSQL
                    </p>
                </li>
                <li className={styles.navbar3}>
                    <p  >
                        <img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                            alt="NodeJs"
                            width="30"
                            height="30"
                        />
                        NodeJs
                    </p>
                </li>
            </ul>
        </div>
    );
};

const style = createUseStyles({
    navbar2: {
        listStyle: "none",
        position: "relative",
    },
    navbar3: {
        margin: "7px",
    }
});

export default Skill;