// import "./App.css";

import CardList from "../CardList/CardList/CardList";
import { Layout, Title } from "./App.styled";
import data from "../utils/data.json";

function App() {
  return (
    <Layout>
      <Title>Voices of Success with Sales Fortuna</Title>
      <CardList data={data} />
    </Layout>
  );
}

export default App;
