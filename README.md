# QueueLess

Responsive Angular frontend for customer queueing, appointment coordination, staff operations, organization management, and branch analytics. Built with standalone Angular components, strict TypeScript, Reactive Forms, Router, Signals, Tailwind CSS, Angular Material dialogs, Lucide Angular, Chart.js/ng2-charts, and typed REST service classes.

## Run locally

The workspace pins Angular 21.2 because the installed Node runtime is 24.13. Angular 21 supports that runtime; Angular 22 requires a newer Node 24 patch.

```powershell
npm install
npm start
npm test
npm run build
```

Open `http://localhost:4200`. The API base defaults to `http://localhost:8080/api`; the WebSocket URL is configured in `src/environments/`. Change environment files for other deployments.

## Customer and business sites

- Customer booking site: `/` (register, browse services, join queues, book appointments, and track tokens)
- Business operations site: `/business` (dedicated business overview and sign-in at `/business/login`)
- After business sign-in, staff land in `/staff`, managers in `/manager`, and administrators in `/admin`. These protected workspaces handle tokens, counters, staff, settings, and analytics according to role.

Both sites are currently distinct experiences in the same Angular build and share authentication, API services, and deployment origin. The operations site does not fabricate live queue or analytics data; it loads those from the configured backend.

## Implemented surfaces

- Public landing page with product preview, workflow, industries, feature benefits, illustrative testimonials clearly labeled as examples, pricing availability notice, and FAQ
- Login, registration, forgot-password, and reset-password forms with validation, password visibility/strength, status, and backend error states
- Separate customer and business portal entry points, with role-specific business sign-in and operations landing page
- Session restoration, bearer token support in session storage, cookie credentials, 401 logout, 403 routing, and role guards
- Customer dashboard, branch discovery/type/availability filters and wait sorting, branch detail, organization/branch/service selection, queue joining, token tracking, cancel, HTTP polling fallback, history filters/pagination/CSV, appointments, notifications, and profile editing
- Staff queue actions with state-based button disabling, request locking, and an Angular Material no-show confirmation dialog
- Manager operational metrics and Chart.js charts that render only backend values, plus CRUD forms for branches, services, counters, staff, queue settings, and operating hours
- Admin organization dashboard, user/branch/staff navigation, organization settings, and role-based route protection
- Lazy route loading and reusable responsive dashboard, confirmation dialog, design tokens, and common empty/error/loading states
- Unit tests for auth session/token behavior, queue API requests, and route guards

## API contract assumptions

The brief supplied the base URL but no endpoint schemas. The frontend uses explicit, replaceable REST assumptions below. These calls are typed and live in service classes; they still need to be matched to the Spring Boot contract before integration is considered complete.

| Area | Assumed endpoints |
| --- | --- |
| Auth/session | `POST /auth/login`, `POST /auth/register`, `GET /auth/me`, `POST /auth/password-reset/request`, `POST /auth/password-reset/confirm` |
| Account | `GET /users/me`, `PUT /users/me`, `GET /users` |
| Organizations/branches | `GET /organizations`, `GET /branches?search=`, `GET /branches/{id}`, `POST/PUT /branches` |
| Services/counters/staff | `GET/POST/PUT /services`, `/counters`, `/staff`; `PATCH /{resource}/{id}` for active status |
| Queue | `GET /queues/current`, `/queues/active`, `/queues/tokens/{id}`, `POST /queues/join`, `/queues/tokens/{id}/cancel`, queue action endpoints, `GET /queues/history` |
| Appointments | `GET /appointments`, `GET /appointments/availability`, `POST /appointments`, cancel and reschedule action endpoints |
| Notifications | `GET /notifications`, mark one/all read action endpoints |
| Analytics | `GET /analytics/summary`, `GET /analytics/charts` |
| Organization operations | `GET/POST/PUT /queue-settings`, `/operating-hours`, `/organizations` |

Cookie requests use `withCredentials`. If login returns an `accessToken`, it is stored in session storage and sent as a bearer token. There is no assumed refresh endpoint. Frontend route guards only control navigation; Spring Security must authorize every request.

WebSocket/STOMP subscriptions are intentionally pending: the backend topic names, payloads, and authentication handshake were not specified. Queue tracking currently polls HTTP every 15 seconds, avoids overlapping requests, reports connection status, and cleans up on route destruction. No production queue records, slots, or analytics are fabricated.

## Checkpoint

- Strict TypeScript and Angular template compilation: `npx ngc -p tsconfig.app.json` passes.
- Unit tests: `npm test` passes (4 tests across auth, queue service, and route guards).
- Full `ng build`: the CLI currently terminates on this Windows environment with exit code `-1073741819` during application bundling and no diagnostic output. This is separate from the passing Angular template compiler and test bundle; a production build is not verified yet.
- Backend integration remains dependent on confirming the endpoint and response assumptions in the table above.
"# Queue" 
