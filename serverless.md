---
title: What Is Serverless Computing, and Why Should I Care?
---

Apache OpenWhisk is a serverless, open source cloud platform that executes functions (called actions) in response to events (called triggers) without developer concern for managing the lifecycle or operations of the containers that execute the code.

There are several technical capabilities and business factors coming together to make this approach very compelling from both an application development and deployment cost perspective.

Key benefits of a serverless architecture include automatic scale up and down in response to current load and the associated cost model that charges only for milliseconds of compute time used when running. 

> “The most important benefit to me [...] is the reduced feedback loop of creating new application components - I’m a huge fan of ‘lean’ approaches, largely because I think there is a lot of value in getting technology in front of an end user as soon as possible to get early feedback, and the reduced time-to-market that comes with Serverless fits right in with this philosophy.”
>
> **– Mike Roberts, [_Serverless Architectures_](http://martinfowler.com/articles/serverless.html)**

New architectures built on this model are called serverless since a greater number of operational concerns are hidden from the developer and because the compute resources needed for applications are transient, leaving no trace on the bottom line when application code is not running.

In the Apache OpenWhisk programming model, the developer focuses solely on the unique features of their application by narrowing the scope of their concern down to smaller units of code – the functions (actions) commonly packaged as single files – that provide their core business logic.

Beyond automatic scale and granular cost model which tie business operations directly to resources consumed, platforms like OpenWhisk address many of the operations-focused 12 Factor best practices on behalf of the developer, making it easier to build and deploy cloud native applications like microservices.

> “Serverless will fundamentally change how we build business around technology and how you code.”
> 
> **– Simon Wardley, [_Why the fuss about serverless?_](https://hackernoon.com/why-the-fuss-about-serverless-4370b1596da0#.9onv2dko9)**

Another trend driving this new model of development is the emergence of many more non-web workloads that require the benefits of cloud computing (for example, elasticity, scale, and cost reduction). These IoT, cognitive, batch, and data-driven use cases join HTTP and REST based applications that have long taken advantage of IaaS and PaaS capabilities.

[Learn more about what makes serverless architectures compelling.](https://developer.ibm.com/opentech/2016/09/06/what-makes-serverless-attractive/)
