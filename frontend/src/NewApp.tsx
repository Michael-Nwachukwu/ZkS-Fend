import { useState, useEffect } from 'react'
import initializeZKsync from '../scripts/zksync';
import DeployForm from './components/DeployForm';

function App() {
  const [addresses, setAddresses] = useState(null);

  useEffect(() => {
    async function fetchAddresses() {
      const result = await initializeZKsync();
      setAddresses(result);
    }
    fetchAddresses();
  }, []);

  return (
    <>
      <div className="App">
        <h1>ZKsync Contract Addresses</h1>
        {addresses ? (
          <pre>{JSON.stringify(addresses, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <DeployForm />
    </>
  );
}

export default App
