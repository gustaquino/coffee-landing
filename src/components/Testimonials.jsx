import React from 'react';

const Testimonials = () => {
  return (
    <div className="items-center w-full h-full  bg-black/95 px-4 py-8">
      <div>
        <h1 className="text-white text-center text-4xl font-bold uppercase">
          Testimonials
        </h1>
      </div>
      <div className="py-2"></div>
      <div className="flex flex-col md:flex-row md:justify-center  justify-around gap-5">
        <div className="flex-1 rounded-lg shadow-md bg-white/90 border border-white/10">
          <div className="p-5" id="testimonials">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              Santiago at <span className="text-[#1DA1F2]">@Twitter</span>
            </h5>
            <p className="mb-3 font-normal text-bloack">
              My favorite espresso. Anyone who enjoys a good espresso should
              definitely order their espresso!! And its clean, like all their
              coffee; no added poisons. Can't beat that. Enjoy!!
            </p>
          </div>
        </div>
        <div className="flex-1  rounded-lg shadow-md bg-white/90 border border-white/10">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              Paulo at <span className="text-[#833AB4]">@Instagram</span>
            </h5>
            <p className="mb-3 font-normal text-black">
              I have been a bit slack in the coffee ordering as of late...the
              other day my 17 year old got all over me saying, "stop buying
              average coffee just because you have coupons and get back to
              ordering the best coffee around :)
            </p>
          </div>
        </div>
        <div className="flex-1 rounded-lg  shadow-md bg-white/90 border border-white/10">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              Joao at <span className="text-[#4267B2]">@Facebook</span>
            </h5>
            <p className="mb-3 font-normal text-black">
              Have you ever wished that coffee could taste as good as the aroma?
              Mostly I am disappointed. But your coffee tastes as good as it
              smells. It's the best coffee I have ever had... period!
            </p>
          </div>
        </div>
      </div>
      <div className="py-2"></div>
      <div className="flex flex-col md:flex-row md:justify-center  justify-around gap-5">
        <div className="hidden md:flex flex-1 rounded-lg shadow-md bg-white/90 border border-white/10">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              Felipe at <span className="text-[#ff0050]">@Tiktok</span>
            </h5>
            <p className="mb-3 font-normal text-black">
              My favorite espresso. Anyone who enjoys a good espresso should
              definitely order their espresso!! And its clean, like all their
              coffee; no added poisons. Can't beat that. Enjoy!!
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-1   rounded-lg shadow-md bg-white/90 border border-white/10">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              Rodrigo at <span className="text-[#FFFC00]">@Snapchat</span>
            </h5>
            <p className="mb-3 font-normal text-black">
              I have been a bit slack in the coffee ordering as of late...the
              other day my 17 year old got all over me saying, "stop buying
              average coffee just because you have coupons and get back to
              ordering the best coffee around :)
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-1  rounded-lg  shadow-md bg-white/90 border border-white/10">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              Joao at <span className="text-[#FF0000]">@Youtube</span>
            </h5>
            <p className="mb-3 font-normal text-black">
              Have you ever wished that coffee could taste as good as the aroma?
              Mostly I am disappointed. But your coffee tastes as good as it
              smells. It's the best coffee I have ever had... period!
            </p>
          </div>
        </div>
      </div>
      <div className="py-2"></div>
      <div className="flex  flex-col md:flex-row md:justify-center  justify-around gap-5">
        <div className="hidden md:flex flex-1  rounded-lg shadow-md bg-white/90 border border-white/1">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              Gabriel at <span className="text-[#00c300]">@LINE</span>
            </h5>
            <p className="mb-3 font-normal text-black">
              My favorite espresso. Anyone who enjoys a good espresso should
              definitely order their espresso!! And its clean, like all their
              coffee; no added poisons. Can't beat that. Enjoy!!
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-1   rounded-lg shadow-md bg-white/90 border border-white/10">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              Aleksandr at <span className="text-[#0077b5]">@Linkedin</span>
            </h5>
            <p className="mb-3 font-normal text-black">
              I have been a bit slack in the coffee ordering as of late...the
              other day my 17 year old got all over me saying, "stop buying
              average coffee just because you have coupons and get back to
              ordering the best coffee around :)
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-1  rounded-lg  shadow-md bg-white/90 border border-white/10">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              Bruno at <span className="text-[#7289da]">@Discord</span>
            </h5>
            <p className="mb-3 font-normal text-black">
              Have you ever wished that coffee could taste as good as the aroma?
              Mostly I am disappointed. But your coffee tastes as good as it
              smells. It's the best coffee I have ever had... period!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
