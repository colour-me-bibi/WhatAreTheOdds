/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * Your Project API
 * Your project description
 * OpenAPI spec version: 1.0.0
 */

/**
 * Serializer for confirming a password reset attempt.
 */
export interface PasswordResetConfirm {
  new_password1: string;
  new_password2: string;
  uid: string;
  token: string;
}