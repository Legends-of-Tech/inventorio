/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import './AllProducts.css'

const products = [
    {
      category: 'AoDaiTruyenThong',
      tag: 'Tron',
      id: 1,
      name: 'Áo Dài #1',
      href: '#',
      imageSrc: 'https://scontent.fmel14-1.fna.fbcdn.net/v/t1.15752-9/333660729_1432892293912327_5764577130869122753_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=t4s6oDJgrh0AX_IacDp&_nc_ht=scontent.fmel14-1.fna&oh=03_AdRs0ZBI-nLMbi_gG7Jz6LYLjIKS3uUhRYMFwg8w6vCwSg&oe=64226D09',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '100,000đ',
      color: 'Trắng',
    },
    {
      category: 'AoDaiTruyenThong',
      tag: 'Tron',
      id: 2,
      name: 'Áo Dài #2',
      href: '#',
      imageSrc: 'https://scontent.fmel14-1.fna.fbcdn.net/v/t1.15752-9/333852215_1275025989760489_3022209221594412241_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YbW9X6XmWCAAX_G0hn2&_nc_ht=scontent.fmel14-1.fna&oh=03_AdRg7pLAbltPiXrdqsDZMr2uv_GAjkBKbzdkMRDD3_Etcw&oe=6422E69F',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '100,000đ',
      color: 'Vàng',
    },
    {
      category: 'AoDaiTruyenThong',
      tag: 'Tron',
      id: 3,
      name: 'Áo Dài #3',
      href: '#',
      imageSrc: 'https://scontent.fmel14-1.fna.fbcdn.net/v/t1.15752-9/333753158_5731716583593852_8460558774222528638_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=URCqGNy8xN4AX_LjEk4&tn=r05_dnK99Qp4-iPg&_nc_ht=scontent.fmel14-1.fna&oh=03_AdSvDONLLS2Ve_tIvawg-0rmwGguqKNCm7oWQLJr3B8g4w&oe=64226628',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '100,000đ',
      color: 'Xanh',
    },
    {
      category: 'AoDaiTruyenThong',
      tag: 'Tron',
      id: 4,
      name: 'Áo Dài #4',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '100,000đ',
      color: 'Đỏ',
    },
    // More products...
  ]

  type Props = {
    header: string
  }

  
   function AllProducts({header}: Props) {
    return (
<div className="bg-white my-4 max-w-xs mx-auto">
  <div className="mx-auto max-w-xs py-6 px-4 sm:py-10 sm:px-6 lg:max-w-xs lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{header}</h2>

    <div className="mt-4 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="min-h-48 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-48">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-2 flex justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-xs text-gray-500">{product.color}</p>
            </div>
            <p className="text-md font-medium text-gray-900">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    )
  }

  export default AllProducts
  