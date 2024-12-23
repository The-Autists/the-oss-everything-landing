export default function Card({ data, flip }) {
  return (
    <div className={`feature ${flip ? "feature-reverse" : ""}`}>
      <img src={data.img} alt={data.title} />
      <div className="card">
        <div className="chip">
          <h5>{data.summary}</h5>
        </div>
        <div className="content">
          <h5>{data.title}</h5>
          <p>{data.description}</p>
        </div>
        <button className="btn btn-secondary">Read More</button>
      </div>
    </div>
  );
}
