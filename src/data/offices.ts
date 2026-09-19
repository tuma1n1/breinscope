export interface Office {
  name: string;
  address: string;
  phones: string[];
  email: string | null;
  isHQ?: boolean;
  lat?: number;
  lng?: number;
}
 
export const offices: Office[] = [
  {
    name: "Nairobi Office (HQ)",
    address:
      "Office Suite 26, 3rd Floor, Diani Road, Off Ole Dume Road, P.O. Box 30114-00100, Nairobi, Kenya",
    phones: ["+254 729 325577", "+254 734 325577"],
    email: "info@breinscope.co.ke",
    isHQ: true,
    lat: -1.2921,
    lng: 36.8219,
  },
  {
    name: "Western Region Office (Kisumu)",
    address:
      "1st Floor, Business Incubation Centre, Varsity Plaza, P.O. Box 084-40123, Kisumu, Kenya",
    phones: ["+254 (0)20 260 1894", "+254 735 571088", "+254 720 808857"],
    email: "info@breinscope.co.ke",
    lat: -0.1022,
    lng: 34.7617,
  },
  {
    name: "Somalia Office (Mogadishu)",
    address: "Adani Tower 2, Maka-Almukarama Street, Hodan District, Mogadishu, Somalia",
    phones: ["+252 614 333 360"],
    email: null,
    lat: 2.0469,
    lng: 45.3182,
  },
  {
    name: "Rwanda Office (Kigali)",
    address: "KG 594, Gate 4 Kacyiru, P.O. Box 4095, Kigali, Rwanda",
    phones: ["+250 789 362 219"],
    email: "info@breinscope.co.ke",
    lat: -1.9441,
    lng: 30.0619,
  },
  {
    name: "South Sudan Office (Juba)",
    address: "GMI Training & Consultancy Ltd, Lukak Building, 2nd Floor, Juba, South Sudan",
    phones: ["+211 921 705 026", "+211 916 951 658"],
    email: "info@gmi-consultant.com",
    lat: 4.8517,
    lng: 31.5825,
  },
];