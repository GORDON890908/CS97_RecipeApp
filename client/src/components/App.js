import React from 'react';
import GoogleLogin from 'react-google-login';

function App() {
  const responseSuccessGoogle = async (googleData) => {
    console.log(googleData.tokenId);
    await fetch("/auth/google", {
      method: "POST",
      body: JSON.stringify({ 
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(res => {
      if (res.ok) {
        console.log("Google signin success")
      } else {
        console.log("Google signin fail")
      }
    })
  };

  const responseFailureGoogle = (res) => {
    console.log(res);
  };

  return (
    <div>
      <div className="col-md-6 offset-md-3 text-center">
        <h1>Login with GOOGLE</h1>
          <GoogleLogin
            clientId="281834657367-r6h4r3t5unmp2q9rl9usg3gp9k23iq3b.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseSuccessGoogle}
            onFailure={responseFailureGoogle}
            cookiePolicy={'single_host_origin'}
          />
      </div>
    </div>
  );
}

export default App;