import { Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list-component/order-list-component';
import { OrderComponent } from './components/order-component/order-component';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';


export const routes: Routes = [
    { path:'', component: DashboardComponent},
    { path:'orders', component: DashboardComponent  },
    { path:'orders/:id', component: OrderComponent },
];