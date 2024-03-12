import { provideRouter } from "@angular/router";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { routes } from "./app-routes";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        importProvidersFrom(BrowserModule),
        provideHttpClient(withInterceptorsFromDi())
    ],
};