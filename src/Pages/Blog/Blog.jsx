

const Blog = () => {

    return (
        <div className='text-start flex flex-col gap-6 shadow p-6 mb-8'>
            <div className='shadow p-5'>
                <div className='shadow p-5'>
                    <h3 className='font-semibold mb-4  hover:text-success'>
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h3>
                    <h6>
                        Access Token and Refresh Token:
                        Access Token: An access token is a credential that is used to authenticate and authorize a user or client to access protected resources, such as APIs or web services. It is typically short-lived and contains information about the users identity and permissions. Access tokens are issued by an authentication server and are used to make authenticated requests to protected endpoints. <br />
                        Refresh Token: A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires. It is used to maintain a users session without requiring them to reauthenticate. When the access token expires, the client can send the refresh token to the server to obtain a new access token without requiring the user to provide their credentials again. <br />Storage of Tokens on the Client-side:
                        Access tokens should be stored securely on the client-side, typically in memory or a secure storage mechanism such as a browsers HTTP-only cookie or the browsers local storage. Storing access tokens in a secure manner helps prevent unauthorized access and mitigates the risk of token theft.
                        Refresh tokens, on the other hand, should be stored securely, preferably in an HTTP-only cookie or other secure storage mechanisms. This helps protect the refresh token from being accessed by malicious scripts or attacks like cross-site scripting (XSS).
                    </h6>
                </div>
                <div className='shadow p-5'>
                    <h3 className='font-semibold mb-4 hover:text-success'>Compare SQL and NoSQL databases?

                    </h3>
                    <h6>SQL Databases: SQL (Structured Query Language) databases are relational databases that use tables to store structured data. They enforce a predefined schema and support ACID (Atomicity, Consistency, Isolation, Durability) properties. SQL databases are best suited for complex data relationships, structured data, and when data integrity and consistency are crucial. <br />
                        NoSQL Databases: NoSQL (Not Only SQL) databases are non-relational databases that provide a flexible schema and do not require predefined schemas. They can handle unstructured and semi-structured data efficiently and scale horizontally. NoSQL databases are suitable for handling large amounts of data, distributed systems, and scenarios where flexibility and scalability are important..</h6>
                </div>
                <div className='shadow p-5'>
                    <h3 className='font-semibold mb-4 hover:text-success'>What is express js? What is Nest JS (google it)?

                    </h3>
                    <h6>Express.js: Express.js is a popular and lightweight web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features and middleware. Express.js allows developers to define routes, handle HTTP requests and responses, manage middleware, and integrate with various templating engines or frameworks. <br />

                        NestJS: NestJS is a progressive, TypeScript-based framework for building scalable and efficient server-side applications. It is built on top of Express.js and provides an additional layer of structure and organization to web applications. NestJS follows the modular and dependency injection principles and offers features like routing, controllers, providers, modules, and middleware. It aims to enhance productivity and maintainability while leveraging the power of TypeScript and the Node.js ecosystem.</h6>
                </div>
                <div className='shadow p-5'>
                    <h3 className='font-semibold mb-4 hover:text-success'> What is MongoDB aggregate and how does it work (google it)?
                    </h3>
                    <h6>MongoDB Aggregate: MongoDB Aggregate is a powerful framework within MongoDB for performing advanced data processing and aggregation operations. It allows you to process data in the MongoDB database and perform operations such as filtering, grouping, sorting, joining, and calculating aggregated results. MongoDB Aggregate uses a pipeline-based approach, where multiple stages are chained together to transform the data. Each stage performs a specific operation on the input data and passes the results to the next stage, allowing for complex data manipulations and analysis.</h6>
                </div>
            </div>
        </div>
    );
};

export default Blog;
