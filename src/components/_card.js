export default function Card({ name, image, github, deploy }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt="Project" />
      <a target="_blank" class="link" href={github}>Github Page</a>
      <a target="_blank" class="link" href={deploy}>Deployed Page</a>
    </div>
  )
}

