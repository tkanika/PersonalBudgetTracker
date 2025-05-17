import React, { useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';

const Income = () => {

  const [OpenAddIncomeModal, setOpenAddIncomeModal] = useState(false)
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
      <div className="grid grid-cols-1 gap-6">
        <div className="">
          <IncomeOverview
          transactions={incomeData}
          onAddIncome={() => setOpenAddIncomeModal(true)}
          />
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
};

export default Income;