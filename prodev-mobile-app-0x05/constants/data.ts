import { PropertyListingProps } from "@/interfaces";
import { ImageSourcePropType } from "react-native";

const SAMPLE_DATA : PropertyListingProps[] = [
    {
      propertyName: "Villa Arrciffee Beach House",
      location: {
        street: "123 Ocean Drive",
        city: "Miami",
        country: "USA"
      },
      rate: 4.76,
      currency: "$",
      amount: 620,
      favorite: false
    },
    {
      propertyName: "Sunset Paradise Villa",
      location: {
        street: "456 Beachfront Lane",
        city: "Cancun",
        country: "Mexico"
      },
      rate: 4.85,
      currency: "$",
      amount: 750,
      favorite: true
    },
    {
      propertyName: "Golden Sands Retreat",
      location: {
        street: "789 Coastal Road",
        city: "Gold Coast",
        country: "Australia"
      },
      rate: 4.92,
      currency: "$",
      amount: 900,
      favorite: false
    },
    {
      propertyName: "Azure Horizon Cottage",
      location: {
        street: "321 Seaside Avenue",
        city: "Nice",
        country: "France"
      },
      rate: 4.78,
      currency: "$",
      amount: 680,
      favorite: false
    },
    {
      propertyName: "Palm Haven Villa",
      location: {
        street: "654 Palm Street",
        city: "Bali",
        country: "Indonesia"
      },
      rate: 4.88,
      currency: "$",
      amount: 1200,
      favorite: true
    },
    {
      propertyName: "Ocean Breeze Mansion",
      location: {
        street: "987 Marina Drive",
        city: "Dubai",
        country: "UAE"
      },
      rate: 4.95,
      currency: "$",
      amount: 2500,
      favorite: false
    },
    {
      propertyName: "Seaside Serenity House",
      location: {
        street: "147 Ocean View Road",
        city: "Phuket",
        country: "Thailand"
      },
      rate: 4.81,
      currency: "$",
      amount: 1500,
      favorite: false
    },
    {
      propertyName: "Coral Reef Villa",
      location: {
        street: "258 Coral Lane",
        city: "Maldives",
        country: "Maldives"
      },
      rate: 4.89,
      currency: "$",
      amount: 850,
      favorite: false
    },
    {
      propertyName: "Tropical Bliss Retreat",
      location: {
        street: "369 Palm Beach Road",
        city: "Maui",
        country: "USA"
      },
      rate: 4.83,
      currency: "$",
      amount: 720,
      favorite: false
    },
    {
      propertyName: "Emerald Bay Cottage",
      location: {
        street: "741 Bayfront Avenue",
        city: "Santorini",
        country: "Greece"
      },
      rate: 4.90,
      currency: "$",
      amount: 780,
      favorite: true
    }
  ];

  type FilterItem = {
    name: string;
    image: ImageSourcePropType;
  };

const FILTERS: FilterItem[] = [
  { name: "Mansion", image: require("@/assets/images/mansion.png") },
  { name: "CountrySide", image: require("@/assets/images/mansion.png") },
  { name: "Villa", image: require("@/assets/images/mansion.png") },
  { name: "Tropical", image: require("@/assets/images/mansion.png") },
  { name: "New", image: require("@/assets/images/mansion.png") },
  { name: "Amazing pool", image: require("@/assets/images/mansion.png") },
  { name: "Beach house", image: require("@/assets/images/mansion.png") },
  { name: "Island", image: require("@/assets/images/mansion.png") },
  { name: "Camping", image: require("@/assets/images/mansion.png") },
  { name: "Apartment", image: require("@/assets/images/mansion.png") },
  { name: "House", image: require("@/assets/images/mansion.png") },
  { name: "Lakefront", image: require("@/assets/images/mansion.png") },
  { name: "Apartment", image: require("@/assets/images/mansion.png") },
  { name: "Treehouse", image: require("@/assets/images/tree.png") },
  { name: "Cabins", image: require("@/assets/images/mansion.png") },
  { name: "Castles", image: require("@/assets/images/mansion.png") },
  { name: "Lakeside", image: require("@/assets/images/mansion.png") },
];

  export { SAMPLE_DATA, FILTERS }