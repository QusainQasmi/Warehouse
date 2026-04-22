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
    // {
    //   id: Modules.Dashboard,
    //   name: 'Dashboard',
    //   icon: 'dashboard',
    //   route: '/dashboard',
    //   badge: 0,
    //   children: [
    //     { id: 'overview', name: 'Overview', icon: '', route: '/' },
    //     { id: 'jobShipmentSummary', name: 'Job & Shipment Summary', icon: '', route: '/' },
    //     { id: 'outstandingSummary', name: 'Outstanding Summary', icon: '', route: '/' },
    //     { id: 'alertsnotifications', name: 'Alerts & Notifications', icon: '', route: '/' },
    //     { id: 'chartsanalytics', name: 'Charts / Analytics', icon: '', route: '/' },
    //   ]
    // },
        {
      id: Modules.Setup,
      name: 'Setup',
      icon: 'account_tree',
      route: '/setup',
      badge: 0,
      children: [
        { id: 'location', name: 'Locations', icon: 'location_on', route: '/setup/location' },
        { id: 'party', name: 'Party', icon: 'person_pin', route: '/setup/party' },
        { id: 'containerType', name: 'Container Type', icon: 'person_pin', route: '/setup/container-type' },
        { id: 'chargeType', name: 'Charge Type', icon: 'person_pin', route: '/setup/charge-type' },
        { id: 'currency', name: 'Currency', icon: 'person_pin', route: '/setup/currency' },
        { id: 'exchangeRate', name: 'Exchange Rate', icon: 'person_pin', route: '/setup/exchange-rate' },
        { id: 'unitOfMeasure', name: 'Unit Of Measure', icon: 'person_pin', route: '/setup/unit-of-measure' },
        { id: 'serviceType', name: 'Service Type', icon: 'person_pin', route: '/setup/service-type' },
        { id: 'paymentTerms', name: 'Payment Terms', icon: 'person_pin', route: '/setup/payment-terms' },
        { id: 'taxSetup', name: 'Tax Setup', icon: 'person_pin', route: '/setup/tax-setup' },
      ]
    },
    {
      id: Modules.CRM,
      name: 'CRM',
      icon: 'manage_accounts',
      route: '/crm',
      badge: 0,
      children: [
        { id: 'lead', name: 'Lead ', icon: '', route: '/crm/lead' },
        { id: 'inquiry', name: ' Inquiry', icon: '', route: '/crm/inquiry' },
        { id: 'quotation', name: 'Quotations', icon: '', route: '/crm/quotation' },
        // { id: 'activity', name: 'Activity', icon: '', route: '/' },
        // { id: 'reports', name: 'Reports', icon: '', route: '/' },

      ]
    },
        {
      id: Modules.Transportation,
      name: 'Transportaion',
      icon: 'local_shipping',
      route: '/transportation',
      badge: 0,
      children: [
        { id: 'job', name: 'Job', icon: '', route: '/transportation/job' },
        { id: 'vehicle', name: ' Vehicle', icon: '', route: '/transportation/vehicle' },
        { id: 'driver', name: ' Driver', icon: '', route: '/transportation/driver' },
 

      ]
    },
         {
      id: Modules.Accounts,
      name: 'Accounts',
      icon: 'person',
      route: '/',
      badge: 0,
      children: [
        { id: 'chartOfAccount', name: 'Chart of Accounts', icon: '', route: '/accounts/chartOfAccounts' },
        { id: 'voucher', name: 'Voucher', icon: '', route: '/accounts/voucher' },
        { id: 'invoice', name: 'Invoice', icon: '', route: '/accounts/invoice' },
        // { id: 'bankCash', name: 'Bank / Cash', icon: '', route: '/' },
        // { id: 'accountActivity', name: 'Account Activity', icon: '', route: '/' },
        // { id: 'multyCurrency', name: 'Multy currency', icon: '', route: '/' },
        // { id: 'report', name: 'Report', icon: '', route: '/' },
      ]
    },

    // {
    //   id: Modules.Operations,
    //   name: 'OPERATIONS',
    //   icon: 'dynamic_form',
    //   route: '/operations',
    //   badge: 0,
    //   children: [
    //     { id: 'booking', name: 'Booking', icon: '', route: '/' },
    //     { id: 'job', name: 'Job Creation', icon: '', route: '/' },
    //     { id: 'shipmentexecution', name: 'Shipment Execution', icon: '', route: '/' },
    //     { id: 'report', name: 'Reports', icon: '', route: '/' },
    //   ]
    // },

    // {
    //   id: Modules.Warehouse,
    //   name: 'WAREHOUSE',
    //   icon: 'warehouse',
    //   route: '/',
    //   badge: 0,
    //   children: [
    //     { id: 'masterwarehouse', name: 'Master Warehouse', icon: '', route: '/' },
    //     { id: 'grn', name: 'GRN', icon: '', route: '/' },
    //     { id: 'putaway', name: 'Putaway / Stock Placement', icon: '', route: '/' },
    //     { id: 'packing', name: 'Packing', icon: '', route: '/' },
    //     { id: 'reports', name: 'Reports', icon: '', route: '/' },
    //   ]
    // },
    // {
    //   id: Modules.Billing_Document,
    //   name: 'Billing & Document Prints',
    //   icon: 'receipt_long',
    //   route: '/',
    //   badge: 0,
    //   children: [
    //     { id: 'customerinvoice', name: 'Customer Invoice', icon: '', route: '/' },
    //     { id: 'vendorbill', name: 'Vendor Bills', icon: '', route: '/' },
    //     { id: 'agentinvoice', name: 'Agent Invoice', icon: '', route: '/' },
    //     { id: 'shippingnstructions', name: 'Shipping Instructions', icon: '', route: '/' },
    //     { id: 'hbl_mbl', name: 'House of BL / Master of BL', icon: '', route: '/' },
    //     { id: 'debitcredit', name: 'Debit & Credit Notes', icon: '', route: '/' },
    //     { id: 'report', name: 'Reports', icon: '', route: '/' },
    //   ]
    // },
   

    //  {
    //   id: Modules.Payroll,
    //   name: 'Payroll',
    //   icon: 'payment_arrow_down',
    //   route: '/',
    //   badge: 0,
    //   children: [
    //     { id: 'masteremployee', name: 'Master Employee', icon: '', route: '/' },
    //     { id: 'attendance', name: 'Attendance', icon: '', route: '/' },
    //     { id: 'salarystructure', name: 'Salary Structure', icon: '', route: '/' },
    //     { id: 'payrollprocessing', name: 'Payroll Processing', icon: '', route: '/' },
    //     { id: 'reports', name: 'Reports', icon: '', route: '/' },
    //   ]
    // },

    // {
    //   id: Modules.Utilities,
    //   name: 'Utilities',
    //   icon: 'build',
    //   route: '/utilities',
    //   badge: 0,
    //   children: [
    //     { id: 'userSetup', name: 'User', icon: 'person', route: '/utilities/user-setup' },
    //   ]
    // },
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