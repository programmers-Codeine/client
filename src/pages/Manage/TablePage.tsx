import Button from '@/components/common/Button/Button';
import { useState } from 'react';
import Tabs from './Table/Tabs';
import Table from './Table/Table';
import Tab from './Table/Tab';
import QRCard from './Table/QRCard';
import useTableStore from '@/stores/useTableStore';

export default function TablePage() {
  const [currentTab, setCurrentTab] = useState('table');
  const { tables, addTable } = useTableStore();

  const handleAddTable = () => {
    addTable(tables.length + 1);
  };
  const handleTabChange = (id: string) => {
    setCurrentTab(id);
  };

  return (
    <div className="flex h-full flex-col">
      <Tabs>
        <Tab id="table" index={0} currentTab={currentTab} handleTabChange={handleTabChange}>
          테이블
        </Tab>
        <Tab id="qr" index={1} currentTab={currentTab} handleTabChange={handleTabChange}>
          QR
        </Tab>
      </Tabs>
      {currentTab === 'table' ? (
        <div className="flex h-full flex-wrap content-start gap-5 overflow-y-scroll p-10">
          {tables.map(table => (
            <Table table={table} key={table.tableNo} />
          ))}
          <div
            className="max-w-1/6 relative flex max-h-[170px] min-h-[155px] min-w-[240px] cursor-pointer flex-col items-center justify-center rounded-lg border border-d900 p-4 text-2xl font-bold text-d200 hover:text-d900"
            onClick={handleAddTable}
          >
            테이블 추가+
          </div>
        </div>
      ) : (
        <>
          <div className="flex h-full flex-wrap content-start gap-5 overflow-y-scroll p-10">
            {tables.map(({ tableNo }) => (
              <QRCard tableNo={tableNo} key={tableNo} />
            ))}
          </div>
          <div className="flex justify-center gap-2 py-[6px]">
            <Button title="전체 QR 이미지 저장" type="others" />
            <Button title="전체 QR 프린트" type="others" />
          </div>
        </>
      )}
    </div>
  );
}
