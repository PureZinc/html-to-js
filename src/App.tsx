import { data } from "./fma-data";
import './index.css';

function Header() {
  return (
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        <li>about us</li>
        <li>info</li>
        <li>support us</li>
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <>
    <Header />

    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        {data.map((rate, index) => (
          <tr className={index%2===0 ?"light" : "dark"} key={index}>
            <td>{rate.name}</td>
            <td>{rate.skillset}</td>
            <td>{rate.votes}</td>
          </tr>
        ))}
      </table>
    </section>

    <section id="character-cards">
      {data.map((char, index) => (
        <div className="card" key={index}>
          <div className="card-titles">
            <h3>{char.name}</h3>
            <h4>{char.nickName}</h4>
          </div>
          <img src={char.imageUrl} alt="" />
          <p>{char.background}</p>
        </div>
      ))}
    </section>
    </>
  )
}
