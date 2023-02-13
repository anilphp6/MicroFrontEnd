import React, {Suspense} from "react";
const RemoteApp1 = React.lazy(() => import("app1/App"));
const RemoteApp2 = React.lazy(() => import("app2/App"));
const App = () => {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>Micro Frontend 1</h1>
      </div>
	 <h1> First App1 loading.... </h1>
      <Suspense fallback={"loading..."}>
        <RemoteApp1/>
      </Suspense>
	   <h1> Second App2 loading....</h1>
	    <Suspense fallback={"loading..."}>
			<RemoteApp2/>
		</Suspense>
    </div>)
}


export default App;
