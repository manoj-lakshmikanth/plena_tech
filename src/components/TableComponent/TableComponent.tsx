import { useCallback, useState } from "react";
import styles from "./TableComponent.module.css";
import PaginationComponent from "../PaginationComponent/PaginationComponent";

const TableComponent = ({ coinsData }) => {
  const limitPerPage = 5;
  const totalItems = coinsData?.length;
  const totalPages = totalItems / limitPerPage;
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(5);

  const handlePrev = useCallback(() => {
    setUpperLimit((prev: number) => {
      if (prev !== 0 + limitPerPage) {
        return prev - 5;
      } else {
        return prev;
      }
    });

    setLowerLimit((prev: number) => {
      if (prev !== 0) {
        return prev - 5;
      } else {
        return prev;
      }
    });
  }, [limitPerPage]);


  const handleNext = useCallback(() => {
    setUpperLimit((prev: number) => {
      if (prev !== totalItems) {
        return prev + 5;
      } else {
        return prev;
      }
    });

    setLowerLimit((prev: number) => {
      if (prev !== totalItems - limitPerPage) {
        return prev + 5;
      } else {
        return prev;
      }
    });
  }, [totalItems, limitPerPage]);

  return (
    <div className={styles.table_container}>
      <table className={styles.table_section}>
        <thead>
          <tr>
            <th>Token</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Sparkline (7d)</th>
            <th>Holdings</th>
            <th>Value</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {coinsData?.slice(lowerLimit, upperLimit)?.map((items, index) => {
            return (
              <tr key={items.item.id}>
                <td className={styles.token_name_styles}>
                  <img
                    src={`${items.item.small}`}
                    alt="logo"
                    width={32}
                    height={32}
                  />{" "}
                  <p>
                    {items.item.name} <span>({items.item.symbol})</span>
                  </p>
                </td>
                <td>${items.item.data.price.toFixed(2)}</td>
                <td>
                  {(
                    items.item.data.price_change_percentage_24h.usd * 100
                  ).toFixed(2)}
                  %
                </td>
                <td>
                  <img
                    src={`${items.item.data.sparkline}`}
                    alt="sparkline"
                    width={75}
                    height={30}
                  />
                </td>
                <td>0.0</td>
                <td>0.0</td>
                <td>...</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PaginationComponent
        limitPerPage={limitPerPage}
        upperLimit={upperLimit}
        lowerLimit={lowerLimit}
        totalItems={totalItems}
        totalPages={totalPages}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default TableComponent;
