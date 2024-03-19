import { provideRouter } from "@angular/router";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { routes } from "./app-routes";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { provideCharts, withDefaultRegisterables } from "ng2-charts";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        importProvidersFrom(BrowserModule),
        provideHttpClient(withInterceptorsFromDi()),
        provideCharts(withDefaultRegisterables()),
    ],
};