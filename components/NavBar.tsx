import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ConnectButtonProps } from "@rainbow-me/rainbowkit/dist/components/ConnectButton/ConnectButton";
const NavBar = () => {
  return (
    <div id="Navbar">
      <div id="logo">Logo here</div>
      <div id="Connect_button">
        <ConnectButton
          accountStatus={"full"}
          chainStatus="full"
          label="connect wallet"
          showBalance={true}
        />
      </div>
    </div>
  );
};

export default NavBar;
