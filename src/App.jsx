import {Route, Routes} from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import TodayPage from './pages/TodayPage';
import ImportantPage from './pages/ImportantPage';
import TodoPage from './pages/TodoPage';
import CalendarPage from './pages/CalendarPage';
import Navbar from './pages/Navbar';
import NewTask from './components/NewTask';
import NewTag from './components/NewTag';

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<TodayPage />} />
            <Route path="/important" element={<ImportantPage />} />
            <Route path="/to-do" element={<TodoPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/newtask" element={<NewTask />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
