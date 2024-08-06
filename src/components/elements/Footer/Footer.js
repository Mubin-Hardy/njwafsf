import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LogoIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/assets/index';

//TODO rewrite code using footer items and insert scope for dynamic content
//[ ] use tailwind order to fix the arrangement in mobile view

export default function Footer() {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-7xl lg:mx-auto ">
        <div className="mx-4 md:mx-14 py-16 lg:py-20 flex sm:flex-row flex-col justify-between items-start border-b-[1px] border-BrandNeutral-100">
          <div>
            <LogoIcon />
            <p className="text-white my-6 max-w-[246px]">
              Wandr BHIVE, 27th Main, 2nd Sector, HSR Layout, Bengaluru,
              Karnataka 560102
            </p>
            <div className="flex justify-between items-center max-w-[216px] gap-6">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <YouTubeIcon />
            </div>
          </div>
          <div className="mt-8 text-white flex justify-between items-start font-medium">
            <div className="mr-[76px] lg:mr-16">
              <div className="">
                <p className="mb-2">Travel & work</p>
                <div className="flex justify-start items-start flex-col">
                  {/* <a
                    href="/destinations"
                    className="mt-4 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
                  > */}
                  <div className="mt-4 text-BrandNeutral-200">
                    Destinations
                  </div>
                  {/* </a> */}
                  {/* <a
                    href="/team-retreat"
                    className="mt-4 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
                  > */}
                  <div className="mt-4 text-BrandNeutral-200">
                    Team Retreat
                  </div>
                  {/* </a> */}
                </div>
              </div>
              <div className="lg:hidden mt-8">
                <p className="mb-2">Useful Info</p>
                <div className="flex justify-start items-start flex-col">
                  {/* <a
                    href="/guest-policy"
                    className="mt-4 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
                  > */}
                  <div className="mt-4 text-BrandNeutral-200">
                    Guest Policy
                  </div>
                  {/* </a> */}
                  {/* <a
                    href="/booking-policy"
                    className="mt-4 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
                  > */}
                  <div className="mt-4 text-BrandNeutral-200">
                    Booking Policy
                  </div>
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div className="sm:mr-24 lg:mr-16">
              <p className="mb-2">Company</p>
              <div className="flex justify-start items-start flex-col">
                {/* <Link
                  href="/about-us"
                  className="mt-4 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
                > */}
                <div className="mt-4 text-BrandNeutral-200">
                  About Us
                </div>
                {/* </Link> */}
                {/* <Link
                  href="/contact"
                  className="mt-4 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
                > */}
                <div className="mt-4 text-BrandNeutral-200">
                  Contact
                </div>
                {/* </Link> */}
                {/* <Link
                  href="/blog"
                  className="mt-4 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
                > */}
                <div className="mt-4 text-BrandNeutral-200">
                  Blog
                </div>
                {/* </Link> */}
                {/* <Link
                  href="/join-us"
                  className="mt-4 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
                > */}
                <div className="mt-4 text-BrandNeutral-200">
                  Join Us
                </div>
                {/* </Link> */}
                {/* <Link
                  href="/media"
                  className="mt-4 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
                > */}
                <div className="mt-4 text-BrandNeutral-200">
                  Media
                </div>
                {/* </Link> */}
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="mb-2">Useful Info</p>
              <div className="flex justify-start items-start flex-col">
                {/* <Link
                  href="/guest-policy"
                  className="mt-4 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
                > */}
                <div className="mt-4 text-BrandNeutral-200">
                  Guest Policy
                </div>
                {/* </Link> */}
                {/* <Link
                  href="/booking-policy"
                  className="mt-4 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
                > */}
                <div className="mt-4 text-BrandNeutral-200">
                  Booking Policy
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 md:mx-14 mt-6 flex lg:flex-row flex-col-reverse justify-center items-start sm:items-center md:items-center md:my-0">
          <p className="mb-16 lg:my-6 text-white text-center lg:text-left w-full">
            ©2020 Samasth Living Private Limited, All rights reserved
          </p>
          <div className="flex flex-col sm:flex-row justify-between sm:justify-between w-full lg:justify-end items-start">
            {/* <Link
              href="tc"
              className="mb-6 md:my-6 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
            > */}
            <div className="mb-6 md:my-6 text-BrandNeutral-200">
              Terms and conditions
            </div>
            {/* </Link> */}
            {/* <Link
              href="tc"
              className="mb-6 md:my-6 md:ml-6 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
            > */}
            <div className="mb-6 md:my-6 md:ml-6 text-BrandNeutral-200">
              Privacy Policy
            </div>
            {/* </Link> */}
            {/* <Link
              href="tc"
              className="mb-10 md:my-6 md:ml-6 text-BrandNeutral-200 hover:text-white transition-colors duration-200"
            >
              Sitemap
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
