import { AdeleViewer } from "./Components/adeleBot";
import { GuestLoginPortal } from "./Components/guestLoginPortal";
import { SearchBar } from "./Components/SearchBar";
import { ToolBar } from "./Components/Toolbar";
import { CreateAvatarDisplay } from "./Components/UserAvatar";
import { UserProfile } from "./Components/userProfile";

const backgroundStyle = {
    position: 'absolute',
    backgroundColor: 'gray',
    width: '100%',
    height: '100%',
    opacity: 0.5
  };

export function Background() {
    return(
        <div style={backgroundStyle}>
            <UserProfile></UserProfile>
            <SearchBar value="search by hashtags"></SearchBar>
            <GuestLoginPortal></GuestLoginPortal>
            <ToolBar></ToolBar>
            <AdeleViewer></AdeleViewer>
            <CreateAvatarDisplay></CreateAvatarDisplay>
        </div>
    )
}