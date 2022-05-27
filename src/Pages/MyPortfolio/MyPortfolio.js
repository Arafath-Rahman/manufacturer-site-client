import React from "react";

const MyPortfolio = () => {
  return (
    <div className="flex justify-center mt-6 my-24">
      <div className="card max-w-4xl bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-extrabold my-3 uppercase">Developer Portfolio</h2>
          <div className="p-5 rounded-xl bg-slate-200">
            <div className="avatar my-5">
              <div className="w-56 mask mask-hexagon">
                <img src="https://i.ibb.co/sCj4vf7/apon.png" alt="user" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-lg font-bold">
                Name:{" "}
                <span className="text-normal text-slate-600">
                  Md. Arafath Rahman Khan
                </span>
              </p>
              <p className="text-lg font-bold">
                Email:{" "}
                <span className="text-normal text-slate-600">
                  mkhan172093@bscse.uiu.ac.bd
                </span>
              </p>
              <p className="text-lg font-bold">
                Educational Background:
                <span className="text-normal text-slate-600">
                  B.Sc in CSE, UIU (3.83)
                </span>
              </p>
              <p className="text-lg font-bold my-5">
              List of Technologies I know:
                <span className="text-normal text-slate-600">
                  <ul className="flex flex-col items-start">
                    <li>HTML</li>
                    <li>CSS (Tailwind, Bootstrap)</li>
                    <li>Javascript(ES6)</li>
                    <li>React.Js</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>OOP</li>
                    <li>Data Structure & Algorithms</li>
                    <li>Git & GitHub</li>
                  </ul>
                </span>
              </p>
            </div>
          </div>
          <p className="text-lg font-bold underline underline-offset-3 uppercase">My Best Works</p>
          <div className="card-actions flex flex-col bg-slate-200 p-5 rounded-xl">
            <h2 className="text-primary">
              <a href="https://pran-dealer-inventory.web.app/">
                Dealer Inventory Management Web App
              </a>
            </h2>
            <h2 className="text-primary">
              <a href="https://bappis-chamber.web.app/">
                Doctors Chamber Demo App
              </a>
            </h2>
            <h2 className="text-primary">
              <a href="https://macbook-pro-analysis.netlify.app/">
                MacBook Pro Analysis
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
