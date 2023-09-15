import "./App.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);
  return (
    <div className="App">
      {!profile ? (
        <LoginSocialFacebook
          appId="1308091889820994"
          onResolve={(res) => {
            console.log(res);
            setProfile(res.data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        <>
          <h1>{profile.name}</h1>
          <img alt="" src={profile.picture.data.url} />
        </>
      )}
      <MessengerCustomerChat
        pageId="132677533257382"
        appId="1308091889820994"
      />
      ,
    </div>
  );
}

export default App;
