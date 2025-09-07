import type { PaginationProps } from "../../types/pagination.interface";
import styles from "./PaginationComponent.module.css"

const PaginationComponent = ({ limitPerPage, upperLimit, lowerLimit, totalItems, totalPages, handlePrev, handleNext}: PaginationProps) => {
  
    return (
    <div className={styles.pagination_container}>
      <p className={styles.left_section}>{lowerLimit + 1} - {upperLimit} of {totalItems} results</p>
      <div className={styles.right_section}>
        <p>{upperLimit/limitPerPage} of {totalPages} pages</p>
        <p className={styles.pagination_btn} onClick={handlePrev}>Prev</p>
        <p className={styles.pagination_btn} onClick={handleNext}>Next</p>
      </div>
    </div>
  );
};

export default PaginationComponent;
