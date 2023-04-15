# Instructions

Northcoders have set up an api to serve data about past and present employees here: https://nc-leaks.herokuapp.com. A northcoders whistleblower has left you some instructions on how to obtain this data.

Your first task is to retrieve the instructions left for you by your mole on the inside...

- Make a request using node's `https` module to the following endpoint to get the instructions left for you: `/api/confidential`

- Once you have your instructions, save them in a markdown file (a file with a `.md` extension)

- That is all...

> Some tips to guide you:
>
> - Once you've finished building up the `body` from each of the packets you receive, this `body` of your response will be a _stringified_ JSON object. How can you turn this into a useable object?

> - You should now have an object with a key of `instructions` holding the value of a long string (with markdown formatting embedded in it). Only save this string containing your instructions to a markdown file - you don't need to save the whole response object.



## TLS VS HTTPS in node


TLS is a way to provide secure connections between a client and a server. It does this by providing a safe way for clients and servers to exchange keys so they can then use public-key cryptography to secure their transmission. The exact mechanism is found here, but it's really not important for this answer.

Now, what is https? Well first, let's talk about HTTP. HTTP is a protocol that defines how web servers and clients talk and exchange web pages or data. Basically, it includes a request from a client and the server responds with a numerical message, headers, and (optionally) a body. If you're familiar with writing web pages, this is obvious.

So now, finally, what is HTTPS? HTTPS is a version of HTTP using TLS to secure data. This means that clients and servers can use the same protocol they're used to, wrapped in encryption.

Now, let's talk about these in node.js.

When you use require('tls'), you're only using the encryption layer, without defining the protocol. This will work fine for anything that doesn't expect an exact protocol, such as your other node.js client.

When you use require('https'), you're specifically using HTTP over TLS. The https module is actually a subclass of the tls module! (Oops, actually, the https.Server is a subclass of tls.Server) This means that whenever you're using the https module, you're also using the tls one.

Now, the final question: What does the browser want? If you've been following everything I've said, you can see that the browser wants https. In fact, it's likely that most of the webpages you've visited today has been over https.