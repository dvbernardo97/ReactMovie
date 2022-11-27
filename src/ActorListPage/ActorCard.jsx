import MovieListPage from "../MovieListPage/MovieListPage";



export default function ActorCard({ actor }) {


  return (
    <div
      style={{
        background: `url(https://picsum.photos/300) no-repeat center center`,
        WebkitBackgroundSize: "cover"
      }}
      className="item-card"
    >
      <div className="title">
        <h1>{actor}</h1>
      </div>
    </div>
  );
}
