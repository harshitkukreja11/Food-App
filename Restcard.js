const Restcard = (props) =>
{
    const {resData} = props;
    return(
        <div className="res-card">
            <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
             resData.data.cloudinaryImageId}/>
        <h1>{resData.data.name}</h1>
        <h2>{resData.data.cuisines.join(", ")}</h2>
        <h2>{resData.data.avgRating} stars</h2>
        <h2>${resData.data.costForTwo /100} FOR TWO</h2>
        <h2>{resData.data.deliveryTime} Minutes</h2>
    </div>
    )
}
export default Restcard;