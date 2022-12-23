import NavBar from "../components/NavBar";
import { useAccount } from "wagmi";

const Home = () => {
  const { address, isConnected, status } = useAccount();
  return (
    <div id="Home">
      <NavBar />
      <div id="content-container">
        {isConnected && (
          <>
            <div id="connected">
              {status} <div id="dot"></div>
            </div>
            <span id="address">{address}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
