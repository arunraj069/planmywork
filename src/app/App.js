import React from "react";
import {BrowserRouter} from "react-router-dom";
// import {Helmet} from "react-helmet";
import Routes from "./Routes";
function App({ basename }) {
  return (
    <BrowserRouter basename={basename}>
        {/* <Helmet>
          <title>{`${process.env.REACT_APP_NAME} - ${process.env.REACT_APP_VERSION}`}</title>
          <meta name="description" content={process.env.REACT_APP_NAME} data-react-helmet="true"></meta>
        </Helmet> */}
        <Routes />
    </BrowserRouter>
  );
}

export default App;
