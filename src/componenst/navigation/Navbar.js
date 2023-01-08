import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full py-10 fixed">
      <div className="bg-white px-4 sm:px-6">
        <div className="-ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6">Título</h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Link to="/casos" className="text-lg inline-flex font-medium leading-6 hover:border-b-2 hover:border-orange-500 mx-4">Casos</Link>
            <Link to="/historia" className="text-lg inline-flex font-medium leading-6 hover:border-b-2 hover:border-orange-500 mx-4">historia</Link>
            <Link to="/nosotros" className="text-lg inline-flex font-medium leading-6 hover:border-b-2 hover:border-orange-500 mx-4">nosotros</Link>            
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProp = (state) => ({});

export default connect(mapStateToProp, {})(Navbar);
