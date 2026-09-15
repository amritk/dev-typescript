// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { DemoAPIScalarGoolaxy } from './client';

export abstract class APIResource {
  protected _client: DemoAPIScalarGoolaxy;

  constructor(client: DemoAPIScalarGoolaxy) {
    this._client = client;
  }
}
