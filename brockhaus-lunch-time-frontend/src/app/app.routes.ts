import { Routes } from '@angular/router';
import { OrderComponent } from './components/order-component/order-component';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';


export const routes: Routes = [
    { path:'', component: DashboardComponent},
    { path:'orders', component: DashboardComponent  },
    { path:'orders/add', component: OrderComponent  },
    { path:'orders/:id', component: OrderComponent },
];
