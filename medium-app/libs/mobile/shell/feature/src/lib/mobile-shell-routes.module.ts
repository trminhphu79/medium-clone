import { LayoutComponent } from './../../../ui/layout/src/lib/layout/layout.component';
import { Routes } from "@angular/router";

export const route: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                loadChildren: async () => (await import('libs/mobile/home/feature/src')).MobileHomeFeatureModule
            }
        ]
    }
]