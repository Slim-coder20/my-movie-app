import styles from "./page.module.css";
import { notFound } from "next/navigation"; 
import Popular from "@/components/popular/Popular";

export default function Home() {
  return (
    <div className={styles.main}>
        <Popular />
    </div>
  );
}
