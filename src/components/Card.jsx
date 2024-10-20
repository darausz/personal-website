import { useState } from "react"

export default function Card({ project }) {

  const [hover, setHover] = useState(false)
  const [front, setFront] = useState("front")
  const [back, setBack] = useState("facedown")

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }

  async function swap() {
    setBack("back")
    await timeout(1000)
    setHover(true)
  }

  return (
    hover ?
      <div className={`project ${front} bg-purple-300`} onMouseLeave={() => setFront("faceup")}>
        <a href={project.link} target="_blank">
          <div>
            <img className="preview h-40 object-cover" src={project.img}></img>
            {project.name}
          </div>
          <div className="project-description">
            {project.desc}
          </div>
        </a>
      </div>
      :
      <div className={`project ${back} bg-red-300`} onMouseEnter={() => { swap() }}>
        {project.back}
      </div>
  )
}