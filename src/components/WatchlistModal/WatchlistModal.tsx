import { Modal } from "react-bootstrap";
import "./watchlistModal.css";
import styles from "./WatchlistModal.module.css";
import type { WatchlistModalProps } from "../../types/watchlist.interface";
import { useState } from "react";
import { data } from "../../data";
import Star from "../../assets/svgs/Star";
import CheckCircle from "../../assets/svgs/CheckCircle";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const WatchlistModal = ({ show, onHide }: WatchlistModalProps) => {
  const [searchFont, setSearchFont] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFont(e.target.value);
  };

  const coinData = data?.coins;

  return (
    <Modal className="watchlist-modal" centered show={show} onHide={onHide}>
      <div className={styles.watchlist_modal_container}>
        <div className={styles.input_section}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search tokens (e.g., ETH, SOL)..."
            value={searchFont}
          />
        </div>
        <div className={styles.trending_list_section}>
          <p className={styles.trending_font}>Trending</p>
          <div className={styles.trending_list_wrapper}>
            {coinData?.map((items) => {
              return (
                <div key={items.item.id} className={styles.trending_individual}>
                  <div className={styles.token_name_styles}>
                    <img
                      src={`${items.item.small}`}
                      alt="logo"
                      width={32}
                      height={32}
                    />{" "}
                    <p>
                      {items.item.name} <span>({items.item.symbol})</span>
                    </p>
                  </div>
                  <div className={styles.radio_btn_section}>
                    <Star />
                    <div className={styles.radio_btn_mock}>
                        <CheckCircle />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.btn_section}>
            <ButtonComponent isRound={false} variant={"light"} >Add to Wishlist</ButtonComponent>

        </div>
      </div>
    </Modal>
  );
};

export default WatchlistModal;
