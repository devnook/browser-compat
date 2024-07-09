// Copyright 2024 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {BrowserCompat} from '../browser-compat';
import {expect, fixture, assert} from '@open-wc/testing';

describe('browser-compat', () => {

  let realFetch = window.fetch

  beforeEach(function () {
    window.fetch = realFetch;
  });

  it('is defined', () => {
    const el = document.createElement('browser-compat');
    assert.instanceOf(el, BrowserCompat);
  })

  it('renders with default values', async () => {
    const el = await fixture(`<browser-compat></browser-compat>`);
    await expect(el).shadowDom.to.equalSnapshot();
  })
});
