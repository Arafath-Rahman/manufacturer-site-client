import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-center font-extrabold text-3xl my-5">BLOGS</h2>
      <div className="flex justify-center mb-12">
        <div className="card max-w-5xl bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold  text-primary">
              1. How will you improve the performance of a React Application?
            </h2>
            <p className="text-slate-600 text-lg font-semibold">
              Answer: Improving performance is a major task in a developers
              journey. A task can be done in many ways but in real world a
              website is considered good to bad based on the performance
              optimization. In React applications, UI's can be made very fast.
              However, as an application grows, developers may encounter some
              performance issues. There are some things we can do in order to
              optimize a react application: <br />
              First we need to focus on How React updates. The less our app will
              render more it'll be optimized. Also we need to be careful for
              some bottlenecks. Keeping component state local is a good way to
              build optimize apps. Lastly code-splitting and lazy loading of
              images are also good techniques.
            </p>
          </div>
          <div className="card-body">
            <h2 className="text-2xl font-bold  text-primary">
              2. What are the different ways to manage a state in a React
              application?
            </h2>
            <p className="text-slate-600 text-lg font-semibold">
              Answer: There are mainly four ways to manage states in React
              application. The first one is "Local State". Local State is
              basically the UI stage where we can store or organize data inside
              the components. We often use "useState hook to manage state in
              Local State. The next one is "Global state". Its a state where we
              manage data across multiple components. Thirdly we can store data
              in server side. Server state is a simple concept but can be hard
              to manage. Last one URL state. We can store some data in pathname
              and query parameters.{" "}
            </p>
          </div>
          <div className="card-body">
            <h2 className="text-2xl font-bold  text-primary">
              3. How does prototypical inheritance work?
            </h2>
            <p className="text-slate-600 text-lg font-semibold">
              In javascript prototypical inheritance does a great job. Its a
              method or way to add some data, properties and method to objects.
              In prototypical inheritance one object can use or inherit other
              object's data. Javascript typically uses the prototyping
              inheritance over classical inheritance. All of javascript object
              are prototypical objects. They looks for inherited properties in
              the prototype of the object, but also in the prototype of the
              prototype, and so on in the chain of prototypes.
            </p>
          </div>
          <div className="card-body">
            <h2 className="text-2xl font-bold  text-primary">
              4. Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts?
            </h2>
            <p className="text-slate-600 text-lg font-semibold">
              Answer: There are mostly two reasons for why we don't update or
              muted the state variable directly. Optimized components might not
              re-render if you directly update/change the state variable, and
              also there are several bug appears which will then create lot of
              problems in our code. And also in functional programming
              immutability is a concern. To maintain the unidirectional flow of
              components we need to update states like that. So we should always
              create new objects and arrays when call setState, which is what we
              did above with the spread operator
            </p>
          </div>
          <div className="card-body">
            <h2 className="text-2xl font-bold  text-primary">
              5. You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h2>
            <p className="text-slate-600 text-lg font-semibold">
              Answer: It can be done in many ways. The brute force method will
              be to do a loop over the array and every iteration look for my
              desire name. Also we can first make an array of names from the
              main array and then find whether my search name includes there or
              not.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
