import Card from './_card'

export default function Projects() {
  return (
    <div className="content card-wrapper">
      <Card name="Tech Blog" image="./images/tech-blog.png"
        github="https://github.com/andrewtrudeau/14-Tech-Blog"
        deploy="https://hw14-tech-blog-at.herokuapp.com/home" />
      <Card name="Art Viewer" image="./images/art-view.jpg"
        github="https://github.com/andrewtrudeau/bootcamp-project-2"
        deploy="https://bootcamp-2nd-proj.herokuapp.com/create-user" />
      <Card name="Code Quiz" image="./images/code-quiz.png"
        github="https://github.com/andrewtrudeau/04-code-quiz"
        deploy="https://andrewtrudeau.github.io/04-code-quiz/" />
      <Card name="Weather Forecast" image="./images/weather.png"
        github="https://github.com/andrewtrudeau/06-weather-dashboard"
        deploy="https://andrewtrudeau.github.io/06-weather-dashboard/" />
      <Card name="Password Generator" image="./images/password-gen.png"
        github="https://github.com/andrewtrudeau/03-javascript-password-generator"
        deploy="https://andrewtrudeau.github.io/03-javascript-password-generator/" />
      <Card name="Note Taker" image="./images/note-taker.png"
        github="https://github.com/andrewtrudeau/11-note-taker"
        deploy="https://hw-11-note-taker-andrewtrudeau.herokuapp.com/" />
    </div>
  )

}
