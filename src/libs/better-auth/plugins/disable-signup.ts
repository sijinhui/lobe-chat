import { APIError } from 'better-auth/api';
import { type BetterAuthPlugin } from 'better-auth/types';

import { authEnv } from '@/envs/auth';

/**
 * Better Auth plugin to disable all new user registrations.
 * When enabled, prevents any new user creation regardless of the authentication method
 * (email/password, SSO, magic link, etc.).
 *
 * @example
 * // In .env file:
 * AUTH_DISABLE_SIGNUP=1
 *
 * // In better-auth config:
 * plugins: [
 *   disableSignup(),
 *   // ... other plugins
 * ]
 */
export const disableSignup = (): BetterAuthPlugin => ({
  id: 'disable-signup',
  init() {
    return {
      options: {
        databaseHooks: {
          user: {
            create: {
              before: async (user) => {
                // Skip if feature is disabled
                if (!authEnv.AUTH_DISABLE_SIGNUP) {
                  return { data: user };
                }

                // Block ALL new user creation when this feature is enabled
                // This catches SSO signups, magic link signups, and any other signup methods
                // that bypass the emailAndPassword.disableSignUp setting
                throw new APIError('FORBIDDEN', {
                  code: 'SIGNUP_DISABLED',
                  message:
                    'New user registration is disabled. Please contact the administrator to create an account.',
                });
              },
            },
          },
        },
      },
    };
  },
});
