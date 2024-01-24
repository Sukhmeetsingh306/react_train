
export default function AddTodo() {
    return (
        <div className='pt-4'>
            <form>
                <div className='row'>
                    <div className='col-5'>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue='Add Task' />
                    </div>

                    <div className='col-5'>
                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className='col'>
                        <div className="d-grid gap-2">
                            <button className="btn btn-success" type="button">Success</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
