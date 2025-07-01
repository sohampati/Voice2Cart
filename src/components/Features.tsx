
import { Mic, ShoppingCart, CreditCard, Truck } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Talk, Don't Type",
    description: "Use your voice to list what you need in seconds. Natural speech recognition that understands context and preferences."
  },
  {
    icon: ShoppingCart,
    title: "Smart Grocery Matching",
    description: "We map your needs to real products from Walmart and more. AI-powered matching finds exactly what you're looking for."
  },
  {
    icon: CreditCard,
    title: "One-Tap Checkout",
    description: "Review your cart and check out directly — no juggling apps. Seamless integration with your favorite stores."
  },
  {
    icon: Truck,
    title: "Optimized for Delivery Fees",
    description: "We minimize fees by grouping your items smartly. Save money with intelligent cart optimization."
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Grocery shopping, reimagined
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Skip the tedious typing and endless scrolling. Just speak your needs and watch your cart fill up automatically.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl w-fit mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
