// import RestaurantMenu from "../components/ShimmerMenu";
// import Shimmer from "../components/Shimmer";
import { useState , useEffect} from "react";
const useRestaurantMenu = (resId)=>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        setResInfo(json);
      };
    
    return resInfo;
}
export default useRestaurantMenu;