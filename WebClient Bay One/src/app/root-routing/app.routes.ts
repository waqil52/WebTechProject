import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app-dashboard/app-dashboard.module').then(
        (module) => module.AppDashboardModule
      ),
    data: {
      breadCrumb: 'Dashboard',
    },
  },
  {
    path: 'booking',
    loadChildren: () => import('../app-booking/app-booking.module').then(m => m.AppBookingModule),
    data: {
      breadCrumb:"Booking"
    }
  },
  {
    path: 'cabin',
    loadChildren: () => import('../app-cabins/app-rooms.module').then(m => m.AppRoomsModule),
    data: {
      breadCrumb:"Cabin"
    }
  },
  {
    path: 'passengers',
    loadChildren: () => import('../app-passengers/app-passengers.module').then(m => m.AppPassengersModule),
    data: {
      breadCrumb:"Passengers"
    }
  },
  {
    path: 'location',
    loadChildren: () => import('../app-locations/app-settings.module').then(m => m.AppSettingsModule),
    data: {
      breadCrumb:"Locations"
    }
  },
  {
    path: '**',
    loadChildren:()=>import("../app-tools/app-not-found/app-not-found.module").then(m=>m.AppNotFoundModule),
    data: {
      breadCrumb: '404',
    },
  }
];

export function getBusinessRoutes() {
  return routes;
}
