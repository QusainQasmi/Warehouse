import { Component } from '@angular/core';
import { MatModules } from '../../core/mat-modules';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SharedModule } from '../../core/shared/shared.module';

@Component({
  selector: 'cs-side-nav',
  standalone: true,
  imports: [SharedModule, RouterModule, MatModules], //RouterOutlet
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  // Direct Data - Kahi se bhi nahi aayega
  companyName = 'TechCorp ERP';
  companyLogo = ''; // Empty string = fallback icon ayega
  collapsed = false;
  activeModule = '';
  isMobile = false;

  // Modules Array - Direct yahin defined hai
  modules: any[] = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard',
      badge: 3
    },
    {
      id: 'inventory',
      name: 'Inventory Management',
      icon: 'inventory_2',
      route: '/inventory',
      children: [
        { id: 'products', name: 'Products', icon: 'category', route: '/inventory/products' },
        { id: 'stock', name: 'Stock Control', icon: 'warehouse', route: '/inventory/stock' },
        { id: 'orders', name: 'Purchase Orders', icon: 'shopping_cart', route: '/inventory/orders' },
        { id: 'suppliers', name: 'Suppliers', icon: 'local_shipping', route: '/inventory/suppliers' }
      ]
    },
    {
      id: 'sales',
      name: 'Sales & CRM',
      icon: 'point_of_sale',
      route: '/sales',
      badge: 12,
      children: [
        { id: 'customers', name: 'Customers', icon: 'people', route: '/sales/customers' },
        { id: 'invoices', name: 'Invoices', icon: 'receipt', route: '/sales/invoices' },
        { id: 'quotations', name: 'Quotations', icon: 'request_quote', route: '/sales/quotations' }
      ]
    },
    {
      id: 'hr',
      name: 'HR & Payroll',
      icon: 'badge',
      route: '/hr',
      children: [
        { id: 'employees', name: 'Employees', icon: 'groups', route: '/hr/employees' },
        { id: 'payroll', name: 'Payroll', icon: 'payments', route: '/hr/payroll' },
        { id: 'attendance', name: 'Attendance', icon: 'schedule', route: '/hr/attendance' },
        { id: 'recruitment', name: 'Recruitment', icon: 'person_search', route: '/hr/recruitment' }
      ]
    },
    {
      id: 'finance',
      name: 'Finance & Accounting',
      icon: 'account_balance',
      route: '/finance',
      children: [
        { id: 'ledger', name: 'General Ledger', icon: 'book', route: '/finance/ledger' },
        { id: 'banking', name: 'Banking', icon: 'account_balance_wallet', route: '/finance/banking' },
        { id: 'expenses', name: 'Expenses', icon: 'money_off', route: '/finance/expenses' },
        { id: 'tax', name: 'Tax Management', icon: 'calculate', route: '/finance/tax' }
      ]
    },
    {
      id: 'projects',
      name: 'Project Management',
      icon: 'assignment',
      route: '/projects',
      badge: 5
    },
    {
      id: 'reports',
      name: 'Reports & Analytics',
      icon: 'assessment',
      route: '/reports',
      children: [
        { id: 'sales-report', name: 'Sales Reports', icon: 'trending_up', route: '/reports/sales' },
        { id: 'financial', name: 'Financial Reports', icon: 'pie_chart', route: '/reports/financial' },
        { id: 'inventory-report', name: 'Inventory Reports', icon: 'bar_chart', route: '/reports/inventory' }
      ]
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: 'settings',
      route: '/settings',
      children: [
        { id: 'company', name: 'Company Info', icon: 'business', route: '/settings/company' },
        { id: 'users', name: 'User Management', icon: 'manage_accounts', route: '/settings/users' },
        { id: 'roles', name: 'Roles & Permissions', icon: 'admin_panel_settings', route: '/settings/roles' },
        { id: 'backup', name: 'Backup & Restore', icon: 'backup', route: '/settings/backup' }
      ]
    }
  ];

  // User Info - Direct yahin hai
  userName = 'Admin User';
  userRole = 'Super Admin';

  constructor() {
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
  }

  onModuleClick(module: any, event?: Event) {
    if (module.children && module.children.length > 0 && !this.collapsed) {
      module.expanded = !module.expanded;
      event?.stopPropagation();
    } else {
      this.activeModule = module.id;
      // Yahan direct navigation ya aur logic add karo
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