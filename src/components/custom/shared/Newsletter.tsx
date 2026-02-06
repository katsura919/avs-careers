import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="bg-[#08324a] text-white py-12 px-8 rounded-t-2xl">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-[#0452b0] border-none">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center ">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Get Exclusive Access
                </h3>
                <p className="text-gray-300 text-sm">
                  Be the first to know about hiring and exciting opportunities!
                  So, what are you waiting for?
                </p>
              </div>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 bg-white text-gray-900 border-white"
                />
                <Button className="bg-[#FF6B35] hover:bg-[#ff5522] border-none shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
