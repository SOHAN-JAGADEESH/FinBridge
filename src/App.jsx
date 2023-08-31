import styles from "./style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* This is the main container for Navbar and Hero */}
    <div className="flex flex-col h-screen">
      <div className={`${styles.paddingX} flex-shrink-0`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary flex-grow ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Billing />
        <CardDeal />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
