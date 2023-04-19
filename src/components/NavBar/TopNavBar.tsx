import { Disclosure} from '@headlessui/react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Props = {
  header: string,
}

const TopNavBar = ( {header}: Props ) => {
  return (
        <Disclosure as="nav" className="bg-blue-300 fixed inset-y-0 bottom-0 h-24 right-0 vw-100 z-50">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            {/* <div className="flex items-center absolute top-4 left-5">
              <Link to="/">
                <ArrowBackIcon sx={{ fontSize: '1.6rem' }} />
              </Link>
            </div> */}
              <h1 className="flex-1 text-3xl font-bold tracking-tight text-gray-900 text-center mt-20">
                {header}
              </h1>
            <Link to='/'>
                <div className="flex flex-shrink-0 items-center" >
                    {/* <img
                        style={{marginLeft: '8px'}}
                        className="block h-8 w-auto lg:hidden gap-[2.75rem]"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                    /> */}
                </div>
            </Link>

            </div>
          </div>
    </Disclosure>
  )
}

export default TopNavBar