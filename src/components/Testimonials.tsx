
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Busy Mom of 3",
    quote: "Taco night used to take 30 minutes to plan. Now it takes 30 seconds. This app is a game-changer for families!",
    rating: 5
  },
  {
    name: "Mike R.",
    role: "Software Engineer",
    quote: "I can build my grocery list while driving to work. The voice recognition is incredibly accurate and understands context.",
    rating: 5
  },
  {
    name: "Lisa K.",
    role: "Working Professional",
    quote: "Finally, an app that gets it. No more juggling between different store apps or forgetting items. Just speak and shop.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What our beta users are saying
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied shoppers who've revolutionized their grocery routine
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
