"use client";
import React from "react";
import { Suspense } from "react";
import Loading from "../components/Loading/Loading";

const page = () => {
  return (
    <>
    <Suspense fallback={<Loading />}>
      <div
        className="mceNonEditable  bg-gray-100 dark:bg-gray-900 p-6"
        data-src="TERMS_CONDITIONS"
      >
         <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
         Terms & Conditions
        </h1>
        <p className="font-bold dark:text-white">1. Introduction</p>
        <p className="dark:text-white">
          These terms and conditions govern your use of our website; by using
          our website, you accept these terms and conditions in full. If you
          disagree with any part of these terms and conditions, do not use our
          website.
        </p>
        <p className="font-bold dark:text-white">
          2. Intellectual property rights
        </p>
        <p className="dark:text-white">
          Unless otherwise stated, we own the intellectual property rights in
          the website and material on the website. Subject to the license below,
          all these intellectual property rights are reserved.
        </p>
        <p className="font-bold dark:text-white">3. License to use website</p>
        <p className="dark:text-white">
          You may view, download, edit content, and print pages on the website
          for your own personal use, subject to the restrictions below.
        </p>
        <p className="dark:text-white">
          You must not:
          <br />
          a. republish material from this website (including republication on
          another website);
          <br />
          b. sell, rent or otherwise sub-license material available on the
          website;
          <br />
          c. reproduce, duplicate, copy or otherwise exploit material on our
          website for any commercial purpose;
          <br />
          d. redistribute material from this website except for content
          specifically and expressly made available for redistribution (such as
          our newsletter).
          <br />
        </p>
        <p className="font-bold dark:text-white">4. Limitations of liability</p>
        <p className="dark:text-white">
          The information on this website is provided free-of-charge, and you
          acknowledge that it would be unreasonable to hold us liable in respect
          of this website and the information on it.
          <br />
          <br />
          Whilst we endeavour to ensure that the information on this website is
          correct, we do not warrant its completeness or accuracy; nor do we
          commit to ensure that the website remains available or that the
          material on the website is kept up-to-date.
          <br />
          <br />
          To the maximum extent permitted by applicable law we exclude all
          representations, warranties and conditions (including, without
          limitation, the conditions implied by law of satisfactory quality,
          fitness for purpose and the use of reasonable care and skill).
          <br />
          <br />
          Our liability is limited and excluded to the maximum extent permitted
          under applicable law.We will not be liable for any direct or indirect
          loss or damage arising under these terms and conditions or in
          connection with our website, whether arising in tort, contract, or
          otherwise.Without limiting the generality of the foregoing exclusion,
          we will not be liable for any loss of profit, contracts, business,
          goodwill, data, income, revenue or anticipated savings arising under
          terms and conditions or in connection with our website, whether direct
          or indirect, and whether arising in tort, contract, or otherwise.
          <br />
          <br />
          However, nothing in these terms and conditions shall exclude or limit
          our liability for fraud, for death or personal injury caused by our
          negligence, or for any other liability, which cannot be excluded or
          limited under applicable law.
        </p>
        <p className="font-bold dark:text-white">5. Restricted access</p>
        <p className="dark:text-white">
          Access to certain areas of our website is restricted. We reserve the
          right to restrict access to other areas of our website, or indeed our
          whole website, at our discretion.
          <br />
          <br />
          If we provide you with a user ID and password to enable you to access
          restricted areas of our website or other content or services, you must
          ensure that that user ID and password is kept confidential.You accept
          responsibility for all activities that occur under your user ID or
          password.
          <br />
          <br />
          We may disable your user ID and password at our sole discretion or if
          you breach any of the policies or terms governing your use of our website or any other contractual obligation you owe to us.
        </p>
      
<div className="font-bold dark:text-white">
          6. Data Protection
        </div>
        <p className="dark:text-white">
          We have a firm commitment to protect your rights to privacy and outline below how we collect and use information about you so that you can make an informed choice about using the website.
        </p>
        <p className="dark:text-white">
          We will obtain your personal data when you visit our website, to help you build your website. This is to allow us to send you other related information in the future. We do not sell, trade or offer this information to others.
        </p>
        <p className="dark:text-white">
          We automatically collect some data about our users&apos; browser actions and patterns. This is aggregate data that does not identify any individual, but instead aids in improving our understanding of our users and their preferences. It also helps us develop our website and audit its use.
        </p>
        <p className="dark:text-white">
          This website uses cookies, a small piece of information stored on your computer in the form of a file, to allow you to access restricted areas and to monitor usage by tracking which URLs are accessed and the sequence in which they are accessed. We use Google Analytics to analyze use of the website. The information collected will not include any information from which you will be identifiable. You can set up your browser to reject cookies, although some functionality of the website may be impaired.
        </p>
        <p className="dark:text-white">
          By accessing this website, you give your consent to us in collecting the aforementioned data.
        </p>
        <div className="font-bold dark:text-white">
          7. Variation
        </div>
        <p className="dark:text-white">
          We may revise these terms and conditions from time-to-time. Please check this page regularly to ensure you are familiar with the current version.
        </p>
  
        <p className="font-bold dark:text-white">
          8. Entire agreement
        </p>
        <p className="dark:text-white">
          These terms and conditions, together with our privacy policy, constitute the entire agreement between you and us in relation to your use of our website, and supersede all previous agreements in respect of your use of this website.
        </p>
        <p className="font-bold dark:text-white">
          9. Law and jurisdiction
        </p>
        <p className="dark:text-white">
          This notice will be governed by and construed in accordance with Indian Cyber Law, and any disputes relating to this notice shall be subject to the exclusive jurisdiction of the courts of Karnataka.
        </p>
        <p className="font-bold dark:text-white">
          10. Our contact details
        </p>
        <p className="dark:text-white">
          Our registered address is on our <a href="./contact" data-no-turbolink="" data-ajax="false">Contact Us</a> page. You can contact us on our e-mail.
        </p>
        <p className="font-bold dark:text-white">
          11. Use of cookies on this website
        </p>
        <p className="dark:text-white">
          A cookie is a small file saved to a users device when the user accesses certain websites. These cookies can then be read when a user moves around the site and each subsequent time the user visits the site, depending on the type of cookie used. Cookies are useful as they can allow a website to store information about a user, such as whether they are logged into a website or for analytical purposes to track visits to a website.
        </p>

      </div>
      </Suspense>
    </>
  );
};

export default page;
