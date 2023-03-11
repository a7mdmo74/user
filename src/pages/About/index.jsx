import React from 'react';
import { Chat, Footer, Navbar } from '../../components';

const About = () => {
  return (
    <div className="bg-white min-h-screen relative">
      <Navbar />
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1495900593237-22dc861b231d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="autism"
          className="w-full h-[28rem] bg-cover"
        />
        <div className="mt-10 max-w-4xl mx-auto">
          <h1 className="text-center text-2xl md:text-4xl pb-6 font-semibold text-[#812061]">
            Safe, supportive and reliable care can lead to life-changing
            outcomes.
          </h1>
          <p className="text-center text-blue-600">
            We are one of the Egypt's leading providers of mental health
            services who work both privately and with the NHS to help people and
            families experiencing mental and emotional difficulties to get the
            support they need.
          </p>
        </div>
      </div>
      <div className="py-12 max-w-6xl mx-auto flex flex-col justify-center space-y-6 px-4">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 py-10">
          <div className="flex flex-col items-center justify-start p-6 space-y-10">
            <h1 className="text-center text-2xl md:text-4xl pb-6 font-semibold text-[#812061]">
              Committed to delivering the best outcomes
            </h1>
            <p className="text-center text-blue-600">
              From our trained clinical advisors to our senior clinicians, every
              team member shares our commitment to helping people live happy and
              fulfilling lives.
            </p>
            <p className="text-center text-blue-600 mt-8">
              Founded in 2023, we now have over 300 dedicated people working at
              22 NHS and private clinics around the UK. Through face-to-face and
              online appointments, our services include specialist diagnostic
              assessments, general outpatient psychiatry, psychology, and
              psychotherapy for people of all ages.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXV0aXNtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="rounded-lg h-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 py-10">
          <div>
            <img
              src="https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
              className="rounded-lg h-full"
            />
          </div>
          <div className="flex flex-col items-center justify-start p-6 space-y-10">
            <h1 className="text-center text-2xl md:text-4xl pb-6 font-semibold text-[#812061]">
              Effective, evidence-based treatments
            </h1>
            <p className="text-center text-blue-600">
              Our priority is helping you and your loved ones feel better. This
              means only using treatments and therapies that have been proven to
              work. Our clinicians all use an evidence-based approach that
              follows guidelines from the National Institute for Health and Care
              Excellence (NICE).
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 py-10">
          <div className="flex flex-col items-center justify-start p-6 space-y-10">
            <h1 className="text-center text-2xl md:text-4xl pb-6 font-semibold text-[#812061]">
              Working together for people, families and communities
            </h1>
            <p className="text-center text-blue-600">
              We’re honoured to support the NHS in bringing great care to
              people, families and communities across the UK. Through our
              growing list of partnerships, we help thousands of private and NHS
              patients receive quality care each year. We're proud of our work
              so far but know there's so much more to be done, and never stop
              looking to develop new ways to reach those who need it most.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1518101645466-7795885ff8f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="rounded-lg h-full"
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <Chat />
      </div>
      <Footer />
    </div>
  );
};

export default About;
