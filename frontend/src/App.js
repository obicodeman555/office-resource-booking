import Header from "./components/header/Header";
import BookablesPage from "./pages/bookables/BookablesPage";
import BookingsPage from "./pages/bookings/BookingsPage";
import UsersPage from "./pages/users/UsersPage";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/bookables" element={<BookablesPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
