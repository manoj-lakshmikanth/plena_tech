import styles from "./WatchlistComponent.module.css";
import Refresh from "../../assets/svgs/Refresh";
import Star from "../../assets/svgs/Star";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import TableComponent from "../TableComponent/TableComponent";
import { data } from "../../data";
import { useState } from "react";
import WatchlistModal from "../WatchlistModal/WatchlistModal";

const WatchlistComponent = () => {
  const coinsData = data?.coins;

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false)};
  const handleShow = () => setShow(true);

  return (
    <div className={styles.watchlist_container}>
      <div className={styles.heading_section}>
        <div className={styles.left_heading}>
          <Star />
          <p>Watchlist</p>
        </div>
        <div className={styles.right_heading}>
          <ButtonComponent isRound={false} Icon={Refresh} variant={"dark"}>
            Refresh Prices
          </ButtonComponent>
          <ButtonComponent onClick={handleShow} isRound={false} variant={"light"}>
            + Add Token
          </ButtonComponent>
        </div>
      </div>
      <TableComponent coinsData={coinsData} />
      <WatchlistModal show={show} onHide={handleClose} />
    </div>
  );
};

export default WatchlistComponent;
