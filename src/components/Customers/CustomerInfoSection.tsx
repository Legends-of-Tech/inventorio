import React from 'react';

const CustomerInfoSection = () => {
  return (
    <div className="fixed top-20 left-0 right-0 z-10 flex justify-center mt-14">
      <section className="border border-black p-3 w-full grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4">
          <span className="font-semibold text-lg">Tên Khách Hàng</span>
          <div className="text-sm mt-0">Anh Hai</div>
          <span className="font-semibold text-lg">Địa Chỉ</span>
          <div className="text-sm mt-0">131 Ni Sư Huỳnh Liên, phường 10, Quận Tân Bình</div>
        </div>
        <div className="flex flex-col space-y-4 ml-8">
          <span className="font-semibold text-lg sticky top-0">Số Điện Thoại</span>
          <div className="text-sm mt-0">0909421338</div>
          <span className="font-semibold text-lg space-x-2 sticky top-0">Số Tài Khoản</span>
          <div className="text-sm mt-0">Ngân Hàng ACB</div>
          <div className="text-sm mt-0">STK: 012345678</div>
        </div>
      </section>
    </div>
  );
};

export default CustomerInfoSection;















// import React from 'react';

// type Props = {};

// const CustomerInfoSection = (props: Props) => {
//   return (
//     <div className="fixed top-40 left-0 right-0 z-10 flex justify-center mt-5">
//       <section className="border border-black p-4 w-full flex justify-between">
//         <div>
//           <span className="font-semibold text-xl">Customer Name</span>
//           <div className="mt-2">Customer</div>
//         </div>
//         <div>
//           <span className="font-semibold text-xl">Phone Number</span>
//           <div className="mt-2">Customer</div>
//         </div>
//       </section>
//     </div>
    
//   );
// };

// export default CustomerInfoSection;