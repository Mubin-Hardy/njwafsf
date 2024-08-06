import { WandrImage } from '@/components/wrapper';
import { v4 as uuidv4 } from 'uuid';

export default function index() {
  const srcObject = [
    {
      src: 'https://images.unsplash.com/photo-1675458884693-9322658334d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      style: 'object-cover rounded-l-lg',
      alt: 'image',
    },
    {
      src: 'https://images.unsplash.com/photo-1675458884693-9322658334d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      style: 'object-cover rounded-tr-lg',
      alt: 'image',
    },
    {
      src: 'https://images.unsplash.com/photo-1675458884693-9322658334d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      style: 'object-cover rounded-br-lg',
      alt: 'image',
    },
  ];
  const amenities = [
    {
      name: 'High speed Wi-fi',
    },
    {
      name: 'Air-conditioning',
    },
    {
      name: 'Parking',
    },
    {
      name: 'Activities',
    },
    {
      name: 'Coworking',
    },
    { name: '24/7 reception' },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto my-12">
        {/* Images */}
        <div className="mx-14">
          <div className="flex justify-center gap-4 items-center ">
            <WandrImage
              baseStyle="w-[847px] h-[440px]"
              srcObject={srcObject}
              mainSrcIdx={0}
            />
            <div className="flex justify-center items-center flex-col gap-4">
              <WandrImage
                baseStyle="w-[305px] h-[212px]"
                srcObject={srcObject}
                mainSrcIdx={1}
              />
              <WandrImage
                baseStyle="w-[305px] h-[212px]"
                srcObject={srcObject}
                mainSrcIdx={2}
              />
            </div>
          </div>
        </div>
        {/* Property desc */}
        <div className="my-12 mx-14">
          <h1 className="font-manrope text-[40px] leading-[56px] text-left font-bold">
            <span>Wandr &nbsp;</span>
            <span className="text-BrandRed-500">Coorg</span>
          </h1>
          <div className="flex justify-between items-center my-4">
            <div className="max-w-md text-left">
              <p className="font-inter font-bold mb-2">Madikeri, Karnataka</p>
              <p>
                We&apos;ve got kpis for that 4-blocker, for re-inventing the
                wheel prethink, but open door policy. Shelfware win-win-win post
                launch performance review win-win-win, or increase the
                pipelines. Optimize for search get all your ducks in a row, nor
                this is meaningless fast track we need this overall to be busier
                and more active.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {amenities.map((item) => {
                return (
                  <div key={uuidv4()}>
                    <div></div>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* book Room */}
      <div className="bg-BrandRed-50">
        <div className="max-w-7xl mx-auto">
          <div className="mx-14">
            <p className="font-manrope font-bold text-3xl">Rooms</p>
          </div>
        </div>
      </div>
    </div>
  );
}
