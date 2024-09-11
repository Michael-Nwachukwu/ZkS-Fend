import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MemoZksynclogo from "@/icons/Zksynclogo";
import { ArrowLeft } from "lucide-react";

export default function TestnetTokenTransfer() {
  return (
    <div className="min-h-screen  text-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center mb-6">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Go back</span>
          </Button>
          <h1 className="text-xl font-semibold">Transfer testnet tokens</h1>
        </header>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Claim testnet tokens</span>
            <span className="text-sm font-medium">Transfer tokens</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "50%" }}></div>
          </div>
        </div>

        <Card className="bg-transparent border-2 border-[#25252D]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md text-[#FFFFFF] font-semibold">
              ZKSync faucet
            </CardTitle>
            <MemoZksynclogo className="w-20 h-8" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-[#8E8EA2] mb-4">
              Visit the ZKSync faucet to claim faucet and come back to transfer
              tokens
            </p>
            <div className="flex justify-end space-x-3 items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Visit faucet
              </a>
              <Button className="bg-[#3742DD] hover:bg-[#3742DD]">
                I've claimed
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
