import React from 'react';

export const Home = () => {

  return (
    <>
  {/* Hero Section */}
  <section id="hero">
    {/* Flex Container */}
    <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
      {/* Left item */}
      <div className="flex flex-col mb-30 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-3xl font-bold text-center md:text-4xl md:text-left">
          CCBS bring every child together to build better future
        </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Cedar Christian Bilingual School is located at Cotonou Aibatin. Its mision is to help the children discover their talent for a better society building.
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="/registration"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
      {/* Image */}
      <div className="md:w-1/2">
        <img src="./img/sch.jpg" className='rounded-lg' alt="" />
      </div>
    </div>
  </section>
  {/* Features Section */}
  <section id="features">
    {/* Flex container */}
    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
      {/* What's Different */}
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
          What's different about CCBS?
        </h2>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Our bilingual programe is one of the best in the world. We take the children English and French 
          We alowed the children to freely develop their skills in the area they are best. 
        </p>
      </div>
      {/* Numbered List */}
      <div className="flex flex-col space-y-8 md:w-1/2">
        {/* List Item 1 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Heading */}
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                01
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
               1. What the student get after completing?
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
             What the student get after completing?
            </h3>
            <p className="text-darkGrayishBlue">
             The student not only write exam in both languages, they are good in using both language to do everything. 
            </p>
          </div>
        </div>
        {/* List Item 2 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Heading */}
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                02
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                The tutors experience and qualifications.
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
            The tutors experience and qualifications.
            </h3>
            <p className="text-darkGrayishBlue">
              Not like other bilingual school where by the teachers speak only one language, we make sure before engaging any teacher, we see that he / she can speak or teach in both language.
             All our tutors are university graduate with practical teaching experience not less than two years.
            </p>
          </div>
        </div>
        {/* List Item 3 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Heading */}
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                03
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Other benefit the children get while in CCBS.
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
            Other benefit the children get while in CCBS.
            </h3>
            <p className="text-darkGrayishBlue">
            Yes , every parent will like to know the reason taking the ward to CCBS. There is no block header child, we teach teach the children with the best method use in advance countries. We are affiliate to Orion Christian Academy and CCBS USA, Tanzania.
            We have intenet for for the children to learn how to research.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section id="testimonials">
    {/* Container to heading and testm blocks */}
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center">
        What parent say about CCBS.
      </h2>
      {/* Testimonials Container */}
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        {/* Testimonial 1 */}
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
          <img src="img/avatar-anisha.png" className="w-16 -mt-14" alt="" />
          <h5 className="text-lg font-bold">Agbaza Olivia</h5>
          <p className="text-sm text-darkGrayishBlue">
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
        {/* Testimonial 2 */}
        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
          <img src="img/avatar-ali.png" className="w-16 -mt-14" alt="" />
          <h5 className="text-lg font-bold">Evelyn Tagbor</h5>
          <p className="text-sm text-darkGrayishBlue">
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>
        {/* Testimonial 3 */}
        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
          <img src="img/avatar-richard.png" className="w-16 -mt-14" alt="" />
          <h5 className="text-lg font-bold">Gbedji Anthony</h5>
          <p className="text-sm text-darkGrayishBlue">
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
      </div>
    </div>
    <br ></br>
  </section>
  {/* CTA Section */}
  <section id="cta" className="bg-brightRed">
    {/* Flex Container */}
    <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
      {/* Heading */}
      <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
        Join other parents to make your children enjoy these grace.
      </h2>
      {/* Button */}
      <div>
        <a
          href="/registration"
          className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
        >
          Get Started
        </a>
      </div>
    </div>
  </section>

</>

  )
};
