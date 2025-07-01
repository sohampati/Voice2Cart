
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Plus } from "lucide-react";

const sampleItems = [
  { name: "Ground Turkey (1 lb)", price: "$4.99", store: "Walmart" },
  { name: "Taco Shells (12 ct)", price: "$2.49", store: "Walmart" },
  { name: "Shredded Cheese", price: "$3.99", store: "Walmart" },
  { name: "Fresh Cilantro", price: "$1.99", store: "Walmart" },
  { name: "Roma Tomatoes (2 lbs)", price: "$2.99", store: "Walmart" }
];

export const DemoSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See it in action
          </h2>
          <p className="text-xl text-gray-600">
            Watch how your voice transforms into a complete shopping cart
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-500 ml-4">Voice Input</span>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="text-lg text-gray-800 italic">
                  "I need stuff for smoothies and lunch meal prep"
                </p>
              </div>
              
              <div className="flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-blue-500 animate-bounce" />
              </div>
            </div>
          </div>
          
          <div>
            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Your Cart</h3>
                <span className="text-sm text-gray-500">5 items</span>
              </div>
              
              <div className="space-y-4 mb-6">
                {sampleItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.store}</p>
                    </div>
                    <span className="font-semibold text-gray-900">{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-xl font-bold text-green-600">$17.45</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Add to Walmart Cart
                </Button>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Try It Now
          </Button>
        </div>
      </div>
    </section>
  );
};
