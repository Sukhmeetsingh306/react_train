/* eslint-disable react/prop-types */
export default function TodoItems(props) {
    let todo = props.todo;
    let idx = parseInt(props.indx) + 1;
    return (
        <>
            <tr>
                <th scope="row">{idx}</th>
                <td>{todo.name}</td>
                <td className='col-6'>
                    <div className='row'>
                        <div className='col-8'>
                            <p>{todo.desc}
                            </p>
                        </div>
                        <div className='col'>
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </td>
            </tr>
            {/* <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td className='col-6'>
                    <div className='row'>
                        <div className='col-8'>
                            <p>Lorem ipsum dolor sit amet,
                            </p>
                        </div>
                        <div className='col'>
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </td>
            </tr>  */}
        </>
    )
}
