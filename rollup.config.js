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

import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import minifyHTML from 'rollup-plugin-html-literals';
import summary from 'rollup-plugin-summary';

export default {
  input: 'browser-compat.js',
  output: { file: 'browser-compat.min.js' },
  plugins: [
    resolve(),
    minifyHTML(),
    terser({
      compress: {
        drop_console: true
      }
    }),
    summary(),
  ],
};