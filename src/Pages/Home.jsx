import React from 'react';
import Page from '../component/page';
import AddCard from '../component/cards';
import List from '../component/list';
import Second from '../component/seacond';  // Renamed from 'Seacond'np to 'Second'
import Isticar from '../component/isticar';
import ThirdCard from '../component/ThirdCard';
import Grid from '../component/Grid';
import Products from './Products';  // Ensure you're using this somewhere if necessary
import { useSelector } from 'react-redux';

function Home() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`${darkMode ? "bg-slate-800 text-white" : ""} h-auto gap-18 border-b-2 justify-between`} >
      <div>
        <Page />
        <AddCard/>
        <List />
        <Second />  {/* Fixed 'Seacond' to 'Second' */}
        <Isticar />
        <ThirdCard />
        <Grid />
      </div>
    </div>
  );
}

export default Home;
