
import React from "react";
import NavBar from "../component/NavBar";
import styles from "./News.module.css";

export default function News() {
  return (
    <div>
      <NavBar />
      <div className={styles.tech}></div>
      <div className={styles.techPost}></div>
      <div className={styles.breakingNews}>
        <h1 className={styles.heading}>
          <i className="fa-solid fa-fire"></i> Breaking News

        </h1>
        <div className={styles.breaking_news_post}>
          <ul className={styles.breaking_list}>
            <li className={styles.breaking}>ChatGpt</li>
            <li className={styles.breaking}>World News </li>
            <li className={styles.breaking}>Bitcoin News </li>
            <li className={styles.breaking}>India </li>
            <li className={styles.breaking}>defence </li>
            <li className={styles.breaking}>grovent exam </li>{" "}
            <li className={styles.breaking}>Share market </li>
            <li className={styles.breaking}>forign affairs </li>
            <li className={styles.breaking}>current news </li>{" "}
            <li className={styles.breaking}>global summits </li>
            <li className={styles.breaking}> </li>
            <li className={styles.breaking}>Bitcoin News </li>{" "}
            <li className={styles.breaking}>ChatGpt </li>
            <li className={styles.breaking}>World News </li>
            <li className={styles.breaking}>Bitcoin News </li>{" "}
            <li className={styles.breaking}>ChatGpt </li>
            <li className={styles.breaking}>World News </li>
            <li className={styles.breaking}>Bitcoin News </li>
            <li className={styles.breaking}>Bitcoin News </li>{" "}
            <li className={styles.breaking}>ChatGpt </li>
            <li className={styles.breaking}>World News </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
