import Notfound from "../View/Notfound/Notfound";
import Home from "../View/Home/Home";
import AllChannels from "../View/channelListing/index";
import ChannelTitle from "../View/ChannelTitle/ChannelTitle";
import Subscribe from "../View/subscribe/index";
import UserProfile from "../View/UserProfile/UserProfile";

const routes = [
  {
    name: "Home",
    path: "home",
    component: <Home />,
  },
  {
    name: "AllChannels",
    path: "allChannels",
    component: <AllChannels />,
  },
  {
    name: "ChannelTitle",
    path: "channelTitle",
    component: <ChannelTitle />,
  },
  {
    name: "Channel Subscription",
    path: "channelsubscription",
    component: <Subscribe />,
  },
  {
    name: "Notfound page",
    path: "*",
    component: <Notfound />,
  },
  { name: "userProfile", path: "user-profile", component: <UserProfile /> },
];

export default routes;
