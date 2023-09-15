import "./App.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

function App() {
  const responseFacebook = (response) => {
    axios({
      url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
      method: "post",
      data: {
        facebookToken: response.accessToken,
      },
    }).then((res) => {
      //Lưu vào localstorage
      localStorage.setItem("accessToken", res.data.content.accessToken);
    });
  };
  return (
    <div className="App">
      <FacebookLogin
        appId="599753691700080"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <MessengerCustomerChat
        pageId="132677533257382"
        appId="1308091889820994"
      />
      ,
    </div>
  );
}

export default App;
