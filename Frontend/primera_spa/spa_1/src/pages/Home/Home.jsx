import { NavigateButton } from "../../common/NavigateButton/NavigateButton";
import "./Home.css";

export const Home = () => {

  return (
    <div>
      <NavigateButton 

        path ={"/login"}
        nombre = {"Login"}
      />

      <NavigateButton 

        path ={"/register"}
        nombre = {"Register"}
      />
      
    </div>
  )

}