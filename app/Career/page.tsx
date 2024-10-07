"use client";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="dark:bg-gray-900 bg-white">
        {/* Career Guidance */}
        <h1 className="font-semibold text-center py-3 text-2xl dark:text-gray-200 ">
          CAREER GUIDANCE
        </h1>
        <div style={{ padding: "1.5rem" }}>
          {/* Image of Career Guidance */}
          <div
            className="flex items-center justify-center"
            style={{ height: "auto" }}
          >
            <Image
              height={200}
              width={300}
              src="/Career/career-guidance.webp"
              alt="Career Guidance"
              loading="lazy"
            />
          </div>
          <br />
          {/* General Guidance */}
          <div className="dark:text-gray-300 inline-block">
            <p className="font-bold text-center text-xl py-4">
              Career Guidance for 10th and 12th Standard Students.
            </p>
            Choosing a career after 10th or 12th standard is a big decision. It
            is important to choose a career that you are interested in and that
            you are good at. There are many factors to consider when choosing a
            career, such as your academic performance, your interests, your
            skills, and your financial situation.
            <br />
            Karnataka is a state with a diverse economy, so there are many
            different career options available to students. Some of the most
            popular career options in Karnataka include:
            <br />
            <br />
            When choosing a career, it is important to consider the current job
            market. Some industries are growing faster than others, and some
            jobs are in higher demand than others. It is also important to
            consider your own interests and skills. What are you passionate
            about? What are you good at?
            <br />
            <br />
            <p className="font-bold text-center text-xl py-4">
              Here is some guidance for 10th and 12th standard students :
            </p>
            <ul>
              <li>
                <strong className="font-bold  text-lg py-4">
                  Explore your options:
                </strong>
                There are many different career options available, so it is
                important to take some time to explore them. Talk to your
                parents, teachers, and career counselors. Read books and
                articles about different careers. Visit colleges and
                universities to learn more about their programs. <br />
                <br />
              </li>
              <li>
                <strong className="font-bold  text-lg py-4">
                  Consider your interests and skills:
                </strong>{" "}
                What are you passionate about? What are you good at? When
                choosing a career, it is important to choose something that you
                are interested in and that you are good at. This will make you
                more likely to succeed and be happy in your career.
              </li>
              <br />
              <li>
                <strong className="font-bold  text-lg py-4">
                  Research the job market:
                </strong>
                What are the job prospects in different industries? What jobs
                are in high demand? It is important to research the job market
                before choosing a career. This will help you to choose a career
                that has good job prospects.
              </li>
              <br />
              <li>
                <strong className="font-bold  text-lg py-4">
                  Talk to people in your chosen field:
                </strong>{" "}
                Talk to people who are working in the field that you are
                interested in. They can tell you about their work, the
                challenges and rewards of the job, and the education and
                training that you need.
              </li>
              <br />
              <li>
                <strong className="font-bold  text-lg py-4">
                  Get involved in extracurricular activities:
                </strong>
                Extracurricular activities can help you to develop your skills
                and interests. They can also help you to network with people in
                your chosen field.
              </li>
            </ul>
            <h2 className="font-bold text-center text-xl py-4">
              Here are some additional tips for students :
            </h2>
            <br />
            <ul>
              <li>
                <strong className="font-bold  text-lg py-4">
                  Consider your financial situation:
                </strong>{" "}
                Some careers require more education and training than others,
                and some careers pay more than others. It is important to
                consider your financial situation when choosing a career.
              </li>
              <br />
              <li>
                <strong className="font-bold  text-lg py-4">
                  Be flexible:
                </strong>{" "}
                The job market is constantly changing, so it is important to be
                flexible. Be open to different career options and be willing to
                relocate if necessary.
              </li>
              <br />
              <li>
                <strong className="font-bold  text-lg py-4">
                  Don&apos;t be afraid to change your mind:
                </strong>
                It is perfectly normal to change your mind about your career
                choice. If you realize that you are not happy in your chosen
                career, it is not too late to change.
              </li>
            </ul>
            If you are a student and you are not sure what career to choose,
            there are many resources available to help you. You can talk to your
            parents, teachers, and career counselors. You can also read books
            and articles about different careers. Visit colleges and
            universities to learn more about their programs. And you can talk to
            people who are working in the field that you are interested in.
            Choosing a career is a big decision, but it is also an exciting one.
            By taking the time to explore your options, consider your interests
            and skills, and research the job market, you can choose a career
            that is right for you.
            <p />
          </div>
          <hr className="my-5" />
          {/* What after 10th? */}
          <div className="dark:text-gray-300">
            <h1 className="font-bold text-center text-xl py-4">
              What after 10th ?
            </h1>
            {/* Image of What after 10th? */}
            <div
              className="flex items-center justify-center py-5"
              style={{ height: "auto" }}
            >
              <Image
                height={200}
                width={300}
                src="/Career/WhatAfter10.webp"
                alt="What after 10th?"
                loading="lazy"
              />
            </div>
            After 10th , students can pursue Pre-University Course (PUC) for 2
            years before moving on to undergraduate studies. PUC is divided into
            three streams: <strong>Science, Commerce, and Arts.</strong>
            <br />
            <br />
            <p className="font-bold text-center text-xl py-4">Science</p>
            <p>
              Science stream is for students who are interested in pursuing a
              career in engineering, medicine, or pure sciences. Popular subject
              combinations in the science stream include:
            </p>
            <ul className="list-disc list-inside flex gap-3 flex-col pb-4">
              <li>Physics, Chemistry, Mathematics, Biology (PCMB)</li>
              <li>Physics, Chemistry, Mathematics, Computer Science (PCMC)</li>
              <li>Physics, Chemistry, Mathematics, Electronics (PCME)</li>
            </ul>
            <p className="font-bold text-center text-xl py-4">Commerce</p>
            <p>
              {" "}
              Commerce stream is for students who are interested in pursuing a
              career in business, accounting, finance, or management. Popular
              subject combinations in the commerce stream include:
            </p>
            <ul className="list-disc list-inside flex gap-3 flex-col pb-4">
              <li>
                Accountancy, Business Studies, Economics, Mathematics (ABEM)
              </li>
              <li>
                Accountancy, Business Studies, Economics, Statistics (ABES)
              </li>
              <li>
                Accountancy, Business Studies, Economics, Computer Science
                (ABEC)
              </li>
              <li>
                Accountancy, Business Studies, Statistics, Computer Science
                (ABSC)
              </li>
            </ul>
            <p className="font-bold text-center text-xl py-4">Arts</p>
            <p>
              Arts stream is for students who are interested in pursuing a
              career in the humanities, social sciences, or fine arts. Popular
              subject combinations in the arts stream include:
            </p>
            <ul className="list-disc list-inside py-4 flex gap-3 flex-col">
              <li>History, Economics, Sociology, Psychology (HESP)</li>
              <li>History, Economics, Political Science, Sociology (HEPS)</li>
              <li>History, Economics, Business Studies, Accountancy (HEBA)</li>
              <li>
                Computer Science, Economics, Business Studies, Accountancy
                (CEBA)
              </li>
              <li>
                Basic Maths, Economics, Business Studies, Accountancy (MEBA)
              </li>
              <li>
                Statistics, Economics, Business Studies, Accountancy (SEBA)
              </li>
            </ul>
            <p>
              Students can choose the stream and subject combination that best
              suits their interests and career goals. It is important to note
              that some subject combinations are required for certain
              undergraduate programs. For example, students who want to study
              medicine need to have PCMB in PUC.
            </p>
            <h4>
              When choosing a PUC stream and subject combination, it is
              important to consider the following factors:
            </h4>
            <br />
            <h3>Academic performance:</h3>
            <p>
              {" "}
              Students should choose a stream and subject combination that they
              are good at and that they are likely to succeed in.
            </p>
            <ul>
              <li>
                <strong>Interests</strong> : students should choose a stream and
                subject combination that they are interested in. This will make
                them more likely to be successful and happy in their studies.
              </li>
              <li>
                <strong>Career goals</strong>: Students should choose a stream
                and subject combination that will prepare them for their desired
                career.
              </li>
            </ul>
            Students can get help choosing a PUC stream and subject combination
            from their parents, teachers, and career counselors.
          </div>
          <hr className="my-5" />
          {/* What after 12th? */}
          <div className="dark:text-gray-300">
            <h1 className="font-bold text-center text-xl py-4">
              What after 12th ?
            </h1>
            {/* Image for  12th*/}
            <div
              className="flex items-center justify-center py-5"
              style={{ height: "auto" }}
            >
              <Image
                height={200}
                width={300}
                src="/Career/WhatAfter12.webp"
                alt="What after 12th?"
                loading="lazy"
              />
            </div>
            <br />
            <div className="text">
              <p>
                After completing PUC, students can choose from a variety of
                bachelor&apos;s degree programs. The best bachelor&apos;s degree program
                for a student will depend on their interests, skills, and career
                goals.
              </p>
              <h4 className="font-bold text-center text-xl py-4">
                Here is some guidance for students in Karnataka who are choosing
                a bachelor&apos;s degree program:
              </h4>
              <ul className="flex flex-col py-4 list-disc list-inside">
                <li>
                  <strong className="font-bold  text-lg py-4">
                    Consider your interests and skills.
                  </strong>
                  What are you passionate about? What are you good at? When
                  choosing a bachelor&apos;s degree program, it is important to
                  choose something that you are interested in and that you are
                  good at. This will make you more likely to succeed and be
                  happy in your studies.
                </li>
                <li>
                  <strong className="font-bold text-lg py-4">
                    Research different bachelor&apos;s degree programs.
                  </strong>{" "}
                  are many different bachelor&apos;s degree programs available, so it
                  is important to take some time to research them. Talk to your
                  parents, teachers, and career counselors. Read books and
                  articles about different bachelor&apos;s degree programs. Visit
                  colleges and universities to learn more about their programs.
                </li>
                <li>
                  <strong className="font-bold  text-lg py-4">
                    {" "}
                    Consider your career goals.
                  </strong>{" "}
                  What do you want to do after you graduate? Some bachelor&apos;s
                  degree programs will prepare you for specific careers, while
                  others will give you a more general education. It is important
                  to consider your career goals when choosing a bachelor&apos;s
                  degree program.
                </li>
              </ul>
              <h4 className="font-bold text-center text-xl py-4">
                Here are some specific bachelor&apos;s degree programs that are
                popular in Karnataka:
              </h4>
              <ul className="flex flex-col py-4 list-disc list-inside">
                <li>
                  <strong className="font-bold  text-lg py-4">
                    Engineering:
                  </strong>{" "}
                  Bachelor of Engineering (BE), Bachelor of Technology (BTech)
                </li>
                <li>
                  <strong className="font-bold  text-lg py-4">Medicine:</strong>{" "}
                  MBBS, BDS
                </li>
                <li>
                  <strong className="font-bold  text-lg py-4">
                    Management:
                  </strong>
                  Bachelor of Business Administration (BBA), Bachelor of
                  Commerce (BCom)
                </li>
                <li>
                  <strong className="font-bold  text-lg py-4">Law:</strong>{" "}
                  Bachelor of Laws (LLB)
                </li>
                <li>
                  <strong className="font-bold  text-lg py-4">Teaching:</strong>{" "}
                  Bachelor of Education (BEd)
                </li>
                <li>
                  <strong className="font-bold  text-lg py-4">
                    Accounting and finance:
                  </strong>{" "}
                  Bachelor of Commerce (BCom) with specialization in Accounting
                  and Finance
                </li>
                <li>
                  <strong className="font-bold  text-lg py-4">
                    {" "}
                    Arts and humanities:
                  </strong>
                  Bachelor of Arts (BA) with specialization in a subject such as
                  English, History, Political Science, Economics, or Sociology
                </li>
                <li>
                  <strong className="font-bold  text-lg py-4">
                    Agriculture:
                  </strong>{" "}
                  Bachelor of Science (BSc) in Agriculture
                </li>
                <li>
                  <strong className="font-bold  text-lg py-4">
                    Tourism and hospitality:
                  </strong>
                  Bachelor of Hotel Management (BHM), Bachelor of Tourism
                  Management (BTM)
                </li>
                <li>
                  <strong>
                  Creative industries :
                  </strong>
                  Bachelor of Fine Arts (BFA), Bachelor of Design (BDes)
                </li>
                <li>
                  <strong className="font-bold  text-lg py-4">
                    {" "}
                    Entrepreneurship:
                  </strong>{" "}
                  Bachelor of Business Administration (BBA) with specialization
                  in Entrepreneurship
                </li>
              </ul>
              <p>
                Students can also choose to pursue a bachelor&apos;s degree program
                outside of Karnataka. There are many excellent colleges and
                universities all over India and the world.
              </p>
              <h4>
                When choosing a bachelor&apos;s degree program, it is important to
                consider the following factors:
              </h4>
              <ul>
                <li>
                  <strong className="font-bold  text-lg py-4">Cost:</strong> The
                  cost of a bachelor&apos;s degree program can vary depending on the
                  institution and the program. It is important to choose a
                  program that is affordable for you and your family.
                </li>
                <li>
                  <strong className="font-bold  text-lg py-4">
                    Admission requirements:
                  </strong>{" "}
                  Each bachelor&apos;s degree program has its own admission
                  requirements. It is important to check the admission
                  requirements for the programs that you are interested in.
                </li>
                <li>
                  <strong className="font-bold  text-lg py-4">
                    Job prospects:
                  </strong>{" "}
                  Some bachelor&apos;s degree programs have better job prospects than
                  others. It is important to research the job prospects for the
                  programs that you are interested in.
                </li>
              </ul>
              <p>
                Students can get help choosing a bachelor&apos;s degree program from
                their parents, teachers, and career counselors. They can also
                visit the websites of colleges and universities to learn more
                about their programs.
              </p>
            </div>
          </div>{" "}
          <br />
          <br />
          <hr />
          {/* PG or Professionl Courses */}
          <div className="dark:text-gray-300">
            <h2 className="font-bold text-center text-xl py-4">
              Career Guidance for Students Planning for Professional Courses and
              Government Exams
            </h2>{" "}
            <div
              className="flex items-center justify-center py-5"
              style={{ height: "auto" }}
            >
              <Image
                height={200}
                width={300}
                src="/Career/CA.webp"
                alt="CA CMA CS"
                loading="lazy"
              />
            </div>
            <br />
           {/* CA CMA CS */}
            <section className="section">
              <h3 className="text-center py-5 text-xl font-bold">Professional Courses</h3>
              <p>
                Professional courses are specialized courses that prepare
                students for specific careers. Some of the most popular
                professional courses include:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-3 py-3">
                <li>Chartered Accountant (CA)</li>
                <li>Cost and Management Accountant (CMA)</li>
                <li>Company Secretary (CS)</li>
              </ul>
              <p>
                These courses are typically very competitive and require
                students to pass a series of exams. However, they can lead to
                highly rewarding careers in accounting, finance, and business.
              </p>
            </section>
            {/* Govt Exams */}
            <section className="section">
              <h3 className="text-center py-5 text-xl font-bold">Government Exams</h3>
              <div
              className="flex items-center justify-center py-5"
              style={{ height: "auto" }}
            >
              <Image
                height={200}
                width={300}
                src="/Career/Competitive.webp"
                alt="Competitive Exams"
                loading="lazy"
              />
            </div>
              <p>
                Government exams are competitive exams that are used to recruit
                candidates for government jobs. Some of the most popular
                government exams include:
              </p>
              <ul  className="list-disc list-inside flex flex-col gap-3 py-3">
                <li>Civil Services Examination (CSE)</li>
                <li>Staff Selection Commission (SSC) exams</li>
                <li>Banking exams</li>
                <li>Railway exams</li>
              </ul>
              <p>
                Government jobs are typically very stable and offer good
                benefits. However, they can be very competitive and can require
                extensive preparation.
              </p>
            </section>
            <br />
            <hr />
            <section className="section">
              <h2 className="text-center py-5 text-xl font-bold">Tips for Success</h2>
              <p>
                Here are some tips for success in professional courses and
                government exams:
              </p>
              <ul  className="list-disc list-inside flex flex-col gap-3 py-3">
                <li>
                  Start early. The earlier you start preparing, the better your
                  chances of success.
                </li>
                <li>
                  Create a study plan and stick to it. This will help you stay
                  on track and make sure that you cover all of the material.
                  {/*
  <li*/}
                  Find good study materials. There are many resources available,
                  including books, online courses, and coaching classes.
                </li>
                <li>
                  Practice regularly. The more you practice, the more familiar
                  you will become with the material and the better you will
                  perform on the exams.
                </li>
                <li>
                  Stay positive and motivated. It is important to stay positive
                  and motivated throughout the preparation process. Remember
                  that hard work pays off!
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
