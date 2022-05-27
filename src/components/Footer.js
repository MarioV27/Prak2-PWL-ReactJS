import React from "react";
import { createUseStyles } from "react-jss";

export const Footer = () => {


    const styles = style();
    return (
        <p className={styles.footer}>Copy Right - Mario Vebriyanto - 119140179</p>
    );
};

const style = createUseStyles({
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        textAlign: "center"
    }
});

export default Footer;