import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./style.css";
function Table() {
  return (
    <div className="Table col-8">
      <Tabs>
        <TabList>
          <Tab>Today</Tab>
          <Tab>Week</Tab>
          <Tab>Hour</Tab>
        </TabList>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Table;
