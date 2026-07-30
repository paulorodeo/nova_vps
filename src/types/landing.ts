import type { LucideIcon } from "lucide-react";

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export type SpecialtyCategory = "Urbana" | "Campo" | "Praia" | "Serra";
export type GalleryFilter = "Todos" | SpecialtyCategory;

export interface SpecialtyItem extends FeatureItem {
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  image: string;
  title: string;
  tag: SpecialtyCategory;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
