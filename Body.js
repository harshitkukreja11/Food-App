import Restcard from "./Restcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () =>
{
  //local varible
    const [listofRestaurant,setlistofRestaurant] = useState([]);
    const  [searchText, setSearchText] =useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
         
      useEffect(()=> {
            fetchData();
          }, []);

          const fetchData = async () => {
            const data = await fetch(
              "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6183435&lng=77.282478&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();

            console.log(json);
            // Optional chaining
            setlistofRestaurant(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);

          };
          // conditional rendering
          if (listofRestaurant.length === 0){
            return <Shimmer />;
          }
    
          return(
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={searchText}
                onChange={(e)=>{
                  setSearchText(e.target.value);
                } }
                />
                <button onClick={() => {
                  const filteredRestaurant = listofRestaurant.filter((res)=>
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurant(filteredRestaurant);
                }}
                >Search</button>
              </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listofRestaurant.filter(
                      (res)=>res.data.avgRating > 4  
                    );
                    setlistofRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'> 
   {filteredRestaurant.map((restaurant)=>
   ( <Restcard  key={restaurant.data.id} resData={restaurant} />))}
  
    </div>
    
        </div>
      
    )
}
export default Body;