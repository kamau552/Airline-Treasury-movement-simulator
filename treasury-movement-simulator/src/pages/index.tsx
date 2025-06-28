import React from 'react'
import Sidebar from '@/components/Layouts/sidebar'
import Table from '@/components/common/Table'
import { TTableColumn } from '@/interfaces'


type TData = {
  id: number;
  name: string;
  currency: string;
  balance: number;
}



const Index = () => {
  const columns: TTableColumn<TData>[] = [
    {
      id: "id",
      label: "Customer ID",
      setContent: (data) => <span>{data.id}</span>,
    },
    {
      id: "name",
      label: "Name",
      setContent: (data) => <span>{data.name}</span>,
    },
  ];

  // Empty placeholder data (can be replaced later)
  const data: TData[] = [];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <div className="flex flex-col mt-5 w-full p-6">
        <Table columns={columns} data={data} isloading={false} />
      </div>
    </div>
  );
};

export default Index;