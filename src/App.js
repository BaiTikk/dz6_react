import {useEffect, useState} from "react";

function App() {
  const [lists, setLists] = useState(['Арген', 'Максат', 'Жанылай'])
    // useEffect(() => {
    //     setLists([...lists, 'Baytik', 'Akjol'])
    // }, [])
  return (
    <div className="App">
      <ul>
        {
          lists.map((i, k) => <li key={k}>{i}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
