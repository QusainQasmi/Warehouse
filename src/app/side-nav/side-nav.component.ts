import { Component } from '@angular/core';
import { MatModules } from '../../core/mat-modules';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SharedModule } from '../../core/shared/shared.module';
import { Modules } from '../../common.enums';

@Component({
  selector: 'cs-side-nav',
  standalone: true,
  imports: [SharedModule, RouterModule, MatModules, RouterOutlet],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {

  companyName = 'Scripta';
  companyLogo = '';
  collapsed = false;
  activeModule = '';
  isMobile = false;
  showOverlay: boolean = false;

  modules: any[] = [
    {
      id: Modules.Setup,
      name: 'Setup',
      icon: 'account_tree',
      route: '/setup',
      badge: 0,
      children: [
        { id: 'location', name: 'Locations', icon: 'location_on', route: '/setup/location' },
        { id: 'party', name: 'Party', icon: 'person_pin', route: '/setup/party' },
      ]
    },
    {
      id: Modules.CRM,
      name: 'CRM',
      icon: 'settings',
      route: '/crm',
      badge: 0,
      children: [
        // {}
      ]
    },
    {
      id: Modules.Utilities,
      name: 'Utilities',
      icon: 'build',
      route: '/utilities',
      badge: 0,
      children: [
        { id: 'userSetup', name: 'User', icon: 'person', route: '/utilities/user-setup' },
      ]
    },
  ];

  userName = 'Admin User';
  userRole = 'Super Admin';

  constructor(public _router: Router) {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.collapsed = true;
    }
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;

    if (this.isMobile) {
      this.showOverlay = !this.collapsed;
    }
  }

  onModuleClick(module: any, event?: Event) {
    if (module.children && module.children.length > 0 && !this.collapsed) {
      module.expanded = !module.expanded;
      event?.stopPropagation();
    } else {
      this.activeModule = module.id;
      console.log('Navigating to:', module.route);
    }
  }

  isActive(route: string): boolean {
    return this.activeModule === route;
  }

  logout() {
    console.log('Logout clicked');
  }
}