import React from "react";
import { connect } from "react-redux";
import { fetchStart, fetchSuccess } from "../actions";
import axios from "axios";

const Person = (props) => {
  const { person, isFetching, error } = props;

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * 826) + 1
    console.log(randomNum)
    
    props.fetchStart();
    axios
      .get(`https://rickandmortyapi.com/api/character/${randomNum}`)
      .then((res) => {
        props.fetchSuccess(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <h2>
          Intergalactic Profile: {person.name} and my current status is {person.status}
        </h2>
        <img src={person.image} />
      </div>
      <button onClick={handleClick}>Get new Character</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchStart, fetchSuccess })(Person);
