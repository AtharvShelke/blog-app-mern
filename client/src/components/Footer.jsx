import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import footer_img from '../assets/pfp.jpg';
const Footer = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d58af696-1dca-478f-abe3-4a94d0151469");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (


    <footer className="bg-white dark:bg-gray-950 border-t border-gray-700">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5 mt-12">
          <div className="">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Get in touch with us</h1>

            <div className=''>




              <form onSubmit={onSubmit} className="flex flex-col mx-auto mt-6 space-y-3 ">

                <input type='email' id='email' name='email' className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
                <input type='textarea' id='msg' rows="4" cols="50" name='msg' className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Your Message" />
                <input type="submit" id='submit' className="w-2/4 px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform mx-auto focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80" />
              </form>
            </div>
          </div>


          <div>
            <span className="inline-block p-3 text-white rounded-full bg-blue-100/80 dark:bg-gray-800 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
            <a href='mailto: shelkeatharv964@gmail.com' className="mt-2 text-blue-500 dark:text-blue-400">shelkeatharv@gmail.com</a>
          </div>

          <div>
            <span className="inline-block p-3 text-white rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg enableBackground="new 0 0 32 32" height="32px" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" ><g id="LinkedIn"><path d="M4.983,8.875H4.94C2.657,8.875,1,7.361,1,5.275c0-2.089,1.692-3.606,4.023-3.606   c2.292,0,3.928,1.476,3.977,3.589C9,7.359,7.311,8.875,4.983,8.875z M5.023,2.669C3.243,2.669,2,3.741,2,5.275   c0,1.531,1.209,2.601,2.94,2.601h0.043C6.76,7.875,8,6.804,8,5.27C7.963,3.694,6.795,2.669,5.023,2.669z" fill="#fff" /><path d="M7.5,29h-5C2.224,29,2,28.776,2,28.5v-18C2,10.224,2.224,10,2.5,10h5C7.776,10,8,10.224,8,10.5v18   C8,28.776,7.776,29,7.5,29z M3,28h4V11H3V28z" fill="#fff" /><path d="M30.5,29h-6c-0.276,0-0.5-0.224-0.5-0.5V19c0-1.654-1.346-3-3-3s-3,1.346-3,3v9.5   c0,0.276-0.224,0.5-0.5,0.5h-6c-0.276,0-0.5-0.224-0.5-0.5v-18c0-0.276,0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5v3.014   c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V11h-5v17h5v-9c0-2.206,1.794-4,4-4s4,1.794,4,4v9h5V17.5c0-3.584-2.916-6.5-6.5-6.5   c-1.384,0-2.722,0.406-3.871,1.173c-0.229,0.152-0.54,0.092-0.693-0.138s-0.092-0.54,0.139-0.693C20.388,10.464,21.918,10,23.5,10   c4.136,0,7.5,3.364,7.5,7.5v11C31,28.776,30.776,29,30.5,29z" fill="#fff" /></g></svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">LinkedIn</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Come say hello on LinkedIn</p>
            <a href='https://www.linkedin.com/in/atharv-shelke' target='_blank' className="mt-2 text-blue-500 dark:text-blue-400">Atharv Shelke</a >
          </div>

          <div>
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">

              <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" height="32px" width="32px" fill='#fff' imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512"><path fillRule="nonzero" d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.482 47.121-.092 85.407 38.029 85.499 85.159.091 47.13-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.092c.141 72.602 59.106 131.327 131.69 131.185 72.592-.14 131.35-59.089 131.209-131.691-.141-72.577-59.114-131.336-131.715-131.194-72.585.141-131.325 59.114-131.184 131.7zm237.104-137.092c.033 16.954 13.817 30.682 30.772 30.649 16.961-.034 30.689-13.811 30.664-30.765-.033-16.954-13.818-30.69-30.78-30.656-16.962.033-30.689 13.818-30.656 30.772zm-208.696 345.4c-24.958-1.086-38.511-5.234-47.543-8.709-11.961-4.628-20.496-10.177-29.479-19.093-8.966-8.951-14.532-17.461-19.202-29.397-3.508-9.033-7.73-22.569-8.9-47.527-1.269-26.983-1.559-35.078-1.683-103.433-.133-68.338.116-76.434 1.294-103.441 1.069-24.941 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.478 8.949-8.983 17.459-14.532 29.403-19.202 9.025-3.526 22.561-7.715 47.511-8.9 26.998-1.278 35.085-1.551 103.423-1.684 68.353-.133 76.448.108 103.456 1.294 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.145 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.413 3.524 8.999 7.714 22.552 8.892 47.494 1.285 26.998 1.576 35.094 1.7 103.432.132 68.355-.117 76.451-1.302 103.442-1.087 24.957-5.226 38.52-8.709 47.56-4.629 11.953-10.161 20.488-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.56-103.448 1.684-68.338.133-76.424-.124-103.431-1.294zM149.977 1.773c-27.239 1.286-45.843 5.648-62.101 12.019-16.829 6.561-31.095 15.353-45.286 29.603C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.548 1.302 27.231 5.649 45.827 12.019 62.092 6.569 16.83 15.353 31.089 29.611 45.289 14.25 14.2 28.55 22.918 45.404 29.438 16.282 6.294 34.902 10.583 62.15 11.777 27.305 1.203 36.022 1.468 105.521 1.336 69.532-.133 78.25-.44 105.555-1.734 27.239-1.302 45.826-5.664 62.1-12.019 16.829-6.585 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.404 6.304-16.282 10.592-34.904 11.777-62.134 1.195-27.323 1.478-36.049 1.344-105.557-.133-69.516-.447-78.225-1.741-105.522-1.294-27.256-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.08-29.602-45.288-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.304-34.903-10.6-62.15-11.778C333.747.164 325.03-.101 255.506.031c-69.507.133-78.224.431-105.529 1.742z"/></svg>

            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Instagram</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Slide into DM</p>
            <a target='_blank' href='https://www.instagram.com/atharv._.964/' className="mt-2 text-blue-500 dark:text-blue-400">@atharv._.964</a>
          </div>
          <div>
            <span className="inline-block p-3 text-white rounded-full bg-blue-100/80 dark:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640" fill='#fff'><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/></svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Github</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Some of my other works</p>
            <a href='https://github.com/AtharvShelke' target='_blank' className="mt-2 text-blue-500 dark:text-blue-400">Atharv Shelke</a >
          </div>
        </div>

        



        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <a href='https://atharv-shelke.netlify.app/' target='_blank'>
            <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
              <img src={footer_img} alt="" className='object-cover object-center w-10 h-10 rounded-full' />

              <span className="ml-3 text-xl">Atharv Shelke</span>
            </p>
          </a>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>
        </div>


      </div>
    </footer>
  )
}

export default Footer