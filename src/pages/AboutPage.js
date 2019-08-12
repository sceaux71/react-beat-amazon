import React from 'react'
import save1 from "../images/save1.jpeg";
import save2 from "../images/save2.jpeg";
import save3 from "../images/save3.jpeg";
import save4 from "../images/save4.jpeg";
import save5 from "../images/save5.jpeg";

export default function AboutPage() {
    return (
        <>
            <h1>Save Retail Business Project</h1>
            <br></br>
            <h2>Why this project?</h2>
            <br></br>
            <h3>1. High cost of running e-commerce</h3>
            <h4>- content creating, manage shopping site, customer service, etc.
</h4>
            <h4>- Need in-house e-commerce team to run shopping web site.</h4>
            <br></br>
            <h3>2. Lost sales opportunity.</h3>
            <h4>- Many number of items in stock but not listed on shopping web site.</h4>
            <br></br>
            <h3>3. Rely on Amazon's power to increase sale</h3>
            <h4>- In short term, sales increased but in long term store's sales has been decreased. ex) Toy's "R" us</h4>
            <br></br>
            <h3>4. Customer get used shop online</h3>
            <br></br>
            <h3>5. As a result, many of retail business is going out of business</h3>
            <br></br>
            <h2>Opportunity to retail business</h2>
            <br></br>
            <h3>- Huge number of items to sell</h3>
            <h3>- Can minimize e-commerce running cost</h3>
            <h3>- Able to deliver fast. ex) Same day delivery</h3>
            <br></br>
            <h2>Project scope</h2>
            {/* <img src="../images/save5.jpeg" />
         */}
            <img src={save1} alt="tech store logo" />
            <img src={save2} alt="tech store logo" />
            <img src={save3} alt="tech store logo" />
            <img src={save4} alt="tech store logo" />
            <img src={save5} alt="tech store logo" />





        </>
    )
}
