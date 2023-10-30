import "./NavigateButton.css";
import { useNavigate } from "react-router-dom";

export const NavigateButton = () => {
    
    const   navigate = useNavigate();
    
    return (
        <div 
            onClick = { ()=>navigate(path)}
        >
            {nombre}
        </div>
    )

}