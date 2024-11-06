import Home from "~/pages/Home";
import Follwing from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Friends from "~/pages/Friends";
import Messenger from "~/pages/Messenger";
import { HeaderOnly } from "~/components/Layout";
// Public routes
const publicRoutes = [
    {path:'/', component:Home } ,
    {path:'/profile', component:Profile},
    {path:'/upload' , component:Upload  , layout :HeaderOnly},
    {path:'/search' ,component:Search ,  layout :null} , 
    {path:'/following' , component:Follwing} ,
    {path:'/friends', component:Friends},
    {path:'/messenger', component:Messenger ,layout:HeaderOnly}
]
const privateRoutes = [

]
export {publicRoutes , privateRoutes}