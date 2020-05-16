Mention two parts of Express that you learned about this week.

    The two parts of Express are request and return. The request is a part that coming from the clients and the respond is the part that the server respond to the clients.

Describe Middleware?

    Middleware acts as an buffer zone between the the request and the function handler. It will enhanced the request that comes from the clients and pass it to another middleware or call the next function handler.

 Describe a Resource?
    In general, resource is one or more programs that are designed to carry out operations for a specific purpose. In the context of Express, a program that uses the Express API running on the Node. js platform. Might also refer to an app object.

 What can the API return to help clients know if a request was successful?
    The API can return status code of 2xx to let the client know that the request was successful. Or the server can return the req.body along side with the status code.


 How can we partition our application into sub-applications?
        Using Express Router to partition our application into sub-application.