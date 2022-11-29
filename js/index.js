
let element = (
    <div>
        <div class="navbar">
            <ul>
                <li class="active">
                    <a href="index.html">HOME</a>
                </li>
                <li class="active">
                    <a href="html/education.html">EDUCATION</a>
                </li>
                <li class="active">
                    <a href="html/contact.html">CONTACT ME</a>
                </li>
                <li class="active">
                    <a href="html/gallery.html">GALLERY</a>
                </li>
                <li class="active">
                    <a href="html/todo.html">TO DO LIST</a>
                </li>
                <li class="active">
                    <a href="Homework 1/index.html">BUSINESS CARD</a>
                </li>
                <li class="active">
                    <a href="https://github.com/1javid" target="_blank">GITHUB ACCOUNT</a>
                </li>
                <li class="active">
                    <a href="https://github.com/1javid?tab=repositories" target="_blank">GITHUB PAGE</a>
                </li>
            </ul>
        </div>

        <div class="about-me-container">
            <div class="about-me-card">
                <div class="about-me-head">
                    <img src="img/myPfp.jpeg" alt="Profile Picture"></img>
                    <h1>Javid Alakbarli</h1>
                </div>
                <hr></hr>
                <div class="about-me-main">
                    <h2>About Me</h2>
                    <span>
                        <p>I'm a Junior Computer Science major.</p>
                    </span>
                    <span>
                        <p>I'm a Software Developer, specializing in backend development.</p>
                    </span>
                    <span>
                        <p>My main expertise is in Java.</p>
                    </span>
                    <span>
                        <p>Always open to new technologies!</p>
                    </span>
                </div>
                <hr></hr>
                <div class="about-me-skills">
                    <h2>Tech Skills</h2>

                    <div class="skills">
                        <h4>JAVA</h4>
                        <h4>C++</h4>
                        <h4>HTML</h4>
                        <h4>CSS</h4>
                        <h4>JS</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ReactDOM.render(element, document.getElementById("root"));
