import vehicleList from "./vehicleList"

const VehicleTable = () => {
    const vehicles = vehicleList
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <button className="btn btn-primary mb-2">Add +</button>
                        </div>
                        <table className="table table-striped table-hover border ">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">isAutomatic</th>
                                    <th scope="col">status</th>
                                    <th scope="col">Sale Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    vehicles.map((vehicle, k) => (
                                        <tr key={k}>
                                            <th scope="row">{k + 1}</th>
                                            <td>{vehicle.model}</td>
                                            <td>{vehicle.isAutomatic ? 'True' : 'False'}</td>
                                            <td>{vehicle.status}</td>
                                            <td>{vehicle.SalePrice}</td>
                                            <td>
                                                <button className="btn btn-primary">Detail</button>
                                                <button className="btn btn-warning mx-2">Update</button>
                                                <button className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VehicleTable