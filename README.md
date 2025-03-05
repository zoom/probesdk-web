# Probe SDK

## Background

[Zoom Probe SDK](https://developers.zoom.us/docs/probe-sdk/) is a tool that you can use to check if audio and video hardware, network, and Zoom infrastructure offers the best experience for your users. This readme will quickly get you started. For full documentation on usage, see the [developer documentation](https://developers.zoom.us/docs/probe-sdk/). For details about all of the SDK methods, see the [SDK reference](https://developers.zoom.us/docs/probe-sdk/reference/).

## Install

Install the Probe SDK into your project.

```
$ npm install @zoom/probesdk --save
```

## Import components

Import the `Prober` class from Probe SDK. For example, in your `index.js` file.

```javascript
// index.js
import { Prober } from "@zoom/probesdk";

// create a new instance of Prober
const prober = new Prober();
```

Invoke the `Prober()` constructor directly to create an instance of it. Next, you can access any capability of the prober. See the examples below, and the [developer documentation](https://developers.zoom.us/docs/probe-sdk/) for details.

## Request media devices and permission

Invoke `requestMediaDevicePermission()` to retrieve media device permissions.

```javascript
// index.js
import { Prober } from "@zoom/probesdk";

// create a new instance of Prober
const prober = new Prober();

// request media permission
function getMediaPermission() {
    prober.requestMediaDevicePermission({ audio: true, video: true }).then(
      (result) => {
        console.log(stream=${result.stream?.id}, error:${result.error?.message}`);
      }
    );
}
```

Invoke `releaseMediaStream(stream)` to release the `MediaStream` instance returned by calling `requestMediaDevicePermission()`. Note that ProbeSDK is not responsible for setting the `stream` to null, the caller should maintain its lifecycle. If `stream` is not used anymore, it's a good practice to explicitly set it `null` to make it recycled by GC.

```javascript
// request media permission
function getMediaPermission() {
    prober.requestMediaDevicePermission({ audio: true, video: true }).then(
      (result) => {
        console.log(`stream=${result.stream?.id}, error:${result.error?.message}`);
        
        // if the stream is not used anymore, it's good practice to release it.
        let succeed = prober.releaseMediaStream(result.stream);
        console.log(succeed);
        
        // ProbeSDK is not responsible for setting it null, the caller should maintain its lifecycle
        result.stream = null;
      }
    );
}
```

Invoke `requestMediaDevices()` to retrieve media devices.

```javascript
// index.js
import { Prober } from "@zoom/probesdk";

// create a new instance of Prober
const prober = new Prober();

// request media devices
function getMediaDevices() {
  prober.requestMediaDevices().then((result) => {
    console.log(`error:${result.error}, devices=${result.devices}`);
  });
}
```

## Diagnose audio and video

Invoke `diagnoseAudio` to check whether the audio devices work.

```javascript
// index.js
import { Prober } from "@zoom/probesdk";

// create a new instance of Prober
const prober = new Prober();

// start an audio diagnostic
function startToDiagnoseAudio() {
  const audioInputConstraint = {
    audio: { deviceId: "default" },
    video: false,
  };
  const audioOutputConstraint = {
    audio: { deviceId: "xxxxxxxxxxxxxxxx" },
    video: false,
  };

  const duration = 5000; // how long you want to record the sound, milliseconds
  const diagnoseResult = prober.diagnoseAudio(
    audioInputConstraint,
    audioOutputConstraint,
    duration
  );
  console.log(diagnoseResult);
}
```

Invoke `diagnoseVideo` to check whether or not the video devices work.

```javascript
// index.js
import { Prober } from "@zoom/probesdk";

// create a new instance of Prober
const prober = new Prober();
let videoDiagnosticResult;

// start a video diagnostic
function startToDiagnoseVideo(canvas) {
  const constraint = {
    video: {
      deviceId: "default",
    },
  };
  const options = {
    rendererType: 2, // WebGL
    target: canvas,
  };
  prober.diagnoseVideo(constraint, options).then((result) => {
    console.log(result);
    videoDiagnosticResult = result;
  });
}
```

Call `stopToDiagnoseVideo(stream)` to stop diagnosing video. The parameter `stream` saved in the result of calling `diagnoseVideo` is **optional**. Note that: If you don't pass this parameter when you call this function, it simply stops the preview part of the video diagnostic, and you need to call `releaseMediaStream(stream)` at the right time to close the video stream.

```javascript
import { Prober } from "@zoom/probesdk";

// create a new instance of Prober
const prober = new Prober();
let videoDiagnosticResult;

function stopToDiagnoseVideo() {
  let result = prober.stopToDiagnoseVideo(videoDiagnosticResult.stream);
  videoDiagnosticResult.stream = null;
  console.log(`stopToDiagnoseVideo() result: ${result}`);
}

// or call releaseMediaStream(stream) to release the MediaStream anytime
prober.releaseMediaStream(videoDiagnosticResult.stream);
```

## Start a comprehensive diagnostic test

Perform a network diagnostic to return a network diagnostic report that also includes basic information and supported features.

```javascript
// index.js
import { Prober } from "@zoom/probesdk";

// create a new instance of Prober
const prober = new Prober();

function startToDiagnose() {
  // 1. you can ignore the URLs, so the default URLs that deployed in the ProbeSDK will be used
  const jsUrl = "";
  const wasmUrl = "";
  const config = { 
    probeDuration: 120 * 1000,
    connectTimeout: 120 * 1000,
    domain: '[a Zoom or custom domain]',
  };
  prober
    .startToDiagnose(jsUrl, wasmUrl, config, (stats) => {
      console.log(stats);
    })
    .then((report) => {
      // a DiagnosticReport has main 3 structures we need to handle
      console.log(report.networkDiagnosticResult);
      console.log(report.basicInfoEntries);
      console.log(report.featureEntries);
    });
}
```

When the diagnostic program is finished, we suggest that it is a good idea to call the `cleanup()` function to clean up some of the resources created in ProbeSDK (e.g., some memory resources, closing the network connection used for diagnostics, etc.). For example, it is a good time to call it when the user closes the diagnostics page or jumps to another page.

```javascript
prober.cleanup();
```

## Generate a report of supported features

This `Reporter` provides detection services to report if video conferencing features are supported on the target device.

```javascript
const reporter = new Reporter();
function showBasicInfo() {
    reporter.reportBasicInfo(navigator).then((info) => {
        console.log(JSON.stringify(info));
    });
}

function showSupportedFeatures() {
    reporter.reportFeatures().then((features) => {
        console.log(JSON.stringify(features));
    });
}
```

## Changelog

For the changelog, see [Probe SDK - web](https://developers.zoom.us/changelog/probe-sdk/).

## Support

For any issues regarding our SDK, reach out to [Developer Support](https://developers.zoom.us/support/).

## License

Use of this SDK is subject to our [License and Terms of Use](https://explore.zoom.us/docs/en-us/zoom_api_license_and_tou.html);

## Open Source Software Source Code

Some licenses for OSS contained in our products give you the right to access the source code under said license. You may obtain a copy of source code for the relevant OSS via the following link: https://zoom.us/opensource/source. Please obtain independent legal advice or counsel to determine your responsibility to make source code available under any specific OSS project.

## Appendix: Platform/Browser Compatibility

<table>
  <tr><th rowspan="4">API</th></tr>
  <tr>
  	<th colspan="12">Desktop</th>
    <th colspan="6">Mobile</th>
  </tr>
  <tr>
    <th colspan="4">Windows</th>
    <th colspan="5">MacOS</th>
    <th colspan="2">Linux</th>
    <th colspan="1">ChromeOS</th>
    <th colspan="3">Android</th>
    <th colspan="3">iOS</th>
  </tr>
  <tr>
  	<th>Chrome</th>
    <th>Firefox</th>
    <th>Edge</th>
    <th>Opera</th>
    <th>Chrome</th>
    <th>Firefox</th>
    <th>Edge</th>
    <th>Opera</th>
    <th>Safari</th>
    <th>Chrome</th>
    <th>Firefox</th>
    <th>Chrome</th>
    <th>Chrome</th>
    <th>Firefox</th>
    <th>Edge</th>
    <th>Chrome</th>
    <th>Safari</th>
    <th>Firefox</th>
  </tr>
  <tr>
    <th rowspan="1">requestMediaDevicePermission</th>
  	<th>Y(125 64-bit)</th>
    <th>Y(125.0.1 64-bit)</th>
    <th>Y(124 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(126.0.1 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(17.5)</th>
    <th>Y(113 64-bit)</th>
    <th>Y(114.0 64-bit)</th>
    <th>Y(124 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125 64-bit)Y</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125)</th>
    <th>Y(17.5)</th>
    <th>Y(126.2)</th>
  </tr>
  <tr>
    <th rowspan="1">releaseMediaStream</th>
  	<th>Y(125 64-bit)</th>
    <th>Y(125.0.1 64-bit)</th>
    <th>Y(124 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(126.0.1 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(17.5)</th>
    <th>Y(113 64-bit)</th>
    <th>Y(114.0 64-bit)</th>
    <th>Y(124 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125 64-bit)Y</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125)</th>
    <th>Y(17.5)</th>
    <th>Y(126.2)</th>
  </tr>
  <tr>
    <th rowspan="1">requestMediaDevices</th>
  	<th>Y(125 64-bit)</th>
    <th>Y(125.0.1 64-bit)</th>
    <th>Y(124 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(126.0.1 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(17.5)</th>
    <th>Y(113 64-bit)</th>
    <th>Y(114.0 64-bit)</th>
    <th>Y(124 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125)</th>
    <th>Y(17.5)</th>
    <th>Y(126.2)</th>
  </tr>
  <tr>
    <th rowspan="1">diagnoseAudio</th>
  	<th>Y(125 64-bit)</th>
    <th>Y(125.0.1 64-bit)</th>
    <th>Y(124 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(126.0.1 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(17.5)</th>
    <th>Y(113 64-bit)</th>
    <th>Y(114.0 64-bit)</th>
    <th>Y(124 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125)</th>
    <th>Y(17.5)</th>
    <th>Y(126.2)</th>
  </tr>
  <tr>
    <th rowspan="1">diagnoseVideo</th>
  	<th>Y(125 64-bit)</th>
    <th>Y(125.0.1 64-bit)<br><s>WebGPU</s></th>
    <th>Y(124 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(126.0.1 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(17.5)<br><s>WebGPU</s></th>
    <th>Y(113 64-bit)<br><s>WebGPU</s></th>
    <th>Y(114.0 64-bit)<br><s>WebGPU</s></th>
    <th>Y(124 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125 64-bit)<br><s>WebGPU</s></th>
    <th>Y(125 64-bit)<br><s>WebGPU</s></th>
    <th>Y(125)<br><s>WebGPU</s></th>
    <th>Y(17.5)<br><s>WebGPU</s></th>
    <th>Y(126.2)<br><s>WebGPU</th>
  </tr>
  <tr>
    <th rowspan="1">stopToDiagnoseVideo</th>
  	<th>Y(125 64-bit)</th>
    <th>Y(125.0.1 64-bit)</th>
    <th>Y(124 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(126.0.1 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(17.5)</th>
    <th>Y(113 64-bit)</th>
    <th>Y(114.0 64-bit)</th>
    <th>Y(124 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125)</th>
    <th>Y(17.5)</th>
    <th>Y(126.2)</th>
  </tr>
  <tr>
    <th rowspan="1">startToDiagnose</th>
  	<th>Y(125 64-bit)</th>
    <th>Y(125.0.1 64-bit)</th>
    <th>Y(124 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(126.0.1 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(110 64-bit)</th>
    <th>Y(17.5)</th>
    <th>Y(113 64-bit)</th>
    <th>Y(114.0 64-bit)</th>
    <th>Y(124 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125 64-bit)</th>
    <th>Y(125)</th>
    <th>Y(17.5)</th>
    <th>Y(126.2)</th>
  </tr>
</table>


---

Copyright ©2024 Zoom Video Communications, Inc. All rights reserved.
