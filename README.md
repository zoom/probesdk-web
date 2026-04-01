# Probe SDK

## Background

[Zoom Probe SDK](https://developers.zoom.us/docs/probe-sdk/) is a tool that you can use to check if audio and video hardware, network, and Zoom infrastructure offers the best experience for your users. This readme will quickly get you started. For full documentation on usage, see the [developer documentation](https://developers.zoom.us/docs/probe-sdk/). For details about all of the SDK methods, see the [SDK reference](https://marketplacefront.zoom.us/sdk/probe/index.html).

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

Invoke `diagnoseAudio` to check whether the audio devices work. For Audio diagnostics the ProbeSDK only provides diagnostics on the operational status of your selected microphone and headset, e.g. whether you can hear from the headset, or whether the microphone inputs are working properly, etc. The ProbeSDK also provides diagnostics for the microphone and headset. Therefore, the return result of the function call only indicates whether the Audio Diagnostics program was successfully started or not, and if it failed, it returns the corresponding error code and reason.

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
  const diagnoseResult = await prober.diagnoseAudio(
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

## Camera Dump (Offline Bundle) - `startCameraDump()`

When you need to troubleshoot **camera capture quality** and collect evidence from end users (without building an upload pipeline),
`startCameraDump()` lets you record a short segment from a camera and export a single offline bundle for analysis.

For example, if users report preview anomalies (e.g. flicker or intermittent black frames), a dump bundle helps engineers verify what the
captured stream looked like over time and correlate it with basic track events and frame statistics.

`startCameraDump()` helps you **export an offline evidence bundle** from a selected camera:
- `video.webm`: a short recording of the captured camera stream (small, low-bitrate by default)
- `frames.jsonl`: per-frame luminance statistics to precisely locate black frames / flicker patterns
- `events.jsonl`: track/recorder events (mute/unmute/ended, etc.)
- `meta.json`: environment + track settings/capabilities + dump options

The output is a single downloadable file: **`.probe.tar`** (or **`.probe.tar.gz`** if gzip is enabled).
Users can send this file to you without any upload capability inside ProbeSDK.

> Privacy notice: Camera Dump records camera content. Please inform end users in advance and obtain their consent before running.
> Any data provided by customers is intended **solely for troubleshooting camera capture quality** (i.e., verifying whether frames captured from the camera are normal),
> and will not be used for any other analysis, processing, or activities beyond diagnostic support for this issue.
> If the customer is not comfortable with this collection, they may decline to run Camera Dump.

### Browser support

- **Chrome/Chromium only** (requires `MediaStreamTrackProcessor`)

### Quick start

Below is a more explicit, step-by-step usage flow so you know **what happens at each stage** and what to expect.

#### Prepare (permission)

Make sure the user has granted camera permission (otherwise `getUserMedia` will fail).

#### Configure (optional)

You can pass an `options` object, or omit it to use defaults:
- Default camera (no `deviceId` constraint)
- `320x180`, `15fps`, `~250kbps`, `120s`

> Tip: For troubleshooting, keep resolution/bitrate small to reduce bundle size.

#### Start dump

```javascript
import { Prober } from "@zoom/probesdk";

const prober = new Prober();

async function startDump() {
  // Minimal: use browser default camera + defaults
  const { code, message, session } = await prober.startCameraDump();
  console.log(code, message);
  if (code !== 0 || !session) return null;

  // Keep the session reference for stop/download.
  return session;
}
```

#### Stop dump (optional)

The dump **stops automatically** when `durationMs` elapses. You can also stop it earlier:

```javascript
async function stopDump(session) {
  if (!session) return;
  await session.stop();
  console.log("summary:", session.getSummary());
}
```

Stopping the dump will stop the underlying camera tracks so the **hardware camera indicator light should turn off** shortly after.

> Note: Web applications cannot programmatically revoke a previously granted camera permission in the browser UI.
> Stopping the dump releases the camera device, but the permission grant remains until the user changes it in browser site settings.

#### Download bundle

After the dump has stopped (auto or manual), download the offline bundle:

```javascript
async function downloadDump(session) {
  if (!session) return;
  // Generates and downloads:
  // - .probe.tar (default), or
  // - .probe.tar.gz (if gzip=true)
  await session.downloadBundle(); // e.g. camera-dump-2025-12-13_10-20-30.probe.tar
}
```

#### Send to Zoom

ProbeSDK itself does not upload. The end user/customer should **send the downloaded bundle**
(`.probe.tar` / `.probe.tar.gz`) to **Zoom** for analysis.

### Specify a camera device and tuning parameters

```javascript
import { Prober } from "@zoom/probesdk";

const prober = new Prober();

async function runCameraDumpWithOptions(deviceId) {
  const { code, session } = await prober.startCameraDump({
    deviceId,              // optional; if omitted, browser picks default camera
    durationMs: 120000,     // default 120000 (120s)
    width: 320,            // default 320
    height: 180,           // default 180
    frameRate: 15,         // default 15
    videoBitsPerSecond: 250000, // default 250000 (~250kbps)

    // Optional: thumbnails for quick visual sanity checks (may increase bundle size)
    thumbFps: 0,           // default 0 (disabled). Example: 1 => ~1 thumbnail per second

    // Optional: gzip the tar bundle (Chrome only; requires DecompressionStream on analyzer side)
    gzip: false,           // default false

    // Optional: progress callback (for UI)
    onProgress: (p) => {
      // p includes: state, elapsedMs, frames, blackFrames, blackRatio, remainingMs (best-effort)
      console.log("dump progress:", p);
    },
  });

  if (code !== 0 || !session) return;

  // Stop early if needed
  // await session.stop();

  // Download the bundle after stop
  await session.downloadBundle();
}
```

## Diagnose screen sharing

Invoke `diagnoseScreenShare` to verify whether screen sharing will work on the current device and browser. The diagnostic runs three phases automatically:

1. **Static checks** — verifies the environment (OS, browser, HTTPS, APIs) without any user interaction.
2. **Permission capture** — calls `getDisplayMedia()` so the user selects a share source.
3. **Frame quality analysis** — samples frames and checks for an all-black capture. Only luminance scalars are extracted; no pixel data is stored or transmitted.

```javascript
import { Prober, ERR_CODE } from "@zoom/probesdk";

const prober = new Prober();

const result = await prober.diagnoseScreenShare(
  { frameSampleCount: 10, frameSampleDurationMs: 3000 },
  ({ phase, state, message }) => {
    console.log(`[${phase}] ${state}: ${message}`);
  }
);

if (result.code === ERR_CODE.OK) {
  console.log("Screen share diagnostic passed.");
} else if (result.code === ERR_CODE.SCREEN_SHARE_USER_CANCELLED) {
  console.warn("User cancelled the share picker.");
} else if (result.code === ERR_CODE.SCREEN_SHARE_PERMISSION_DENIED) {
  console.error("Permission denied.", result.suggestedAction);
} else if (result.code === ERR_CODE.SCREEN_SHARE_BLACK_SCREEN) {
  console.error("Black screen detected.", result.suggestedAction);
} else if (result.code === ERR_CODE.SCREEN_SHARE_STATIC_CHECK_FAILED) {
  console.error("Environment check failed:", result.message);
}
```

> Privacy notice: Frame analysis reads only per-frame average luminance (a single number). No screenshots, pixel arrays, or canvas content are stored or transmitted. The `MediaStream` is released immediately after sampling completes.

> Note: `getDisplayMedia()` requires a secure context (HTTPS) and is not supported on mobile browsers.

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

Once the diagnostic program is started, it will run for the time you set or for a fixed length of time. If you want to stop this diagnostic program voluntarily, you can call the `stopToDiagnose()` function to stop the diagnostic program. Please see the following example.
```javascript
const report = await prober.stopToDiagnose();
console.log('Diagnostic stopped, partial report:', report);
```

When the diagnostic program is finished, we suggest that it is a good idea to call the `cleanup()` function to clean up some of the resources created in ProbeSDK (e.g., some memory resources, closing the network connection used for diagnostics, etc.). For example, it is a good time to call it when the user closes the diagnostics page or jumps to another page. It doesn't matter if you don't call it, the diagnostics program will actively clean up some of the used resources after it finishes.

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
  <tr>
    <th rowspan="1">stopToDiagnose</th>
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
    <th rowspan="1">diagnoseScreenShare</th>
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
    <th>N</th>
    <th>N</th>
    <th>N</th>
    <th>N</th>
    <th>N</th>
    <th>N</th>
  </tr>
</table>


---

Copyright ©2024 Zoom Video Communications, Inc. All rights reserved.
