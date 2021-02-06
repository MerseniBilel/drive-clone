import './App.css';
import {useState} from 'react'
import Header from './components/header'
function App() {

  const [user, setUser] = useState({
    displayName: "Merseni Bilel",
    email: "bilelmerseni7016@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg"
  })

  //authentication

  /*  if auth = true => {
        header
        sidebar
        fileview
        iconbar
      }if auth = false => {
        login 
      } 
  
  */

  return (
    <div className="App">
      {/* header !! : */}

      <Header userPhoto={user.photoURL}/>
      


    </div>
  );
}

export default App;
