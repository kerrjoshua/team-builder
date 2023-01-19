import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';


function App() {

  const [ team, setTeam ] = useState([]);
  const [ values, setValues ] = useState({name: '', position:'', skill: ''})
 
  const onSubmit = () => {
    setTeam([values, ...team]);
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value})
  }

  

  return (
    <div className="App">
      {/*<TeamList team={team} />*/}
      <Form
        values={values}
        change={onChange}
        submit={onSubmit} 
      />

{team.map((player, idx)=>{
                return(
                    <div key={idx}>
                        {player.name}, {player.position}, {player.skill}
                    </div>
                )

            })}
    </div>
    
  );
}

export default App;
