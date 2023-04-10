import { useHref } from 'react-router-dom'
import './AllProducts.css'

const products = [
  {
    id: 1,
    name: 'Quần Truyền Thống',
    href: '#',
    price: '50,000 vnđ',
    imageSrc: 'https://scontent.fmel14-2.fna.fbcdn.net/v/t1.15752-9/340383221_1176187989729048_5222921211179613806_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=bxilh9izBHEAX-jBzJn&_nc_ht=scontent.fmel14-2.fna&oh=03_AdRd_k0CEdq3yVS96w9mopNBx5Y_GdD0eLyOGh5ME078DA&oe=645BBF9F',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]

  type Props = {
    header: string
  }

  
   function AllProducts({header}: Props) {
    return (
      <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 text-center">Quần Áo Dài</h2>

              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <a key={product.id} href={product.href} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
  )
}

  export default AllProducts
  