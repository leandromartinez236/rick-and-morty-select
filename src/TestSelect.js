import {useState, useEffect} from 'react';
import './TestSelecter.css';

const TestSelect =()=>{
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState('');
  const [user, setUser] = useState({});

  const dataApi =[
    {id:'1', name:'pedro'},
    {id:'2', name:'marcos'},
  ]

  useEffect(()=> {
    setOptions(dataApi)
  },[])

  useEffect(()=> {
    const usuario = dataApi.find((u)=> u.id === selected)
    setUser(usuario)
    // alert(`Hola ${user.name}`)
  },[selected])

  useEffect(()=>{
    if(user?.name){
      alert(`Hola ${user.name}`)
    }
  },[user])

  return(
    <div className="container">
      <h1>Test de Select</h1>
      <select value={selected} onChange={(e)=> setSelected(e.target.value)}>
        <option value="">--</option>
        {options.map((opt,index) =>(
          <option value={opt.id} key={index}>{opt.name}</option>
        ))}
      </select>
    </div>
  );
};
export default TestSelect;