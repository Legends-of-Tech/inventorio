import { Disclosure} from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import { NavItem } from '../../App';
import { arePathsMatched } from '../../utils/shared';
import GoBackIcon from '../GoBackIcon';

type Props = {
  navItems: NavItem[],
}

export const getHeaderTitle = (navItems: NavItem[] , currentPath: string): string =>{
  const x = navItems.filter(navItem => arePathsMatched(currentPath, navItem.path));
  if (x.length !== 1) return "Inventorio"
  return x[0].title;

}

export const isChildPage = (currentPath: string): boolean => {
  const segmentListWithoutEmptyString = currentPath.split("/").filter((item: string) => item !== "");
  if (segmentListWithoutEmptyString.length !== 1) return true;
  return false;
}


const TopNavBar = ( {navItems}: Props ) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  
  console.log('NavItems: ', navItems);
  return (
      <Disclosure as="nav" className="bg-blue-300 fixed inset-y-0 bottom-0 h-24 right-0 vw-100 z-50">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                  {isChildPage(currentPath) && <GoBackIcon/>}
                  <h1 className="flex-1 text-3xl font-bold tracking-tight text-gray-900 text-center mt-20">
                      {getHeaderTitle(navItems, currentPath)}
                  </h1>
                  <Link to="/">
                      <div className="flex flex-shrink-0 items-center"></div>
                  </Link>
              </div>
          </div>
      </Disclosure>
  );
};

export default TopNavBar

                  {/* <div className="flex items-center absolute top-4 left-5">
              <Link to="/">
                <ArrowBackIcon sx={{ fontSize: '1.6rem' }} />
              </Link>
            </div> */}

//             0
// : 
// {title: 'Order', path: '/orders', element: {…}}
// 1
// : 
// {title: 'Create Order', path: '/orders/create-order-page', element: {…}}
// 2
// : 
// {title: 'Inventory', path: '/inventory', element: {…}}
// 3
// : 
// {title: 'Customer', path: '/Customer', element: {…}}