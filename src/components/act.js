function Act({ activities, onAddToCart }) {
  return (
    <section className="actSection" id="activities">
      <h2 className="sectionTitle">Activities</h2>

      <div className="actGrid">
        {activities.map((activity) => (
          <article key={activity.id} className="actCard">
            <h3 className="actiName">{activity.name}</h3>
            <p className="actInfo">{activity.info}</p>

            {activity.mediaType === "image" ? (<img className="actMediaImage"src={activity.mediaSrc} alt={activity.name}/>) : (
              <audio className="actMediaAudio" controls preload="metadata" src={activity.mediaSrc} />
            )}

            <p className="actPrice">{activity.price} €</p>
            <button className="actButton" onClick={() => onAddToCart(activity)}> Add to the cart</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Act;