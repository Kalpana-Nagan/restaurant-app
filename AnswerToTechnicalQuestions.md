1.              How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

-     6 hours, with more time would have added better look and feel, like adding carousel,and autoloading the results in additional results based on the scrolling. As latituted and longitude values are available in response would have added google map feature for restaurants.

2.              What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

- have used function components instead of class based and used ES6 features like arrow functions, spread operators and used React testing library for unit testing.

       eg : function restaurantsCard(props) {

  const { restaurants } = props;
  return restaurants ? restaurants.map((restaurantsDetails, index) => {

      const PriceStars = (price) => {
        let span = [];
        for (let i = 0; i < price; i++) {
          span.push(<icon className="glyphicon glyphicon-star" />)
        }
        return span;
      }

      return (
        <div className="row restaurants" tabIndex={index + 4} key={restaurantDetails.id}>

        </div>
      )

  }

3.              How would you track down a performance issue in production? Have you ever had to do this?

- Used tools like react dev tool,redux dev tool,google chrome dev tool to track state change and avoid infinte rendering which inturn causes performace issue and also used light house tool for tracking performance issues.

4.              How would you improve the API that you just used?

- If we are developing the API then would add caching in server side and add more parameters for filtering.

5.              Please describe yourself using JSON.
             {
    "firstName":"Kalpana",
    "lastName":"Nagan",
    "qualification":"Bachelor of Engineering",
    "mailId":"nkalpana5771@gmail.com",
    "Experience":[
    {
    "company":"MobileLive",
    "client":"Freedom Mobile",
    "year":"2019- present",
    "role":"web developer"
    },
    {
    "company":"Robert Bosch",
    "client":"Daimler Germany",
    "year":"2018-2019",
    "role":"Senior web developer"
    },
    {
    "company":"CGI",
    "client":"Bell Canada",
    "year":"2015-2018",
    "role":"software developer"
    }
    ],
    "liveIn":"Toronto",
    "socialLink":"https://www.linkedin.com/in/kalpana-n-4b972577",
    "gitHub":"https://github.com/Kalpana-Nagan/",
    "passions":[
    "Programming",
    "Painting",
    "Photography"
    ]
    }
