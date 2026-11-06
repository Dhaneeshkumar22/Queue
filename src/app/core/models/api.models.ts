export type UserRole = 'CUSTOMER' | 'STAFF' | 'MANAGER' | 'ADMIN';
export interface User { id: string; fullName: string; email: string; role: UserRole; }
export interface AuthResponse { accessToken?: string; user: User; }
export interface ApiError { message: string; code?: string; timestamp?: string; }
export interface Branch { id: string; name: string; address: string; organizationId?: string; organizationName: string; organizationType?: string; phone?: string; openingTime?: string; closingTime?: string; active: boolean; activeQueueLength?: number; estimatedWaitMinutes?: number; services?: Service[]; }
export interface Service { id: string; name: string; description?: string; branchId: string; averageDurationMinutes: number; maxQueueCapacity: number; active: boolean; }
export interface QueueToken { id: string; tokenNumber: string; position: number; peopleAhead: number; estimatedWaitMinutes: number; status: 'WAITING' | 'CALLED' | 'IN_SERVICE' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW'; serviceName: string; branchName: string; joinedAt: string; completedAt?: string; customerName?: string; waitingDurationMinutes?: number; serviceDurationMinutes?: number; currentServingToken?: string; }
export interface Appointment { id: string; serviceId?: string; branchId?: string; serviceName: string; branchName: string; startsAt: string; status: string; }
export interface AppointmentSlot { id: string; startsAt: string; available: boolean; }
export interface Notification { id: string; title: string; message: string; createdAt: string; read: boolean; category: string; }
export interface ChartSeries { labels: string[]; values: number[]; }
export interface AnalyticsCharts { servedPerHour?: ChartSeries; averageWaitByService?: ChartSeries; dailyVolume?: ChartSeries; counterUtilization?: ChartSeries; queueStatuses?: ChartSeries; }
export interface Page<T> { content: T[]; totalElements: number; totalPages: number; number: number; }
