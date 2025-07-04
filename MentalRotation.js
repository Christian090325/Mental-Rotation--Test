﻿/*********************** 
 * Mentalrotation *
 ***********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'MentalRotation';  // from the Builder filename that created this script
let expInfo = {
    'session': '001',
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Intructions_1RoutineBegin());
flowScheduler.add(Intructions_1RoutineEachFrame());
flowScheduler.add(Intructions_1RoutineEnd());
flowScheduler.add(Intructions_2RoutineBegin());
flowScheduler.add(Intructions_2RoutineEachFrame());
flowScheduler.add(Intructions_2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(the_endRoutineBegin());
flowScheduler.add(the_endRoutineEachFrame());
flowScheduler.add(the_endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'MentalRot.csv', 'path': 'MentalRot.csv'},
    {'name': 'F.png', 'path': 'F.png'},
    {'name': 'FR.png', 'path': 'FR.png'},
    {'name': 'FR.png', 'path': 'FR.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'F.png', 'path': 'F.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + (("data" + "/") + `${expInfo["participant"]}_${expInfo["date"]}`));
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Intructions_1Clock;
var instr_key_1;
var instr_textbox1;
var Intructions_2Clock;
var image_L_3;
var image_R_3;
var instr_key_2;
var instrtxt2;
var trialClock;
var image_L;
var image_R;
var key_resp;
var main_instr;
var trial_count;
var feedbackClock;
var correct_counter;
var fbtext;
var the_endClock;
var end_txt;
var end_key;
var text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Intructions_1"
  Intructions_1Clock = new util.Clock();
  instr_key_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_textbox1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instr_textbox1',
    text: "Welcome. You will see two 'F' letters on the screen that have been rotated.\n\nYour task is to mentally rotate the 'F' on the right so that it is facing upright.\n\nFor each pair of letters, indicate if they are mirror images of each other when they two letters are in their normal upright position. (You have to mentally rotate them so they are both standing upright).\n \nPress 'm' if they are mirror images of each other.\nPress 'n' if they are facing the same direction (not mirror images).   \n\nPress 'm' to start",
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  // Initialize components for Routine "Intructions_2"
  Intructions_2Clock = new util.Clock();
  image_L_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_L_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, 
    pos : [(- 0.25), 0.2], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  image_R_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_R_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, 
    pos : [0.25, 0.2], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  instr_key_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instrtxt2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instrtxt2',
    text: "Here, the letter on the right is a mirror image of the letter on the left.\n\nThey would be mirror images of eachother after mentally rotating them to line up. So press 'm' (different directions/mirror images). \n\nIf they are facing the same direction after mentally rotating them to stand upright, you would press 'n'. \n \nTry to respond as accurately as you can. Also try to be fast, but emphasize being accurate. Press 'n' to start.",
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, (- 0.25)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [1, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image_L = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_L', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, 
    pos : [(- 0.25), 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  image_R = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_R', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, 
    pos : [0.25, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  main_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'main_instr',
    text: '\'n\' for "non mirrored"/"same"\n\'m\' for "mirrored"/"different"',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  trial_count = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_count',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, (- 0.4)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  correct_counter = 0;
  
  fbtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'fbtext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "the_end"
  the_endClock = new util.Clock();
  end_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_txt',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: "Press 'space' to save results",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var Intructions_1MaxDurationReached;
var _instr_key_1_allKeys;
var Intructions_1MaxDuration;
var Intructions_1Components;
function Intructions_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intructions_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Intructions_1Clock.reset();
    routineTimer.reset();
    Intructions_1MaxDurationReached = false;
    // update component parameters for each repeat
    instr_key_1.keys = undefined;
    instr_key_1.rt = undefined;
    _instr_key_1_allKeys = [];
    psychoJS.experiment.addData('Intructions_1.started', globalClock.getTime());
    Intructions_1MaxDuration = null
    // keep track of which components have finished
    Intructions_1Components = [];
    Intructions_1Components.push(instr_key_1);
    Intructions_1Components.push(instr_textbox1);
    
    for (const thisComponent of Intructions_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Intructions_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intructions_1' ---
    // get current time
    t = Intructions_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_key_1* updates
    if (t >= 0.0 && instr_key_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_1.tStart = t;  // (not accounting for frame time here)
      instr_key_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_1.clearEvents(); });
    }
    
    if (instr_key_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_1.getKeys({keyList: ['m'], waitRelease: false});
      _instr_key_1_allKeys = _instr_key_1_allKeys.concat(theseKeys);
      if (_instr_key_1_allKeys.length > 0) {
        instr_key_1.keys = _instr_key_1_allKeys[_instr_key_1_allKeys.length - 1].name;  // just the last key pressed
        instr_key_1.rt = _instr_key_1_allKeys[_instr_key_1_allKeys.length - 1].rt;
        instr_key_1.duration = _instr_key_1_allKeys[_instr_key_1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instr_textbox1* updates
    if (t >= 0.0 && instr_textbox1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_textbox1.tStart = t;  // (not accounting for frame time here)
      instr_textbox1.frameNStart = frameN;  // exact frame index
      
      instr_textbox1.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intructions_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intructions_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intructions_1' ---
    for (const thisComponent of Intructions_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Intructions_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key_1.corr, level);
    }
    psychoJS.experiment.addData('instr_key_1.keys', instr_key_1.keys);
    if (typeof instr_key_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key_1.rt', instr_key_1.rt);
        psychoJS.experiment.addData('instr_key_1.duration', instr_key_1.duration);
        routineTimer.reset();
        }
    
    instr_key_1.stop();
    // the Routine "Intructions_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Intructions_2MaxDurationReached;
var _instr_key_2_allKeys;
var Intructions_2MaxDuration;
var Intructions_2Components;
function Intructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intructions_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Intructions_2Clock.reset();
    routineTimer.reset();
    Intructions_2MaxDurationReached = false;
    // update component parameters for each repeat
    image_L_3.setOri(0);
    image_L_3.setImage('FR.png');
    image_R_3.setOri((- 90));
    image_R_3.setImage('F.png');
    instr_key_2.keys = undefined;
    instr_key_2.rt = undefined;
    _instr_key_2_allKeys = [];
    psychoJS.experiment.addData('Intructions_2.started', globalClock.getTime());
    Intructions_2MaxDuration = null
    // keep track of which components have finished
    Intructions_2Components = [];
    Intructions_2Components.push(image_L_3);
    Intructions_2Components.push(image_R_3);
    Intructions_2Components.push(instr_key_2);
    Intructions_2Components.push(instrtxt2);
    
    for (const thisComponent of Intructions_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Intructions_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intructions_2' ---
    // get current time
    t = Intructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_L_3* updates
    if (t >= 0.0 && image_L_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_L_3.tStart = t;  // (not accounting for frame time here)
      image_L_3.frameNStart = frameN;  // exact frame index
      
      image_L_3.setAutoDraw(true);
    }
    
    
    // *image_R_3* updates
    if (t >= 0.0 && image_R_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_R_3.tStart = t;  // (not accounting for frame time here)
      image_R_3.frameNStart = frameN;  // exact frame index
      
      image_R_3.setAutoDraw(true);
    }
    
    
    // *instr_key_2* updates
    if (t >= 0.0 && instr_key_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_2.tStart = t;  // (not accounting for frame time here)
      instr_key_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_2.clearEvents(); });
    }
    
    if (instr_key_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_2.getKeys({keyList: ['n'], waitRelease: false});
      _instr_key_2_allKeys = _instr_key_2_allKeys.concat(theseKeys);
      if (_instr_key_2_allKeys.length > 0) {
        instr_key_2.keys = _instr_key_2_allKeys[_instr_key_2_allKeys.length - 1].name;  // just the last key pressed
        instr_key_2.rt = _instr_key_2_allKeys[_instr_key_2_allKeys.length - 1].rt;
        instr_key_2.duration = _instr_key_2_allKeys[_instr_key_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instrtxt2* updates
    if (t >= 0.0 && instrtxt2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrtxt2.tStart = t;  // (not accounting for frame time here)
      instrtxt2.frameNStart = frameN;  // exact frame index
      
      instrtxt2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intructions_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intructions_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intructions_2' ---
    for (const thisComponent of Intructions_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Intructions_2.stopped', globalClock.getTime());
    instr_key_2.stop();
    // the Routine "Intructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'MentalRot.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var _key_resp_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    image_L.setOri(leftori);
    image_L.setImage(left_im);
    image_R.setOri(rightori);
    image_R.setImage(right_im);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    trial_count.setText(((trials.thisN.toString() + "/") + trials.nTotal.toString()));
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image_L);
    trialComponents.push(image_R);
    trialComponents.push(key_resp);
    trialComponents.push(main_instr);
    trialComponents.push(trial_count);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_L* updates
    if (t >= 0.0 && image_L.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_L.tStart = t;  // (not accounting for frame time here)
      image_L.frameNStart = frameN;  // exact frame index
      
      image_L.setAutoDraw(true);
    }
    
    
    // *image_R* updates
    if (t >= 0.0 && image_R.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_R.tStart = t;  // (not accounting for frame time here)
      image_R.frameNStart = frameN;  // exact frame index
      
      image_R.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['n', 'm'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp.keys == corrAns) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *main_instr* updates
    if (t >= 0.0 && main_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_instr.tStart = t;  // (not accounting for frame time here)
      main_instr.frameNStart = frameN;  // exact frame index
      
      main_instr.setAutoDraw(true);
    }
    
    
    // *trial_count* updates
    if (t >= 0.0 && trial_count.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_count.tStart = t;  // (not accounting for frame time here)
      trial_count.frameNStart = frameN;  // exact frame index
      
      trial_count.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var fb;
var fbcol;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    if (key_resp.corr) {
        fb = "Correct!";
        fbcol = "green";
    } else {
        fb = "Incorrect";
        fbcol = "red";
    }
    correct_counter += key_resp.corr;
    
    fbtext.setColor(new util.Color(fbcol));
    fbtext.setText(fb);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(fbtext);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fbtext* updates
    if (t >= 0.0 && fbtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fbtext.tStart = t;  // (not accounting for frame time here)
      fbtext.frameNStart = frameN;  // exact frame index
      
      fbtext.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fbtext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fbtext.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var the_endMaxDurationReached;
var _end_key_allKeys;
var the_endMaxDuration;
var the_endComponents;
function the_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'the_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    the_endClock.reset();
    routineTimer.reset();
    the_endMaxDurationReached = false;
    // update component parameters for each repeat
    end_txt.setText((("The end. You scored " + correct_counter.toString()) + " correct"));
    end_key.keys = undefined;
    end_key.rt = undefined;
    _end_key_allKeys = [];
    psychoJS.experiment.addData('the_end.started', globalClock.getTime());
    the_endMaxDuration = null
    // keep track of which components have finished
    the_endComponents = [];
    the_endComponents.push(end_txt);
    the_endComponents.push(end_key);
    the_endComponents.push(text);
    
    for (const thisComponent of the_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function the_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'the_end' ---
    // get current time
    t = the_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_txt* updates
    if (t >= 0.0 && end_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_txt.tStart = t;  // (not accounting for frame time here)
      end_txt.frameNStart = frameN;  // exact frame index
      
      end_txt.setAutoDraw(true);
    }
    
    
    // *end_key* updates
    if (t >= 0.0 && end_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_key.tStart = t;  // (not accounting for frame time here)
      end_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_key.clearEvents(); });
    }
    
    if (end_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_key.getKeys({keyList: ['space'], waitRelease: false});
      _end_key_allKeys = _end_key_allKeys.concat(theseKeys);
      if (_end_key_allKeys.length > 0) {
        end_key.keys = _end_key_allKeys[_end_key_allKeys.length - 1].name;  // just the last key pressed
        end_key.rt = _end_key_allKeys[_end_key_allKeys.length - 1].rt;
        end_key.duration = _end_key_allKeys[_end_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of the_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function the_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'the_end' ---
    for (const thisComponent of the_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('the_end.stopped', globalClock.getTime());
    end_key.stop();
    // the Routine "the_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
