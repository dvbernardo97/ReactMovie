import ActorCard from "./ActorCard";

export default function ActorPage({ movies }) {
  const actorList = movies.reduce((actors, m) => {
    m.cast.forEach((i) => {
      if (!actors.includes(i)) actors.push(i);
    });
    return actors;
  }, []);

  return (
    <div>
      {actorList.map((actor) => {
        return <ActorCard key={actor} actor={actor} />;
      })}
    </div>
  );
}

