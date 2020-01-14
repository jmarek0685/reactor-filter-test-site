This is a responsive web application built using the reactjs javascript library. It fetches data from a custom made spring boot rest api that calls another publicly available api. 
It filters the response based on user input and displays the results in a list. It also sorts the resulting data alphabetically.
The application is available for demo on github pages here (Steps below):
https://jmarek0685.github.io/reactor-filter-test-site/

----------------------------------------------------------------------------------------------------------
The restful spring boot application I created for this is currently hosted at Heroku here:

http://polar-atoll-30396.herokuapp.com/v1/get-dogs

The sourcecode is available at heroku through git commands
heroku git:clone -a polar-atoll-30396

The Source Code is also available here:

https://github.com/jmarek0685/restfuldogservice

----------------------------------------------------------------------------------------------------------


##STEPS FOR REACTJS Application
Steps I followed to put this together:


##1.) Downloaded nodejs and installed it and some dependencies like choclatey in case I need them.

	https://nodejs.org/en/download/

##2.) Referenced this to begin learning reactjs

	https://www.w3schools.com/REACT/default.asp
  
##3.) Reference this to see how to call an API

	https://reactjs.org/docs/faq-ajax.html
  
##4.) Chose this link from the public-apis to fetch the data from

  	https://jikan.moe/
  
  	https://github.com/toddmotto/public-apis
  
##5.) Used this video as a guide on how to do the filtering

  	https://youtu.be/RM_nXOyHwN0 
  
##6.) The application was published to Git Hub Pages following these instructions:

  	https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d
