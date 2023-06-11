import { LayoutComponent } from './../../../ui/layout/src/lib/layout/layout.component';
import { Routes } from "@angular/router";

export const route: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "home",
                loadChildren: async () => (await import('libs/mobile/home/feature/src')).MobileHomeFeatureModule
            },
            {
                path: "search",
                loadChildren: async () => (await import("libs/mobile/search/feature/explore/src")).MobileSearchFeatureExploreModule
            },
            {
                path: "search-list",
                loadChildren: async () => (await import("libs/mobile/search/feature/list-search/src")).MobileSearchFeatureListSearchModule
            },
            {
                path: '',
                redirectTo: "home",
                pathMatch: "full"
            }
        ]
    }
]