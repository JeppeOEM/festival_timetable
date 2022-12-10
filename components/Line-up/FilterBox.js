function FilterBox(props) {
  function removeGenre(selectedGenre) {
    const removeFilter = props.filterList.filter((genre) => {
      console.log("genre", genre);
      console.log("selectedGenre", selectedGenre);
      genre !== selectedGenre;
    });

    props.setFilter(removeFilter);

    /*    console.log(event.target.value.key);
    console.log("FILTERLIST", props.filterList);

    const removeKey = props.filterList.map((genre) => genre !== event.target.value.key);
    console.log(removeKey);
    props.setFilter(removeKey); */
    /*     console.log(test);
    const test2 = props.setFilter([test]);
    console.log(test2); */
  }

  /*   setArtists(); */

  const listItems = props.filterList.map((genre) => (
    <li key={genre}>
      {genre}
      <button onClick={() => removeGenre(genre)}>X</button>
    </li>
  ));
  return <h2>{listItems}</h2>;
}

export default FilterBox;
