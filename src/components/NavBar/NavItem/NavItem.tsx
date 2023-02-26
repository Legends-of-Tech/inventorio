import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  useNavigate } from "react-router-dom";
import {
    IconProp, SizeProp,
  } from '@fortawesome/fontawesome-svg-core'

type Props = {
    icon: IconProp
    size: SizeProp
    path: string
}

const NavItem = ({icon, size,path}: Props) => {
    const navigate = useNavigate();

  return (
    <div className=" col-4 grid place-items-center bg-blue-300" onClick={() => { navigate(path)}}>
        <FontAwesomeIcon className='mr-1'icon={icon} size={size}/>
    </div>
  )
}

export default NavItem
