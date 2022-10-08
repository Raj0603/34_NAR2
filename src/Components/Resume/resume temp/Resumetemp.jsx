import "./Resumetemp.css"

function Resumetemp() {
  return (
    <div className="resume-wrapper">
      <article className="paper">
        <header className="rtheader">
          <div className="header-content">
            <div className="header-pic" title="Wiggle Wiggle">
              <div className="pic"></div>
            </div>
            <div className="header-text">
              <p className="rt-p">
                <span className="first-name">Tim</span>
                Daubenschütz
              </p>
              <p className="subtitle">Bachelor of Science (almost)</p>
            </div>
          </div>
        </header>

        <div className="content-wrapper">

          {/* <!-- CONTACT --> */}
          <section className="content">
            <div className="row">
              <div className="content-cat">
                Contact
              </div>
              <div className="content-text">
                <ul>
                  <li>Website</li>
                  <li>daubenschuetz.de</li>
                </ul>
                <ul>
                  <li>Email</li>
                  <li>tim.daubenschuetz@gmail.com</li>
                </ul>
                <ul>
                  <li>Phone</li>
                  <li>+49 123 456 78</li>
                </ul>
              </div>
            </div>
          </section>

          {/* <!-- LOCATION --> */}
          <section className="content">
            <div className="row">
              <div className="content-cat">
                Location
              </div>
              <div className="content-text">
                <ul>
                  <li>Address</li>
                  <li>Some street</li>
                </ul>
                <ul>
                  <li>Postal Code</li>
                  <li>12345</li>
                </ul>
                <ul>
                  <li>City</li>
                  <li>Ulm</li>
                </ul>
                <ul>
                  <li>Region</li>
                  <li>Baden-Württemberg</li>
                </ul>
              </div>
            </div>
          </section>

          {/* <!-- PROFILES --> */}
          <section className="content">
            <div className="row">
              <div className="content-cat">
                Profiles
              </div>
              <div className="content-text">
                <ul>
                  <li>Twitter</li>
                  <li>
                    {/* <a >@TimDaub</a> */}
                  </li>
                </ul>
                <ul>
                  <li>Codepen</li>
                  <li>
                    {/* <a >@TimDaub</a> */}
                  </li>
                </ul>
                <ul>
                  <li>Github</li>
                  <li>
                    {/* <a >@TimDaub</a> */}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="row">
              <div className="content-cat big-text">
                Self-employed
                <p className="cc-p">2012-05-01 till today</p>
              </div>
              <div className="content-text work-listing">
                <p className="cc-p">Hondrt.de is a small business enterprise (dt. Kleingewerbe) specializing in serving technical needs of local customers. For example building corporate homepages, technical consulting and programming.</p>
                <p className="highlight">Implemented and marketed Timedoublr.com, a flexible time tracking app for Apple iOS</p>
                <p className="highlight">Consulted a medium-sized business in establishing their media presence</p>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="row">
              <div className="content-cat big-text">
                Ulm University
                <p className="cc-p">2013-09-01 till today</p>
              </div>
              <div className="content-text work-listing">
                <p className="cc-p">Development of Module Management System (MMS), a content management system for studycourse module handbooks introduced as part of the Bologna Process. Feature requirements included: versioning of every resource, a complex editorial process, visual representation of high level data structures (e.g. trees) and a flexible, RESTful API.</p>
                <p className="highlight">Won the Software Construction (dt. Softwaregrundprojekt) className challenge for best usability and got employed by university</p>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="row">
              <div className="content-cat">
                Education
                <p className="cc-p">2011-10-01 till</p>
                <p style={{ marginTop: "0.25em" }}>2015-02-14</p>
              </div>
              <div className="content-text work-listing education-listing">
                <p className="heading">Ulm University</p>
                <p className="highlight">Media Informatics (Bachelor of Science)</p>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="row">
              <div className="content-cat big-text">
                Awards
                <p className="cc-p">Best Usability</p>
                <p style={{ marginTop: "0.25em" }}>2013-07-13</p>
              </div>
              <div className="content-text work-listing education-listing">
                <p className="heading">Faculty of Engineering and Computer Science at Ulm University:</p>
                <p className="highlight">For developing Module Management System (MMS) a content management system for module handbooks introduced as part of the Bologna Process.</p>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="row">
              <div className="content-cat big-text">
                Skills
              </div>
              <div className="content-text skills-listing">
                <ul>
                  <li>
                    Web
                    <span>(Master)</span>
                    <p className="highlight">Node.js</p>
                    <p className="highlight">Angular.js</p>
                  </li>
                  <li>
                    Mobile
                    <span>(Advanced)</span>
                    <p className="highlight">Cocoa</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    Languages
                    <span>(Master)</span>
                    <p className="highlight">Javascript</p>
                  </li>
                  <li>
                    Software
                    <span>(Advanced)</span>
                    <p className="highlight">Adobe Photoshop</p>
                    <p className="highlight">Adobe InDesign</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>

      </article>

    </div>
  )

}
export default Resumetemp