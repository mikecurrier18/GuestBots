import Feed from '@components/Feed';
import StartButton from '@components/StartButton'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Welcome to
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> GuestBots</span>
        </h1>
        <p className="desc text-center">Sign in with your email and create a custom chat bot for your property.</p>

        <StartButton />
    </section>
  )
}

export default Home