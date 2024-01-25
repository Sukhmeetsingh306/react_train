/* eslint-disable react/prop-types */

import TodoItems from "./TodoItems";

export default function TodoList({todol}) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="col-2">S NO.</th>
                        <th className="col-4">title</th>
                        <th className="col-6">description</th>
                    </tr>
                </thead>
                <tbody>
                    {todol.map((item, index )=>{
                        // eslint-disable-next-line react/jsx-key
                        return <TodoItems key={index} todo={item} indx={index}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}


