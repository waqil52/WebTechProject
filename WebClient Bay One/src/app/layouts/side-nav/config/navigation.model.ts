export interface NavigationModel {
    name: string;
    route: string;
    matIcon?: string;
    localIcon?: string;
}

export const NavConfigs: NavigationModel[] = [
    {
        name: "Dashboard",
        route: "dashboard",
        matIcon: "home"
    },
    {
        name: "Create A Booking",
        route: "booking",
        matIcon:"assignment"
    },
    {
        name: "Our Cabins",
        route: "cabin",
        matIcon:"class"
    },
    {
      name: "Passengers",
      route: "passengers",
      matIcon:"supervisor_account"
  },
    {
        name: "Locations",
        route: "location",
        matIcon:"explore"
    }
];
