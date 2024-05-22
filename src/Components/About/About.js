import CompHeader from "../CommonComp/CompHeader";
import Compnavbar from "../CommonComp/Compnavbar";
import images from "../assets/Band Members about.png";
import classes from "./About.module.css";

function About() {
    return (
        <>
            <Compnavbar />
            <CompHeader />
            <h1>About</h1>
            <div className={classes.aboutParent}>
                <div className={classes.AboutImageParent}><img src={images} /></div>
                <p className={classes.aboutPera}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus reiciendis repudiandae odio. Ducimus, illum temporibus? Tenetur, dolorem aliquid enim
                    perferendis maiores recusandae molestiae commodi ullam, aperiam aspernatur corporis expedita!
                    Laboriosam assumenda labore, quo aut distinctio officiis fugit facilis suscipit nesciunt similique
                    expedita debitis blanditiis animi nam nemo minima quaerat beatae natus ab quae sequi cumque adipisci
                    aliquid. Ab in libero placeat laudantium nostrum! Ab omnis nam tempora optio, officia aliquam
                    dolorem debitis ipsa earum rerum nobis laborum quibusdam unde ullam vel dignissimos animi minus
                    mollitia! Voluptatibus non consequatur, odit repudiandae quo sed officiis quidem culpa laborum
                    voluptate similique dicta sunt?
                </p>
            </div>
        </>
    )
}

export default About;