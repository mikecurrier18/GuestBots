import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Welcome to
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> GuestBots</span>
        </h1>
        <p className="desc text-center">This is just some sample paragraph text to get things lookin nice and pretty</p>

        <Feed />
    </section>
  )
}

export default Home