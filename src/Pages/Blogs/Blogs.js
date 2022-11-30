const Blogs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 my-14 lg:mx-72 md:mx-48 sm:mx-10">
        {/* Question 1 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box py-4 pl-5"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> The Four Kinds of
              React State to Manage
              <br />
              <br />
              1.Local state: Local state is most often managed in React using the useState hook.
              <br />
              2.Global state: Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
              <br />
              3.Server state: Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
              <br />
              4.URL state: Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
In many cases, a lot of major parts of our application rely upon accessing URL state. 
            </p>
          </div>
        </div>
        {/* Question 2 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box py-4 pl-5"
        >
          <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
            </p>
            <br />
            <p>
            JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
            </p>
          </div>
        </div>
        {/* Question 3 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box py-4 pl-5"
        >
          <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.
            </p>
            <br />
            <p>
            Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
            </p>
          </div>
        </div>
        {/* Question 4  */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box py-4 pl-5  mb-10"
        >
          <div className="collapse-title text-xl font-medium">
          React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.
            </p>
            <br />
            <p>
            React is one of the most popular JavaScript projects with 160k stars on GitHub. It’s developed and maintained by Facebook, and it’s used internally in many of their projects. Additionally, it powers over 2 million websites, according to BuiltWith‘s usage statistics.
            </p>
            <br />
            <p>
            Out of the three frameworks, Vue has the most stars on GitHub, with 176k stars. The project is developed and led by ex-Googler Evan You. It's a very strong, independent project in the open-source community and is used by over 1 million websites, according to BuiltWith.
            </p>
            <br />
            <p>
            Angular is developed by Google, but surprisingly it's not used in some of their flagship products such as Search or Youtube. It's often used in enterprise projects, and it powers over 97,000 websites based on BuiltWith's data.
It's the least starred among the three frameworks, with 68k stars on GitHub. However, when switching from Angular 1 to Angular 2, they created an entirely new repository instead of continuing the AngularJS project, which also has 59k stars.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
