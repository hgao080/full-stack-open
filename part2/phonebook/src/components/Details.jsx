const Details = ({ person }) => {
  return (
    <div>
      <p>
        <b>{person.name} {person.number}</b>
      </p>
    </div>
  );
};

export default Details;
