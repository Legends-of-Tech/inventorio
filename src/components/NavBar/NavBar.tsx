import { faHouse, faBoxArchive, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavItem from './NavItem/NavItem';



type Props = {
    className: string;
}

const NavBar = ({className}: Props) => (
  <div className={`${className} d-flex`}>
    <NavItem icon={faHouse} size="2x" path="/"/>
    <NavItem icon={faBoxArchive} size="2x" path="/all-products"/>
    <NavItem icon={faUser} size="2x"path="/customers-profile"/>
  </div>
)

export default NavBar
