/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * Your Project API
 * Your project description
 * OpenAPI spec version: 1.0.0
 */

/**
 * User model w/o password
 */
export interface PatchedUserDetails {
  readonly pk?: number;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username?: string;
  readonly email?: string;
  first_name?: string;
  last_name?: string;
}
