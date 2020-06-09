import React from "react";
import {ModWin} from "./Modul";
import {ModWinEdit} from "./ModulEdit";

export const Table = (props) => {
    const {setIndexFighter,fighters,deleteFighter,addFighter,editFighter,indexEdit} = props;

    const currentFighter = fighters[indexEdit];

    return(
        <div>
        <table className="table table-hover">

            <thead>
                <tr>
                    <td> ID </td>
                    <td> Fighter </td>
                    <td> Age </td>
                    <td> Category </td>
                    <td> Win</td>
                    <td> Lost </td>
                    <td> Draw </td>
                    <td> Total fights</td>
                    <td> Operation </td>
                </tr>
            </thead>

            <tbody>
            {fighters.map((fighters, index) => {

                const {id, name, age, category, win, lost, draw, total} = fighters;
                return (
                                      <tr key={index} >
                                        <td>{id}</td>
                                        <td >{name}</td>
                                        <td >{age}</td>
                                        <td>{category}</td>
                                        <td>{win}</td>
                                        <td>{lost}</td>
                                        <td>{draw}</td>
                                        <td>{total}</td>
                                        <td>
                                            <button onClick={() => setIndexFighter(index)} type="button" className="btn btn-primary">Edit</button>
                                            <button onClick={() => deleteFighter(id)} type="button" className="btn btn-danger">Delete</button>
                                        </td>
                                      </tr>
                )})}
            </tbody>
        </table>
            <div>
                <ModWin addFighter={addFighter}/>
            </div>
            <div>
                {(currentFighter != null) && (
                    <ModWinEdit currentFighter={currentFighter} indexEdit={indexEdit} editFighter={editFighter} setIndexFighter={setIndexFighter} />)
                }
            </div>
        </div>)
};