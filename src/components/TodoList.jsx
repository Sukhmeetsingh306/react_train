
export default function TodoList() {
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
                    <tr>
                        <th scope="row">1</th>
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
                    </tr>
                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
