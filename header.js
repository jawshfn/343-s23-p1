document.addEventListener("DOMContentLoaded", function() {
    const headerElement = document.querySelector('header');

    const headerContent = `
        <section>
            <img src="https://jawshfn.github.io/343-s23-p1/images/favicon.ico" alt="Alpha Sig Logo">
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="mission.html">Mission</a></li>
                    <li><a href="philanthropy.html">Philanthropy</a></li>
                    <li><a href="values.html">Values</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <h4>Login: </h4>
            <form>
                <label for="fname">First name:</label><br>
                <input type="text" id="fname" value="John"><br>
                <label for="lname">Last name:</label><br>
                <input type="text" id="lname" value="Doe"><br>
                <input type="submit" value="Submit">
            </form>
        </section>
    `;

    headerElement.innerHTML = headerContent;
});
