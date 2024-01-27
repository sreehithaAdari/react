import styles from "../style";
import Button from "./Button";
import Clients from "./Clients";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            AI-powered video <br className="sm:block hidden" />
            <span className="text-gradient">creations at scale</span>
          </h1>
         
        </div>

        <div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Effortlessly produce studio quality videos with AI-generated avatars
            and voices.
          </p>
      <Button styles={`mt-10`} />
          
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            No credit card needed
          </p>
        </div>
      </div>


      <div className={`ss:hidden ${styles.flexCenter}`}>
        <a
          href="#"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </a>
        <p>No credit card needed</p>
      </div>
     
    </section>
  );
};

export default Hero;
