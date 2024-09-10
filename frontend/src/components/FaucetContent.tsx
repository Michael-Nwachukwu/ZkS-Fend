import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function TestnetFaucet() {
  const [address, setAddress] = useState("");

  const handleSendTokens = () => {
    // Implement token sending logic here
    console.log("Sending tokens to:", address);
  };

  return (
    <div className="text-gray-100 p-4 flex flex-col items-center justify-center">
      <Card className="w-full bg-transparent max-w-xl  border-[#25252D]">
        <CardContent className=" bg-transparent p-6">
          <h2 className="text-base font-semibold text-[#FFFFFF]  mb-2">
            Transfer testnet tokens
          </h2>
          <p className="text-sm text-[#8E8EA2] mb-4">
            Enter your EVM wallet address to collect testnet tokens for
            development
          </p>

          <div className="bg-transparent rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl text-[#FFFFFF] font-bold">
                0.067836
              </span>
              <span className="text-sm bg-[#25252D] text-[#F1F1F1] px-2 py-1 rounded">
                ×ETH
              </span>
            </div>
            <span className="text-sm text-gray-400">≈ $400.56</span>
          </div>

          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Enter evm address to send tokens"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="flex-grow bg-transparent border-gray-600 text-gray-100"
            />
            <Button
              onClick={handleSendTokens}
              className="bg-blue-600 hover:bg-blue-700">
              Send tokens
            </Button>
          </div>
        </CardContent>

        <CardFooter className="bg-transparent text-[#F1F1F1] border-t border-gray-700 p-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Need testnet tokens?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["ZKSync faucet", "Alchemy faucet", "QuickNode faucet"].map(
                (faucet, index) => (
                  <Card key={index} className="bg-gray-700 border-gray-600">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{faucet}</h4>
                      <p className="text-sm text-gray-400 mb-2">
                        Claim 0.2 ETH every 24h
                      </p>
                      <a
                        href="#"
                        className="text-blue-400 hover:text-blue-300 text-sm">
                        Visit faucet
                      </a>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
