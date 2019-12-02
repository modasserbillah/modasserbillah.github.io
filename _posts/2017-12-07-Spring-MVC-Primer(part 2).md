---
date: 2017-12-07
tags:
  - java
  - tools
author: Modasser Billah
location: Cumilla, Bangladesh
title: Spring MVC Primer Part 2
description: "My brain-dump on Spring framework"
readingTime: 5
image: "https://source.unsplash.com/FGXqbqbGt5o/800x400"
---

Read the first part [here](/2017/11/23/spring-mvc-primer/)

#### Controllers

•	We can use class level mapping as well as method level mapping.

•	We can use URI templating, matrix variables and requestparams for dynamic url binding.

• Controller methods deal with incoming requests.

#### Forms

•	Form-backing beans are used to bind form data to bean objects.

•	We can customize initialBinders to whitelist form fields and validate form inputs.

#### Spring tags

•	Spring provides lots of functionalities out of the box  via tags for the views.

•	We need to include taglibs for using spring tags.

•	All labels can be externalized using spring:message tag.

•	For that, we need to maintain messages.properties file under resources folder which will contain all the code, label pairs.

•	Finally, we need to add a messageBinder bean to our dispatcher servlet to let the application know where to look for labels.

#### Views

•	Controllers return logical views, view resolvers handle the mapping to view files.

•	Redirect and forward can be added as a prefix in controller’s return statement to redirect or forward to another page.

•	Forward works in the same request, so the models are still accessible after the forward.

•	Redirect spawns a new request, so model attributes are lost. Hence, they are not accessible after the redirect.

•	Multipart requests are used for file uploads.

•	Static files like images can be served without handling them in the controller by adding *mvc:resource* configuration in the dispatcher.xml file.

•	We can render xml and json views using contentNegotiationViewResolver. Need to do some configuration in the xml file and annotations in the bean file.

•	Exception handling can be done using a separate source package for exceptions and throwing them from controllers.

#### Interceptors

•	We can use interceptors to intercept incoming web requests for various purposes.

•	Interceptors implement HandlerInterceptor or extend spring’s HandlerInterceptorAdapter.

•	The 3 main methods are: PreHandle, PostHandle and AfterCompletion.
•	So, we can intercept a request before the controller processes it, again intercept it after the controller processes it and again after the response is sent back.

•	Interceptors are mainly used for logging and localization.

•	We can internationalize any application using LocaleChangeInterceptor.

•	For that, we need to create messages_[LangugageCode].properties files in resources folder. Then add buttons to change language in jsp files. Then configure the interceptor in the dispatcher xml file.

#### Validation

•	Form field validations can be done using bean validation from hibernate and spring’s own spring validation.

•	Bean validations are easier. Just add constraint annotations and messages in the bean java file. Add error messages in the messages properties file. Add validator annotation in the controller method and add form:error tags in the jsp files. Also, some configuration needs to be done in the dispatcher xml file.

•	Custom validation and validation using spring validation can also be done. But for the time being, we skip them. Will refer to the book as and when needed.

#### REST and AJAX

•	We can use @Responsebody annotation to return data to requests in a json format. We can use ajax  calls to get the json data and then populate the view with the data.

•	We just need to define controller methods that correspond to various REST verbs. In that way, we can expose our application as a RESTful webservice to be consumed by any front end framework or any other entity.

#### Apache Tiles

•	We can use apache tiles for templating our views. This allows reusability and spares us the code duplication in every jsp file.

•	After adding necessary configurations in the dispatcher xml file, we have to create a folder in the WEB-INF folder where we store our view definitions in an xml file.

•	First we define the base template. Then we extend it for our other logical views.

#### Testing

•	We can use Junit testing to test our classes and their functionalities.

•	For that, we need to add the necessary Junit jar file to our library.

•	Then under the test package we define test classes to test out our classes.

•	Test methods in the test classes are annotated with @Test notation. This tells the IDE to run these methods when we choose to run Junit tests from the menu.

•	Typically, all test methods have 3 parts, Arrange, Act and Assert.

•	We create the necessary inputs for the test in the arrange part.

•	We apply the class’s functionality to the arranged inputs in the act part.

•	Finally, we check whether the class provides the output as expected or not in the assert part.

•	For, spring integration testing and controller testing, we will need to create a copy of our application context as a test context in the test package as well.

So, we have discussed all the building blocks in the spring mvc ecosystem and the connections and flows between them. Hopefully, this will serve as a quick guide for checking out important concepts as needed.

*Reference Book: Spring MVC Beginner’s Guide, Amuthan G, Packt Publishing*
