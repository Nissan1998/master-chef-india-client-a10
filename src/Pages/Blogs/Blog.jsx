import React from "react";
import { Accordion, Button, Container, TabContainer } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <Container className="text-center mt-2 mb-5">
          <Pdf targetRef={ref} filename="Q&A-section.pdf">
            {({ toPdf }) => (
              <Button variant="warning" onClick={toPdf}>
                Download to Pdf
              </Button>
            )}
          </Pdf>
        </Container>
        <div ref={ref}>
          <h3 className="text-center">Q&A Section</h3>
          <Container>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Tell us the differences between uncontrolled and controlled
                  components?
                </Accordion.Header>
                <Accordion.Body>
                  In React, controlled and uncontrolled components refer to how
                  the component manages its internal state and how it receives
                  and handles user input. Here are the differences between the
                  two: Controlled components: A controlled component is one
                  where the state of the component is managed by the parent
                  component, and the component receives its values and updates
                  via props. In other words, the parent component has complete
                  control over the input and output of the controlled component.
                  Controlled components are typically used for forms where the
                  parent component needs to be aware of and manage the input
                  data. Uncontrolled components: An uncontrolled component, on
                  the other hand, manages its own internal state and handles
                  user input without relying on the parent component. The
                  component uses a ref to retrieve the input value when needed.
                  In other words, the parent component has limited or no control
                  over the input and output of the uncontrolled component.
                  Uncontrolled components are typically
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How to validate React props using PropTypes?
                </Accordion.Header>
                <Accordion.Body>
                  To validate React props using PropTypes, you need to install
                  the PropTypes library using npm or yarn. Once you have
                  installed the PropTypes library, you can import it into your
                  React component and define the prop types using the propTypes
                  property.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Tell us the difference between nodejs and express js?
                </Accordion.Header>
                <Accordion.Body>
                  Node.js and Express.js are both popular technologies used for
                  building server-side applications in JavaScript. Here are the
                  differences between the two: Node.js: Node.js is a JavaScript
                  runtime built on the V8 JavaScript engine, which allows
                  developers to run JavaScript code on the server-side. Node.js
                  provides a powerful set of APIs for building server-side
                  applications, including file system access, network
                  communication, and more. Node.js is often used to build APIs
                  and server-side applications that require real-time
                  communication. Express.js: Express.js is a web framework built
                  on top of Node.js that provides a higher-level API for
                  building web applications. Express.js provides a set of
                  features that simplify the process of building web
                  applications, including routing, middleware, and more.
                  Express.js is often used to build web applications, such as
                  RESTful APIs, web services, and web applications. In summary,
                  Node.js provides a low-level API for building server-side
                  applications, while Express.js provides a higher-level API for
                  building web applications. Node.js is the underlying
                  technology that powers Express.js, but Express.js provides
                  additional features and abstractions on top of Node.js to make
                  it easier to build web applications.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  What is a custom hook, and why will you create a custom hook?
                </Accordion.Header>
                <Accordion.Body>
                  In React, a custom hook is a function that allows you to
                  encapsulate reusable logic and stateful behavior that can be
                  shared across multiple components. A custom hook is created by
                  using the use prefix in the name of the function and calling
                  existing hooks as needed. Custom hooks are useful for
                  abstracting away complex logic from your components, making
                  them easier to read and maintain. They can also help you to
                  avoid code duplication by providing a centralized location for
                  shared functionality. Here are some examples of when you might
                  want to create a custom hook: When you have logic that is used
                  by multiple components and you want to avoid duplicating code.
                  When you have a complex behavior that needs to be reused
                  across different components. When you want to encapsulate and
                  hide implementation
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Blog;
