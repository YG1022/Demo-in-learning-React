import { Fragment } from 'react'

const LifeCircle = () => {
  const nodes = document.querySelectorAll('.node')
  console.log(nodes)

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].onclick = function () {
      console.log(i + 1) // 1 2 3 4 5
    }
  }

  return (
    <Fragment>
      <div className="node">1</div>
      <div className="node">2</div>
      <div className="node">3</div>
      <div className="node">4</div>
      <div className="node">5</div>
    </Fragment>
  )
}

export default LifeCircle
