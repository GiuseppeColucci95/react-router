export default function AboutUs() {

  return (
    <>
      <main>
        <div className="container">

          <section className="section">
            <div className="jumbotron my-5">

              <h1>Who we are</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptates aliquid deleniti voluptatum consequuntur iste beatae at nam atque delectus. Qui provident repellat obcaecati recusandae commodi, exercitationem placeat quis deleniti?</p>

            </div>
          </section>

          <section className="d-flex align-items-center justify-content-center">
            <img width="80%" src="https://picsum.photos/800/500" alt="about us image" />
          </section>

          <section className="my-5">
            <h2 className="mt-5 mb-3 text-center">Our team</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              <div className="col">
                <div className="card p-3">
                  <h3>Full Stack Web Developer</h3>
                  <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime libero id unde error sint itaque sapiente numquam aspernatur molestiae!</p>
                </div>
              </div>
              <div className="col">
                <div className="card p-3">
                  <h3>Front End Web Developer</h3>
                  <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime libero id unde error sint itaque sapiente numquam aspernatur molestiae!</p>
                </div>
              </div>
              <div className="col">
                <div className="card p-3">
                  <h3>Back End Web Developer</h3>
                  <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime libero id unde error sint itaque sapiente numquam aspernatur molestiae!</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}