import { Modal } from "react-bootstrap";
import "./watchlistModal.css";
import styles from "./WatchlistModal.module.css";
import type { Item, WatchlistModalProps } from "../../types/watchlist.interface";
import { useState } from "react";
import { data } from "../../data";
import Star from "../../assets/svgs/Star";
import CheckCircle from "../../assets/svgs/CheckCircle";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { addWatchlist, removeWatchlist } from "../../slices/watchlistSlice";
import type { RootState } from "../../store/store";

const WatchlistModal = ({ show, onHide }: WatchlistModalProps) => {
  const [searchFont, setSearchFont] = useState("");
  const [addToItem, setAddToItem] = useState<Item[]>([])
    const dispatch = useDispatch();
    const watchlist = useSelector((state: RootState) => state.watchlist.items)

    console.log(watchlist, "watch list")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFont(e.target.value);
  };

  const isPresent = (id: string) => {
    return watchlist?.filter((ele) => ele.item.id == id)
  }

  const isPresentInState = (id: string) => {
    return addToItem?.filter((ele) => ele.item.id == id)
  }

  const handleAddorRemoveChecklist = (items: Item) => {
    if(isPresent(items.item.id)?.length > 0){
      dispatch(removeWatchlist(items.item.id))
    } else {
      setAddToItem(prevItems => [ items, ...prevItems])
    }
  }

  console.log(addToItem,"add to item")

  const addToWatchlist = () =>{

      addToItem.forEach(item => {
      dispatch(addWatchlist(item))
});

  }

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
                <div onClick={() => {handleAddorRemoveChecklist(items)}} key={items.item.id} className={styles.trending_individual}>
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
                    {(isPresent(items.item.id)?.length > 0 || isPresentInState(items.item.id)?.length > 0)  && <Star /> }
                    <div className={styles.radio_btn_mock}>
                      {(isPresent(items.item.id)?.length > 0 || isPresentInState(items.item.id)?.length > 0) && <CheckCircle />}  
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.btn_section}>
            <ButtonComponent onClick={addToWatchlist} isRound={false} variant={"light"} >Add to Watchlist</ButtonComponent>

        </div>
      </div>
    </Modal>
  );
};

export default WatchlistModal;
