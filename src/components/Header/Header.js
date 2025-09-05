import React from "react";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";




export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <p>MymovieApp</p>
      </div>
      <div>
        <nav>
          <ul>
            <li>séries</li>
            <li>films</li>
          </ul>
        </nav>
      </div>
      <input type="text" placeholder="rechercher un titre..."/>
      <div>
        <FontAwesomeIcon icon={faUser}/>
      </div>
    </header>
  );
}
