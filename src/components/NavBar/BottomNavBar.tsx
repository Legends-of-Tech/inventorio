import { faHouse, faBoxArchive, faUser } from '@fortawesome/free-solid-svg-icons';
import NavItem from "./NavItem/NavItem";
import { useLocation } from 'react-router-dom';

type Props = {
    className: string;
}

const BottomNavBar = ({className}: Props) => {
  const location = useLocation();

  const isRender = () => {
    const excludedPaths = ['/create-order-page', '/customers-page', '/all-products'];

    if (excludedPaths.includes(location.pathname)) {
      return false;
    }

    return true;
  };
  return isRender() ? (
    <div className={`${className} d-flex`}>
      <NavItem icon={faHouse} size="2x" path="/"/>
      <NavItem icon={faBoxArchive} size="2x" path='/all-products'/>
      <NavItem icon={faUser} size="2x"path="/customers-profile"/>
    </div>
  ) : null;
}


export default BottomNavBar
