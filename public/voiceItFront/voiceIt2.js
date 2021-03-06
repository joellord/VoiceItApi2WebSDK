function voiceIt2FrontEndBase() {
  var script = document.createElement('script');
  script.src = 'voiceItFront/voiceItJs/misc/createDynamicHTML.js';
  document.head.appendChild(script);
  var main = this;

  main.myVoiceIt;
  var voiceInitiator;

  //TODO: when VoiceIt2 Obj has loaded, and the HTML has been appended.

  main.onLoad = function(){
  }

  main.init = function(){
      main.createVoiceItObj();
      main.appendStructure();
  }

  main.appendStructure = function(){
    if (window.hasOwnProperty('voiceItHtmlStructure')) {
      voiceInitiator = new voiceItHtmlStructure();
      voiceInitiator.init();
    } else {
      setTimeout(function(){
      main.appendStructure();
      },50);
    }
  }

  main.createVoiceItObj = function () {
    if (window.hasOwnProperty('voiceIt2Obj')){
      main.myVoiceIt = new voiceIt2Obj();
      main.myVoiceIt.init();
      main.onLoad();
    } else {
      setTimeout(function(){
        main.createVoiceItObj();
      },50);
    }
  }

  main.init_Voice_Enrollment = function () {
    if (main.myVoiceIt == undefined) {
      setTimeout(function () {
        main.init_Voice_Enrollment();
      }, 100);
    } else {
      main.myVoiceIt.encapsulatedVoiceEnrollment();
    }
  }

  main.init_Voice_Verification = function () {
    if (main.myVoiceIt == undefined) {
      setTimeout(function () {
        main.init_Voice_Verification();
      }, 100);
    } else {
      main.myVoiceIt.encapsulatedVoiceVerification();
    }
  }

  main.init_Face_Verification = function (liveness) {
    if (main.myVoiceIt == undefined) {
      setTimeout(function () {
        main.init_Face_Verification(liveness);
      }, 100);
    } else {
      main.myVoiceIt.encapsulatedFaceVerification(liveness);
    }
  }

  main.init_Face_Enrollment = function () {
    if (main.myVoiceIt == undefined) {
      setTimeout(function () {
        main.init_Face_Enrollment();
      }, 100);
    } else {
      main.myVoiceIt.encapsulatedFaceEnrollment();
    }
  }

  main.init_Video_Enrollment = function () {
    if (main.myVoiceIt == undefined) {
      setTimeout(function () {
        main.init_Video_Enrollment();
      }, 100);
    } else {
      main.myVoiceIt.encapsulatedVideoEnrollment();
    }
  }

  main.init_Video_Verification = function (liveness) {
    if (main.myVoiceIt == undefined) {
      setTimeout(function () {
        main.init_Video_Verification(liveness);
      }, 100);
    } else {
      main.myVoiceIt.encapsulatedVideoVerification(liveness);
    }
  }

}
