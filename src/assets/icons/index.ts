import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon("github", ds.bypassSecurityTrustResourceUrl("assets/icons/github.svg"));
    ir.addSvgIcon("instagram", ds.bypassSecurityTrustResourceUrl("assets/icons/instagram.svg"));
    ir.addSvgIcon("linkedin", ds.bypassSecurityTrustResourceUrl("assets/icons/linkedin.svg"));
};