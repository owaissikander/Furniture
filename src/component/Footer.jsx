import { Button } from "antd";


function Footer() {
    return (
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <span className="ml-3 text-xl">Funiro</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">
        Air plant banjo lyft occupy retro adaptogen indego
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Links
        </h2>
        <nav className="list-none mb-10 space-y-4 ">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Home</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Shop</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">About Us</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Help
        </h2>
        <nav className="list-none mb-10 space-y-4  ">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Payment Options</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Returns</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
           
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          NewsLetter
        </h2>
        <nav className="list-none mb-10">
          <li>
            <input type="Email" placeholder="Enter your email address"  className="underline outline-none" />
            <a className="text-gray-600 hover:text-gray-800">Subcribe</a>
          </li>
           
        </nav>
      </div>
       
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2023 Furniro —
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          All Rights Reserved
        </a>
      </p>
       
    </div>
  </div>
</footer>

    )
}

export default Footer;