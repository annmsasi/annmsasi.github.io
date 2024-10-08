import { NgModule } from '@angular/core'; // Importing NgModule
import { BrowserModule } from '@angular/platform-browser'; // Importing BrowserModule
import { RouterModule, Routes } from '@angular/router'; // Importing RouterModule and Routes
import { AppComponent } from './app.component'; // Importing AppComponent
import { HomeComponent } from './home/home.component'; // Importing HomeComponent
import { PortfolioComponent } from './portfolio/portfolio.component'; // Importing PortfolioComponent
import { ContactComponent } from './contact/contact.component';

// Defining the routes for navigation
export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route for HomeComponent
  { path: 'portfolio', component: PortfolioComponent }, // Route for PortfolioComponent
  { path: 'profile', component: ContactComponent }, // Route for ProfileComponent
  { path: '**', redirectTo: '' } // Redirect to Home for any unknown routes
];

@NgModule({
  imports: [
    AppComponent,
    BrowserModule, // Importing BrowserModule for browser functionalities
    RouterModule.forRoot(routes), // Configuring routing with the defined routes
    HomeComponent, // Importing HomeComponent (standalone)
    PortfolioComponent, // Importing PortfolioComponent (standalone)
  ],
})

export class AppModule {} // Exporting the AppModule class
