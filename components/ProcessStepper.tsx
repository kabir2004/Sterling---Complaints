"use client";

import { Card, CardContent } from "@/components/ui/card";


const processSteps = [
  {
    id: 1,
    title: "Initial Receipt",
    description: "Submission & acknowledgement within 5 business days",
  },
  {
    id: 2,
    title: "Investigation",
    description: "Thorough investigation by our Compliance team",
  },
  {
    id: 3,
    title: "Review Period",
    description: "Comprehensive review period up to 90 days",
  },
  {
    id: 4,
    title: "Resolution",
    description: "Detailed response with findings and recommendations",
  },
];

export function ProcessStepper() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {processSteps.map((step) => {
          return (
            <Card key={step.id} className="relative overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 hover:border-blue-200 transition-all duration-300 group">
              <CardContent className="p-4">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-blue-100 group-hover:shadow-lg group-hover:shadow-blue-900/20 transition-all duration-300">
                      <span className="text-sm font-bold text-primary group-hover:text-blue-600 transition-colors duration-300">
                        {step.id}
                      </span>
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-xs mb-1 group-hover:text-blue-900 transition-colors duration-300">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-tight group-hover:text-blue-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}