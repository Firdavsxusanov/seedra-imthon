// DIV deganda men qism manoni aytmoqchi bolaman shuning uchun man uzim cungandak qildim agar tushunmagan bolsangi menga aytsangiz tushuntirib beraman lekn chunish oson kammentariyani nazarda tutim
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //RouterProvider va createBrowserRouterni import qilamiz
import RouterLayout from "./Layout/RouterLayout";//RouterLayoutni import qilamiz
import Home from "./pages/Home";//Home pageni import qilamiz
import About from "./pages/About";//About pageni import qilamiz
import { useEffect, useState } from "react";//useEffect va useState ni import qilamiz
import { ContextApi } from "./ContextApi/ContextApi";//ContextApi ni import qilamiz
import Blog from "./pages/Blog";//Blog pageni import qilamiz
import Contacts from "./pages/Contacts";//Contact pageni import qilamiz
import Buyurtma from "./pages/Buyurtma";//Buyurtma pageni import qilamiz

const App = () => {
      //Manashu shu yerdan Navbar dagi qismlar ulangan va shu yerda yoziladi yaniy App jsx faylida
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RouterLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'blog',
          element: <Blog/>,
        },
        {
          path: 'contacts',
          element: <Contacts/>,
        },
        {
          path: 'buyutma',
          element:<Buyurtma/>,
        }
      ],
    },
  ]);
    const [api, setApi] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setApi(json));
    }, []);
  
    return (
      <ContextApi.Provider value={{ api }}>
        <RouterProvider router={router} />
      </ContextApi.Provider>
    );
  };
  

export default App;
// DIV deganda men qism manoni aytmoqchi bolaman shuning uchun man uzim cungandak qildim agar tushunmagan bolsangi menga aytsangiz tushuntirib beraman lekn chunish oson kammentariyani nazarda tutim