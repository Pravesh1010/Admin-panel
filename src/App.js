import "./App.css";
import SideBar from "./components/topbar/sideBar/SideBar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home.jsx";
import UserList from "./pages/userList/UserList";
import { Switch, Route } from "react-router-dom";
import User from "./pages/user/User";
import {useState, useEffect} from "react"; 

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
        </Switch>
      </div>
      {/* <Task />
      <Task2 /> */}
    </div>
  );
}


// function Task() {
//   const [value, setValue] = useState(0);

//   const handleClick = () => {
//     if(value + 2 <= 20){
//       setValue(value + 2)
//     }
//   }

//   const handleClick2 = () => {
//     if(value - 5 >= 0){
//       setValue(value - 5)
//     }
//   }

  
//   return(
//     <div>
//       <p>Value: {value}</p>
//       <button onClick={handleClick}>+</button>
      
//       <button onClick={handleClick2}>-</button>
//     </div>
//   )
// }


// function Task2() {
//    const [data, setData] = useState([]);

//    useEffect(() => {
//      fetch("https://api.postalpincode.in/pincode/110001")
//      .then((data) => data.json())
//      .then((dt) => setData(dt))
//      .then(console.log(data))
//    }, [])
//   return(
//     <div>
//       <h1>Names</h1>
//       {/* {data.map((names, id) => {
//         return(
//           <p>{names}</p>
//         )
//       })} */}
//     </div>
//   )
// }
export default App;
