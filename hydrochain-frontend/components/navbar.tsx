import { Link } from "@chakra-ui/react";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className="navbar">
        <div className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/#">
                New Blog
            </Link>
        </div>
        </nav>
    );
}