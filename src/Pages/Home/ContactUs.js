import React from "react";

const ContactUs = () => {
  return (
    <div className="p-24">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <img className="w-5/6" src="https://i.ibb.co/qmtk3sd/contact-us.jpg" alt="contact" />
        </div>
        <div className="">
          <div className="card-body">
            <h2 className="text-3xl font-extrabold text-center mb-16">CONTACT US</h2>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="textarea"
                placeholder="Your Message"
                className="input input-bordered h-28"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-3/6 mx-auto">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
