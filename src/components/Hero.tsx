
import { Button } from "@/components/ui/button";
import { Mic, Play, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-8 border border-blue-100">
            <span className="text-blue-600 text-sm font-medium">
              🎉 Now in Beta - Join the waitlist
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Say it.
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              We'll shop it.
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Turn your voice into a complete grocery cart in seconds. No more typing, 
            no more forgotten items, no more app juggling. Just speak and shop.
          </p>
          
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 bg-gray-100 rounded-full p-4 text-left">
                <span className="text-gray-500 italic">
                  "I need stuff for tacos"
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-500 text-center">
              Try saying this to see the magic happen ✨
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-lg"
            >
              Sign Up Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-2 hover:bg-gray-50"
            >
              <Play className="mr-2 h-5 w-5" />
              See Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
