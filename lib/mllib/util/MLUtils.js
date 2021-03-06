/*
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function(kernelP) {
  return (function() {
    var Utils = require('../../utils.js');

    var RDD = require('../../rdd/RDD.js');

    var gKernelP = kernelP;

    /**
     * @class
     * @memberof module:eclairjs/mllib
     */
    function MLUtils() {
    }

    MLUtils.loadLibSVMFile = function(sc, path, numFeatures, minPartitions, multiclass) {
      var args = {
        target: MLUtils,
        method: 'loadLibSVMFile',
        args: Utils.wrapArguments(arguments),
        static: true,
        kernelP: gKernelP,
        returnType: RDD
      };

      return Utils.generate(args);
    };

    MLUtils.moduleLocation = '/mllib/MLUtils';

    return MLUtils;
  })();
};