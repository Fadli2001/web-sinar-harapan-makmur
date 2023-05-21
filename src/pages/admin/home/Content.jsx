import VehicleTable from "./vehicle/Vehicle"
import AppV from "./vehicle/VehicleListAxios"

const Content = () => {
    return (
        <div className="content-admin">
           <VehicleTable/>
           {/* <AppV/> */}
        </div>
    )
}

export default Content