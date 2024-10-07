"use client";
import React from "react";
import { Suspense } from "react";
import Loading from "../components/Loading/Loading";

const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="container mx-auto px-4 py-10 dark:text-gray-200 dark:bg-gray-900">
          <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 mb-6 dark:text-gray-300">
            We respect the privacy of all our users and are committed to
            protecting it in all respects. We constantly strive to offer a
            holistic internet experience to our users. The information about the
            user as collected by us is:
            <br />
            (a) information supplied by users and
            <br />
            (b) information automatically tracked while navigating.
            <br />
            By using our website, you give consent for the collection, storage,
            and use of your personal information provided thereby (including any
            changes thereto as provided by you) for any of the services that we
            offer.
          </p>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            User Information
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6 dark:text-gray-300">
            To avail certain services on our websites, users are required to
            provide certain information for the registration process, namely:
            <br />
            i) name,
            <br />
            ii) email address,
            <br />
            iii) sex,
            <br />
            iv) age,
            <br />
            v) pincode, and
            <br />
            vi) testimonial.
            <br />
            The information as supplied by the users enables us to improve our
            website and provide you with the most user-friendly experience.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6 dark:text-gray-300">
            All required information may use the above-said User Information to
            maintain, protect, and improve its services (including advertising
            services) and for developing new services.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6 dark:text-gray-300">
            Such information will not be considered sensitive if it is freely
            available and accessible in the public domain or is furnished under
            the Right to Information Act, 2005 or any other law for the time
            being in force.
          </p>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            Information Sharing
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6 dark:text-gray-300">
            We share the sensitive personal information within the office
            without obtaining the prior consent of the user in the following
            limited circumstances:
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6 dark:text-gray-300">
            We share such information within the Clinic office and with officers
            and employees for the purpose of processing personal information on
            its behalf. We also ensure that the recipients of such information
            agree to process it based on our instructions and in compliance with
            this Privacy Policy and any other appropriate confidentiality and
            security measures.
          </p>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            Accessing and Updating Personal Information
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6 dark:text-gray-300">
            <span className="text-2xl font-bold mb-4 dark:text-white">
              INFORMATION SECURITY
            </span>
            <span className="text-lg leading-relaxed text-gray-700 mb-6 dark:text-gray-300">
              We provide sufficient security measures to protect against
              unauthorized access to or unauthorized alteration, disclosure or
              destruction of data. These include internal reviews of our data
              collection, storage and processing practices and security
              measures, including appropriate encryption and physical security
              measures to guard against unauthorized access to systems where we
              store personal data. All information gathered on this website is
              securely stored within our controlled database. The database is
              stored on servers secured behind a firewall; access to the servers
              is password-protected and is strictly limited. However, as
              effective as our security measures are, no security system is
              impenetrable. We cannot guarantee the security of our database,
              nor can we guarantee that information you supply will not be
              intercepted while being transmitted to us over the Internet. And,
              of course, any information you include in a posting to the
              discussion areas is available to anyone with Internet access.
              <br />
              However the internet is an ever evolving medium. We may change our
              privacy policy from time to time to incorporate necessary changes
              in future. Our use of any information gathered by us will always
              be consistent with the policy under which the information was
              collected, regardless of what the new policy may be.
              <br />
              In the event you have any grievance relating to the processing of
              information provided by you, You can contact us on our e-mail or
              our registered address.
            </span>
          </p>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            We request you to please provide the following information while you
            lodge your complaint:
          </h2>
          <ul>
            <li>i. Identification of the information provided by you</li>
            <li>
              ii. Clear statement as to whether the information is personal
              information or sensitive personal information
            </li>
            <li>iii. Your address, telephone number or e-mail address.</li>
            <li>
              iv. A statement that you have a good faith and belief that the
              information has been processed incorrectly or disclosed without
              authorization, as the case may be.
            </li>
            <li>
              v. A statement, under penalty of perjury, that the information in
              the notice is accurate, and that the information being complained
              about belongs to you. 
            </li>
          </ul>
        </div>
      </Suspense>
    </>
  );
};

export default page;
