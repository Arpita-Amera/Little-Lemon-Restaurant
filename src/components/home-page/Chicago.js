import ArrowLeftIcon from "../ui/icons/ArrowLeftIcon";
import ArrowRightIcon from "../ui/icons/ArrowRightIcon";
import AboutImage1 from "../../images/Mario and Adrian A.png";
import AboutImage2 from "../../images/Mario and Adrian b.png";
import classes from "./Chicago.module.css";

export default function Chicago() {
  return (
    <section className={classes.chicagoSection}>
      <div className={`fluidContainer ${classes.chicagoContainer}`}>
        <h2 className="sectionTitle">Our story</h2>
        <div className={classes.aboutContent}>
          <div className={classes.aboutText}>
            <div className={classes.displayTitle}>Little Lemon</div>
            <div className={classes.displaySubtitle}>Chicago</div>
            <div className={classes.text}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                ad cumque labore recusandae vero a quas repellat perferendis
                sint? Dolorum, tempore ratione fugiat illum ullam officia
                aliquid delectus quos! Accusantium. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Maxime quibusdam fugit iure
                autem! Magnam animi laboriosam assumenda vero eos a dolores,
                itaque repellendus fuga ab, ipsam reiciendis non vitae ut.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                quibusdam fugit iure autem! Magnam animi laboriosam assumenda
                vero eos a dolores, itaque repellendus fuga ab, ipsam reiciendis
                non vitae ut.
              </p>
            </div>
          </div>
          <div className={classes.imagesCollage}>
            <div className={classes.leftImageContainer}>
              <div>
                <img
                  src={AboutImage1}
                  alt="Chefs"
                />
              </div>
            </div>
            <div className={classes.rightImageContainer}>
              <div>
                <img
                  src={AboutImage2}
                  alt="Chef"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
