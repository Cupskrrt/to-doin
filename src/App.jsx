import React from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Sidebar from "./pages/Sidebar";
import TodayPage from "./pages/TodayPage";
import ImportantPage from "./pages/ImportantPage";
import TodoPage from "./pages/TodoPage";
import Navbar from "./pages/Navbar";
import NewTask from "./components/NewTask";
import TaskCompleted from "./components/TaskCompleted.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Routes>
            {/*TODO: MAKE THE TAG ROUTE  */}
            <Route path="/" element={<TodayPage />} />
            <Route path="/important" element={<ImportantPage />} />
            <Route path="/to-do" element={<TodoPage />} />
            <Route path="/newtask" element={<NewTask />} />
            <Route path="/completed" element={<TaskCompleted />} />
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
