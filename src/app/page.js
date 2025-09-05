import styles from "./page.module.css";
import MediaCard from "@/components/media-card/MediaCard";

export default function Home() {
  return (
    <div className={styles.main}>
        <MediaCard/>
    </div>
  );
}
