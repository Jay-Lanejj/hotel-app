import logo from './logo.svg';
import './App.css';
import Blog from "./components/Blog"
import Details from "./components/Details"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/home';
import Booking from "./components/Booking"
import {collection, getDocs} from 'firebase/firestore'
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/signUp';

function App() {

  const blog = [{
    "id": 1,
    "title": "JAY'S LUXURIOUS HOTEL",
    "body" : "A weekend hobby for Joanna Goddard turned into a full-time job. She started A Cup of Jo in 2007 and became a superstar lifestyle blogger. In fact, the site is barely a personal blog anymore, as Jo now has a team of professional writers who share her interests, such as style, design, food, and motherhood.",
    "author" : "SINGLE ROOM - Room 100",
    "Image":'data:image/jpeg;base64,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',
    
  
  },
  {
    "id": 2,
    "title": " JAY'S LUXURIOUS HOTEL",
    "body" : "Megan, the founder of “Megan the Vegan Mom”, blogs about her daily life as a vegan mom. She is a strong advocate of veganism as a former veterinarian who shares an immense love for pets. Along with topics about motherhood, Megan likes to write about parties, lifestyle, and fashion.",
    "author": "SINGLE ROOM - Room 101",
    "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJevK1IFSZcX8D4ZBZwu_hp_RxgoLKkqJIEQ&usqp=CAU",
  },
  {
    "id": 3,
    "title": " JAY'S LUXURIOUS HOTEL",
    "body" : "Megan, the founder of “Megan the Vegan Mom”, blogs about her daily life as a vegan mom. She is a strong advocate of veganism as a former veterinarian who shares an immense love for pets. Along with topics about motherhood, Megan likes to write about parties, lifestyle, and fashion.",
    "author": "SINGLE ROOM - Room 101",
    "Image":"https://media.cntraveler.com/photos/5f678a747557491753645012/master/w_4000,h_2666,c_limit/w-doha-qatar-suite.jpg",
    
  },
  {
  "id": 4,
  "title": "JAY'S LUXURIOUS HOTEL",
  "body" : "A weekend hobby for Joanna Goddard turned into a full-time job. She started A Cup of Jo in 2007 and became a superstar lifestyle blogger. In fact, the site is barely a personal blog anymore, as Jo now has a team of professional writers who share her interests, such as style, design, food, and motherhood.",
  "author" : "SINGLE ROOM - Room 100",
  "Image":'https://media.cntraveler.com/photos/56799015c2ebbef23e7d927b/master/pass/Hotelroom-Alamy.jpg',

  },
  {
    "id": 5,
    "title": " JAY'S LUXURIOUS HOTEL",
    "body" : "Megan, the founder of “Megan the Vegan Mom”, blogs about her daily life as a vegan mom. She is a strong advocate of veganism as a former veterinarian who shares an immense love for pets. Along with topics about motherhood, Megan likes to write about parties, lifestyle, and fashion.",
    "author": "SINGLE ROOM - Room 101",
    "Image":"data:image/jpeg;base64,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",
  },
  {
    "id": 6,
    "title": " JAY'S LUXURIOUS HOTEL",
    "body" : "Megan, the founder of “Megan the Vegan Mom”, blogs about her daily life as a vegan mom. She is a strong advocate of veganism as a former veterinarian who shares an immense love for pets. Along with topics about motherhood, Megan likes to write about parties, lifestyle, and fashion.",
    "author": "Room 106 ",
    "Image":"https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/50569-istock-486178472-6c4e6f5c9316e18817521aaaef2887b0.jpg",
    
  },
  {
    "id": 7,
    "title": "JAY'S LUXURIOUS HOTEL",
    "body" : "A weekend hobby for Joanna Goddard turned into a full-time job. She started A Cup of Jo in 2007 and became a superstar lifestyle blogger. In fact, the site is barely a personal blog anymore, as Jo now has a team of professional writers who share her interests, such as style, design, food, and motherhood.",
    "author" : "Room 107",
    "Image":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyn3EHDsaF4rdqqDb7rfqLVk3E4Hr1He7Rxg&usqp=CAU',
  
    },
    {
      "id": 8,
      "title": " JAY'S LUXURIOUS HOTEL",
      "body" : "Megan, the founder of “Megan the Vegan Mom”, blogs about her daily life as a vegan mom. She is a strong advocate of veganism as a former veterinarian who shares an immense love for pets. Along with topics about motherhood, Megan likes to write about parties, lifestyle, and fashion.",
      "author": "Room 108",
      "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScg9REfkdBKB9rT5H9cR0jsr8q5GYJt_U2Bw&usqp=CAU",
    },
    {
      "id": 9,
      "title": " JAY'S LUXURIOUS HOTEL",
      "body" : "Megan, the founder of “Megan the Vegan Mom”, blogs about her daily life as a vegan mom. She is a strong advocate of veganism as a former veterinarian who shares an immense love for pets. Along with topics about motherhood, Megan likes to write about parties, lifestyle, and fashion.",
      "author": "Room 106 ",
      "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjiqrvGMg9mrvJKMN98KdFb1lFDtRL_KKIw&usqp=CAU",
      
    },


  ]


  console.log(blog)
  return (
    <>
        <Router>
             <Routes>
                 <Route exact path='/' element={<Login/> }/>
                 <Route path='/sign-up' element={<signUp/> }/>
                 <Route exact path='/home' element={<Home/> }/>
                 <Route path='/blog' element={<Blog blog={blog}/> }></Route>
                 <Route path='/blogDetails/:id' element={<Details  blog={blog}/> }></Route>
                 <Route path='/bookings' element={<Booking/> }></Route>
             </Routes>
        </Router>
    </>
  );
}

export default App;
