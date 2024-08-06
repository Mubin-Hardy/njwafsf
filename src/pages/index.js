import { Logo } from '@/assets/index';
import { Button, Input } from '@/components/elements';
import Container from '@/components/layout/Container/Container';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import * as yup from 'yup';

//clean form code

export default function Home() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Please enter a valid Email')
        .required('Email is Required'),
    }),
    // onSubmit: () => {},
  });
  return (
    <Container className="font-inter">
      <div>
        <Logo
          className="w-[137px] h-[32px] my-8 ml-4 sm:hidden"
          alt="Wandr logo"
        />
        <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-items-end">
          <div className="w-full h-[394px] sm:h-[500px] md:h-[500px] lg:w-1/2 lg:h-screen xl:w-3/5 relative">
            <Image
              className="object-cover object-bottom md:object-center"
              src="/static/images/bg_img.jpeg"
              alt="Vacation gateway in Coorg"
              fill
              priority
            />
          </div>
          <section className="bg-white relative z-10 rounded-t-3xl text-center py-8 px-4 -mt-11 overflow-y-auto lg:w-[625px] lg:m-0 lg:ml-14 lg:text-left lg:flex lg:flex-col lg:h-screen lg:justify-end lg:items-start">
            <div>
              <Logo
                className="w-[137px] h-[32px] my-8 lg:my-10 ml-4 hidden sm:mx-auto sm:block lg:mx-0 lg:w-[232px] lg:h-[54px]"
                alt="Wandr logo"
              />
              <h1
                className={`leading-[1.43] text-[28px] lg:text-5xl font-bold font-manrope`}
              >
                Travel. Work. Relax.
              </h1>
              <p className="text-lg mt-4 lg:mt-6">
                Coming soon at your favorite locations
              </p>
              <form
                onAbort={formik.handleSubmit}
                className="w-auto mx-auto mt-6 lg:mt-8 sm:w-full sm:flex min-h-[80px] sm:justify-center sm:items-start xl:justify-start"
              >
                <Input
                  classes="w-full sm:w-[345px]  "
                  label="Enter email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                  error={
                    formik.touched.email && formik.errors.email ? true : false
                  }
                  helperText={
                    formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : null
                  }
                />
                <Button
                  className="w-full sm:w-[107px] mt-4 sm:mt-0 sm:ml-4"
                  content="Notify me"
                  clickHandler={(e) => {
                    e.preventDefault();
                  }}
                />
              </form>
            </div>
            <div className="mt-8 lg:mt-[160px] xl:mt-[283px]">
              <Link
                href="/privacy-policy"
                className="mt-4 font-semibold text-base leading-[1.5]"
              >
                Privacy policy
              </Link>
              <p className="text-base mt-4 leading-[1.5]">
                ©2022 Samasth Living Private Limited
              </p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
