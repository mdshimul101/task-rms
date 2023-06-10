import { GiReceiveMoney } from "react-icons/gi";
import {
  MdOutlineLocalShipping,
  MdOutlineSupportAgent,
  MdSecurity,
} from "react-icons/md";

export const servicesData = [
  {
    id: 1,
    title: "Free Shipping",
    text: "For all oder over $99",
    icon: (
      <>
        <MdOutlineLocalShipping></MdOutlineLocalShipping>
      </>
    ),
  },
  {
    id: 2,
    title: "Money Back Guarantee",
    text: "If good have Problems",
    icon: (
      <>
        <GiReceiveMoney></GiReceiveMoney>
      </>
    ),
  },
  {
    id: 3,
    title: "Online Support 24/7",
    text: "Dedicated support",
    icon: (
      <>
        <MdOutlineSupportAgent></MdOutlineSupportAgent>
      </>
    ),
  },
  {
    id: 4,
    title: "Payment Secure",
    text: "100% secure payment",
    icon: (
      <>
        <MdSecurity></MdSecurity>
      </>
    ),
  },
];
