var homeContent = `
<title>Home</title>
<div class="home">
        <section class="hero">
          <div class="header">Header goes here</div>
          <div class="subheader">Less important text goes here</div>
          <div class="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            aliquid minus nemo sed est.
          </div>
          <a href="#" class="read-more">Read More</a>
        </section>
        <section class="testimonial">
          <div class="testimonial-text">
            <div class="quote">
              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
              ab illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo. Iste natus error sit voluptatem accusantium
              doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo”
            </div>
            <div class="quotee">John Smith</div>
            <div class="quotee-title">Corporation CEO, books author.</div>
          </div>
        </section>
        <section class="upcoming-events">
          <div class="header">Upcoming Events:</div>
          <div class="events-list">
            <div class="event">
              <div class="date">
                <div class="day">06</div>
                <div class="month">Jun</div>
              </div>
              <div class="event-text">
              <div class="title">Sed et persipiatis unde omnis iste natus</div>
              <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div>
              </div>
            </div>
            <div class="event">
              <div class="date">
                <div class="day">30</div>
                <div class="month">Jul</div>
              </div>
              <div class="event-text">
              <div class="title">Sed et persipiatis unde omnis iste natus</div>
              <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div>
              </div>
            </div>
            <div class="event">
              <div class="date">
                <div class="day">30</div>
                <div class="month">Aug</div>
              </div>
              <div class="event-text">
              <div class="title">Sed et persipiatis unde omnis iste natus</div>
              <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div>
              </div>
            </div>
            <div class="event">
              <div class="date">
                <div class="day">23</div>
                <div class="month">Nov</div>
              </div>
              <div class="event-text">
              <div class="title">Sed et persipiatis unde omnis iste natus</div>
              <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div>
              </div>
            </div>
            <div class="event">
              <div class="date">
                <div class="day">23</div>
                <div class="month">Dec</div>
              </div>
              <div class="event-text">
              <div class="title">Sed et persipiatis unde omnis iste natus</div>
              <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div>
              </div>
            </div>
          </div>
        </section>
    </div>
`;

var aboutContent = `
<title>About</title>
<div class="about">
        <section class="hero">
          <div class="header">Our History:</div>
        </section>
        <section class="about-description">
            <div class="description-text">
              <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
            </p>
          </div>
        </section>
    </div>
`;

var galleryContent = `
<title>Gallery</title>
<div class="gallery">
        <section class="gallery-section">
            <div class="header">Gallery:</div>
            <div class="gallery-images">
                <a class="image" href="#" id="foodfestival"><div class="food-festival"></div></a>
                <a class="image" href="#" id="deejay"><div class="dee-jay""></div></a>
                <a class="image" href="#" id="speech"><div class="speech" "></div></a>
                <a class="image" href="#" id="openfoodfest"><div class="open-foodfest"></div></a>
                <a class="image" href="#"><div class="international" id="international"></div></a>
            </div>
        </section>
    </div>
`;

var foodfestivalContent = `
<title>Food Festival</title>
<div class="event-page">
        <section class="hero food-festival">
          <div class="event-number">1.</div>
          <div class="event-name">food festival</div>
        </section>
        <section class="event-description">
            <div class="description-text">
                <p1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p1>
                <p2>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p2>
            </div>
        </section>
    </div>
`;

var deejayContent = `
<title>Dee Jay</title>
<div class="event-page">
        <section class="hero dee-jay">
          <div class="event-number">2.</div>
          <div class="event-name">dee-jay</div>
        </section>
        <section class="event-description">
            <div class="description-text">
                <p1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p1>
                <p2>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p2>
            </div>
        </section>
    </div>
`;

var speechContent = `
<title>Speech</title>
<div class="event-page">
        <section class="hero speech">
          <div class="event-number">3.</div>
          <div class="event-name">speech</div>
        </section>
        <section class="event-description">
            <div class="description-text">
                <p1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p1>
                <p2>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p2>
            </div>
        </section>
    </div>
`;

var openfoodfestContent = `
<title>Open Foodfest</title>
<div class="event-page">
        <section class="hero open-foodfest">
          <div class="event-number">4.</div>
          <div class="event-name">open foodfest</div>
        </section>
        <section class="event-description">
            <div class="description-text">
                <p1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p1>
                <p2>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p2>
            </div>
        </section>
    </div>
`;
var internationalContent = `
<title>International</title>
<div class="event-page">
        <section class="hero international">
          <div class="event-number">5.</div>
          <div class="event-name">international</div>
        </section>
        <section class="event-description">
            <div class="description-text">
                <p1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p1>
                <p2>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p2>
            </div>
        </section>
    </div>
`;

var blogContent = `
<title>Blogs</title>
<div class="blogs">
          <div class="header">Blog:</div>
          <div class="blog-list">
            <a href="#" class="blog-display" id="blog1">
              <div class="date">
                <div class="day">06</div>
                <div class="month">Jun</div>
              </div>
              <div class="blog-image"></div>
              <div class="blog-text">
              <div class="title">Sed et persipiatis unde omnis iste natus</div>
              <div class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
              </div>
            </a>
            <a href="#" class="blog-display" id="blog2">
                <div class="date">
                  <div class="day">30</div>
                  <div class="month">Jul</div>
                </div>
                <div class="blog-image"></div>
                <div class="blog-text">
                <div class="title">Sed et persipiatis unde omnis iste natus</div>
                <div class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
                </div>
              </a>
              <a href="#" class="blog-display" id="blog3">
                <div class="date">
                  <div class="day">30</div>
                  <div class="month">Aug</div>
                </div>
                <div class="blog-image"></div>
                <div class="blog-text">
                <div class="title">Sed et persipiatis unde omnis iste natus</div>
                <div class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
                </div>
              </a>
              <a href="#"class="blog-display" id="blog4">
                <div class="date">
                  <div class="day">23</div>
                  <div class="month">Nov</div>
                </div>
                <div class="blog-image"></div>
                <div class="blog-text">
                <div class="title">Sed et persipiatis unde omnis iste natus</div>
                <div class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
                </div>
              </a>
              <a href="#" class="blog-display" id="blog5">
                <div class="date">
                  <div class="day">23</div>
                  <div class="month">Dec</div>
                </div>
                <div class="blog-image"></div>
                <div class="blog-text">
                <div class="title">Sed et persipiatis unde omnis iste natus</div>
                <div class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
                </div>
              </a>
        </div>
    </div>
`;

var blog1Content = `
<title>Blog 1</title>
<div class="blog-post">
        <section class="hero">
            <div class="date large">
                <div class="day">06</div>
                <div class="month">Jun</div>
            </div>
        </section>
        <section class="blog-post-text">
            <div class="section">
                <h1>Header #1:</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>
            <div class="section">
              <h1>Header #2:</h1>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
        </section>
    </div>
`;

var blog2Content = `
<title>Blog 2</title>
<div class="blog-post">
        <section class="hero">
            <div class="date large">
                <div class="day">30</div>
                <div class="month">Jul</div>
            </div>
        </section>
        <section class="blog-post-text">
            <div class="section">
                <h1>Header #1:</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>
            <div class="section">
              <h1>Header #2:</h1>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
        </section>
    </div>
`;

var blog3Content = `
<title>Blog 3</title>
<div class="blog-post">
<section class="hero">
    <div class="date large">
        <div class="day">30</div>
        <div class="month">Aug</div>
    </div>
</section>
<section class="blog-post-text">
    <div class="section">
        <h1>Header #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="section">
      <h1>Header #2:</h1>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
  </div>
</section>
</div>
`;

var blog4Content = `
<title>Blog 4</title>
<div class="blog-post">
<section class="hero">
    <div class="date large">
        <div class="day">23</div>
        <div class="month">Nov</div>
    </div>
</section>
<section class="blog-post-text">
    <div class="section">
        <h1>Header #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="section">
      <h1>Header #2:</h1>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
  </div>
</section>
</div>
`;

var blog5Content = `
<title>Blog 5</title>
<div class="blog-post">
<section class="hero">
    <div class="date large">
        <div class="day">23</div>
        <div class="month">Dec</div>
    </div>
</section>
<section class="blog-post-text">
    <div class="section">
        <h1>Header #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="section">
      <h1>Header #2:</h1>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
  </div>
</section>
</div>
`;

var contactusContent = `
<title>Contact Us</title>
<div class="contact">
<div class="contact-header">
  Contact Us:
</div>
<section class="contactLayout">
  <div class="contactForm">
    <input
      type="text"
      class="textFields"
      name="yourName"
      id="yourName"
      placeholder="Your name..."
    />
    <input
      type="text"
      class="textFields"
      name="email"
      id="email"
      placeholder="Email Address…"
    />
    <input
      type="text"
      class="textFields"
      name="company"
      id="company"
      placeholder="Company..."
    />
    <textarea
      class="textFields"
      name="message"
      placeholder="Message..."
    ></textarea>
    <input class="submit" type="submit" value="Send Message" />
  </div>
  <div class="map">
    <img src="images/map.png" />
  </div>
</div>
</section>

</div>
`
export function changePageContent(pageID) {
  let pageName = pageID + "Content";
  $("#app").html(eval(pageName));
  if(pageID == "home") {
    $("#nav-holder").addClass("home");
  }
  else {
    $("#nav-holder").removeClass("home");
  }
}