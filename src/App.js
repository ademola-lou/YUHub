import './App.css';
import { Background } from './Background';

function App() {
  return (
   <Background>
   </Background>
  );
}
console.log("%cYUHub!", "font-size:5em; color: blue");
//check if user is an new guest
setTimeout(()=>{
  //show the register portal only if user has not registered before
  const username = localStorage.getItem("username");

  //here we only change the name of the register button to register or update, we want to avoid creating duplicates 
  document.querySelector("#registerUserButton").innerHTML = "register";
  
  if(!username){
    window.$('.ui.modal').modal('show');
  }else{
    console.log(`Welcome back ${username}`)
  }
}, 2000);

export default App;
