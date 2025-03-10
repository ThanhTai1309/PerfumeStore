import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar";
import Spinner from "./components/ui/spinner/Spinner";
import { LoadingProvider, useLoading } from "./context/useLoading";
import AppLoading from "./context/appLoading";
import SpinnerWrapper from "./components/ui/spinner/util/spinnerWrapper";

const App = () => {
  return (
    <LoadingProvider>
      <Router>
        <SpinnerWrapper />
        <AppLoading />
      </Router>
    </LoadingProvider>
  );
};



export default App;
