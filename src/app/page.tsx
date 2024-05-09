import MainItem from './components/MainItem/MainItem'
import GridItem from './components/GridItem/GridItem'
import './styles/main.scss'

export default function Home() {
  return (
    <main id="mainContainer">
      <MainItem />
      <GridItem />
    </main>
  );
}
