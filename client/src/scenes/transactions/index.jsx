import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";


const Transactions = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetTransactionsQuery();
  console.log("data", data);

  return (
    
    <div>
        Transactions
    </div>
  );
};

export default Transactions;