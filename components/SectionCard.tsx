"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  description?: string;
}

export function SectionCard({ title, children, description }: SectionCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
      </CardContent>
    </Card>
  );
}