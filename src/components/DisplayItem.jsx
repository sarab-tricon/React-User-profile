// src/components/DisplayItem.jsx

export default function DisplayItem({ name, age, city, image }) {
  return (
    <div className="item-box">
      <img src={image} alt={name} className="photo" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}
