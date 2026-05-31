// src/data/services.ts

export interface ServiceTier {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  badgeKey?: string;
  priceKey: string;
  featured: boolean;
  itemsKeys: string[];
}

export const SERVICES: ServiceTier[] = [
  {
    id: "web-dev",
    icon: "web",
    titleKey: "services.t1.title",
    descriptionKey: "services.t1.desc",
    priceKey: "services.t1.price",
    featured: false,
    itemsKeys: [
      "services.t1.f1",
      "services.t1.f2",
      "services.t1.f3",
      "services.t1.f4"
    ]
  },
  {
    id: "custom-saas",
    icon: "saas",
    titleKey: "services.t2.title",
    descriptionKey: "services.t2.desc",
    badgeKey: "services.t2.badge",
    priceKey: "services.t2.price",
    featured: true,
    itemsKeys: [
      "services.t2.f1",
      "services.t2.f2",
      "services.t2.f3",
      "services.t2.f4"
    ]
  },
  {
    id: "data-ai",
    icon: "brain",
    titleKey: "services.t3.title",
    descriptionKey: "services.t3.desc",
    priceKey: "services.t3.price",
    featured: false,
    itemsKeys: [
      "services.t3.f1",
      "services.t3.f2",
      "services.t3.f3",
      "services.t3.f4"
    ]
  }
];
