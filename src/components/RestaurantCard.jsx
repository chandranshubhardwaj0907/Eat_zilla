import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div
      className="res-card"
      style={{
        // backgroundColor: '#f0f0f0',
      }}
    >
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <div className="res-card-content">
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo }</h4>
      <h4>{sla?.slaString} </h4>
      <button className='button'>View more</button>
    </div>
    </div>
  );
};
export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return  (
      <div className="promoted-label">

        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  } 
}
export default RestaurantCard;
