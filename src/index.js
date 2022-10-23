import { Provider } from "react-redux";
import AppNavigator from "./navigation/index";
import { store } from "./store";
import { init } from "./db";

export default function App() {

  init().then(()=>{
    console.log("DB initialized")
  }).catch((err)=>console.log(err))

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
