'use strict';
pxsim.noRefCounting();
pxsim.setTitle("pxt-SGBotic-BH1750");
pxsim.setConfigData({}, {});
pxsim.pxtrt.mapKeyNames = [
 ""
];
__this.setupPerfCounters([]);


var _main___P1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = 0;
    globals.zeroFx8___348 = (r0);
    r0 = 1;
    globals.oneFx8___349 = (r0);
    r0 = 2;
    globals.twoFx8___350 = (r0);
    setupResume(s, 2);
    pxsim.basic.showLeds(new pxsim.Image(5, [0,0,255,0,0,0,0,255,0,0,0,0,255,0,0,0,0,255,0,0,0,0,255,0,0,0]), 400);
    checkResumeConsumed();
    return;
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
_main___P1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"tests.ts","functionName":"<main>","argumentNames":[]}
_main___P1.continuations = [ 2 ]


setupDebugger(1, [])
