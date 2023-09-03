import styles from "../style";
import { discount, robot } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-[52px] 2xl:text-[72px] text-white leading-snug md:leading-normal lg:leading-relaxed">
            From Rupees to 
            <span className="text-gradient"> Dollars</span>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-[52px] 2xl:text-[68px] text-white leading-snug md:leading-normal lg:leading-relaxed w-full">
          Your <span className="text-gradient"> Financial Compass</span>
          <br className="sm:block hidden" /> <span>in Australia</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Empowering India's bright students in Australia with the tools they need to thrive.
        </p>
        <Button styles={`mt-10`} />
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative overflow-hidden`}>
        <img src={robot} alt="billing" className="w-[100%] max-h-full relative z-[5]" />
      </div>
    </section>
  );
};

export default Hero;
