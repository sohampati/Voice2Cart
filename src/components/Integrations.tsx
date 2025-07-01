
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const integrations = [
  {
    name: "Walmart",
    status: "active",
    logo: "🛒",
    description: "Full integration with pickup and delivery"
  },
  {
    name: "Kroger",
    status: "coming-soon",
    logo: "🏪",
    description: "Coming Q2 2024"
  },
  {
    name: "Amazon Fresh",
    status: "planned",
    logo: "📦",
    description: "Planned for 2024"
  },
  {
    name: "Target",
    status: "planned",
    logo: "🎯",
    description: "Under development"
  }
];

export const Integrations = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop from your favorite stores
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're building integrations with major grocery retailers to give you the best selection and prices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <Card key={index} className="p-6 bg-white border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-4">{integration.logo}</div>
                <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
                <Badge 
                  variant={integration.status === 'active' ? 'default' : 'secondary'}
                  className={integration.status === 'active' ? 'bg-green-500 hover:bg-green-600' : ''}
                >
                  {integration.status === 'active' ? 'Live' : 
                   integration.status === 'coming-soon' ? 'Coming Soon' : 'Planned'}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your preferred store? Let us know which one you'd like to see next.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Request a store integration →
          </a>
        </div>
      </div>
    </section>
  );
};
