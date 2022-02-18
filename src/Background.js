import { SearchBar } from "./Components/SearchBar";

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
            <SearchBar value="search by hashtags"></SearchBar>
        </div>
    )
}