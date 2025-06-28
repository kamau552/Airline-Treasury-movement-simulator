import React from 'react'
import Sidebar from '@/components/Layouts/sidebar'
import Table from '@/components/common/Table'
import TTableColumn from '@/components/common/Table'


type TData = {
  id: number;
  name: string;
  currency: string;
  balance: number;
}


const customerData:TData =  []
const index = () => {
  const columnProperties: Array<TTableColumn<TData>> = [
    {
      id: "id",
      label: "Customer ID",
      setContent(data: TData): React.ReactNode {
        return <span>{data.id}</span>;
      },
      align: "left",
    },

    {
      id: "name",
      label: "Customer Name",
      setContent(data: TData): React.ReactNode {
        return <span>{data.name}</span>;
      },
      align: "left",
    },

    {
      id: "currency",
      label: "Currency",
      setContent(data: TData): React.ReactNode {
        return <span>{data.currency}</span>;
      },
      align: "left",
    },

    {
      id: "balance",
      label: "Balance",
      setContent(data: TData): React.ReactNode {
        return <span>{data.balance}</span>;
      },
      align: "left",
    },
  ];
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <div className="flex flex-col items-mt-5">
        <Table columns ={columnProperties} />
      </div>
    </div>
  )
}

export default index;
