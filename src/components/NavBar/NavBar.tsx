import { faFile, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



type Props = {
    className: string;
}

const NavBar = ({className}: Props) => (
  <div className={`${className} d-flex`}>
    <div className="col-4 bg-orange-600 grid place-items-center">
      <FontAwesomeIcon className='mr-1'icon={faFile} size="2x"/>
    </div>
    <div className="col-4 bg-orange-600 "></div>
    <div className="col-4 bg-orange-600"></div>
  </div>
)

export default NavBar
