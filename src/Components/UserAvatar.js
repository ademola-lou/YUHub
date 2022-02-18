import ImageUrl from '../Assets/Images/naruto.png'
export function CreateAvatarDisplay() {

    return (
        //use image
        <button className="circular ui icon button" id="myavatar">
        <img src={ImageUrl} alt="avatar1" width="10" height="10"></img>
        </button>
    )
}