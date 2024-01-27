import { ex } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      How it  <br className="sm:block hidden" />works
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Whether you're a professional or beginner, you can create stunning videos in minutes instead of hours.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={ex} alt="ex" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;