import Categorize from "../components/Categorize"
import Cloze from "../components/Cloze"
import Comprehension from "../components/Comprehension"
import Header from "../components/Header"
const Home = () => {
  return (
    <section className='container max-w-[768px] mx-auto'>
        <Header />
        <Categorize/>
        <Cloze/>
        <Comprehension/>
    </section>
  )
}

export default Home