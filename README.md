# Probe SDK

## Background

The Probe SDK can be utilized to conduct a comprehensive series of diagnostics before a meeting, including network, audio, and video assessments. Additionally, it is capable of generating a diagnostic report upon completion.
Customers often encounter subpar experiences during meetings such as blurry video, choppy audio, and poor network connectivity. These situations can lead to confusion for the users. Therefore, the Probe SDK serves as a valuable tool in providing essential information to determine the readiness for joining or starting a meeting.
Third-party developers or applications can seamlessly integrate the Probe SDK into their probing environment and create a user interface page that displays critical information by leveraging the APIs provided by the Probe SDK.

## Design

ProbeSDK can be considered independent of other SDKs. UIToolkit can integrate ProbeSDK to provide an official version example to show what can be done with ProbeSDK, and third-party developers can integrate ProbeSDK to complete their own detection work. Therefore, the goal of ProbeSDK is to provide the exploration of the meeting environment for any demander.

Probe SDK will be divided into **3 modules** according to the architecture:

- Basic APIs
- Diagnostic APIs
- Report APIs

### Basic APIs

The module of the Basic APIs provides the public APIs that can be called directly to retrieve any aspect of information, such as the browser information, hardware information, etc. It can be regarded as a common and standard detection library that can detect software, hardware, browser APIs, features, etc.

Currently, we are going to detect and retrieve these kinds of information:

- Software

  - OS

  - Browser

- Hardware

  - Media Devices

  - CPU

  - GPU

- Feature

  - Browser API

  - Browser Feature

In the future, we hope projects like MediaSDK, and Web Client could integrate the Probe SDK because the Probe SDK can provide common, reliable, and maintainable APIs.

## Diagnostic APIs

In the Diagnostic API section, we will provide a comprehensive set of APIs to assist developers in achieving their desired diagnostic functions. These APIs encompass routine diagnostics for audio and video devices and diagnostic methods for network environments. By utilizing these diagnostics, developers, and customers can promptly obtain results to inform adjustments or determine whether it is appropriate to start or join a meeting.

APIs:

- Device & Permission

  - `requestMediaPermission(...)`

  - `requestMediaDevices(...)`

- Audio/Video Diagnostic

  - `diagnoseAudio(...)`

  - `diagnoseVideo(...)`

  - `stopToDiagnoseVideo(...)`

- Overall Diagnostic

  - `startToDiagnose(...)`

## Report APIs

Once these diagnostics are finished, a report for each module will be generated, including the parts of network quality, audio/video performance, the provision of business features support, and basic information. This result report can more intuitively and comprehensively see whether the current situation can join or start the meeting.

APIs:

- `reportBasicInfo(...)`

- `reportSupportedFeatures(...)`

- `reportNetworkDiagnostic(...)`

- `queryRid()`

## Getting Started

This section will demonstrate how to use the Probe SDK to develop the probing page or your requirement in the fastest way.

### Installation

In your frontend project, install the Probe SDK:

```
$ npm install @zoom/probesdk --save
```

### Import components

Some modules and important components are defined in Probe SDK, if you want to build up the probing page as fast as possible, you just need to import the `Prober` class from Probe SDK.

For example, in your `index.js` file:

```javascript
// index.js
import { Prober } from "@zoom/probesdk";

// create a new instance of Prober
const prober = new Prober();
```

That's enough! Now, you have the exported class `Prober` which can help you to build up your probing page by calling its public APIs. Invoke the `Prober()` constructor directly to create an instance of it. Next, you can access any capability of the prober.

`Prober` provides the following capabilities:

1. request media devices and permission
2. diagnose audio and video
3. start a comprehensive diagnostic that diagnoses the network and reports the basic information and supported features

#### Capability 1: request media devices and permission

While other SDKs may provide similar functionality, getting device permissions and lists is still one of the main functions of Probe SDK. Therefore, you can invoke `requestMediaDevicePermission()` and `requestMediaDevices()` to retrieve the devices and permissions.

If you need to request the media permission, you should call `requestMediaDevicePermission` and pass a `constraint` to it. In most cases, we will try to request the permission of audio and video devices. It returns a `Promise` that wraps a `MediaPermissionResult` object which has an `error` field and `MediaStream` field. You can handle the `MediaStream` in any way and the `error` if any exceptions.

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

If you need to request the media devices, call `requestMediaDevices`. Note that some kinds of exceptions might be thrown while requesting the media devices, but you don't need to care about them, that is, you don't need try-catch to handle them. All exceptions will be returned in another way, a `MediaDeviceResult` is returned which includes a list of `devices` and an `error` object if any exceptions. Each device is an instance of `MediaDeviceInfo` which is a standard Javascript API.

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

#### Capability 2: diagnose audio & video

Next, `Prober` provides the capability to diagnose or check whether the audio devices and video devices work or not. You can invoke `diagnoseAudio` and `diagnoseVideo` to complete the audio and video diagnostic.

For audio diagnostic, you need to prepare two constraints for audio input and audio output. The audio input, sometimes, is the microphone, and the audio output is the speaker. Therefore, this API requires which input and output devices are going to be diagnosed. In brief, just provide the `deviceId` of audio input and output as the `constraint`. It returns a `DiagnosticResult` which means whether the diagnostic is started successfully or not.

For example:

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

Now, if you have invoked it on your probing page, you can add some icons or animations on the page to show the recording or playback is running. Anyway, maybe after 5 seconds, you will hear the playback in your speaker.

For video diagnostic, you also need to prepare something before calling `diagnoseVideo`. The first parameter is a `constraint`, like an audio constraint, which means which camera device is going to be diagnosed. You may select one of your connected cameras and use its `deviceId`. The second parameter is `options`. It's not an optional parameter, you must pass it to the function. You should tell Probe SDK how to render a video stream on a target by setting a `type` field and a `target` field of the `options`. For the `type` field, four rendering types are supported by Probe SDK perhaps, they are video-tag/WebGL/WebGL2/WebGPU, so you can pass the value(1: video-tag, 2: WebGL, 3: WebGL2, 4: WebGPU) of each enumeration. If the rendering way you pass is not supported, an `error` will be thrown in the `DiagnosticResult`. Meanwhile, different rendering types require different rendering targets, such as video-tag type requires a `<video-tag>` element, WebGL/WebGL2/WebGPU requires a `Canvas` or an `OffscreenCanvas`.

For example:

```javascript
// index.js
import { Prober } from "@zoom/probesdk";

// create a new instance of Prober
const prober = new Prober();

// start a video diagnostic
function startToDiagnoseVideo(canvas) {
  const constraint = {
    video: {
      deviceId: "default",
    },
  };
  const options = {
    type: 2, // WebGL
    target: canvas,
  };
  prober.diagnoseVideo(constraint, options).then((diagnosticResult) => {
    console.log(diagnosticResult);
  });
}
```

Now, you can see the video stream captured from the selected camera is rendered on the screen. If failed, please check the result to see whether get any error.

#### Capability 3: Start a comprehensive diagnostic

After a few discussions, we need to make changes to get a simpler and more convenient diagnostic. Therefore, we combine the steps of a diagnostic and complete it just in one time. You don't need to care about other APIs neither consider the order of APIs calling. Just one call, to get all the necessary information you need.

We still need to prepare something before calling this API.

First, it requires a URL of the JavaScript file and a URL of the WASM file. Of course, you can pass the URLs if the files are deployed externally and you obtain the URLs, you can also skip or ignore the URLs if you don't have them. If you decide to skip or ignore, you should pass an empty string or `undefined` to this API. If it detects you pass those invalid URLs, the default URLs of the js file and the WASM file will be used. We deploy the backup files in the Probe SDK folder and they will be enabled if you don't have the URLs. Anyway, passing different parameters relies on how you deploy the files of network diagnostics.

Next, it requires you to pass a listener called `networkStatsListener`. This listener will observe the statistics coming from a network diagnostic. Once a network diagnostic is running successfully, the listener will be triggered and set stats. You can use the statistics to do some specific work, like showing them on a chart, doing some calculations, etc.

This comprehensive diagnostic requires the network diagnostic. Therefore, once called, a network diagnostic is launched. Currently, it runs for maybe 2 minutes and then we can get the result finally. This API returns a `Promise` that wraps an object of `DiagnosticReport`. `DiagnosticReport` includes the result of the network diagnostic, and two reports of basic information and supported features.

For example:

```javascript
// index.js
import { Prober } from "@zoom/probesdk";

// create a new instance of Prober
const prober = new Prober();

function startToDiagnose() {
  // 1. you can ignore the URLs, so the default URLs that deployed in the ProbeSDK will be used
  const jsUrl = "";
  const wasmUrl = "";
  const config = { probeDuration: 120 * 1000, connectTimeout: 120 * 1000 };
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

You can refer to the **API Definition** section if you want to know more details. Once the diagnostic is finished, a full diagnostic report will return. It includes all the necessary information.

🌈Congrats, the APIs above are enough to build up a probing web page! If you want more features to finish the probing, welcome to comment or share your ideas here.

## Public APIs Table

| Module     | Sub-Module             | Signature                                                                   | Visibility | Explanation                                                                                                                                                                   | Comment                                                                                                                                                                                                                                                                                                                              |
| ---------- | ---------------------- | --------------------------------------------------------------------------- | ---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Basic      |                        |                                                                             | Hidden     |                                                                                                                                                                               | All APIs in the Baisc module are hidden now. Will add these APIs later.                                                                                                                                                                                                                                                              |
| Diagnostic | Device & Permission    | requestMediaDevicePermission(constraint)                                    | public     | Request media permissions of media devices.                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                      |
|            |                        | requestMediaDevices()                                                       | public     | Retrieve all media devices including cameras, speakers and microphones.                                                                                                       |                                                                                                                                                                                                                                                                                                                                      |
|            | Audio/Video Diagnostic | diagnoseAudio(inputConstraints, outputConstraints, duration)                | public     | Diagnose the audio devices(selected the microphone and speaker).                                                                                                              |                                                                                                                                                                                                                                                                                                                                      |
|            |                        | diagnoseVideo(constraints, options)                                         | public     | Diagnose the video preview. In other words, check whether the video stream can be rendered.                                                                                   |
|            |                        | stopToDiagnoseVideo(options)                                                | public     | Stop to diagnose video and remove all the tracks from the stream.                                                                                                             |                                                                                                                                                                                                                                                                                                                                      |
|            | Overall Diagnostic     | startToDiagnose(jsUrl, wasmUrl, config, networkStatsListener)               | public     | A full diagnostic that includes network diagnostic, supported features report, basic information report will be started. It combines the diagnostic module and report module. |                                                                                                                                                                                                                                                                                                                                      |
|            |                        | startNetworkDiagnostic(jsUrl, wasmUrl)                                      | hidden     | Start the network diagnostic.                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                      |
|            |                        | setNetworkDiagnosticStatisticsListener(onReceivedListener, onErrorListener) | hidden     | Set a basic listener to observe the data from the network diagnostic. The listener will be called only once at the end of the network diagnostic.                             |                                                                                                                                                                                                                                                                                                                                      |
|            |                        | setNetworkDiagnosticResultListener(onFinishedListener)                      | hidden     | Set an advanced listener to observe the data from runtime network diagnostic. The listener will be called every few seconds.                                                  | Deprecated                                                                                                                                                                                                                                                                                                                           |
| Report     | Basic Part             | reportBasicInfo()                                                           | public     | Report the basic information, such as browser information, hardware, etc.                                                                                                     | Fields of the basic information:browsername/vendorversionuser agentOSname (like Widows/Mac)hardwareCPU coresGPU vendorwhat type of GPU is used (hw/sw)APIsVideoFrameOffscreenCanvasSharedArrayBufferSIMD                                                                                                                             |
|            | Feature Part           | reportSupportedFeatures()                                                   | public     | Report the features that are regarded as the important features to the customer, like video/audio features, etc.                                                              | Features that are reported in the report:audio denoise supportaudio echo cancellation supportaudio stereo supportvideo virtual background supportvideo maskvideo rendering - WebGL2 supportvideo rendering - WebGPU supportvideo send HD supportvideo send Full HD supportGallery view supportsend screen sharemobile landscape view |
|            | Network Part           | reportNetworkDiagnostic()                                                   | hidden     | Report the final network diagnostic result. It includes the bandwidth, rtt, package loss of the uplink and downlink, etc.                                                     |                                                                                                                                                                                                                                                                                                                                      |
|            | Other                  | queryRid()                                                                  | public     | Query the tracking id(rid) of the last round of network diagnosis.                                                                                                            |                                                                                                                                                                                                                                                                                                                                      |

# Platform/Browser Compatibility

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
