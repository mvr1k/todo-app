import { Routes, Route } from "react-router-dom";

import UserLogin from "./pages/Auth/User-Login";
import UserRegister from "./pages/Auth/User-Register";
import UserTodos from "./pages/Todos/User-todos";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserTodos />} />
        <Route path="/login" element={<UserLogin />} exact={true} />
        <Route path="/register" exact={true} element={<UserRegister />} />
      </Routes>
    </div>
  );
}

export default App;
