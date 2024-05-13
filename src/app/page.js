"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';
import Helmet from "react-helmet";
import axios from "axios";

export default function Home() {

  const handleClick = () => {
    document.getElementById('hero_section').scrollIntoView({ behavior: 'smooth' });
  };

  // const handleWaitList = (email) => {
  //   //  call joseph159.pythonanywhere.com/join_waitlist and send the email
  //   axios.post('https://joseph159.pythonanywhere.com/join_waitlist', {
  //     email: email
  //   })
  //     .then(function (response) {
  //       console.log(response);

  //     }
  //     )
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  //   console.log("Join Waitlist");
  // }


  return (
    <html data-theme="nord">
      <main >
        <div className="navbar bg-darkBlue">
          <a className="btn btn-ghost text-xl text-whiteWhite">ExamNoodle</a>
        </div>

        <Image src="/circle_component.png" className="absolute top-3/4 left-96" alt="circle_component" width={100} height={100} />

        <Image src={"/swigglyLine.png"} className="absolute right-96" alt="circle_component" width={200} height={200} />
        <div className="hero min-h-screen bg-base-200">

          <div className="hero-content text-center" id="hero_section">
            <div className="">
              {/* <Image src="../../circle.png" alt="logo" width={200} height={200} /> */}
              <h1 className="text-6xl font-bold mb-800 drop-shadow-2xl">Students Shouldn&apos;t Be <span className="bg-darkBlue text-whiteWhite">Desperate</span> for Practice Problems</h1>
              <p className="py-6 text-2xl">Unlimited AI Generated Practice Materials from </p>
              <div class="flex justify-center">
                <div class="grid grid-cols-3 grid-flow-col gap-4 mb-20">
                  <div className="flex justify-center bg-darkBlue w-36 p-5 rounded-lg ml-10 shadow-2xl hover:scale-110 transform transition duration-500">
                    <p className="text-2xl text-whiteWhite">Notes</p>
                  </div>
                  <div className="flex justify-center bg-darkBlue w-36 p-5 rounded-lg  ml-10 shadow-2xl hover:scale-110 transform transition duration-500">
                    <p className="text-2xl text-whiteWhite">Videos</p>
                  </div>
                  <div className="flex justify-center bg-darkBlue w-36 p-5 rounded-lg  ml-10 shadow-2xl hover:scale-110 transform transition duration-500">
                    <p className="text-2xl text-whiteWhite">Homework</p>
                  </div>
                </div>

              </div>
              <p className="py-6 text-2xl">Join the waitlist to get early access</p>
              {/* <div class="flex justify-center">
                <div class="flex items-center border border-gray-300 rounded-lg w-2/4 bg-whiteWhite">
                  <input class="w-full px-4 py-2 outline-none" type="text" placeholder="Email" id="user_email" />
                  <button class="px-7 py-0 bg-darkBlue text-whiteWhite rounded-r-md" onClick={() => handleWaitList(document.getElementById('user_email').value)}>Join the Waitlist</button>
                </div>

              </div> */}

              <div id="getWaitlistContainer" data-waitlist_id="16804" data-widget_type="WIDGET_2"></div>
              <Helmet>
                <link rel="stylesheet" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css" />
                <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js" />
              </Helmet>
              <p>No Spam. We promise</p>
            </div>
          </div>
        </div>


        <div className="bg-base-200 py-10">
          <h2 className="text-5xl font-bold text-center mb-6 mt-10">Students lack enough practice problems</h2>
          <div className="flex justify-center items-center m-10 text-whiteWhite rounded-lg ">
            <p className="text-center text-5xl bg-darkBlue w-1/2 p-4">Hindering their Learning</p>
          </div>


        </div>


        <div className="hero  bg-base-200">

          <div className="hero-content flex-col lg:flex-row">
            <Image src="/circle_component.png" className="absolute top-full right-96" alt="circle_component" width={100} height={100} />

            <img src={"/documentToMCQ.png"} className=" rounded-lg" width={600} height={600} />
            <div>
              <h1 className="text-5xl font-bold">Convert Documents, Videos, and Notes to MCQs and Exams</h1>
              <p></p>
              <div className="py-6">
                <p className="mb-4">Our platform provides high-quality and relevant questions that are generated directly from your study materials. This ensures that you&apos;re focusing on the information that matters most.</p>
                <p className="mb-4">Whether you&apos;re studying for a test, trying to understand a complex topic, or just reviewing your knowledge, our personalized questions can help you achieve your learning goals.</p>
                <p>Start your personalized study experience today and see the difference it can make in your learning journey.</p>
              </div>
              <button className="btn bg-darkBlue text-whiteWhite" onClick={handleClick}>Join the Waitlist</button>
            </div>
          </div>
        </div>

        <Image src={"/swigglyLine.png"} className="absolute left-44" alt="circle_component" width={200} height={200} />
        <Image src="/circle_component.png" className="absolute right-10" alt="circle_component" width={100} height={100} />
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={"/videoToFlashcards.png"} className="rounded-lg" width={600} height={600} />
            <div>
              <h1 className="text-5xl font-bold">Multiple Practice Material Formats</h1>
              <div className="py-6">
                <p className="mb-4">Our platform offers a variety of practice material formats to help you study in the way that works best for you. Whether you prefer flashcards, multiple choice questions, or full-length exams, we have you covered.</p>
                <p className="mb-4">With our AI-generated practice materials, you can study more efficiently and effectively, ensuring that you&apos;re fully prepared for your exams and assignments.</p>
                <p>Sign up for early access today and start studying smarter.</p>
              </div>
              <button className="btn bg-darkBlue text-whiteWhite" onClick={handleClick}>Join the Waitlist</button>
            </div>
          </div>
        </div>




        <footer className="footer p-10 bg-darkBlue text-neutral-content">
          <div>
            <h2 className="footer-title">ExamNoodle</h2>
            <p className="text-whiteWhite">Unlimited AI Generated Practice Materials</p>
          </div>
          {/* add a join waitlist */}
          <div>
            <h2 className="footer-title">Join Waitlist</h2>
            <div class="flex items
            -center border border-gray-300 rounded-lg w-full bg-whiteWhite">
              <input class="w-full px-4 py-2 outline-none" type="text" placeholder="Email" />
              <button class="px-7 py-0 bg-darkBlue text-whiteWhite rounded-r-md">Join the Waitlist</button>
            </div>
          </div>
          <div>
            <h2 className="footer-title">Contact Us</h2>
            <p className="text-whiteWhite">

              <a href="mailto:
              josephattia159@gmail.com">
                Email Us
              </a>
            </p>
          </div>


        </footer>
      </main>
    </html>
  );
}
