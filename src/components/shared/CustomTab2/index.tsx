import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const TabsWrapper = styled.div`
  .custom-tabs {
    border-bottom: 1px solid #eee;
    display: flex;
    gap: 10px;
  }

  .custom-tab {
    color: #696d77;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 20px 24px;
    background: transparent;
    border: none;
    outline: none;
    position: relative;
    cursor: pointer;
  }

  .custom-tab:hover {
    background: transparent;
  }

  .custom-tab.active {
    color: #ed003b;
    font-weight: 500;
  }

  .tab-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-color: #ed003b;
    transition: all 0.1s ease-in-out;
  }
`;

const TabContent = styled.div`
  padding: 20px;
  min-height: 100px; /* Prevents layout shift */
`;

interface Tab {
  key: string;
  label: string;
  content: React.ReactNode;
}

interface TabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: Tab[];
}

const index = ({ activeTab, setActiveTab, tabs }: TabProps) => {
  return (
    <TabsWrapper className="mt-6 px-2">
      <ul className="nav custom-tabs">
        {tabs.map((tab) => (
          <motion.li
            className="nav-item"
            key={tab.key}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.05 }}
          >
            <button
              className={`custom-tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div
                  className="tab-indicator"
                  layoutId="tab-indicator"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.1 }}
                />
              )}
            </button>
          </motion.li>
        ))}
      </ul>

      <TabContent>
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.key && (
                <motion.div
                  key={tab.key}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.1 }}
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </TabContent>
    </TabsWrapper>
  );
};

export default index;
