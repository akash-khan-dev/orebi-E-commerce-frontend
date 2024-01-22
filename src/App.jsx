import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Account from "./pages/Account";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Shop />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contacts" element={<Contact />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="account" element={<Account />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
