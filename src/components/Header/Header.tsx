import styles from "./Header.module.css"
import TokenLogo from "../../assets/svgs/TokenLogo";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Wallet from "../../assets/svgs/Wallet";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.logo_section}>
        <TokenLogo />
        Token Portfolio
      </div>
      <ButtonComponent isRound={true} Icon={Wallet} variant={"light"}>
        Connect Wallet
      </ButtonComponent>
    </div>
  );
};

export default Header;
