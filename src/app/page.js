import styles from "./page.module.css";
import MediaCard from "@/components/media-card/MediaCard";
import { notFound } from "next/navigation"; 

export default function Home() {
  return (
    <div className={styles.main}>
        <MediaCard/>
    </div>
  );
}
