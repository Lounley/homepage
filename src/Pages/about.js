const About = () => {
  return (
    <div className="mt-6 flex flex-wrap">
      <div className="m-6 mt-0 mr-0 rounded-lg pt-6 px-6 pb-5 bg-gray-200 w-172">
        <img className="rounded-lg" src="/img/me.jpg" alt="me" width="170" height="406"/> 
      </div>  

      <div className="m-6 mt-0 text-4xl bg-gray-200 rounded-lg p-6 w-1585">
          <p className="m-0">
            Hi! I'm Juho, a 22-year old active student currently living in Turku. My hobbies include ao. skydiving, gym, programming and gaming. 
            I'm a person who enjoys challenging oneself and learning new skills in school, work and during freetime. <br /> <br />
          
            I started my studies in Information and Communications Technology in 2021 with my main interest being cybersecurity. More recently I have taken a liking into software development and web development.
            When it comes to programming languages I would call Java my strong suit. I'm also familiar with Python, ReactJS and SQL.

          </p>
      </div>
    </div>

  );
}

export default About;