import { authGuard, roleGuard } from './core/guards/auth.guards';
const pages = () => import('./features/pages');
const workflows = () => import('./features/workflow-pages');
const businessPortal = () => import('./features/business-portal.page');
const shell = () => pages().then(m => m.DashboardLayout);
export const routes = [
    { path: '', loadComponent: () => pages().then(m => m.LandingPage), title: 'QueueLess — Skip the Wait' },
    { path: 'login', loadComponent: () => pages().then(m => m.AuthPage), title: 'Sign in — QueueLess' },
    { path: 'register', loadComponent: () => pages().then(m => m.AuthPage), title: 'Create account — QueueLess' },
    { path: 'business', loadComponent: () => businessPortal().then(m => m.BusinessPortalPage), title: 'QueueLess for Business' },
    { path: 'business/login', loadComponent: () => pages().then(m => m.AuthPage), title: 'Business sign in — QueueLess' },
    { path: 'forgot-password', loadComponent: () => workflows().then(m => m.ForgotPasswordPage), title: 'Forgot password — QueueLess' },
    { path: 'reset-password', loadComponent: () => workflows().then(m => m.ResetPasswordPage), title: 'Reset password — QueueLess' },
    { path: 'forbidden', loadComponent: () => pages().then(m => m.ForbiddenPage), title: 'Access denied — QueueLess' },
    { path: 'customer', loadComponent: shell, canActivate: [authGuard, roleGuard(['CUSTOMER'])], children: [
            { path: '', loadComponent: () => pages().then(m => m.CustomerDashboard), title: 'Overview — QueueLess' },
            { path: 'join', loadComponent: () => pages().then(m => m.JoinQueuePage), title: 'Join queue — QueueLess' }
        ] },
    { path: 'branches', loadComponent: shell, canActivate: [authGuard, roleGuard(['CUSTOMER', 'MANAGER', 'ADMIN'])], children: [
            { path: '', loadComponent: () => pages().then(m => m.DiscoveryPage), title: 'Find a service — QueueLess' },
            { path: ':id', loadComponent: () => workflows().then(m => m.BranchDetailsPage), title: 'Branch details — QueueLess' }
        ] },
    { path: 'track/:id', loadComponent: shell, canActivate: [authGuard, roleGuard(['CUSTOMER'])], children: [{ path: '', loadComponent: () => pages().then(m => m.TrackingPage), title: 'Track queue — QueueLess' }] },
    { path: 'staff', loadComponent: shell, canActivate: [authGuard, roleGuard(['STAFF', 'MANAGER', 'ADMIN'])], children: [{ path: '', loadComponent: () => pages().then(m => m.StaffDashboard), title: 'Staff queue — QueueLess' }] },
    { path: 'manager', loadComponent: shell, canActivate: [authGuard, roleGuard(['MANAGER', 'ADMIN'])], children: [{ path: '', loadComponent: () => pages().then(m => m.ManagerDashboard), title: 'Operations — QueueLess' }] },
    { path: 'admin', loadComponent: shell, canActivate: [authGuard, roleGuard(['ADMIN'])], children: [{ path: '', loadComponent: () => workflows().then(m => m.AdminDashboard), title: 'Organization admin — QueueLess' }] },
    ...[
        { path: 'branches', title: 'Branches', endpoint: 'branches' },
        { path: 'services', title: 'Services', endpoint: 'services' },
        { path: 'counters', title: 'Counters', endpoint: 'counters' },
        { path: 'staff', title: 'Staff', endpoint: 'staff' },
        { path: 'queue-settings', title: 'Queue settings', endpoint: 'queue-settings' },
        { path: 'operating-hours', title: 'Operating hours', endpoint: 'operating-hours' }
    ].map(item => ({ path: `manage/${item.path}`, loadComponent: shell, canActivate: [authGuard, roleGuard(['MANAGER', 'ADMIN'])], children: [{ path: '', loadComponent: () => pages().then(m => m.ManagementPage), data: { title: item.title, endpoint: item.endpoint } }] })),
    ...[
        { path: 'users', title: 'Users', endpoint: 'users' },
        { path: 'organization', title: 'Organization settings', endpoint: 'organizations' }
    ].map(item => ({ path: `manage/${item.path}`, loadComponent: shell, canActivate: [authGuard, roleGuard(['ADMIN'])], children: [{ path: '', loadComponent: () => pages().then(m => m.ManagementPage), data: { title: item.title, endpoint: item.endpoint } }] })),
    { path: 'history', loadComponent: shell, canActivate: [authGuard], children: [{ path: '', loadComponent: () => workflows().then(m => m.HistoryPage), title: 'Queue history — QueueLess' }] },
    { path: 'appointments', loadComponent: shell, canActivate: [authGuard, roleGuard(['CUSTOMER', 'STAFF'])], children: [{ path: '', loadComponent: () => workflows().then(m => m.AppointmentPage), title: 'Appointments — QueueLess' }] },
    { path: 'notifications', loadComponent: shell, canActivate: [authGuard], children: [{ path: '', loadComponent: () => workflows().then(m => m.NotificationsPage), title: 'Notifications — QueueLess' }] },
    { path: 'profile', loadComponent: shell, canActivate: [authGuard], children: [{ path: '', loadComponent: () => workflows().then(m => m.ProfilePage), title: 'Profile — QueueLess' }] },
    { path: '**', loadComponent: () => pages().then(m => m.NotFoundPage), title: 'Not found — QueueLess' }
];
