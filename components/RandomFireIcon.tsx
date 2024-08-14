import { IconBaseProps } from "react-icons";
import {
  FaDumpsterFire,
  FaFire,
  FaFireAlt,
  FaFireExtinguisher,
  FaFirefox,
  FaFirefoxBrowser,
  FaGripfire,
} from "react-icons/fa";
import { FaFireBurner, FaHouseFire } from "react-icons/fa6";
import {
  GiCelebrationFire,
  GiFireBomb,
  GiFireShrine,
  GiFireExtinguisher,
  GiFirewall,
  GiFireFlower,
  GiFireGem,
  GiFrostfire,
  GiFireworkRocket,
} from "react-icons/gi";
import { IoIosBonfire } from "react-icons/io";
import { IoBonfireOutline, IoLogoFirebase } from "react-icons/io5";
import { MdFireTruck, MdOutlineFireHydrantAlt } from "react-icons/md";

const icons = [
  FaDumpsterFire,
  FaFire,
  FaFireAlt,
  FaFireExtinguisher,
  FaFirefox,
  FaFirefoxBrowser,
  FaGripfire,
  FaFireBurner,
  FaHouseFire,
  IoIosBonfire,
  GiCelebrationFire,
  IoBonfireOutline,
  IoLogoFirebase,
  GiFireBomb,
  GiFireShrine,
  MdFireTruck,
  GiFireExtinguisher,
  GiFirewall,
  GiFireFlower,
  GiFireGem,
  GiFrostfire,
  MdOutlineFireHydrantAlt,
  GiFireworkRocket,
];

export default function RandomFireIcon(props: IconBaseProps) {
  const iconIndex = Math.floor(Math.random() * icons.length);
  const FireIcon = icons[iconIndex];
  return <FireIcon {...props} />;
}
