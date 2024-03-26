"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import "../builderFiles/builder-registry";

interface BuilderPageProps {
  content: any;
  model: string;
}

export function RenderBuilderContent({ content, model }: BuilderPageProps) {
  builder.init(process.env.NEXT_PUBLIC_API_KEY as string);
  const isPreviewing = useIsPreviewing();

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} />;
  }

  return null;
}
