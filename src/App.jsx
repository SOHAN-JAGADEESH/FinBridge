import styles from "./style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">

<     div className="h-screen flex flex-col">  {/* Set the height to be 100vh and use flexbox */}
        <div className={`${styles.paddingX}`}>
          <Navbar />
        </div>

        {/* flex-1 ensures that this section takes up any remaining space */}
          <div className={`flex-1 ${styles.boxWidth}`}>
            <Hero />
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
