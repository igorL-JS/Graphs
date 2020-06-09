import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Table} from "./Table/Table";
import Preloader from "./Preloader/Preloader";
import {BarChart} from "./BarChart";
import {FightersApi} from "./API/Api";

const App = () => {

    const [fighters, setFighters] = useState([]);
    const [indexEdit, setIndex] = useState(null);
    const [isDisplay, setIsDisplay] = useState(true);

    useEffect(() => {
        getFighters();
    }, []);

    const getFighters = async () => {
        const response = await FightersApi.getFighters();
        const data = response.data;
        debugger;
        setIsDisplay(false);
        setFighters(data);
    };

    const deleteFighter =  async(id) => {
        setIsDisplay(true);
        await FightersApi.deleteFighters(id);
        getFighters();
    };

    const addFighter = async(values) => {
        debugger
      setIsDisplay(true);

      await FightersApi.addFighters(values);
      debugger
      getFighters()
    };

    const editFighter = async(values, id) => {
        debugger;
        setIsDisplay(true);
        await FightersApi.editFighter(values,id);
        debugger;
        getFighters();
        setIndex(null)
    };

    const setIndexFighter = (index) => {
        setIndex(index)
    };

    /*Если работаем только с локальным state
    const deleteFighter = (currentIndex) => {
        setFighters([...fighters.filter(f => fighters.indexOf(f) !== currentIndex)]);
    };
*/
  /*  const addFighter = (newfighter) => {
        setFighters([...fighters, newfighter]);
    };*/

   /* const editFighter = (fighter, indexEdit) => {
        setFighters([...fighters.map(f => {
                if (fighters.indexOf(f) === indexEdit) return {...fighter};
                return {...f};
            })]
        );
        setIndex(null)
    };*/
   return (
        <div className="container">
            <h2>Top-10 Russian MMA fighters </h2>
            {isDisplay ? <Preloader/>
                            : <div><Table deleteFighter={deleteFighter} setIndexFighter={setIndexFighter}
                                          fighters={fighters} /*deleteFighter={deleteFighter}*/
                                          addFighter={addFighter} editFighter={editFighter} indexEdit={indexEdit}/>
                                    <div className="charts">
                                        <BarChart fighters={fighters}/>
                                    </div>
                              </div>}
        </div>
   )
};

export default App;

