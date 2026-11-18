// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { getRequiredHeader, type HeadersLike } from '../internal/headers';
import { verifyWebhookSignature } from '../internal/webhook-verify';

export class Webhooks extends APIResource {
  unwrap(body: string, { headers, key }: { headers: HeadersLike; key?: string }): ParsedWebhookEvent {
    const keyStr: string | null = key === undefined ? this._client.webhookSecret : key;
    if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
    verifyWebhookSignature(body, headers, keyStr);
    return JSON.parse(body) as ParsedWebhookEvent;
  }

  /**
   * Verifies that `body` was signed with the webhook key, throwing when it was not.
   *
   * `key` defaults to the client's `webhookSecret`. A missing signature header throws too.
   */
  verifySignature(
    body: string,
    headers: HeadersLike,
    key: string | undefined | null = this._client.webhookSecret,
  ): void {
    const keyStr: string | null = key === undefined ? this._client.webhookSecret : key;
    if (keyStr === null)
      throw new Error(
        'The webhook secret must either be set using the env var, SCALAR_BW0_GP_WEBHOOK_SECRET, on the client class, or passed to this function',
      );
    getRequiredHeader(headers, 'webhook-id');
    getRequiredHeader(headers, 'webhook-timestamp');
    getRequiredHeader(headers, 'webhook-signature');
    verifyWebhookSignature(body, headers, keyStr);
  }

  /**
   * Parses `body` into a typed event without verifying its signature.
   *
   * Only use this for a body whose signature was already verified, or in tests.
   */
  parseUnsafe(body: string): ParsedWebhookEvent {
    return JSON.parse(body) as ParsedWebhookEvent;
  }
}

export type NewPlanetWebhookEvent = unknown;

export type ParsedWebhookEvent = NewPlanetWebhookEvent;

export declare namespace Webhooks {
  export {
    type NewPlanetWebhookEvent as NewPlanetWebhookEvent,
    type ParsedWebhookEvent as ParsedWebhookEvent,
  };
}
