import Container from '@/components/layout/Container/Container';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
//TODO
//Move data to mdx
export default function PrivacyPolicy() {
  const tableOfContents = [
    '1. What Personal Information do we Collect?',
    '2. We use your Personal Information for the following purposes',
    '3. To solicit a review from you',
    '4. Cookies and Other Tracking Mechanisms',
  ];
  const generateHref = (str) => {
    return str.split(' ').join('-').toLowerCase();
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          if (entry.isIntersecting) {
            document
              .querySelector(`li a[href="#${id}"]`)
              .parentElement.classList.add('text-accent-700');
          } else {
            document
              .querySelector(`li a[href="#${id}"]`)
              .parentElement.classList.remove('text-accent-700');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );
    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <Container>
        <div className={`max-w-7xl mx-auto mt-20 mb-16 font-inter`}>
          <div className="mx-5">
            <h1
              className={`text-[40px] md:text-5xl text-center font-bold leading-[68px] mb-4 font-manrope`}
            >
              Privacy Policy
            </h1>
            <p className="text-center text-lg">
              Updated on 1st December 2022 and effective from 1st December 2022
            </p>
          </div>
          <div className="flex xl:flex-row flex-col-reverse justify-between items-start mt-14 gap-8 mx-5 md:mx-14">
            <div className="xl:max-w-3xl max-w-[90vw] mx-auto break-words ">
              <p className="text-base leading-6 mb-6">
                Shantaay Workcations Private Limited., its subsidiaries, and
                affiliates (“Wandr”, “we” or “us”) provides this Privacy Policy
                (this “Policy”) to inform you of our policies and procedures
                regarding the collection, use, and disclosure of Personal
                Information we receive from users of www.wandrstays.com (the
                “Site”), our mobile applications (the “Apps”) and other products
                and services (collectively, the “Services”). This Policy also
                tells you about your rights and choices with respect to your
                Personal Information, and how you can contact us if you have any
                questions or concerns. Unless otherwise defined in this Policy,
                terms used in this Policy have the same meanings as in our Terms
                of Service:
              </p>
              <a
                className="font-bold"
                href="https://www.wandrstays.com/terms-of-service "
              >
                https://www.wandrstays.com/terms-of-service
              </a>
              <p className="text-base leading-6 my-6">
                For the purpose of this Policy, “Personal Information” means any
                information relating to an identified or identifiable
                individual.
              </p>
              <section id={generateHref(tableOfContents[0])} className="">
                <h2 className={`text-3xl font-bold font-manrope my-4`}>
                  {tableOfContents[0]}
                </h2>
                <p className="text-base leading-6 my-6">
                  Where applicable, we indicate whether and why you must provide
                  us with your Personal Information, as well as the consequences
                  of failing to do so. If you do not provide Personal
                  Information when requested, you may not be able to benefit
                  from our Services if that information is necessary to provide
                  you with them or if we are legally required to collect it. We
                  may collect Personal Information about you directly from you
                  and from third parties, as well as automatically through your
                  use of our Services.
                </p>
                <p className="text-base leading-6 my-6">
                  Information that we collect:
                </p>
                <p className="text-base leading-6 my-6">
                  <strong> Booking and check-in: </strong>When you book a stay
                  with us through the Services or become a Wandr member through
                  the Services to book an accommodation at a Wandr unit
                  (“Accommodation”), we will ask you for certain Personal
                  Information including your name, phone number, email address,
                  home postal address, date of birth, and booking information.
                  We will also ask for your email address and set password when
                  you register as a Wandr service partner via our Apps. You may
                  be asked to provide a picture and photo ID for identity
                  verification purposes at booking or at check-in.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong> Third-Party Services:</strong> We may make available
                  to you at your discretion the services of third-party service
                  providers, such as luggage storage, parking reservations, or
                  meal/grocery delivery, and rental bikes/cars. When you access
                  these providers via the Services you may be asked to provide
                  certain Personal Information, such as your name, phone number,
                  address of the submitted property, driver&apos;s licence
                  number, and/or licence plate number, which will be used by
                  these service providers in the provision of their services.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong> Payment Information: </strong>If you make a purchase
                  through the Services, your payment-related information, such
                  as credit/debit card number, UPI, or billing information, is
                  collected by our third-party payment processor on our behalf.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Personalization of your Wandr Profile: </strong>We may
                  collect any Personal Information you provide to us as part of
                  the administration and personalization of your Wandr account
                  (“Wandr Account”) profile (e.g., gender, postal code, and
                  individual preferences or demographic information). You may
                  voluntarily provide us with information about yourself so that
                  we can personalize your stays with us (e.g., the temperature
                  you prefer, whether or not you need additional services) and
                  serve you better.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Communications: </strong>If you contact us directly
                  (e.g., via Email, SMS, Whatsapp, Phone call, In-app messaging,
                  and or any Social Media Accounts), we will collect your name,
                  contact details, the content, date and time of your message
                  and any attachments thereto, and other information you may
                  directly provide to us. You may choose to submit your email
                  address and phone number on our Site to receive our updates.
                  You may also provide us with your reviews of our Services or
                  complete surveys regarding our Services. <br />
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Recruitment:</strong> If you apply for a job via the
                  “Join Us” page on the Site, we will collect your name, contact
                  details, email, phone number, and information in your resume
                  or curriculum vitae. We will also ask you to provide a link to
                  your full LinkedIn profile.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Customer service:</strong> If you reach out to us with
                  inquiries or requests, we will keep a record of how your
                  inquiry or request was handled. If you contact us via phone,
                  we may record your call for quality assurance, training, and
                  compliance purposes.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Online usage data:</strong> We may automatically
                  collect the following information about your use of our
                  Services through cookies, web beacons, and similar
                  technologies: your domain name; your browser type; operating
                  system type, name, and version; page views; links you click;
                  your IP address; location information; the length of time you
                  visit or use our Services; referring URL; access date and
                  time; mobile device ID; language information; device name and
                  model; and other information about your activities within the
                  Services and communications that we send you. Please see the
                  section “Cookies and Other Tracking Mechanisms” below for more
                  information. Where required under applicable law, we will only
                  perform such data collection with your consent.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Property usage data:</strong> We automatically collect
                  your Wandr stay history (e.g., to identify a return guest). We
                  may also automatically collect information regarding the use
                  of an Accommodation (e.g., when did you get into the
                  property). We also have access to security cameras in common
                  areas of the property (e.g., in lobbies or monitoring public
                  entrances) to ensure adequate security cover is provided.
                  Where required under applicable law, we will only collect
                  property usage data with your consent.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Wi-Fi usage data: </strong>Wandr manages the Wi-Fi
                  network. If you connect to a Wandr-managed guest Wi-Fi network
                  offered on our premises, we temporarily log certain
                  information about your connection necessary to provide and
                  secure our Wi-Fi networks, such as the IP address and MAC
                  address of the device used to connect to our network, as well
                  as the IP address of the destination to which the device is
                  connecting. We do not access the content of your electronic
                  communications when using our Wi-Fi network.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Third-party accounts integration:</strong> We may
                  obtain Personal Information about you from third-party
                  authentication and social networking services (“SNS”), such as
                  Facebook, Google, and LinkedIn, to link your Wandr Account
                  with third-party accounts (“Third Party Account”) by either:
                  (i) providing your Third Party Account login information to
                  Wandr through the Service; or (ii) allowing Wandr to access
                  your Third Party Account, as is permitted under the applicable
                  terms and conditions that govern your use of each Third Party
                  Account. We may receive from such third parties the following
                  types of Personal Information:
                </p>
                <p className="text-base leading-6 my-6">
                  Facebook: ID, cover photo, email, first name, last name, age
                  range, link, gender, location, picture, timezone, date of last
                  update, user verification.
                </p>
                <p className="text-base leading-6 my-6">
                  Google: Google ID, name, profile URL, email address.
                </p>
                <p className="text-base leading-6 my-6">
                  LinkedIn: basic profile, email address. We may also receive
                  any other information you authorize Wandr to access by
                  authorizing the SNS to provide such information.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>
                    Third-party OTA Partners and Travel services:{' '}
                  </strong>
                  We may receive your booking information via our partners
                  (e.g., MMT, Booking.com, Expedia or similar), such as your
                  name, email address, phone number, information available in
                  your user account with a third party travel service and your
                  Wandr stay information (e.g., information on the Wandr unit
                  you are staying in).
                </p>
              </section>
              <section id={generateHref(tableOfContents[1])} className="">
                <h2 className={`text-3xl font-bold font-manrope mt-10`}>
                  {tableOfContents[1]}
                </h2>

                <p className="text-base leading-6 my-6">
                  To operate, provide, and maintain our Services, to communicate
                  with you about our Services, to respond to your inquiries, to
                  fulfill our booking with you, to complete your transactions,
                  and for other customer service purposes. If you take long-term
                </p>
                <p className="text-base leading-6 my-6">
                  bookings which is more than 20 days, a thorough Background
                  verification process (BGV) will be done.
                </p>
                <p className="text-base leading-6 my-6">
                  To link your Wandr Account with Third Party Accounts to add
                  information from Third Party Accounts to your Wandr Account
                  and Wandr Account profile page. Depending on the Third Party
                  Accounts you choose and subject to the privacy settings that
                  you have set in such Third Party Accounts, you understand that
                  by granting us access to the Third Party Accounts, we will
                  access, make available, and store (if applicable and as
                  permitted by the SNS and authorized by you) the information in
                  your Third Party Accounts so that it is available on and
                  through your Wandr Account on the Site and Service.
                </p>
                <p className="text-base leading-6 my-6">
                  To tailor the content and information that we may send or
                  display to you, and to otherwise personalize your experiences
                  while using our Services, including personalizing your Wandr
                  Account profile and identifying you as a return guest to
                  provide products or services to you according to your
                  preferences We may also tailor our Services and communications
                  on the basis of your Site browsing history. Where required
                  under applicable law, we will only use your Personal
                  Information for such purposes with your consent.
                </p>
                <p className="text-base leading-6 my-6">
                  To contact you with newsletters, marketing or promotional
                  materials and other information that may be of interest to you
                  relating to Wandr or its partners, via email, SMS, and phone
                  calls. Where required under applicable law, we will only send
                  you marketing communications with your consent. We also may
                  use the information that we learn about you to assist us in
                  advertising our Services on third-party websites.
                </p>
              </section>
              <section id={generateHref(tableOfContents[2])} className="">
                <h2 className={`text-3xl font-bold font-manrope mt-10`}>
                  {tableOfContents[2]}
                </h2>
                <p className="text-base leading-6 my-6">
                  To better understand how users access and use our Services,
                  both on an aggregated and individualized basis, in order to
                  improve the quality and value of our Services, provide you
                  with a better experience, and develop new Services, and for
                  other research and analytical purposes.
                </p>
                <p className="text-base leading-6 my-6">
                  To find and prevent fraud and respond to trust and safety
                  issues that may arise.
                </p>
                <p className="text-base leading-6 my-6">
                  For compliance purposes, including enforcing our Terms of
                  Service or other legal rights, or as may be required by
                  applicable laws and regulations or requested by any judicial
                  process or governmental agency.
                </p>
                <p className="text-base leading-6 my-6">
                  For other purposes for which we provide specific notice at the
                  time the information is collected.
                </p>
                <p className="text-base leading-6 my-6">
                  During the ongoing COVID-19 pandemic, we may use the Personal
                  Information described in the section labeled “COVID-19”,
                  above, to help maintain a safe environment for our guests,
                  team members and partners who may be required to access our
                  Accommodations to provide services. Personal Information you
                  share with us related to COVID-19 may be used by Wandr to
                  determine whether to permit our team members or partners to
                  service the Accommodation during your stay as a guest and will
                  not be used or shared for any purposes unrelated to COVID-19.
                </p>
              </section>
              <section id={generateHref(tableOfContents[3])} className="">
                <h2 className={`text-3xl font-bold font-manrope mt-10`}>
                  {tableOfContents[3]}
                </h2>
                <p className="text-base leading-6 my-6">
                  We use cookies, web beacons, and log files to collect
                  information about your use of our Website and Apps, as
                  described above.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Cookies:</strong> We use “cookies” to collect
                  information. A cookie is a small data file that we transfer to
                  your computer’s hard disk for record-keeping purposes. We use
                  cookies for two purposes. First, we utilize persistent cookies
                  to save your login information for future logins to the
                  Services. Second, we utilize session ID cookies to enable
                  certain features of the Services, to better understand how you
                  interact with the Services and to monitor aggregate usage by
                  Wandr Users and web traffic routing on the Services. Unlike
                  persistent cookies, session cookies are deleted from your
                  computer when you log off from the Site and Service and then
                  close your browser. We use the following cookies:
                </p>
                <p className="text-base leading-6 my-6">
                  Google: We use Google Analytics cookies and Google Tag Manager
                  to analyze our Services. You can learn about Google’s
                  practices by going to &nbsp;
                  <a
                    className="font-bold"
                    href="https://policies.google.com/privacy/google-partners/"
                  >
                    https://policies.google.com/privacy/google-partners/
                  </a>
                  , and opt-out of them by downloading the Google Analytics
                  opt-out browser add-on available at &nbsp;
                  <a
                    className="font-bold"
                    href="https://tools.google.com/dlpage/gaoptout"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                  .
                </p>
                <p className="text-base leading-6 my-6">
                  We also use Google cookies to serve ads based on a Wandr
                  User’s prior visits to Wandr. You can learn more about these
                  cookies here and disable these cookies via Google’s Ads
                  Settings or Ad Settings for mobile apps.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Hotjar or Similar:</strong> We use Hotjar or Similar
                  in order to better understand our users’ needs and to optimize
                  this service and experience. Hotjar or Similar or Similar is a
                  technology service that helps us better understand our users’
                  experience (e.g., how much time they spend on which pages,
                  which links they choose to click, what users do and don’t
                  like, etc.) and this enables us to build and maintain our
                  service with user feedback. Hotjar or Similar uses cookies and
                  other technologies to collect data on our users’ behaviour and
                  their devices. This includes a device’s IP address (processed
                  during your session and stored in a de-identified form),
                  device screen size, device type (unique device identifiers),
                  browser information, geographic location (country only), and
                  the preferred language used to display our website. Hotjar or
                  Similar stores this information on our behalf in a
                  pseudonymized user profile. Hotjar or Similar is contractually
                  forbidden to sell any of the data collected on our behalf. For
                  further details, please see the ‘about Hotjar or Similar’
                  section of Hotjar or Similar’s support site.
                </p>
                <p className="text-base leading-6 my-6">
                  Segment.io / Similar cookies: We use Segment.io or Similar
                  cookies to analyze our Services, support your use of the
                  Services and track your activity on our Website and Apps. More
                  on Segment.io can be found at
                  https://segment.com/docs/legal/privacy/.
                </p>
                <p className="text-base leading-6 my-6">
                  You can instruct your browser, by changing its options, to
                  stop accepting cookies or to prompt you before accepting a
                  cookie from the websites you visit. If you do not accept
                  cookies, however, you may not be able to use all portions of
                  the Site or all functionality of the Service.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Web beacons: </strong>Our Site may contain electronic
                  images known as Web beacons (sometimes called single-pixel
                  gifs) and are used along with cookies to compile aggregated
                  statistics to analyze how our Site is used and may be used in
                  some of our emails to let us know which emails and links have
                  been opened by recipients. This allows us to gauge the
                  effectiveness of our customer communications and marketing
                  campaigns.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Log data:</strong> When you visit the Site, whether as
                  a Member or a non-registered user just browsing (any of these,
                  a “Wandr User”), our servers automatically record information
                  that your browser sends whenever you visit a website (“Log
                  Data”). This Log Data may include information such as your
                  computer’s Internet Protocol (“IP”) address, browser type or
                  the webpage you were visiting before you came to our Site,
                  pages of our Site that you visit, the time spent on those
                  pages, information you search for on our Site, access times
                  and dates, and other statistics. We use this information to
                  monitor and analyze use of the Site and the Service and for
                  the Site’s technical administration, to increase our Site
                  functionality and user-friendliness, and to better tailor our
                  Site to our visitors’ needs.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Error reporting:</strong> We may use bug tracking
                  JavaScript notifier or other technology to analyze the
                  functioning of our Services.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Links to Other Websites:</strong> Our Site contains
                  links to other websites. If you choose to visit an advertiser
                  by clicking on a banner ad or other type of advertisement, or
                  click on another third party link, you will be directed to
                  that third party&apos;s website. The fact that we link to a
                  website or present a banner ad or other type of advertisement
                  is not an endorsement, authorization or representation of our
                  affiliation with that third party, nor is it an endorsement of
                  their privacy or information security policies or practices.
                  We do not exercise control over third party websites. These
                  other websites may place their own cookies or other files on
                  your computer, collect data or solicit personal information
                  from you. Other websites follow different rules regarding the
                  use or disclosure of the personal information you submit to
                  them. We encourage you to read the privacy policies or
                  statements of the other websites you visit. Some portions of
                  the Wandr Platform implement Google Maps/Earth mapping
                  services, including Google Maps API(s). Your use of Google
                  Maps/Earth is subject to Google’s terms of use, which
                  incorporates Google’s Privacy Policy.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Data Security:</strong> Wandr is very concerned with
                  safeguarding your Personal Information. When you enter
                  particularly sensitive information (such as a credit card
                  number) on our registration or reservation forms, we encrypt
                  that information using secure socket layer technology (SSL).
                  We follow generally accepted industry standards to protect the
                  Personal Information submitted to us, both during transmission
                  and once we receive it. No method of transmission over the
                  Internet, or method of electronic storage, is 100% secure,
                  however. Therefore, we cannot guarantee its absolute security.
                  If you have any questions about security on our Site and
                  Services, you can contact us. We will make any legally
                  required disclosures of any breach of the security,
                  confidentiality, or integrity of your unencrypted
                  electronically stored “personal data” (as defined in
                  applicable state statutes on security breach notification) to
                  you via email or conspicuous posting on the Site in the most
                  expedient time possible and without unreasonable delay,
                  insofar as consistent with (i) the legitimate needs of law
                  enforcement or (ii) any measures necessary to determine the
                  scope of the breach and restore the reasonable integrity of
                  the data system.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Phishing:</strong> Identity theft and the practice
                  currently known as “phishing” are of great concern to Wandr.
                  Safeguarding Personal Information to help protect you from
                  identity theft is a top priority. We do not and will not, at
                  any time, request your credit card information, OTPs or your
                  Wandr Account ID, login password,
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Marketing opt-out:</strong> If you decide at any time
                  that you no longer wish to receive marketing communications
                  from us, please follow the unsubscribe instructions provided
                  in any of the communications. Please note that even if you opt
                  out of receiving promotional messages from us, you will
                  continue to receive administrative messages from us.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Changing or deleting information:</strong> All Members
                  may review, update, correct or delete the Personal Information
                  in their registration profile by contacting us at
                  support@wandrstays.com or editing the relevant part of their
                  profile. If you would like us to cancel your Wandr Account,
                  please contact us and we will attempt to accommodate your
                  request if we do not have any legal obligation or a legitimate
                  business reason to retain the information contained in your
                  Wandr Account. Please note that, if you cancel your Wandr
                  Account, any reviews you have posted via the Site will remain
                  publicly viewable via the Site. Please see below for privacy
                  contact information.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Opt out from cookies:</strong> Most Internet browsers
                  automatically accept cookies, but you may be able to change
                  the settings of your browser to stop accepting cookies or to
                  prompt you before accepting a cookie from the websites you
                  visit. If you set your browser to reject cookies, parts of our
                  website may not work for you.
                </p>
                <p className="text-base leading-6 my-6">
                  <strong>Change in Policy:</strong> we&apos;re always
                  developing and improving standards of services we provide to
                  you, this Policy may change over time. We will post the new
                  Policy online and we will change the “Last Updated” date. We
                  encourage you to periodically review this page for the latest
                  information on our privacy practices. If any modifications
                  materially change your rights, we will provide notice on the
                  Site or we will notify you by registered email.
                </p>
              </section>
            </div>
            <div
              className={`max-w-4xl font-manrope xl:sticky xl:top-14 border-b-2 border-b-BrandNeutral-600 xl:border-0 pb-8 w-full xl:w-auto`}
            >
              <h2 className="text-2xl font-bold leading-6">
                Table of Contents
              </h2>
              <ol>
                {tableOfContents.map((item) => {
                  return (
                    <li
                      className={`list-none ml-6 mt-4 list-inside font-semibold font-inter `}
                      key={uuidv4()}
                    >
                      <a href={`#${generateHref(item)}`}>{item}</a>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
