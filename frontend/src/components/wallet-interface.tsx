import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MemoAvax from "@/icons/Avax";
import MemoDepositIcon from "@/icons/DepositIcon";
import MemoSolana from "@/icons/Solana";
import { useNavigate } from "react-router-dom";

const transactions = [
  {
    date: "23rd Sept, 2024",
    type: "Deposit",
    amount: "0.00234 ETH",
    value: "≈ $ 5.00",
    status: "Completed",
    icon: MemoAvax,
  },
  {
    date: "23rd Sept, 2024",
    type: "Transfer",
    amount: "450,002 SOL",
    value: "≈ $ 4,506.00",
    status: "Pending",
    icon: MemoSolana,
  },
  {
    date: "23rd Sept, 2024",
    type: "Transfer",
    amount: "450,002 SOL",
    value: "≈ $ 4,506.00",
    status: "Completed",
    icon: MemoSolana,
  },
  {
    date: "23rd Sept, 2024",
    type: "Transfer",
    amount: "450,002 SOL",
    value: "≈ $ 4,506.00",
    status: "Failed",
    icon: MemoSolana,
  },
  {
    date: "23rd Sept, 2024",
    type: "Transfer",
    amount: "450,002 SOL",
    value: "≈ $ 4,506.00",
    status: "Failed",
    icon: MemoSolana,
  },
];

export default function Wallet() {
  const navigate = useNavigate();

  const handleTransferClick = () => {
    navigate("/transfer");
  };
  return (
    <Card className="w-full max-w-[50rem] border-[#25252D] bg-transparent  text-gray-100">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">WALLET BALANCE</CardTitle>
        <Button
          onClick={handleTransferClick}
          variant="secondary"
          className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Transfer tokens
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">0.067836</div>
        <p className="text-xs text-muted-foreground">≈ $400.56</p>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">HISTORY</h4>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-sm">
                <SelectValue placeholder="All transactions" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all">All transactions</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader className="bg-transparent hover:bg-transparent">
              <TableRow className="border-b border-gray-800">
                <TableHead className="w-[300px] text-[#8E8EA2]">
                  23rd Sept, 2024
                </TableHead>
                <TableHead className="sr-only">Type</TableHead>
                <TableHead className="sr-only">Amount</TableHead>
                <TableHead className="sr-only">Value</TableHead>
                <TableHead className="sr-only">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index} className="border-b border-gray-800">
                  <TableCell>
                    <div className="flex items-center">
                      {transaction.type === "Deposit" ? (
                        <MemoDepositIcon className="mr-2 h-4 w-4 text-green-500" />
                      ) : (
                        <MemoDepositIcon className="mr-2 h-4 w-4 text-red-500" />
                      )}
                      {transaction.type}
                    </div>
                  </TableCell>
                  <TableCell className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <h2> {transaction.amount}</h2>
                      <transaction.icon className="w-5 h-5 " />
                    </div>
                    <p className="text-[#8E8EA2] text-xs">
                      {transaction.value}
                    </p>
                  </TableCell>

                  <TableCell className="text-right">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        transaction.status === "Completed"
                          ? "bg-green-500/20 text-green-500"
                          : transaction.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-500"
                          : "bg-red-500/20 text-red-500"
                      }`}>
                      {transaction.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
