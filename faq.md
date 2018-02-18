---
title: Frequently Asked Questions
seo_title: Apache OpenWhisk Frequently Asked Questions
---

- TOC:
{:toc}

### What is event-driven programming and serverless computing?

Event-driven programming follows a paradigm in which the flow of an application is determined by events such as user actions, sensor outputs, or messages from other applications or services.

Serverless computing refers to a model where the existence of servers is simply hidden from developers. I.e. that even though servers still exist developers are relieved from the need to care about their operation. Learn more [here]({{ site.github.url }}/serverless).

### What problems does OpenWhisk solve? What can you do with OpenWhisk?

OpenWhisk abstracts away all infrastructure and operational concerns, allowing developers to solely focus on coding. As part of that abstraction you no longer need to worry about peak projections or capacity planning as OpenWhisk scales on demand based on the volume and velocity of your events’ requests. It allows you to solve your problems with simple solutions.

### How is it open?

OpenWhisk has been made available as open source to encourage others to participate to accelerate its development and to help generating a powerful ecosystem of event providers and consumers.

### Which offerings are available?

OpenWhisk is available – currently as experimental offering – for IBM Bluemix that can be found [here](https://console.ng.bluemix.net/openwhisk/) as well as open source offering that can be found [here](https://github.com/openwhisk/openwhisk).

### Can I enable my own services for OpenWhisk?

Absolutely, we even encourage you to do so. Packages represent the concept allowing you to enable your own services; learn more [here](https://github.com/openwhisk/openwhisk/blob/master/docs/packages.md).

### Which programming languages/runtimes does OpenWhisk support?

Currently, OpenWhisk supports JavaScript, Swift, Python or PHP function, a Java method, any binary-compatible executable including Go programs; more languages will be supported soon. Additionally OpenWhisk can run any custom code put in a Docker container.

### When should I use OpenWhisk versus VMs, Containers, or Cloud Foundry apps?

While VMs still provide you with maximum flexibility and control by allowing you to pick whatever CPU, memory, or storage you want, OpenWhisk makes it easy to get started. Despite that, if you want to scale on demand and don’t care about having access to your infrastructure to change configurations OpenWhisk may be a great choice. Learn more [here](https://www.ibm.com/blogs/bluemix/2015/08/bluemix-instant-runtimes-containers-or-virtual-machines/).

### Where can I go to learn more?

We have a collection of blog posts available [on Medium](https://medium.com/openwhisk).

### Are there videos, demos, or sample code that I can have a look at?

Absolutely. Videos can be found [on YouTube](https://www.youtube.com/channel/UCbzgShnQk8F43NKsvEYA1SA). We also have a collection of [resources on GitHub](https://github.com/openwhisk/awesome-openwhisk/) to help get you started.

### Who are the OpenWhisk open source supporters?

Check out our [supporters page]({{ site.github.url }}/supporters) for information about Apache OpenWhisk supporters.

### How do I get involved?

If you are interested in contributing to our OpenWhisk project itself, or interested in providing services, [join our mailing list]({{ site.github.url }}/contact) and [learn more about how you can become a contributor]({{ site.github.url }}/contributors).

### How do I report a problem with this site or suggest an improvement for its content?

You can [submit an issue to the GitHub repository](https://github.com/openwhisk/openwhisk.github.io/issues) for this site. You can also [submit a pull request if you have signed the Apache ICLA](https://github.com/openwhisk/openwhisk.github.io/blob/master/CONTRIBUTING.md).

### Need another question answered?

For questions, hints and tips for developing in Apache OpenWhisk:

- [Join the Dev Mailing List]({{ site.github.url }}/contact)
- [Apache OpenWhisk on GitHub](https://github.com/search?q=org%3Aapache+openwhisk)
- [Posts tagged with #openwhisk on StackOverflow](http://stackoverflow.com/questions/tagged/openwhisk)
- [Apache OpenWhisk on Medium](https://medium.com/openwhisk)
- [@openwhisk on Twitter](https://twitter.com/openwhisk)
- [Video resources on YouTube](https://www.youtube.com/channel/UCbzgShnQk8F43NKsvEYA1SA)
- [Presentations on SlideShare](http://www.slideshare.net/OpenWhisk)
- [OpenWhisk on Slack](http://slack.openwhisk.org/)
