/* eslint-disable react/prop-types */
import styles from "./EmptyListPostMessage.module.css";
const EmptyListPostMessage = () => {
  return (
    <center>
      <h2 className={styles.welcomeMessage}>You Have not Posted Yet</h2>
    </center>
  );
};
export default EmptyListPostMessage;
