import { Car, Hammer, Droplets, Warehouse, Bike, Tent, Box, Truck, Armchair, Factory } from 'lucide-react';
import { ServiceItem, TestimonialItem } from './types';

// Converted Google Drive view link to direct download/display link
export const LOGO_URL = "https://raw.githubusercontent.com/mlarsen084/larsens-plastic-welding/refs/heads/main/logo%20white.png";

export const COMPANY_INFO = {
  address: "124 Joseph Street, Invercargill, New Zealand",
  phone: "022 325 5988",
  email: "goldlarsen@gmail.com",
  mapLink: "https://www.google.com/maps/search/?api=1&query=124+Joseph+Street+Invercargill+New+Zealand"
};

export const GALLERY_IMAGES = [
  {
    src: "https://i.ytimg.com/vi/HvV9a3lEe2g/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGHIgXSg7MA8=&rs=AOn4CLD1IZxGPGAn1AlXANkRQ1KlZoloiA",
    title: "Bumper & Automotive Repair"
  },
  {
    src: "https://www.stanmech.com/uploads/2/1/0/9/21099874/fusion-1-apparatebau-2_orig.jpg",
    title: "Precision Plastic Welding"
  },
  {
    src: "https://plastictankrepairs.com.au/wp-content/uploads/2023/03/Plastic-Welding-1.jpeg",
    title: "Tank Maintenance"
  },
  {
    src: "https://images.jdmagicbox.com/comp/nashik/t7/0253px253.x253.171112104511.e8t7/catalogue/vetal-plastic-welding-and-tank-repair-trimurti-chowk-nashik-water-tank-repair-and-services-rxx7iv2jkk.jpg",
    title: "Water Tank Services"
  },
  {
    src: "https://greatescapefarms.com/wp-content/uploads/2016/12/Polyethylene-Water-Tank-Repair-%E2%80%93-Crack.jpg",
    title: "Crack & Leak Repair"
  },
  {
    src: "https://polytankrepairs.com.au/wp-content/uploads/2019/09/ECE6325B-D0C6-4630-BB18-3AF146EB8801-769x1024.jpeg",
    title: "Large Scale Patching"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Farm & On-Site Call Outs",
    description: "We come to you! Mobile welding service available for farm repairs, calf feeders, and stationary water tanks.",
    icon: Truck
  },
  {
    title: "Automotive & Motorbikes",
    description: "Expert repairs for car bumpers, motorbike guards, fairings, and camper van tanks to pass WOF standards.",
    icon: Car
  },
  {
    title: "Water & Liquid Tanks",
    description: "Specialized repairs for household water tanks, spray tanks, and industrial liquid storage to prevent costly replacements.",
    icon: Droplets
  },
  {
    title: "Household & Toys",
    description: "Don't throw it away—we fix broken plastic furniture, children's toys, and general household items.",
    icon: Armchair
  },
  {
    title: "Recreational Gear",
    description: "Get back on the water or trail with repairs for kayaks, cooler boxes, playground slides, and camping gear.",
    icon: Tent
  },
  {
    title: "Industrial & Custom",
    description: "Industrial components, custom fabrication for motorbike yards, and modifying parts to suit your specific needs.",
    icon: Factory
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Sarah Jenkins",
    location: "Invercargill",
    quote: "Saved me hundreds on a new bumper! You can't even tell it was cracked. efficient and friendly service.",
    rating: 5
  },
  {
    name: "Mike Thompson",
    location: "Winton",
    quote: "Fixed my calf feeder tanks overnight during the busy season. Absolute lifesaver for the farm.",
    rating: 5
  },
  {
    name: "Brendon T.",
    location: "Bluff",
    quote: "Top quality work on my kayak. Stronger than it was before the crack. Highly recommend Larsen's.",
    rating: 5
  }
];