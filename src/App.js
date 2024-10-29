import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import ItemsList from './Components/ItemsList';
import initialData from './Data'; // Rename to avoid conflict with state variable
import Category from './Components/Category';

const App = () => {
  const [data,setData] = useState(initialData);
  const allCategory = ['all',...new Set (initialData.map((i)=>i.category))]
  //filter category
  const filterbyCategory = (cat) => {
    if(cat === "all"){
      setData(initialData)
    }
    else{
      const newArr = initialData.filter((item) => item.category === cat)
    setData(newArr)
    } 
  }
  //filtered by search
  const filterbySearch = (word) => {
    if(word === ""){
      setData(initialData)
    }
    else{
      const newArr = initialData.filter((item) => item.title === word)
    setData(newArr)
    } 
  }
  return (
    <div className='color-body font'>
      <Container>
      <NavBar filterbySearch={filterbySearch} initialData={initialData} />
        <Header />
        <Category filterbyCategory={filterbyCategory} allCategory={allCategory}/>
        <ItemsList data={data} /> {/* Pass the initial data directly */}
      </Container>
    </div>
  );
}

export default App;