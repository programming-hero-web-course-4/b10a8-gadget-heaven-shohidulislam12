import { useEffect } from "react";


const HelpCenter = () => {
    useEffect(() => {
        document.title = 'HelpCenter| Gadget Heaven';

      }, []);
    return (
        <div className="join join-vertical w-full container mx-auto">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">What brands of laptops do you offer?</div>
          <div className="collapse-content">
            <p>We offer a wide range of popular laptop brands, including Dell, HP, Lenovo, Asus, and Apple MacBook. You can explore various models for each brand, including both budget-friendly and premium options.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium"> Do you provide warranties on laptops?</div>
          <div className="collapse-content">
            <p>Yes, all laptops come with a manufacturer’s warranty. The duration and specifics of the warranty vary by brand and model. For more details, check the individual product page or contact our support team.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium"> Can I get a trade-in offer when purchasing a new smartphone?
</div>
          <div className="collapse-content">
            <p>          We currently offer trade-in options on select smartphone models. You can exchange your old smartphone for a discount on a new one. For eligibility and terms, visit our Trade-In Program page.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Are your iPhones brand new or refurbished?
</div>
          <div className="collapse-content">
            <p>
            We offer both brand new and certified refurbished iPhones. All refurbished iPhones undergo a rigorous quality check to ensure optimal performance, and they come with a limited warranty for peace of mind.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium"> Can I buy a MacBook on installments?
</div>
          <div className="collapse-content">
            <p> 
            Yes, we provide financing options for eligible customers on select MacBook models. Please check out the product details or consult our finance page for installment terms.</p>
          </div>
        </div>
      </div>
    );
};

export default HelpCenter;