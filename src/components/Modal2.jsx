import React from "react";
import styles from "@/styles/Modal.module.css";

const Modal2 = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal2} id="containerMapeoColectivo">
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal2;
