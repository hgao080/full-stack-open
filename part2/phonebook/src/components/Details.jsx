const Details = ({ person, onDelete }) => {
  return (
    <div>
      <p>
        <b>{person.name} {person.number}</b> <button onClick={() => onDelete(person)}>delete</button>
      </p>
    </div>
  );
};

export default Details;
