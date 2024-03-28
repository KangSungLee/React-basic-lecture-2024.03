import './App.css';
import Card from '../components/Card2';

export default function App() {
  const James = {id:1, name:'James', job:'Back-end programmer'};
  const Maira = {id:2, name:'Maria', job:'React JS programmer'};
  return (
    <>  
      <Card person={James} />
      <br />
      <Card person={Maira}/>
    </>
  );
}

