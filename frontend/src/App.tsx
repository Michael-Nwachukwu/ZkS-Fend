import { Route, Routes } from "react-router-dom";
import Dash from "./components/Dash";
import DeployContent from "./components/DeployContent";
import FaucetContent from "./components/FaucetContent";
import TestnetTokenTransfer from "./components/testnet-token-transfer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dash />}>
        <Route path="deploy" element={<DeployContent />} />
        <Route path="faucet" element={<FaucetContent />} />
        <Route path="transfer" element={<TestnetTokenTransfer />} />
      </Route>
    </Routes>
  );
};

export default App;
